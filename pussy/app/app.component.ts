import { Component } from 'angular2/core';
import { HTTP_PROVIDERS } from 'angular2/http';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import { PussyService } from './pussy.service';
import { DashboardComponent } from './dashboard.component';
import { DomainsComponent } from './domains.component';
import { DomainDetailsComponent } from './domain-details.component';

@Component({
	selector: 'pussy',
	templateUrl: 'app/app.component.html',
	directives: [ROUTER_DIRECTIVES],
	providers: [
    	HTTP_PROVIDERS,
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
		path: '/domains/:id',
		name: 'DomainDetails',
		component: DomainDetailsComponent
	}
])

export class AppComponent {
	title = 'Juicy Pussy';
}