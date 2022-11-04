import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {

  @Input()
  public isRunning: boolean;

  constructor() {
    this.isRunning = false;
   }

  ngOnInit(): void {
  }

}
