import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  template: `
    <p [style.fontSize.px]=tamano>
      Hola Mundo ... esta es una etiqueta html
    </p>

    <button [style.minWidth.px]='80' [style.minHeight.px]='70' class="btn btn-primary" (click)="tamano = tamano + 5">
      <i class="fa fa-plus"></i>
    </button>
    <button [style.minWidth.px]='80' [style.minHeight.px]='70' class="btn btn-primary" (click)="tamano = tamano - 5">
      <i class="fa fa-minus-circle"></i>
    </button>

  `,
  styles: [
  ]
})
export class NgStyleComponent implements OnInit {
  tamano =  19;
  constructor() { }

  ngOnInit(): void {
  }

}
