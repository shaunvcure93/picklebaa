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
          this.eventScdehule = [];
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

            let scdehuleArr : any = [];
            this.eventDetail.scdehule.map((ele:any) =>
            {
              let gameArr : any = [];
              ele.game.map((item:any, index:number) =>
              {
                let home : any = [];
                let away : any = [];
                item.home.map((h:any) =>
                {
                  let index = this.playerData.findIndex((x:any) => x.id === h)
                  if(index > -1)
                  {
                    home.push(this.playerData[index]);
                  }
                });
                item.away.map((h:any) =>
                {
                  let index = this.playerData.findIndex((x:any) => x.id === h)
                  if(index > -1)
                  {
                    away.push(this.playerData[index]);
                  }
                });

                gameArr.push({
                  'index' : index,
                  'home': home,
                  'away': away
                });
              });

              scdehuleArr.push({
                'court': ele.court,
                'game' : gameArr
              })
            });

            this.eventScdehule = scdehuleArr;
          });
        }
      }
    );
  }

  'eventId' : string = '';
  'eventDetail' : any = null;
  'eventPlayer' : any = [];
  'eventScdehule' : any = [];

  // sample
  'gameData' : any = GameList;
  'playerData' : any = PlayerList;

  ngOnInit(): void {

  }


}

