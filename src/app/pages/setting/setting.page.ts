import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GlobalStore } from '../../service/global.service';

@Component({
  templateUrl: './setting.page.html',
  styleUrls: ['./setting.page.scss']
})
export class SettingPage implements OnInit {

  constructor(
    private route: ActivatedRoute,
    public router: Router,
    public global: GlobalStore
  ) {
    
  }

  'formData' : any = {
    'cover_image'  : null,
    'profile_image': null,
    'dob'          : '',
    'email'        : '',
    'phone'        : '',
    'old_pass'     : '',
    'new_pass'     : '',
    'con_pass'     : ''
  }
  'loading' : boolean = false;

  ngOnInit(): void {

  }


}

