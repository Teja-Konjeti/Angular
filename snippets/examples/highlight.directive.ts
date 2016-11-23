import { Directive, ElementRef, Component, HostListener, Input, Renderer } from '@angular/core';

@Directive({ selector: '[myHighlight]' })
export class HighlightDirective {
    constructor(private el: ElementRef, private renderer: Renderer) {
       renderer.setElementStyle(el.nativeElement, 'backgroundColor', 'yellow');
    }

    @HostListener('mouseenter') onMouseEnter() {
        //this.highlight('green');
        this.highlight(this.highlightColor || this._defaultColor);
    }

    @HostListener('mouseleave') onMouseLeave() {
        this.highlight(null);
    }

    private highlight(color: string) {
        this.renderer.setElementStyle(this.el.nativeElement, 'backgroundColor', color);
    }

   
     @Input('myHighlight') 
     highlightColor: string;

   private _defaultColor = 'red';

}


@Component({
    selector: 'hightlight-component',
    template: `
        <p [myHighlight]="'blue'">
            This paragraph is powered by Angular Attribute directive
        </p>
    `
})
export class HighlightComponent {
    
}