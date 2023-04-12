import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ServiceboxComponent } from './servicebox/servicebox.component';
import { SlideviewComponent } from './slideview/slideview.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ServiceboxComponent,
    SlideviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
