import { NgModule, Component, enableProdMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { DxFileManagerModule, DxPopupModule } from 'devextreme-angular';
import RemoteFileProvider from 'devextreme/ui/file_manager/file_provider/remote';

if (!/localhost/.test(document.location.host)) {
    enableProdMode();
}

@Component({
    selector: 'demo-app',
    templateUrl: 'app/app.component.html',
    styleUrls: ['app/app.component.css'],
    preserveWhitespaces: true
})
export class AppComponent {
    remoteProvider: RemoteFileProvider;
    imageItemToDisplay: any = {};
    popupVisible = false;

    constructor() {
        this.remoteProvider = new RemoteFileProvider({
            endpointUrl: "https://js.devexpress.com/Demos/Mvc/api/file-manager-file-system-images"
        });
    }

    displayImagePopup(e) {
        this.imageItemToDisplay = e.fileItem;
        this.popupVisible = true;
    }
}

@NgModule({
    imports: [
        BrowserModule,
        DxFileManagerModule,
        DxPopupModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);