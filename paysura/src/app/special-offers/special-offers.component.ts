import {Component, OnInit} from '@angular/core';
import {SpecialOffer} from './specialOffer.model';

@Component({
    selector: 'app-special-offers',
    templateUrl: './special-offers.component.html',
    styleUrls: ['./special-offers.component.css']
})
export class SpecialOffersComponent implements OnInit {

    specialOffers = [
        new SpecialOffer('Digital', '#000000'),
        new SpecialOffer('Explore the Car Sharing', '#000000'),
        new SpecialOffer('3 Month Music Stream', '#000000'),
        new SpecialOffer('Movies & Series', '#000000'),
        new SpecialOffer('Donate your IPC', '#000000'),
    ];


    constructor() {
    }

    ngOnInit() {
    }

}
