import { TemplateComponent } from './components/template/template.component';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  templateComponents: TemplateComponent;
  title = 'formularios';
}
