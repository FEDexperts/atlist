import {Component, Inject, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

    constructor(@Inject('PAGE_TITLE') public title) {
    }

    ngOnInit() {
    }

}
