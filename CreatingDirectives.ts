import { Directive, Renderer2, OnInit, ElementRef } from '@angular/core';

@Directive({
    // This use of selector allows the directive to be used as an attribute inside an html element
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{
    // Private keyword sets elRef and renderer as class attributes that can be used on ngOnInit.
  constructor(private elRef: ElementRef,private renderer: Renderer2) { }

  ngOnInit() {
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
  }

}
