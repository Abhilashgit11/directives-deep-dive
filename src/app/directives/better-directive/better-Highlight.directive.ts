import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{
  @Input() defaultColor : string = 'transparent';
  @Input() highlightColor : string = 'magenta';
  // @Input('appBetterHighlight') highlightColor : string = 'magenta';
  @HostBinding('style.backgroundColor') backgroundColor !: string;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    this.backgroundColor = this.defaultColor;
    // this.renderer.setStyle(this.elementRef.nativeElement, 'backgroundColor', 'magenta');
  }

  @HostListener('mouseenter') mouseOver(eventData: Event) {
    // this.renderer.setStyle(this.elementRef.nativeElement, 'backgroundColor', 'magenta');
    // this.backgroundColor = 'magenta';
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseLeave(eventData: Event) {
    // this.renderer.setStyle(this.elementRef.nativeElement, 'backgroundColor', 'transparent');
    // this.backgroundColor = 'transparent';
    this.backgroundColor = this.defaultColor;
  }
}
