import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-timer',
  template: '<span class="timer">{{ timeString }}</span>',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {

  @Output()
  public timeElapsedEvent: EventEmitter<number>;

  public timeString: string;

  private timer: NodeJS.Timer | undefined;
  private startTime: number;
  private elapsedTime: number;

  constructor() {
    this.timeElapsedEvent = new EventEmitter<number>();
    this.timeString = '00:00:00';
    this.elapsedTime = 0;
    this.startTime = 0;
  }

  ngOnInit(): void {
    this.timeString = '00:00:00';
    this.elapsedTime = 0;
  }

  public getTimeElapsed(): number {
    return this.elapsedTime;
  }

  public start(): void {
    this.elapsedTime = 0;
    this.resume();
  }

  public stop(): void {
    clearInterval(this.timer);
    const stopTime = new Date().getTime();
    this.elapsedTime +=  stopTime - this.startTime;
    this.timeElapsedEvent.emit(this.elapsedTime);
  }

  public pause(): void {
    clearInterval(this.timer);
    const stopTime = new Date().getTime();
    this.elapsedTime += stopTime - this.startTime;
    this.startTime = 0;
  }

  public resume(): void {
    this.startTime = new Date().getTime();
    this.timer = setInterval(() => {
      const stopTime = new Date().getTime();
      const totalSeconds = Math.floor((stopTime - this.startTime) / 1000);
      const hours = Math.floor(totalSeconds / 3600);
      const minutes = Math.floor((totalSeconds % 3600) / 60);
      const seconds = totalSeconds % 60;
      this.timeString = String(hours).padStart(2, '0') + ':'
                      + String(minutes).padStart(2, '0') + ':'
                      + String(seconds).padStart(2, '0');
    }, 1000);
  }
}
