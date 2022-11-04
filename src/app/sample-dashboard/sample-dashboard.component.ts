import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sample-dashboard',
  templateUrl: './sample-dashboard.component.html',
  styleUrls: ['./sample-dashboard.component.css']
})
export class SampleDashboardComponent implements OnInit {

  @Input()
  public inputText: string = '';

  private totalNumberOfChars: number;
  private numberOfErrorChars: number;
  private index: number;

  constructor() {
    this.totalNumberOfChars = 0;
    this.numberOfErrorChars = 0;
    this.index = 0;
  }

  ngOnInit(): void {
    this.totalNumberOfChars = this.inputText.length;
  }

}
