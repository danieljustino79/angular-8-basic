import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModuloTemplateMasterComponent } from './modulo-template-master.component';
import { ModuloTemplateDetailComponent } from './modulo-template-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ 
    ModuloTemplateMasterComponent,
    ModuloTemplateDetailComponent
    ],
    exports:[ModuloTemplateMasterComponent]
})
export class ModuloTemplateDetalheModule { }