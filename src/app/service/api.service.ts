import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

// let nowDate = new Date();
// let getNowDate = nowDate.getFullYear() + '-' + ((nowDate.getMonth() + 1) >= 10 ? (nowDate.getMonth() + 1) : '0' + (nowDate.getMonth() + 1)) + '-' + (nowDate.getDate() >= 10 ? nowDate.getDate() : '0' + nowDate.getDate()) + ' ' + (nowDate.getHours() >= 10 ? nowDate.getHours() : '0' + nowDate.getHours()) + ':' + (nowDate.getMinutes() >= 10 ? nowDate.getMinutes() : '0' + nowDate.getMinutes()) + ':' + (nowDate.getSeconds() >= 10 ? nowDate.getSeconds() : '0' + nowDate.getSeconds());

const httpOptions = () => ({
  headers: new HttpHeaders({ 
    'Accept'      : '*/*',
    'Access-Control-Allow-Origin' : '*',
    'Authorization': `Bearer ${window.localStorage.getItem('token') || ''}`,
    'timeZoneCode': `${Math.round(new Date().getTimezoneOffset() / 60)}`
  })
});


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  'domain': string = '';

  constructor(
    private http: HttpClient
  ) {

  }



}

