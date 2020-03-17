$(function() {
    var fileManager = $("#file-manager").dxFileManager({
        name: "fileManager",
        fileProvider: fileSystem,
        height: 450,
        permissions: {
            create: true,
            copy: true,
            move: true,
            remove: true,
            rename: true
        },
        customizeThumbnail: customizeIcon,
        toolbar: {
            items: [
                {
                    name: "showNavPane",
                    visible: true
                },
                "separator", "create",
                {
                    widget: "dxMenu",
                    location: "before",
                    options: {
                        items: [
                            {
                                text: "Create new file",
                                items: [
                                    {
                                        text: "Plain text document",
                                        extension: ".txt",
                                        onClick: onItemClick
                                    },
                                    {
                                        text: "Word document",
                                        extension: ".doc",
                                        onClick: onItemClick
                                    },
                                    {
                                        text: "Excel spreadsheet",
                                        extension: ".xls",
                                        onClick: onItemClick
                                    }
                                ]
                            }
                        ]
                    }
                },
                "refresh",
                {
                    name: "separator",
                    location: "after"
                },
                "viewSwitcher"
            ],
            fileSelectionItems: [
                "move", "copy", "rename",
                {
                    widget: "dxButton",
                    options: {
                        text: "Share",
                        icon: "share"
                    },
                    location: "before",
                    onClick: shareItem
                },
                {
                    options: {
                        text: "Unshare",
                        icon: "revert"
                    },
                    location: "before",
                    onClick: unshareItem
                },
                "separator", "delete", "refresh", "clear"
            ]
        },
        contextMenu: {
            items: [
                "create",
                {
                    text: "Create new file",
                    items: [
                        {
                            text: "Plain text document",
                            extension: ".txt",
                            onClick: onItemClick
                        },
                        {
                            text: "Word document",
                            extension: ".doc",
                            onClick: onItemClick
                        },
                        {
                            text: "Excel spreadsheet",
                            extension: ".xls",
                            onClick: onItemClick
                        }
                    ]
                },
                {
                    text: "Share",
                    icon: "share",
                    beginGroup: true,
                    onClick: shareItem
                },
                {
                    text: "Unshare",
                    icon: "revert",
                    onClick: unshareItem
                },
                {
                    name: "rename",
                    beginGroup: true
                },
                "move", "copy", "delete", "refresh"
            ]
        }
    }).dxFileManager("instance");

    function customizeIcon(fileManagerItem) {
        if(fileManagerItem.dataItem && fileManagerItem.dataItem.shared) {
            return fileManagerItem.isDirectory ? "group" : "card";
        }
    }

    function onItemClick(args) {
        var currentDirectory = fileManager.getCurrentDirectory();
        var selectedItems = fileManager.getSelectedItems();

        var newItem = {
            __KEY__: Date.now(),
            name: "New file" + args.itemData.extension,
            isDirectory: false,
            size: 0
        };
        if(selectedItems.length === 1 && selectedItems[0].isDirectory && selectedItems[0].name !== "..") {
            currentDirectory = selectedItems[0];
        }
        if(currentDirectory.dataItem) {
            currentDirectory.dataItem.items.push(newItem);
        } else {
            fileSystem.push(newItem);
        }
        fileManager.refresh();
    }

    function shareItem() {
        changeSharedState(true);
    }

    function unshareItem() {
        changeSharedState(false);
    }

    function changeSharedState(isShared) {
        fileManager.getSelectedItems().forEach(function(item) {
            item.dataItem.shared = isShared;
        });
        fileManager.refresh();
    }
});