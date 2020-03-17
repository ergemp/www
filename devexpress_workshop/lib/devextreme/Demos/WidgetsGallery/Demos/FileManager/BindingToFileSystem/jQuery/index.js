$(function () {
    $("#file-manager").dxFileManager({
        name: "fileManager",
        fileProvider: new DevExpress.fileProviders.Remote({
            endpointUrl: "https://js.devexpress.com/Demos/Mvc/api/file-manager-file-system-scripts"
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
        allowedFileExtensions: [".js", ".json", ".css"]
    });
});