import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modulo-template-master',
  templateUrl: './modulo-template-master.component.html'
})
export class ModuloTemplateMasterComponent implements OnInit {

  produtoNome = 'Produto 1';
  produtoDetalhe = 'produto digital';

  constructor() { }

  ngOnInit() {
  }

}