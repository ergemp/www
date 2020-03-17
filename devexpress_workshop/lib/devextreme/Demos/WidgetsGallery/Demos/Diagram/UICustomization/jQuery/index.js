$(function() {
    var diagram = $("#diagram").dxDiagram({
        contextMenu: {
            enabled: true,
            commands: ["bringToFront","sendToBack", "lock", "unlock"]
        },
        propertiesPanel: {
            enabled: true,
            collapsible: false,
            groups: [
                { commands: ["units"] },
                { commands: ["pageSize","pageOrientation","pageColor"] }
            ]
        },
        toolbar: {
            visible: true,
            commands: ["undo","redo","separator","fontName","fontSize","separator","bold","italic","underline","separator",
                "fontColor","lineColor","fillColor","separator"]
        },
        toolbox: {
            visible: true,
            groups: [
                "general", { category: "flowchart", title: "Flowchart", expanded: true }
            ]
        }
    }).dxDiagram("instance");

    $.ajax({
        url: "../../../../data/diagram-flow.json",
        dataType: "text",
        success: function(data) {
            diagram.import(data);
        }
    });
});
