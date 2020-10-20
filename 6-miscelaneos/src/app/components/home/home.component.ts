import { APP_ROUTING } from './../../app.routes';
import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
   <app-ng-style></app-ng-style>
  <hr>
  <app-css></app-css>
  <br>
  <app-clases></app-clases>

  <p [appResaltado]="'orange'"> Hola Mundo </p>
  <app-ng-switch></app-ng-switch>
    `,
  styles: [
  ]
})

export class HomeComponent implements OnInit, OnChanges, DoCheck, AfterContentInit,
 AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy{

  constructor() {
    console.log("constructor");
  }
  
 
  ngOnInit(): void {
    console.log('ngOnInit');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges');
  }
  ngDoCheck(): void {
   console.log('ngDoCheck');
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  }
  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }
}
