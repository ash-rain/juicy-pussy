import { Component, OnInit } from 'angular2/core';
import { RouteParams } from 'angular2/router';
import { Domain } from './domain';
import { PussyService } from './pussy.service';

@Component({
	selector: 'domain-details',
	templateUrl: 'app/domain-details.component.html'
})

export class DomainDetailsComponent {
	domain: Domain;
	constructor(
		private _pussyService: PussyService,
		private _routeParams: RouteParams) {
	}
	ngOnInit() {
		let id = this._routeParams.get('id');
		this._pussyService.getDomain(id)
			.subscribe(domain => this.domain = domain);
	}
	goBack() {
		window.history.back();
	}
}