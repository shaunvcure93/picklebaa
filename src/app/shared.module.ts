import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// module
// import { SwiperModule } from 'swiper/angular';

// component
import { InputBox } from './components/input/input.component';
import { ButtonBox } from './components/button/button.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    // SwiperModule
  ],
  exports: [
    FormsModule,
    // SwiperModule,
    InputBox,
    ButtonBox
  ],
  declarations: [
    InputBox,
    ButtonBox
  ],
  providers: [
  ]
})
export class SharedModule { }
