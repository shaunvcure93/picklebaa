import { Component } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd  } from '@angular/router';
import { GlobalStore } from './service/global.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  
  constructor(
    public router: Router,
    public global: GlobalStore
  ) {

  }
}
