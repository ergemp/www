$(function() {
    $("#diagram").dxDiagram({
        nodes: {
            dataSource: new DevExpress.data.ArrayStore({
                key: "this",
                data: orgItems
            })
        },
        edges: {
            dataSource: new DevExpress.data.ArrayStore({
                key: "this",
                data: orgLinks
            })
        },
        toolbox: {
            groups: [ "general" ]
        }
    });
});
