$(function() {
    var loadPanel = $("#load-panel").dxLoadPanel({
        position: { of: "#file-manager" }
    }).dxLoadPanel("instance");

    $.ajax({
        url: "https://js.devexpress.com/Demos/Mvc/api/file-manager-azure-status?widgetType=fileManager",
        success: function(result) {
            var className = result.active ? "show-widget" : "show-message";
            $("#wrapper").addClass(className);
            loadPanel.hide();
        }
    });

    var endpointUrl = "https://js.devexpress.com/Demos/Mvc/api/file-manager-azure-access";
    gateway = new AzureGateway(endpointUrl, onRequestExecuted);
    azure = new AzureFileSystem(gateway);

    $("#file-manager").dxFileManager({
        fileProvider: new DevExpress.fileProviders.Custom({
            getItems: getItems,
            createDirectory: createDirectory,
            renameItem: renameItem,
            deleteItem: deleteItem,
            copyItem: copyItem,
            moveItem: moveItem,
            uploadFileChunk: uploadFileChunk,
            downloadItems: downloadItems
        }),
        allowedFileExtensions: [],
        upload: {
            maxFileSize: 1048576
        },
        permissions: {
            download: true
            // uncomment the code below to enable file/directory management
            /* create: true,
            copy: true,
            move: true,
            remove: true,
            rename: true,
            upload: true */
        }
    });
});

function getItems(pathInfo) {
    var path = getPath(pathInfo);
    return azure.getItems(path);
}

function createDirectory(parentDirectory, name) {
    var path = getPath(parentDirectory.getFullPathInfo());
    return azure.createDirectory(path, name);
}

function renameItem(item, name) {
    var path = getPath(item.getFullPathInfo());
    return item.isDirectory ? azure.renameDirectory(path, name) : azure.renameFile(path, name);
}

function deleteItem(item) {
    var path = getPath(item.getFullPathInfo());
    return item.isDirectory ? azure.deleteDirectory(path) : azure.deleteFile(path);
}

function copyItem(item, destinationDirectory) {
    var sourcePath = getPath(item.getFullPathInfo());
    var destinationDirPath = getPath(destinationDirectory.getFullPathInfo());
    var destinationPath = destinationDirPath ? destinationDirPath + "/" + item.name : item.name;
    return item.isDirectory ? azure.copyDirectory(sourcePath, destinationPath) : azure.copyFile(sourcePath, destinationPath);
}

function moveItem(item, destinationDirectory) {
    var sourcePath = getPath(item.getFullPathInfo());
    var destinationDirPath = getPath(destinationDirectory.getFullPathInfo());
    var destinationPath = destinationDirPath ? destinationDirPath + "/" + item.name : item.name;
    return item.isDirectory ? azure.moveDirectory(sourcePath, destinationPath) : azure.moveFile(sourcePath, destinationPath);
}

function uploadFileChunk(fileData, uploadInfo, destinationDirectory) {
    var deferred = null;

    if(uploadInfo.chunkIndex === 0) {
        var path = getPath(destinationDirectory.getFullPathInfo());
        var filePath = path ? path + "/" + fileData.name : fileData.name;
        deferred = gateway.getUploadAccessUrl(filePath).done(function(accessUrl) {
            uploadInfo.customData.accessUrl = accessUrl;
        });
    } else {
        deferred = $.Deferred().resolve().promise();
    }

    deferred = deferred.then(function() {
        return gateway.putBlock(uploadInfo.customData.accessUrl, uploadInfo.chunkIndex, uploadInfo.chunkBlob);
    });

    if(uploadInfo.chunkIndex === uploadInfo.chunkCount - 1) {
        deferred = deferred.then(function() {
            return gateway.putBlockList(uploadInfo.customData.accessUrl, uploadInfo.chunkCount);
        });
    }

    return deferred;
}

function downloadItems(items) {
    var item = items[0];
    var path = getPath(item.getFullPathInfo());
    azure.downloadFile(path);
}

function getPath(pathInfo) {
    return pathInfo.map(function(part) { return part.name; }).join("/");
}

function onRequestExecuted(e) {
    $("<div>").addClass("request-info").append(
            createParameterInfoDiv("Method:", e.method),
            createParameterInfoDiv("Url path:", e.urlPath),
            createParameterInfoDiv("Query string:", e.queryString),
            $("<br>")
        )
        .prependTo("#request-panel");
}

function createParameterInfoDiv(name, value) {
    return $("<div>").addClass("parameter-info").append(
        $("<div>").addClass("parameter-name").text(name),
        $("<div>").addClass("parameter-value dx-theme-accent-as-text-color").text(value).attr("title", value)
    );
}

var gateway = null;
var azure = null;