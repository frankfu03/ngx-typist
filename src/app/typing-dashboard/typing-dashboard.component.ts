import { Component, EventEmitter,
         HostListener, Input, OnInit } from '@angular/core';
import { Key } from './../shared/key';
import { IgnoreKey} from './../shared/ignore-key';


@Component({
  selector: 'app-typing-dashboard',
  templateUrl: './typing-dashboard.component.html',
  styleUrls: ['./typing-dashboard.component.css']
})
export class TypingDashboardComponent implements OnInit {

  @Input()
  public inputText: string = '';

  @Input()
  public isRunning: boolean = false;

  public typedText: string;
  public wpm: number;
  public numberOfErrorChars: number;
  public index: number;

  private startTime: number;
  private elapsedTime: number;

  constructor() {
    this.wpm = 0;
    this.elapsedTime = 0;
    this.numberOfErrorChars = 0;
    this.startTime = 0;
    this.index = 0;
    this.typedText = '';
  }

  @HostListener('window:keydown', ['$event'])
  onTyping(event: KeyboardEvent): void {
    event.preventDefault();
    event.stopPropagation();
    if (!this.isRunning || this.index >= this.inputText.length) {
      return;
    } else if (event.key === Key.Escape) {
      this.stopTiming();
    } else if (event.key === Key.Backspace) {
      this.index --;
      this.typedText = this.typedText.substring(0, this.index);
    } else if (Object.keys(IgnoreKey).includes(event.key)) {
      return;
    } else {
      // Start timing from the typing of the first character
      if (this.index === 0) {
        this.startTiming();
      }

      const keyTyped = event.key;
      if (keyTyped !== this.inputText.charAt(this.index)) {
        this.numberOfErrorChars ++;
      } else if (keyTyped === Key.Enter) {
        this.stopTiming();
      } else {
        this.typedText += keyTyped;
        this.index ++;
      }

      // Automatically stop timing if reaching the end of sample text
      if (this.index === this.inputText.length) {
        this.stopTiming();
      }
    }
  }

  ngOnInit(): void {
    this.elapsedTime = 0;
  }

  public startTiming(): void {
    this.elapsedTime = 0;
    this.startTime = new Date().getTime();
    this.wpm = 0;
    this.index = 0;
    this.numberOfErrorChars = 0;
    this.typedText = '';
  }

  public stopTiming(): void {
    const stopTime = new Date().getTime();
    this.elapsedTime += stopTime - this.startTime;
    this.computeTypingSpeed();
  }

  public pauseTiming(): void {
    const stopTime = new Date().getTime();
    this.elapsedTime += stopTime - this.startTime;
    this.startTime = 0;
  }

  public resumeTiming(): void {
    this.startTime = new Date().getTime();
  }

  /**
   * Returns the number of words per minutes as typing speed.
   * 
   * Assume that a word has a average of 5 characters.
   */
  private computeTypingSpeed(): void {
    const CHARS_PER_WORD = 5;
    const words = this.typedText.length / CHARS_PER_WORD;
    const minutes = this.elapsedTime / (1000 * 60);
    this.wpm = Math.round(words / minutes);
  }
}
