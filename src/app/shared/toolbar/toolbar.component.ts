import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  @Input()
  public title: string = '';

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  public gotoPage(path: string): void {
    this.router.navigate([path]);
  }
}
