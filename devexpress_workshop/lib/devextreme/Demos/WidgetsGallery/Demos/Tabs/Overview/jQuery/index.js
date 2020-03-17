$(function(){
    $("#longtabs > .tabs-container").dxTabs({
        dataSource: longtabs
    });
    
    $("#scrolledtabs > .tabs-container").dxTabs({
        dataSource: longtabs,
        width: 300,
        scrollByContent: true,
        showNavButtons: true
    });
    
    var tabsInstance = $("#tabs > .tabs-container").dxTabs({
        dataSource: tabs,
        selectedIndex: 0,
        onItemClick: function(e) {
            selectBox.option("value", e.itemData.id);
        }
    }).dxTabs("instance");
    
    var selectBox = $("#selectbox").dxSelectBox({
        value: 0,
        dataSource: tabs, 
        displayExpr: "text",
        valueExpr: "id",
        onValueChanged: function(e) {
            tabsInstance.option("selectedIndex", e.value);
            $(".left-aligned").text(tabs[e.value].content);
        }
    }).dxSelectBox("instance");
    
});