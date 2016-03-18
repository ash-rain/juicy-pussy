import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';
import { Domain } from './domain';
import { PussyService } from './pussy.service';

@Component({
  selector: 'dashboard',
  templateUrl: 'app/dashboard.component.html'
})

export class DashboardComponent implements OnInit {
  domains: Domain[] = [];
  constructor(
    private _router: Router,
    private _pussyService: PussyService) {
  }
  ngOnInit() {
    this._pussyService.getDomains()
      .subscribe(domains => this.domains = domains);
  }
  gotoDetails(domain: Domain) {
    let link = ['DomainDetails', { id: domain.id }];
    this._router.navigate(link);
  }
}