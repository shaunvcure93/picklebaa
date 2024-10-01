import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GlobalStore } from '../../service/global.service';

@Component({
  templateUrl: './before.page.html',
  styleUrls: ['./before.page.scss']
})
export class BeforePage implements OnInit {

  constructor(
    private route: ActivatedRoute,
    public router: Router,
    public global: GlobalStore
  ) {
    this.route.queryParams
      .subscribe((params:any) => 
      {
        this.afterGame = params.type === 'after-game';
      }
    );
  }

  'afterGame' : boolean = false;

  // sample
  'sampleData' : any = {
    'id'      : '100000',
    'status'  : 'win',
    'location': 'Hyprground Pickleball S19',
    'datetime': '27-08-2024 09:00:00',
    'scoring' : '15 Point Rally',
    'home' : {
      'score' : 15,
      'player': [
        {
          'id': '000001',
          'name' : 'Nick Lai',
          'profile_img' : 'https://img.freepik.com/free-photo/portrait-man-laughing_23-2148859448.jpg?size=338&ext=jpg',
          'win_gpt' : 25,
          'win_rgpt': 25
        },
        {
          'id': '000002',
          'name' : 'Shaun Lee Chen Yep',
          'profile_img' : 'https://mrwallpaper.com/images/hd/cool-profile-pictures-panda-man-gsl2ntkjj3hrk84s.jpg',
          'win_gpt' : 25,
          'win_rgpt': 25
        }
      ]
    },
    'away' : {
      'score' : 9,
      'player': [
        {
          'id': '000005',
          'name' : 'Marcus Wong',
          'profile_img' : 'https://wallpapers.com/images/featured/cool-profile-picture-87h46gcobjl5e4xu.jpg',
          'win_gpt' : -25,
          'win_rgpt': -25
        },
        {
          'id': '000008',
          'name' : 'Sam Leong',
          'profile_img' : 'https://www.profilebakery.com/wp-content/uploads/2023/04/AI-Profile-Picture.jpg',
          'win_gpt' : -25,
          'win_rgpt': -25
        }
      ]
    },
    'referee' : {
      'name'    : 'Yong Chang',
      'is_super': true,
      'win_gpt' : 5,
      'win_rgpt': 25
    }
  };

  ngOnInit(): void {

  }


}

