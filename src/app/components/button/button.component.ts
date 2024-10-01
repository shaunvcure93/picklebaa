import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'button-box',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})

export class ButtonBox implements OnInit {
  @Output() onClick: EventEmitter<any> = new EventEmitter<any>();

  @Input() title : string = '';
  @Input() icon : string = '';
  @Input() class : string = '';
  @Input() style : any = null;
  @Input() disabled : boolean = false;
  @Input()
  set loader(value:boolean)
  {
    if(value)
    {
      this.loading = true;
      this.countDown();
    }
    else
    {
      this.loading = false;
      clearTimeout(this.timer)
      this.timer = null;
    }
  }
  
  constructor(

  ) { }

  'timer' : any = null;
  'loading': boolean = false;

  ngOnInit(): void {
    
  }
  countDown()
  {
    this.timer = setTimeout(() =>
    {
      clearTimeout(this.timer)
      this.timer = null;
      this.onClick.emit();
    }, 8100)
  }

}