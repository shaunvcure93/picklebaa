import { Component, OnInit, ViewChild, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GlobalStore } from '../../service/global.service';
import { WINDOW } from '../../service/token.service';

@Component({
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss']
})
export class ProfilePage implements OnInit {
  private window = inject(WINDOW);

  'tab' : string = 'pmr';
  'searchPlayer' : boolean = false;
  'search' : string = '';
  'information' : boolean = false;
  'favourite' : boolean = false;
  'gptNote' : boolean = false;
  'profileAction' : boolean = false;
  'profileUrl' : string = '';

  // sample
  'sampleData' : any = {
    'id'      : '000001',
    'name'    : 'Shaun Lee',
    'username': 'shauntest001',
    'cover_img' : 'https://cdn.shopify.com/s/files/1/0558/9113/2621/files/image_6483441-2_edit_1024x1024.jpg',
    'profile_img' : 'https://dashpickleball.com/wp-content/uploads/2023/03/Tyson-Mcguffin-professional-pickleball-player-biography-profile-optimized.jpg',
    'gpt'     : 8900,
    'rgpt'    : 10999,
    'likes'   : 91,
    'kudos'   : {
      'atp'    : 0,
      'dink'   : 0,
      'serve'  : 0,
      'return' : 0,
      'referee': 0,
      'drive'  : 0,
      'volley' : 0,
      'defense': 0,
      'lob'    : 0
    },
    'stats' : {
      'match'        : 108,
      'win'          : 50,
      'lose'         : 58,
      'recent_played': '31-6-2024'
    }
  };
  'sampleHistory' : any = [
    {
      'id'      : '100000',
      'status'  : 'win',
      'location': 'Hyprground Pickleball S19',
      'datetime': '27-08-2024 09:00:00',
      'scoring' : '15 Point Rally',
      'home' : {
        'score' : 15,
        'player': ['Sean Lim', 'Leong Mandy']
      },
      'away' : {
        'score' : 9,
        'player': ['Nick Lai Tong', 'Eric Ong']
      }
    },
    {
      'id'      : '100000',
      'status'  : 'win',
      'location': 'Hyprground Pickleball S19',
      'datetime': '27-08-2024 09:00:00',
      'scoring' : '15 Point Rally',
      'home' : {
        'score' : 6,
        'player': ['Sean Lim', 'Leong Mandy']
      },
      'away' : {
        'score' : 15,
        'player': ['Nick Lai Tong', 'Eric Ong']
      }
    },
    {
      'id'      : '100000',
      'status'  : 'lose',
      'location': 'Hyprground Pickleball S19',
      'datetime': '27-08-2024 09:00:00',
      'scoring' : '15 Point Rally',
      'home' : {
        'score' : 1,
        'player': ['Sean Lim', 'Leong Mandy']
      },
      'away' : {
        'score' : 15,
        'player': ['Nick Lai Tong', 'Eric Ong']
      }
    },
    {
      'id'      : '100000',
      'status'  : 'win',
      'location': 'Hyprground Pickleball S19',
      'datetime': '27-08-2024 09:00:00',
      'scoring' : '15 Point Rally',
      'home' : {
        'score' : 15,
        'player': ['Sean Lim', 'Leong Mandy']
      },
      'away' : {
        'score' : 9,
        'player': ['Nick Lai Tong', 'Eric Ong']
      }
    },
    {
      'id'      : '100000',
      'status'  : 'lose',
      'location': 'Hyprground Pickleball S19',
      'datetime': '27-08-2024 09:00:00',
      'scoring' : '15 Point Rally',
      'home' : {
        'score' : 15,
        'player': ['Sean Lim', 'Leong Mandy']
      },
      'away' : {
        'score' : 7,
        'player': ['Nick Lai Tong', 'Eric Ong']
      }
    }
  ];

  constructor(
    private route: ActivatedRoute,
    public router: Router,
    public global: GlobalStore
  ) {

    this.profileUrl = this.window.location.href;
    
  }

  ngOnInit(): void {

    this.window.addEventListener('click', () =>
    {
      this.profileAction = false;
    });
  }

  toggleAction(event:any)
  {
    event.stopPropagation();
    this.profileAction = !this.profileAction;
  }

  closeSearch()
  {
    this.searchPlayer = false;
    this.search = '';
  }


}

