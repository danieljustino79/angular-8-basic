import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modulo-template',
  templateUrl: './modulo-template.component.html',
  styleUrls: ['./modulo-template.component.css']
})
export class ModuloTemplateComponent implements OnInit {

  nomeProduto:string;
  inter:string;
  inputValue:string;

  constructor() { }

  ngOnInit() {
    this.nomeProduto = 'produto 1';
    this.inter = '{{ field }}';
    this.inputValue = '123';
  }

}