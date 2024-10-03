import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { GlobalStore } from '../../service/global.service';

@Component({
  selector: 'input-box',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})

export class InputBox implements OnInit {
  @Output() onInput: EventEmitter<any> = new EventEmitter<any>();

  @Input() type : string = 'text';
  @Input() class : string = '';
  @Input() icon : string = '';
  @Input() title : string = '';
  @Input() border : number = 1;
  @Input() disabled : boolean = false;
  @Input() readonly : boolean = false;
  @Input()
  set value(value:any) 
  {
    if(this.type === 'text')
    {
      this.valueText = value;
    }
    if(this.type === 'select')
    {
      this.valueSelect = value;
    }
    if(this.type === 'switch')
    {
      this.valueSwitch = value;
    }
  }
  
  constructor(
    public global: GlobalStore
  ) {
  }

  // global

  // text
  'valueText' : string = '';

  // password
  'valuePassword' : string = '';
  'showPassword' : boolean = false;

  // upload
  'valueUpload' : string = '';

  // textarea
  'valueTextarea' : string = '';

  // select
  'valueSelect' : string = '';

  // switch
  'valueSwitch' : boolean = false;

  ngOnInit(): void {

  }

  // text
  onTextInput(event:any)
  {
    this.valueText = event.target.value;
    this.onInput.emit(event.target.value);
  }

  // password
  onPasswordInput(event:any)
  {
    this.valuePassword = event.target.value;
    this.onInput.emit(event.target.value);
  }

  // upload
  onUploadInput(event:any)
  {
    this.onInput.emit(event.target.files[0]);
  }

  // textarea
  onTextareaInput(event:any)
  {
    this.valueTextarea = event.target.value;
    this.onInput.emit(event.target.value);
  }

  // select
  onSelectInput()
  {
    this.onInput.emit();
  }

  // switch
  onSwitchInput()
  {
    this.onInput.emit(this.valueSwitch);
  }


}