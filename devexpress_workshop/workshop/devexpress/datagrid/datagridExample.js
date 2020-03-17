$(function(){ 
    var dataGrid = $("#gridContainer").dxDataGrid({
        dataSource: customers,
        /*
        //Ajax request example
        $(function(){
            $("#gridContainer").dxDataGrid({
                dataSource: "data/customers.json",
                columns: ["CompanyName", "City", "State", "Phone", "Fax"],
                showBorders: true
            });
        });        
        */ 
        columns: ["ID" ,"City", "Phone", "Fax",
            {
                dataField: "CompanyName",
                fixed: true,
                allowFixing: true
            },
            {
                dataField: "OrderAmount",
                format: "currency"
            },
            {
                dataField: "State",
                groupIndex: 0
            },
            {
                dataField: "DeliveryDate",
                alignment: "right",
                dataType: "datetime", //'string' | 'number' | 'date' | 'boolean' | 'object' | 'datetime'
                width: 180,
                format: "M/d/yyyy, HH:mm",
                visible: false
            },
            {
                dataField: "SignupDate",
                alignment: "right",
                dataType: "date",
                caption: "sign up date" 
            },            
            {
                dataField: "Website",
                width: 300
            }            
        ],
        showBorders: true,
        scrolling: {
            mode: "infinite", // or "virtual" | "infinite" | "standard"
            //useNative: true
            columnRenderingMode: "virtual"
        },        
        paging: {
            pageSize: 10
        },
        pager: {
            showPageSizeSelector: true,
            allowedPageSizes: [5, 10, 20],
            showInfo: true
        },
        grouping: {
            autoExpandAll: true,
        },
        groupPanel: {
            visible: true
        },  
        sortByGroupSummaryInfo: [{
            summaryItem: "count"
        }],              
        searchPanel: {
            visible: true,
            width: 240,
            placeholder: "Search..."
        },
        filterRow: {
            visible: true,
            applyFilter: "auto"
        },
        headerFilter: {
            visible: true
        },
        keyExpr: "ID",
        selection: {
            mode: "single"
            //mode: "multiple"
        },        
        hoverStateEnabled: true,
        onSelectionChanged: function (selectedItems) {
            var data = selectedItems.selectedRowsData[0];
            if(data) {
                $(".website").text(data.Website);
                //$(".employeePhoto").attr("src", data.Picture);
            }
        },
        allowColumnReordering: true,
        allowColumnResizing: true,
        columnChooser: {
            enabled: true
        },
        columnFixing: { 
            enabled: true
        },
        allowColumnResizing: true,
        columnResizingMode: "nextColumn",
        //columnResizingMode: "widget",
        columnMinWidth: 50,
        columnAutoWidth: true,     
        "export": {
            enabled: true,
            fileName: "Customers",
            allowExportSelectedData: true
        },
        summary: {
            totalItems: [{
                column: "ID",
                summaryType: "count"
            }, 
            {
                column: "OrderAmount",
                summaryType: "sum",
                valueFormat: "currency"
            }],
            groupItems: [{
                column: "City",
                summaryType: "count",
                displayFormat: "{0} cities",
            },
            {
                column: "OrderAmount",
                summaryType: "sum",
                //summaryType: "max",
                valueFormat: "currency",
                displayFormat: "Total: {0}",                
                showInGroupFooter: false
                //showInGroupFooter: true
            }]
        }                               
    }).dxDataGrid("instance");

    $("#autoExpand").dxCheckBox({
        value: true,
        text: "Expand All Groups",
        onValueChanged: function(data) {
            dataGrid.option("grouping.autoExpandAll", data.value);
        }
    });    

    $("#filterRow").dxCheckBox({
        text: "Filter Row",
        value: true,
        onValueChanged: function(data) {
            dataGrid.clearFilter();
            dataGrid.option("filterRow.visible", data.value);
            applyFilterModeEditor.option("disabled", !data.value);
        }
    });
    
    $("#headerFilter").dxCheckBox({
        text: "Header Filter",
        value: true,
        onValueChanged: function(data) {
            dataGrid.clearFilter();
            dataGrid.option("headerFilter.visible", data.value);
        }
    });    
});