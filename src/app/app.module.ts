import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { Modulo1Module } from './modulo1/modulo1.module';
import { ModuloTemplateModule } from './modulo-template/modulo-template.module';

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule, 
    Modulo1Module,
    ModuloTemplateModule ],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
