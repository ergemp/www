<template>
  <div>
    <dx-data-grid
      id="gridContainer"
      :data-source="orders"
      :show-borders="true"
      @exporting="exporting"
      @cell-prepared="cellPrepared"
    >
      <dx-group-panel :visible="true"/>
      <dx-grouping :auto-expand-all="true"/>
      <dx-sort-by-group-summary-info summary-item="count"/>

      <dx-column
        :group-index="0"
        data-field="Employee"
      />
      <dx-column
        :width="130"
        data-field="OrderNumber"
        caption="Invoice Number"
      />
      <dx-column
        :width="160"
        data-field="OrderDate"
        data-type="date"
      />
      <dx-column
        :group-index="1"
        data-field="CustomerStoreCity"
        caption="City"
      />
      <dx-column
        data-field="CustomerStoreState"
        caption="State"
      />
      <dx-column
        data-field="SaleAmount"
        alignment="right"
        format="currency"
        sort-order="desc"
      />
      <dx-export
        :enabled="true"
        :allow-export-selected-data="true"
      />
      <dx-selection mode="multiple"/>

      <dx-summary>
        <dx-group-item
          :align-by-column="false"
          column="OrderNumber"
          summary-type="count"
          display-format="{0} orders"
        />
        <dx-group-item
          :align-by-column="true"
          :show-in-group-footer="false"
          column="SaleAmount"
          summary-type="max"
          display-format="Max: {0}"
          value-format="currency"
        />
        <dx-group-item
          :align-by-column="true"
          :show-in-group-footer="true"
          column="SaleAmount"
          summary-type="sum"
          display-format="Sum: {0}"
          value-format="currency"
        />

        <dx-total-item
          column="SaleAmount"
          summary-type="sum"
          display-format="Total Sum: {0}"
          value-format="currency"
        />
      </dx-summary>
    </dx-data-grid>
  </div>
</template>
<script>
import { DxDataGrid, DxColumn, DxExport, DxSelection, DxSummary, DxGroupPanel, DxGrouping, DxGroupItem, DxSortByGroupSummaryInfo, DxTotalItem } from 'devextreme-vue/data-grid';
import excelExporter from 'devextreme/exporter/exceljs/excelExporter';
import ExcelJS from 'exceljs';
import saveAs from 'file-saver';
import service from './data.js';

export default {
  components: {
    DxDataGrid, DxColumn, DxExport, DxSelection, DxSummary, DxGroupPanel, DxGrouping, DxGroupItem, DxSortByGroupSummaryInfo, DxTotalItem
  },
  data() {
    return {
      orders: service.getOrders()
    };
  },
  methods: {
    exporting(e) {
      var workbook = new ExcelJS.Workbook();
      var worksheet = workbook.addWorksheet('Main sheet');

      /*
        The 'DevExpress.excelExporter.exportDataGrid' function uses the ExcelJS library.
        For more information about ExcelJS, see:
          - https://github.com/exceljs/exceljs#contents
          - https://github.com/exceljs/exceljs#browser
      */

      excelExporter.exportDataGrid({
        component: e.component,
        worksheet: worksheet,
        topLeftCell: { row: 7, column: 1 },
        customizeCell: options => {

          /*
            The 'options.excelCell' field contains an ExcelJS object that describes an Excel cell.
            Refer to the following topics for more details about its members:
              - value and type - https://github.com/exceljs/exceljs#value-types
              - alignment - https://github.com/exceljs/exceljs#alignment
              - border - https://github.com/exceljs/exceljs#borders
              - fill - https://github.com/exceljs/exceljs#fills
              - font - https://github.com/exceljs/exceljs#fonts
              - numFmt - https://github.com/exceljs/exceljs#number-formats
            The 'options.gridCell' object fields are described in https://js.devexpress.com/Documentation/ApiReference/Common/Object_Structures/ExcelDataGridCell/
          */

          var gridCell = options.gridCell;
          var excelCell = options.excelCell;
          if(gridCell.rowType === 'data') {
            if(gridCell.data.OrderDate < new Date(2014, 2, 3)) {
              excelCell.font = { color: { argb: 'AAAAAA' } };
            }
            if(gridCell.data.SaleAmount > 15000) {
              if(gridCell.column.dataField === 'SaleAmount') {
                Object.assign(excelCell, {
                  font: { color: { argb: '000000' } },
                  fill: { type: 'pattern', pattern:'solid', fgColor: { argb:'FFBB00' } }
                });
              }
            }
          }
          if(gridCell.rowType === 'group') {
            var nodeColors = [ 'BEDFE6', 'C9ECD7'];
            Object.assign(excelCell, {
              fill: { type: 'pattern', pattern:'solid', fgColor: { argb: nodeColors[gridCell.groupIndex] } }
            });
          }
          if(gridCell.rowType === 'groupFooter' && excelCell.value) {
            Object.assign(excelCell.font, { italic: true });
          }
        }
      }).then(function(dataGridRange) {
        customizeHeader(worksheet);
        customizeFooter(worksheet, dataGridRange);
        return Promise.resolve();
      }).then(function() {
        workbook.xlsx.writeBuffer().then(function(buffer) {
          saveAs(new Blob([buffer], { type: 'application/octet-stream' }), 'DataGrid.xlsx');
        });
      });
      e.cancel = true;
    },
    cellPrepared(e) {
      if(e.rowType === 'data') {
        if(e.data.OrderDate < new Date(2014, 2, 3)) {
          e.cellElement.style.color = '#AAAAAA';
        }
        if(e.data.SaleAmount > 15000) {
          if(e.column.dataField === 'OrderNumber') {
            e.cellElement.style.fontWeight = 'bold';
          }
          if(e.column.dataField === 'SaleAmount') {
            e.cellElement.style.backgroundColor = '#FFBB00';
            e.cellElement.style.color = '#000000';
          }
        }
      }
      if(e.rowType === 'group') {
        var nodeColors = [ '#BEDFE6', '#C9ECD7'];
        e.cellElement.style.backgroundColor = nodeColors[e.row.groupIndex];
        e.cellElement.style.color = '#000';
        if(e.cellElement.firstChild && e.cellElement.firstChild.style) e.cellElement.firstChild.style.color = '#000';
      }
      if(e.rowType === 'groupFooter') {
        e.cellElement.style.fontStyle = 'italic';
      }
    }
  }
};

