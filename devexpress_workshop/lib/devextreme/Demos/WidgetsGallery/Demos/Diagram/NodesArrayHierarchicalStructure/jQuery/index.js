$(function() {
    $("#diagram").dxDiagram({
        nodes: {
            dataSource: new DevExpress.data.ArrayStore({
                key: "this",
                data: employees
            }),
            textExpr: "Title",
            itemsExpr: "Items"
        },
        toolbox: {
            groups: ["general"]
        }
    });
});
