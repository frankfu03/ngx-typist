import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  @Input()
  public title: string = '';

  @Output()
  runningEvent = new EventEmitter<boolean>();

  public isRunning: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.isRunning = false;
  }

  public typingSwitch(): void {
    this.isRunning = !this.isRunning;
    this.runningEvent.emit(this.isRunning);
  }

  public getButtonName(): string {
    return this.isRunning ? "Stop Typing" : "Start Typing"
  }

}
