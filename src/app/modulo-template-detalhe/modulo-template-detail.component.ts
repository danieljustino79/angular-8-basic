import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-modulo-template-detail',
  templateUrl: './modulo-template-detail.component.html'
})
export class ModuloTemplateDetailComponent implements OnInit {

  @Input() detalhe:string;

  constructor() { }

  ngOnInit() {
  }

}