$(function () {
    $("#file-manager").dxFileManager({
        name: "fileManager",
        fileProvider: fileSystem,
        currentPath: "Documents",
        height: 450,
        permissions: {
            create: true,
            copy: true,
            move: true,
            remove: true,
            rename: true
        }
    });
});