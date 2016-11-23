import {Component, OnInit, ElementRef} from "@angular/core";
//declare var $:any
declare var $: JQueryStatic;

@Component({
    selector: 'jq',
    template: `
        <p id="description"></p>

        <button>Click</button>
    `
})
export class JQComponent implements OnInit {

    constructor(private elRef: ElementRef)
    {

    }

    ngOnInit() {

        $("#description").text("jquery");

        
        $(this.elRef.nativeElement).find('#description').text("jquery");

         $(this.elRef.nativeElement).find('button').on('click', function() {
           alert('It works!');
        });

    }
}
