import { Component, Input, OnInit } from '@angular/core';
import { Key } from '../shared/global/key';
import { Utils } from '../shared/global/utils';

@Component({
  selector: 'app-sample-dashboard',
  templateUrl: './sample-dashboard.component.html',
  styleUrls: ['./sample-dashboard.component.css']
})
export class SampleDashboardComponent implements OnInit {

  @Input()
  public inputText: string = '';

  @Input()
  public errorIndexes: number[] = [];


  constructor() {
  }

  ngOnInit(): void {
  }

  public formatText(text: string): string {
    return Utils.highlightText(text, this.errorIndexes);
  }
}
