import { Component, EventEmitter, HostListener,
         Input, OnInit, Output, ViewChild } from '@angular/core';
import { Key } from '../shared/global/key';
import { IgnoreKey} from '../shared/global/ignore-key';
import { TimerComponent } from '../timer/timer.component';
import { Utils } from '../shared/global/utils';


@Component({
  selector: 'app-typing-dashboard',
  templateUrl: './typing-dashboard.component.html',
  styleUrls: ['./typing-dashboard.component.css']
})
export class TypingDashboardComponent implements OnInit {

  @Input()
  public inputText: string = '';

  public isRunning: boolean = false;

  @Output()
  errorIndexEvent = new EventEmitter<number[]>();

  @ViewChild(TimerComponent)
  private timerComponent!: TimerComponent;

  public typedText: string;
  public wpm: number;
  public errorChars: Array<string>;
  public errorIndexes: Array<number>;
  public index: number;

  constructor() {
    this.wpm = 0;
    this.errorChars = new Array<string>();
    this.errorIndexes = new Array<number>();
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
      this.quitTyping();
    } else if (event.key === Key.Backspace) {
      this.index --;
      this.typedText = this.typedText.substring(0, this.index);
      if (this.errorIndexes && this.errorIndexes[this.errorIndexes.length - 1] === this.index) {
        this.errorIndexes.pop();
      }
    } else if (Object.keys(IgnoreKey).includes(event.key)) {
      return;
    } else {
      // Start timing from the typing of the first character
      if (this.index === 0) {
        this.startTyping();
      }

      const char = event.key;
      this.typedText += char;
      if (char !== this.inputText.charAt(this.index)) {
        this.errorChars.push(char);
        this.errorIndexes.push(this.index);
        this.errorIndexEvent.emit(this.errorIndexes);
      }
      this.index ++;

      // Stop timing if reaching the end of the sample text
      if (this.index === this.inputText.length) {
        this.quitTyping();
      }
    }
  }

  ngOnInit(): void {
  }

  public typingSwitch(): void {
    this.isRunning = !this.isRunning;
  }

  public getButtonName(): string {
    return this.isRunning ? "Stop Typing" : "Start Typing"
  }

  public startTyping(): void {
    this.timerComponent.start();
    this.wpm = 0;
    this.index = 0;
    this.errorChars.length = 0;
    this.errorIndexes.length = 0;
    this.typedText = '';
  }

  public quitTyping(): void {
    this.timerComponent.stop();
    const elapsedTime = this.timerComponent.getTimeElapsed();
    this.computeTypingSpeed(elapsedTime);
  }

  public formatText(text: string): string {
    return Utils.highlightText(text, this.errorIndexes);
  }

  /**
   * Computes the number of words per minutes as typing speed.
   * 
   * Assume that a word has a average of 5 characters.
   */
  private computeTypingSpeed(elapsedTime: number): void {
    const CHARS_PER_WORD = 5;
    const words = this.typedText.length / CHARS_PER_WORD;
    const minutes = elapsedTime / (1000 * 60);
    this.wpm = Math.round(words / minutes);
  }
}
