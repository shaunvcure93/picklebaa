import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GlobalStore } from '../../service/global.service';
import PhoneCode from '../../../assets/json/phone-code.json';

@Component({
  templateUrl: './logon.page.html',
  styleUrls: ['./logon.page.scss']
})
export class LogonPage implements OnInit {

  'page' : string = 'login';
  'phoneCode' : any = PhoneCode;
  'counrtyData' : any = [];
  'loginForm' : any = {
    'identified' : '',
    'password' : ''
  }
  'registerForm' : any = {
    'display_name' : '',
    'username'     : '',
    'dob'          : '',
    'email'        : '',
    'country'      : '',
    'dial_code'    : ''
  }
  'searchValue' : string = '';
  'showCountry' : boolean = false;

  constructor(
    private route: ActivatedRoute,
    public router: Router,
    public global: GlobalStore
  ) { }

  ngOnInit(): void {
    this.counrtyData = this.phoneCode;
  }

  closeCountry()
  {
    this.showCountry = false;
    this.searchValue = '';
    this.counrtyData = this.phoneCode;
  }
  searchCountry(event:any)
  {
    this.searchValue = event;
    if(this.searchValue === '')
    {
      this.counrtyData = this.phoneCode;
    }
    else
    {
      let arr : any = [];
      this.phoneCode.map((ele:any) =>
      {
        let lowCap : any = ele.name.toLowerCase();
        if(ele.dial_code.includes(this.searchValue) || ele.name.includes(this.searchValue) || lowCap.includes(this.searchValue))
        {
          arr.push(ele);
        }
      });

      this.counrtyData = arr;
    }
  }
  selectCode(data:any)
  {
    this.registerForm.country = data.name;
    this.registerForm.dial_code = data.dial_code;
    this.closeCountry();
  }


}

