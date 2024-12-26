import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GlobalStore } from '../../service/global.service';
import PlayerList from '../../../assets/json/players.json';


@Component({
  templateUrl: './ranking.page.html',
  styleUrls: ['./ranking.page.scss']
})
export class RankingPage implements OnInit {

  'tab' : string = 'pmr';
  'topData' : any = [];
  'otherData': any = [];
  'searchValue' : string = '';
  'loading' : boolean = false;
  'searchData': any = [];

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

  constructor(
    private route: ActivatedRoute,
    public router: Router,
    public global: GlobalStore
  ) { }

  ngOnInit(): void {

    let topArr : any = [];
    let otherArr : any = [];
    this.sampleData.map((ele:any, index:number) =>
    {
      let dataObj : any = JSON.parse(JSON.stringify(ele));
      dataObj.pmr = this.global.calculatePMR(ele.gpt);
      dataObj.rank = index + 1;
      if(index < 3)
      {
        topArr.push(dataObj);
      }
      else
      {
        otherArr.push(dataObj);
      }
    });
    this.topData = topArr;
    this.otherData = otherArr;
  }
  
  startSearch()
  {
    this.loading = true;
    setTimeout(() =>
    {
      this.loading = false;
      this.searchData = this.sampleData;
    }, 1200)
  }


}

