import { NgModule, Component, enableProdMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { DxFileManagerModule } from 'devextreme-angular';
import RemoteFileProvider from 'devextreme/ui/file_manager/file_provider/remote';

if (!/localhost/.test(document.location.host)) {
    enableProdMode();
}

@Component({
    selector: 'demo-app',
    templateUrl: 'app/app.component.html',
    preserveWhitespaces: true
})
export class AppComponent {
    allowedFileExtensions: string[];
    remoteProvider: RemoteFileProvider;

    constructor() {
        this.allowedFileExtensions = [];
        this.remoteProvider = new RemoteFileProvider({
            endpointUrl: "https://js.devexpress.com/Demos/Mvc/api/file-manager-db"
        });
    }

    customizeDetailColumns(columns){
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
    }
}

@NgModule({
    imports: [
        BrowserModule,
        DxFileManagerModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);