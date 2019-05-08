import { Component, OnInit, Input,  EventEmitter,  Output } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  @Input() selectType;
  @Input() leftItems;
  @Output() changeStatusFromFooterComponent = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  changeSelectType(status) {
    console.log('現在狀態');
    console.log(status);
    // 將footer component事件發送出去
    this.changeStatusFromFooterComponent.emit(status);
  }
}
