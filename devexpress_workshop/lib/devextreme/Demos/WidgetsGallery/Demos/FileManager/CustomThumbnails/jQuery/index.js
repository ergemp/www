$(function () {
    $("#file-manager").dxFileManager({
        name: "fileManager",
        fileProvider: fileSystem,
        itemView: {
            mode: "thumbnails"
        },
        height: 450,
        permissions: {
            create: true,
            copy: true,
            move: true,
            remove: true,
            rename: true
        },
        customizeThumbnail: function (fileManagerItem) {
            if (fileManagerItem.isDirectory)
                return "../../../../images/thumbnails/folder.svg";
            var fileExtension = fileManagerItem.getExtension();
            switch (fileExtension) {
                case ".txt":
                    return "../../../../images/thumbnails/doc-txt.svg";
                case ".rtf":
                    return "../../../../images/thumbnails/doc-rtf.svg";
                case ".xml":
                    return "../../../../images/thumbnails/doc-xml.svg";
            }
        }
    });
});