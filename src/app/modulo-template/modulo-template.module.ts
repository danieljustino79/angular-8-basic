import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModuloTemplateComponent } from './modulo-template.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ModuloTemplateComponent],
  exports:[ModuloTemplateComponent]
})
export class ModuloTemplateModule { }