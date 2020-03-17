import { NgModule, Component, enableProdMode, ViewChild } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { Appointment, Resource, Service } from './app.service';
import { DxSpeedDialActionModule, DxSpeedDialActionComponent } from 'devextreme-angular';
import { DxSchedulerModule, DxSchedulerComponent } from 'devextreme-angular';

if (!/localhost/.test(document.location.host)) {
    enableProdMode();
}

@Component({
    selector: 'demo-app',
    templateUrl: 'app/app.component.html',
    providers: [Service]
})
export class AppComponent {
    @ViewChild(DxSchedulerComponent, { static: false }) scheduler: DxSchedulerComponent;
    @ViewChild('speedDialAction', { static: false }) speedDialAction: DxSpeedDialActionComponent;

    appointments: Appointment[];
    currentDate: Date = new Date(2017, 4, 25);
    priorities: Resource[];

    constructor(service: Service) {
        this.appointments = service.getAppointments();
        this.priorities = service.getResources();
    }

    showAppointmentPopup(e) {
        this.scheduler.instance.showAppointmentPopup();
    }
}

@NgModule({
    imports: [
        BrowserModule,
        DxSchedulerModule,
        DxSpeedDialActionModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule)
