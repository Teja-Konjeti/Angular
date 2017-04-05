import { Directive, 
        ElementRef, 
        Renderer,
        HostListener, 
        Input,

        Output,
        EventEmitter
         } from '@angular/core';

@Directive({ selector: '[highlight]' })
export class HighlightDirective {

    constructor(private el: ElementRef, 
                private renderer: Renderer) {

       this.renderer.setElementStyle(this.el.nativeElement, 
                                    'backgroundColor', 'yellow');
    }

    @HostListener("mouseenter", ['$event'])
    mouseEnter(event: any) {
        this.renderer.setElementStyle(this.el.nativeElement, 
                                    'backgroundColor',  this.color);
        
        this.highlightEvent.emit("highlight from directive");
        console.log(event);
    }


    @HostListener("mouseleave")
    mouseLeave(event: any) {
        this.renderer.setElementStyle(this.el.nativeElement, 
                                    'backgroundColor', 'yellow');
        
        //this.el.nativeElement.append( "<h2>Text</h2>");
  
    }

    //TODO: Check to make Output for highlight
    //@Input("highlight")
    color: string = "green";

    @Output("highlight")
    highlightEvent: EventEmitter<any> = new EventEmitter<any>();

    //TODO: One example for EventEmitter
}

 