import {Component, OnInit} from '@angular/core';
import {SpecialOffer} from './specialOffer.model';

@Component({
    selector: 'app-special-offers',
    templateUrl: './special-offers.component.html',
    styleUrls: ['./special-offers.component.css']
})
export class SpecialOffersComponent implements OnInit {

    specialOffers = [
        new SpecialOffer('Digital', '#2E9AFE'),
        new SpecialOffer('Explore the Car Sharing', '#0040FF'),
        new SpecialOffer('3 Month Music Stream', '#01DF3A'),
        new SpecialOffer('Movies & Series', '#1C1C1C'),
        new SpecialOffer('Donate your IPC', '#8A0808'),
    ];


    constructor() {
    }

    ngOnInit() {
    }

}
