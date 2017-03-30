
import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {AppComponent} from "./app.component";
import {CarPartComponent} from "./car-part/car-part.component";
import {NgModule} from "@angular/core";

@NgModule({
    declarations: [
        AppComponent,
        CarPartComponent
    ],
    imports: [ BrowserModule ],
    bootstrap: [ AppComponent ]
})
class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);