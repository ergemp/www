$(function () {
    $("#file-manager").dxFileManager({
        name: "fileManager",
        currentPath: "Documents/Reports",
        fileProvider: new DevExpress.fileProviders.Remote({
            endpointUrl: "https://js.devexpress.com/Demos/Mvc/api/file-manager-db"
        }),
        permissions: {
            create: true,
            copy: true,
            move: true,
            remove: true,
            rename: true
        },
        allowedFileExtensions: [],
        customizeDetailColumns: function(columns) {
            var fileSizeColumn = columns.filter(function(c) { return c.dataField === "fileSize"; })[0];
            columns.splice(columns.indexOf(fileSizeColumn), 1);

            var modifiedColumn = columns.filter(function(c) { return c.dataField === "dateModified"; })[0];
            modifiedColumn.caption = "Modified";

            columns.push({
                caption: "Created",
                dataField: "created",
                dataType: "date"
            });

            columns.push({
                visibleIndex: 2,
                caption: "Modified By",
                dataField: "modifiedBy"
            });
            return columns;
        },
        height: 550
    });
});