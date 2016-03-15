import { Component } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import { PussyService } from './pussy.service';
import { DashboardComponent } from './dashboard.component';
import { DomainsComponent } from './domains.component';
import { DomainDetailsComponent } from './domain-details.component';

@Component({
	selector: 'pussy',
	templateUrl: 'app/app.component.html',
	styleUrls: ['app/app.component.css'],
	directives: [ROUTER_DIRECTIVES],
	providers: [
		ROUTER_PROVIDERS,
		PussyService
	]
})

@RouteConfig([
	{
		path: '/',
		name: 'Dashboard',
		component: DashboardComponent,
		useAsDefault: true
	}, {
		path: '/domains',
		name: 'Domains',
		component: DomainsComponent
	}, {
		path: '/domain/:id',
		name: 'DomainDetails',
		component: DomainDetailsComponent
	}
])

export class AppComponent {
	title = 'Juicy Pussy';
}