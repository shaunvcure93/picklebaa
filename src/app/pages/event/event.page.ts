import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GlobalStore } from '../../service/global.service';

@Component({
  templateUrl: './event.page.html',
  styleUrls: ['./event.page.scss']
})
export class EventPage implements OnInit {

  constructor(
    private route: ActivatedRoute,
    public router: Router,
    public global: GlobalStore
  ) {
    
  }

  'tab' : string = 'all';

  // sample
  'sampleData' : any = [
    {
      'id'         : '10000',
      'title'      : 'Super Referee Open Court double up GPT',
      'datetime'   : '20th Sep, 8pm - 10pm',
      'requirement': '> 2500 GPT',
      'location'   : 'Hyprground Pickleball S19',
      'player'     : 7,
      'cover_img'  : 'https://pickleball.webx.my/wp-content/uploads/2024/08/Persatuan-Pickleball-Wilayah-Persekutuan-Putrajaya-1024x768.jpg'
    },
    {
      'id'         : '10000',
      'title'      : 'Super Referee Open Court double up GPT',
      'datetime'   : '20th Sep, 8pm - 10pm',
      'requirement': '> 2500 GPT',
      'location'   : 'Hyprground Pickleball S19',
      'player'     : 7,
      'cover_img'  : 'https://blog.courtsite.my/content/images/2024/09/PH3IBOwgiWfSOgCjDnCemmnSBkz1-fdb850b9-aa5f-4ba5-ad79-05e50ddf4e2d.webp'
    },
    {
      'id'         : '10000',
      'title'      : 'Super Referee Open Court double up GPT',
      'datetime'   : '20th Sep, 8pm - 10pm',
      'requirement': '> 2500 GPT',
      'location'   : 'Hyprground Pickleball S19',
      'player'     : 7,
      'cover_img'  : 'https://pickleball.webx.my/wp-content/uploads/2024/08/Persatuan-Pickleball-Wilayah-Persekutuan-Putrajaya-1024x768.jpg'
    },
    {
      'id'         : '10000',
      'title'      : 'Super Referee Open Court double up GPT',
      'datetime'   : '20th Sep, 8pm - 10pm',
      'requirement': '> 2500 GPT',
      'location'   : 'Hyprground Pickleball S19',
      'player'     : 7,
      'cover_img'  : 'https://pickleland.com/wp-content/smush-webp/2024/04/AR-blog-header.png.webp'
    },
    {
      'id'         : '10000',
      'title'      : 'Super Referee Open Court double up GPT',
      'datetime'   : '20th Sep, 8pm - 10pm',
      'requirement': '> 2500 GPT',
      'location'   : 'Hyprground Pickleball S19',
      'player'     : 7,
      'cover_img'  : 'https://pickleball.webx.my/wp-content/uploads/2024/08/Persatuan-Pickleball-Wilayah-Persekutuan-Putrajaya-1024x768.jpg'
    },
    {
      'id'         : '10000',
      'title'      : 'Super Referee Open Court double up GPT',
      'datetime'   : '20th Sep, 8pm - 10pm',
      'requirement': '> 2500 GPT',
      'location'   : 'Hyprground Pickleball S19',
      'player'     : 7,
      'cover_img'  : 'https://pickleball.webx.my/wp-content/uploads/2024/08/Persatuan-Pickleball-Wilayah-Persekutuan-Putrajaya-1024x768.jpg'
    },
    {
      'id'         : '10000',
      'title'      : 'Super Referee Open Court double up GPT',
      'datetime'   : '20th Sep, 8pm - 10pm',
      'requirement': '> 2500 GPT',
      'location'   : 'Hyprground Pickleball S19',
      'player'     : 7,
      'cover_img'  : 'https://pickleball.webx.my/wp-content/uploads/2024/08/Persatuan-Pickleball-Wilayah-Persekutuan-Putrajaya-1024x768.jpg'
    },
    {
      'id'         : '10000',
      'title'      : 'Super Referee Open Court double up GPT',
      'datetime'   : '20th Sep, 8pm - 10pm',
      'requirement': '> 2500 GPT',
      'location'   : 'Hyprground Pickleball S19',
      'player'     : 7,
      'cover_img'  : 'https://pickleball.webx.my/wp-content/uploads/2024/08/Persatuan-Pickleball-Wilayah-Persekutuan-Putrajaya-1024x768.jpg'
    },
    {
      'id'         : '10000',
      'title'      : 'Super Referee Open Court double up GPT',
      'datetime'   : '20th Sep, 8pm - 10pm',
      'requirement': '> 2500 GPT',
      'location'   : 'Hyprground Pickleball S19',
      'player'     : 7,
      'cover_img'  : 'https://pickleball.webx.my/wp-content/uploads/2024/08/Persatuan-Pickleball-Wilayah-Persekutuan-Putrajaya-1024x768.jpg'
    },
    {
      'id'         : '10000',
      'title'      : 'Super Referee Open Court double up GPT',
      'datetime'   : '20th Sep, 8pm - 10pm',
      'requirement': '> 2500 GPT',
      'location'   : 'Hyprground Pickleball S19',
      'player'     : 7,
      'cover_img'  : 'https://pickleball.webx.my/wp-content/uploads/2024/08/Persatuan-Pickleball-Wilayah-Persekutuan-Putrajaya-1024x768.jpg'
    },
    {
      'id'         : '10000',
      'title'      : 'Super Referee Open Court double up GPT',
      'datetime'   : '20th Sep, 8pm - 10pm',
      'requirement': '> 2500 GPT',
      'location'   : 'Hyprground Pickleball S19',
      'player'     : 7,
      'cover_img'  : 'https://pickleball.webx.my/wp-content/uploads/2024/08/Persatuan-Pickleball-Wilayah-Persekutuan-Putrajaya-1024x768.jpg'
    }
  ];

  ngOnInit(): void {

  }


}

