import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Modulo1Component } from './modulo1.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [Modulo1Component],
  exports:[Modulo1Component]
})
export class Modulo1Module { }