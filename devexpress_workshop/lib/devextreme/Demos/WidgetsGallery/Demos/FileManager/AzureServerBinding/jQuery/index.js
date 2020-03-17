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
    
    $("#file-manager").dxFileManager({
        name: "fileManager",
        fileProvider: new DevExpress.fileProviders.Remote({
            endpointUrl: "https://js.devexpress.com/Demos/Mvc/api/file-manager-azure"
        }),
        permissions: {
            download: true
            // uncomment the code below to enable file/directory management
            /* create: true,
            copy: true,
            move: true,
            remove: true,
            rename: true,
            upload: true */
        },
        allowedFileExtensions: []
    });
});