function customizeHeader(worksheet) {
  var generalStyles = {
    font: { bold: true },
    fill: { type: 'pattern', pattern: 'solid', fgColor: { argb: 'D3D3D3' }, bgColor: { argb: 'D3D3D3' } },
    alignment: { horizontal: 'left' }
  };
  for(var rowIndex = 1; rowIndex < 6; rowIndex++) {
    worksheet.mergeCells(rowIndex, 1, rowIndex, 2);
    worksheet.mergeCells(rowIndex, 3, rowIndex, 4);
    Object.assign(worksheet.getRow(rowIndex).getCell(1), generalStyles);
    Object.assign(worksheet.getRow(rowIndex).getCell(3), generalStyles);
  }
  worksheet.getRow(1).height = 20;
  worksheet.getRow(1).getCell(1).font = { bold: true, size: 16 };
  worksheet.getRow(1).getCell(3).numFmt = 'd mmmm yyyy';
  worksheet.getRow(1).getCell(3).font = { bold: true, size: 16 };
  worksheet.getColumn(1).values = [ 'Sale Amounts:', 'Company Name:', 'Address:', 'Phone:', 'Website:'];
  worksheet.getColumn(3).values = [ new Date(), 'K&S Music', '1000 Nicllet Mall Minneapolis Minnesota', '(612) 304-6073', 'www.nowebsitemusic.com'];
}

function customizeFooter(worksheet, dataGridRange) {
  var currentRowIndex = dataGridRange.to.row + 2;
  for(var rowIndex = 0; rowIndex < 3; rowIndex++) {
    worksheet.mergeCells(currentRowIndex + rowIndex, 1, currentRowIndex + rowIndex, 4);
    Object.assign(worksheet.getRow(currentRowIndex + rowIndex).getCell(1), { font: { bold: true }, alignment: { horizontal: 'right' } });
  }
  worksheet.getRow(currentRowIndex).getCell(1).value = 'If you have any questions, please contact John Smith.';
  currentRowIndex++;
  worksheet.getRow(currentRowIndex).getCell(1).value = 'Phone: +111-111';
  currentRowIndex++;
  worksheet.getRow(currentRowIndex).getCell(1).value = 'For demonstration purposes only';
  worksheet.getRow(currentRowIndex).getCell(1).font = { italic: true };
}
</script>

<style scoped>
#gridContainer {
    height: 440px;
}
</style>
