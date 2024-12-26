import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GlobalStore } from '../../service/global.service';
import GameList from '../../../assets/json/matches.json';


@Component({
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss']
})
export class HistoryPage implements OnInit {

  'historyData' : any = [];

  // sample
  'gameData' : any = GameList;

  constructor(
    private route: ActivatedRoute,
    public router: Router,
    public global: GlobalStore
  ) { }

  ngOnInit(): void {

    let date : any = new Date();
    let day : any = date.getDate();
    let month : any = date.getMonth() + 1;
    let year : any = date.getFullYear();
    let arr : any = [];
    this.gameData.map((ele:any) =>
    {
      if(ele.date < `${year}-${month}-${day}`)
      {
        arr.push(ele);
      }
    });
    this.historyData = arr;
    
  }


}

