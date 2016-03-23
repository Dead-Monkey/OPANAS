import {Component, OnInit} from 'angular2/core';
import {CalendarService, Day} from '../../services/calenadar/calendar.service';
import {UserService} from '../../services/user/user.service';
import {UserCalculatorComponent} from '../user-calculator/user-calculator.component';
import {UserDetailsComponent} from '../user-details/user-details.component';
import {TranslateService, TranslatePipe} from '../../shared/services/translate/translate.service';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';


@Component({
    selector: 'op-user',
    directives: [ROUTER_DIRECTIVES],
    providers: [],
    pipes: [TranslatePipe],
    styles: [`
    `],
    template: `
<router-outlet></router-outlet>
    `
})
@RouteConfig([
    { path: '/details', name: 'UserDetailsComponent', component: UserDetailsComponent, useAsDefault: true },
    { path: '/calculator', name: 'UserCalculator', component: UserCalculatorComponent},
])
export class UserComponent implements OnInit {
    constructor() { }
    ngOnInit() {
    }
}
