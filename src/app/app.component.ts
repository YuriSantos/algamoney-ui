import { Component, OnInit } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {CoreModule} from "./core/core.module";
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CoreModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'algamoney-ui';

  ngOnInit() {}
}
