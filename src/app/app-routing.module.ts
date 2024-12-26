import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogonPage } from './pages/logon/logon.page';
import { RankingPage } from './pages/ranking/ranking.page';
import { ProfilePage } from './pages/profile/profile.page';
import { GamePage } from './pages/game/game.page';
import { EventPage } from './pages/event/event.page';
import { ActivityPage } from './pages/activity/activity.page';
import { AddPage } from './pages/add/add.page';
import { BeforePage } from './pages/before/before.page';
import { SettingPage } from './pages/setting/setting.page';
import { SearchPage } from './pages/search/search.page';

const routes: Routes = [
  {
    path: 'logon',
    component: LogonPage,
    loadChildren: () => import('./pages/logon/logon.module').then(m => m.logonPageModule)
  },
  {
    path: 'ranking',
    component: RankingPage,
    loadChildren: () => import('./pages/ranking/ranking.module').then(m => m.RankingPageModule)
  },
  {
    path: 'search',
    component: SearchPage,
    loadChildren: () => import('./pages/search/search.module').then(m => m.SearchPageModule)
  },
  {
    path: 'profile',
    component: ProfilePage,
    loadChildren: () => import('./pages/profile/profile.module').then(m => m.ProfilePageModule)
  },
  {
    path: 'game',
    component: GamePage,
    loadChildren: () => import('./pages/game/game.module').then(m => m.GamePageModule)
  },
  {
    path: 'event',
    component: EventPage,
    loadChildren: () => import('./pages/event/event.module').then(m => m.EventPageModule)
  },
  {
    path: 'activity',
    component: ActivityPage,
    loadChildren: () => import('./pages/activity/activity.module').then(m => m.ActivityPageModule)
  },
  {
    path: 'add',
    component: AddPage,
    loadChildren: () => import('./pages/add/add.module').then(m => m.AddPageModule)
  },
  {
    path: 'before',
    component: BeforePage,
    loadChildren: () => import('./pages/before/before.module').then(m => m.BeforePageModule)
  },
  {
    path: 'setting',
    component: SettingPage,
    loadChildren: () => import('./pages/setting/setting.module').then(m => m.SettingPageModule)
  },
  { path: '', redirectTo: 'ranking', pathMatch: 'full' },
  { path: '**', redirectTo: 'ranking', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
