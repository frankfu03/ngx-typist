import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public appTitle = 'ngx typist';
  public isRunning = false;

  public inputText = 'Life is good.';
  public inputText1 = `As always, I would recommend you create a new module only for the directive.
  And If you really properly manage your codebase, you can consider creating it as a library
  within the project as well.
  
  The first thing that we need is the Inputs in our directive. We only actually need the search
  term, but I have added some extra functionalities to our directive. We can provide customClasses
  for the highlighted text, and another flag "caseSensitive" which will decide whether we have
  to match the case.

  Next up we add a HostBinding ( ref ) which can be used to add value to a property on the host element.

  To get access to the host element, we inject ElementRef in the constructor, and also since we
  are going to be playing around with direct HTML manipulation, I have also injected DomSanitizer
  ( ref ) to sanitize the HTML before we inject it into the element.

  So now we move on to the actual logic which we can write in the ngOnChanges ( ref ) lifecycle hook.
  So when our search term changes, we can update the highlights. The interesting part is:
  `;

  public toggleTyping(running: boolean): void {
    this.isRunning = running;
  }
}
