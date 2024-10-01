import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GlobalStore } from '../../service/global.service';

@Component({
  templateUrl: './logon.page.html',
  styleUrls: ['./logon.page.scss']
})
export class LogonPage implements OnInit {

  'page' : string = 'login';

  constructor(
    private route: ActivatedRoute,
    public router: Router,
    public global: GlobalStore
  ) { }

  ngOnInit(): void {

  }


}

