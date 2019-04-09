import { Component, ViewChild, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('main') main: ElementRef;

  title = 'MY BLOG';

  constructor(private renderer: Renderer2) { }

  skipMain() {
    this.main.nativeElement.focus();
    this.renderer.removeClass(this.main.nativeElement, 'outline-out');
    this.renderer.addClass(this.main.nativeElement, 'outline');
  }
}

