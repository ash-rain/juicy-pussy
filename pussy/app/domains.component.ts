import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';
import { Domain } from './domain';
import { DomainDetailsComponent } from './domain-details.component';
import { PussyService } from './pussy.service';

@Component({
	selector: 'domains',
	templateUrl: 'app/domains.component.html',
	directives: [DomainDetailsComponent]
})

export class DomainsComponent implements OnInit {
	public domains :Domain[];
	public selectedDomain :Domain;
	constructor(
		private _router: Router,
		private _pussyService: PussyService) {
	}
	ngOnInit() {
		this.getDomains();
	}
	getDomains() {
		this._pussyService.getDomains()
			.subscribe(domains => this.domains = domains);
	}
	onSelect(domain: Domain) {
		if(domain == this.selectedDomain) domain = null;
		this.selectedDomain = domain;
	}
	gotoDetails() {
		this._router.navigate(['DomainDetails', { id: this.selectedDomain.id }]);
	}
}