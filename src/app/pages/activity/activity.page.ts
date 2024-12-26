import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GlobalStore } from '../../service/global.service';
import GameList from '../../../assets/json/matches.json';
import PlayerList from '../../../assets/json/players.json';

@Component({
  templateUrl: './activity.page.html',
  styleUrls: ['./activity.page.scss']
})
export class ActivityPage implements OnInit {

  constructor(
    private route: ActivatedRoute,
    public router: Router,
    public global: GlobalStore
  ) {
    this.route.queryParams
      .subscribe((params:any) => 
      {
        if(params.id)
        {
          this.eventDetail = null;
          this.eventPlayer = [];
          this.eventId = params.id;
          this.gameData.map((ele:any) =>
          {
            if(ele.id === this.eventId)
            {
              this.eventDetail = JSON.parse(JSON.stringify(ele));
              let arr : any = [];
              this.playerData.map((ele:any) =>
              {
                if(this.eventDetail.players.findIndex((x:any) => x === ele.id) > -1)
                {
                  arr.push(ele);
                }
              });

              this.eventPlayer = arr;
            }
          });
        }
      }
    );
  }

  'eventId' : string = '';
  'eventDetail' : any = null;
  'eventPlayer' : any = [];

  // sample
  'gameData' : any = GameList;
  'playerData' : any = PlayerList;

  ngOnInit(): void {

  }


}

