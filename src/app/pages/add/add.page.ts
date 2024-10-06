import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GlobalStore } from '../../service/global.service';
import { WINDOW } from '../../service/token.service';

@Component({
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss']
})
export class AddPage implements OnInit {
  private window = inject(WINDOW);

  constructor(
    private route: ActivatedRoute,
    public router: Router,
    public global: GlobalStore
  ) {
    
  }

  'url' : string = '';
  'player_format' : any = [];
  'selectorData' : any = null;
  'playerFormatData' : any = [
    {
      'index': 0,
      'name' : 'Double 2v2',
      'value': 'pickleball_double'
    },
    {
      'index': 1,
      'name' : 'Single 1v1',
      'value': 'pickleball_single'
    }
  ];
  'scoringTypeData' : any = [
    {
      'index' : 0,
      'name'  : '11 Point Standard',
      'value' : '11_standard'
    },
    {
      'index' : 1,
      'name'  : '11 Point Rally, Serve to Win',
      'value' : '11_rally_serve'
    },
    {
      'index' : 2,
      'name'  : '11 Point Rally, Sudden Death',
      'value' : '11_rally_sudden'
    },
    {
      'index' : 3,
      'name'  : '15 Point Rally, Serve to Win',
      'value' : '15_rally_serve'
    },
    {
      'index' : 4,
      'name'  : '15 Point Rally, Sudden Death',
      'value' : '15_rally_sudden'
    }
  ];
  'formData' : any = {
    'location'     : '',
    'player_format': '',
    'scroing_type' : '',
    'referee'      : false,
    'super_referee': false,
    'home' : {
      'player1' : '',
      'player2' : '',
      'score' : ''
    },
    'away' : {
      'player1' : '',
      'player2' : '',
      'score' : ''
    }
  }
  'playerData' : any = null;
  'selectedPlayer' : any = null;
  'isSuperReferee' : boolean = false;
  'loading' : boolean = false;
  'searchValue' : string = '';
  'searchData' : any = [];
  'loader' : boolean = false;

  // sample
  'sampleData' : any = [
    {
      'id'         : '000001',
      'name'       : 'Wong Qian Shu',
      'profile_img': 'https://img.freepik.com/free-photo/portrait-man-laughing_23-2148859448.jpg?size=338&ext=jpg',
      'gpt'        : 56990
    },
    {
      'id'         : '000002',
      'name'       : 'Nick045678',
      'profile_img': 'https://mrwallpaper.com/images/hd/cool-profile-pictures-panda-man-gsl2ntkjj3hrk84s.jpg',
      'gpt'        : 52000
    },
    {
      'id'         : '000003',
      'name'       : 'Shaun Lee CHen Yep',
      'profile_img': 'https://wallpapers.com/images/featured/cool-profile-picture-87h46gcobjl5e4xu.jpg',
      'gpt'        : 49881
    },
    {
      'id'         : '000004',
      'name'       : 'Sean Leiong',
      'profile_img': 'https://www.profilebakery.com/wp-content/uploads/2023/04/AI-Profile-Picture.jpg',
      'gpt'        : 49881
    },
    {
      'id'         : '000005',
      'name'       : 'William 93456',
      'profile_img': 'https://pics.craiyon.com/2023-11-26/oMNPpACzTtO5OVERUZwh3Q.webp',
      'gpt'        : 38003
    },
    {
      'id'         : '000006',
      'name'       : 'Hui Man Tong',
      'profile_img': 'https://images.pexels.com/photos/14653174/pexels-photo-14653174.jpeg',
      'gpt'        : 34998
    },
    {
      'id'         : '000007',
      'name'       : 'Supre Agliso',
      'profile_img': 'https://cdn.pixabay.com/photo/2023/11/03/02/38/ai-generated-8361907_1280.jpg',
      'gpt'        : 20000
    },
    {
      'id'         : '000008',
      'name'       : 'Agio Lim',
      'profile_img': 'https://i.pinimg.com/736x/42/31/97/4231971bbd0512d2a3d965e0451197f7.jpg',
      'gpt'        : 19000
    },
    {
      'id'         : '000009',
      'name'       : 'Ben Khoo',
      'profile_img': 'https://blog.photofeeler.com/wp-content/uploads/2017/12/linkedin-profile-picture.jpg',
      'gpt'        : 16775
    },
    {
      'id'         : '000010',
      'name'       : 'Tan Boo Hui',
      'profile_img': 'https://d1eipm3vz40hy0.cloudfront.net/images/AMER/customerprofile1.jpg',
      'gpt'        : 8000
    }
  ]
  


  ngOnInit(): void {
    this.url = `${this.window.origin}/request?id=12345`;
  }

  selectPlayFormat()
  {
    this.selectorData = {
      'name' : 'player format',
      'list' : this.playerFormatData
    };
  }
  pickSelector(index:number)
  {
    if(this.selectorData.name === 'player format')
    {
      this.formData.player_format = this.selectorData.list[index].name;
      this.selectorData = null;
    }
    else if(this.selectorData.name === 'scoring type')
    {
      this.formData.scroing_type = this.selectorData.list[index].name;
      this.selectorData = null;
    }
  }
  selectScoringType()
  {
    this.selectorData = {
      'name' : 'scoring type',
      'list' : this.scoringTypeData
    };
  }
  toggleReferee(event:any)
  {
    this.formData.referee = !event;
  }
  toggleSuperReferee(event:any)
  {
    this.formData.super_referee = !event;
  }

  showPlayerList(team:string, player: number)
  {
    this.playerData = {
      'team'  : team,
      'player': player,
      'list'  : this.sampleData
    }
  }
  startSearch()
  {
    this.loading = true;
    setTimeout(() =>
    {
      this.loading = false;
      this.searchData = this.sampleData;
    }, 1000);
  }
  selectPlayer(data:any)
  {
    if(this.playerData.team === 'home')
    {
      if(this.playerData.player === 1)
      {
        this.formData.home.player1 = `${data.id} - ${data.name}`;
        this.playerData = null;
      }
      else
      {
        this.formData.home.player2 = `${data.id} - ${data.name}`;
        this.playerData = null;
      }
    }
    else
    {
      if(this.playerData.player === 1)
      {
        this.formData.away.player1 = `${data.id} - ${data.name}`;
        this.playerData = null;
      }
      else
      {
        this.formData.away.player2 = `${data.id} - ${data.name}`;
        this.playerData = null;
      }
    }
  }
  submit()
  {
    this.loader = true;
    if(this.isSuperReferee)
    {
      setTimeout(() =>
      {
        this.loader = false;
        this.global.dialog = null;
        this.global.dialog = {
          'text' : 'Game result submited.',
          'callback' : () => {
            this.global.navigate('/profile')
          }
        };
      }, 1000);
    }
    else
    {
      setTimeout(() =>
      {
        this.loader = false;
        this.global.dialog = null;
        this.global.dialog = {
          'text' : 'Game result submited, waiting other players to verify.',
          'callback' : () => {
            this.global.navigate('/profile')
          }
        };
      }, 1000);
    }
  }

}

