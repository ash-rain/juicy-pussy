import {Component} from 'angular2/core';
import {OnInit} from 'angular2/core';
import {Domain} from './domain';
import {DomainDetailsComponent} from './domain-details.component';
import {PussyService} from './pussy.service';

@Component({
	selector: 'pussy',
	template: `
		<h1>{{title}}</h1>
		<ul class="domains">
			<li *ngFor="#domain of domains"
				[class.selected]="domain === selectedDomain"
				(click)="onSelect(domain)">
				<span class="badge">{{domain.id}}</span> {{domain.name}}
			</li>
		</ul>
		<domain-details [domain]="selectedDomain"></domain-details>
	`,
	styles: [`
	.selected {
		background-color: #CFD8DC !important;
		color: white;
	}
	.domains {
		margin: 0 0 2em 0;
		list-style-type: none;
		padding: 0;
		width: 10em;
	}
	.domains li {
		cursor: pointer;
		position: relative;
		left: 0;
		background-color: #EEE;
		margin: .5em;
		padding: .3em 0;
		height: 1.6em;
		border-radius: 4px;
	}
	.domains li.selected:hover {
		background-color: #BBD8DC !important;
		color: white;
	}
	.domains li:hover {
		color: #607D8B;
		background-color: #DDD;
		left: .1em;
	}
		.domains .text {
		position: relative;
		top: -3px;
	}
	.domains .badge {
		display: inline-block;
		font-size: small;
		color: white;
		padding: 0.8em 0.7em 0 0.7em;
		background-color: #607D8B;
		line-height: 1em;
		position: relative;
		left: -1px;
		top: -4px;
		height: 1.8em;
		margin-right: .8em;
		border-radius: 4px 0 0 4px;
	}
	`],
	directives: [DomainDetailsComponent],
	providers: [PussyService]
})

export class AppComponent implements OnInit {
	public title = 'Juicy Pussy';
	public domains :Domain[];
	public selectedDomain :Domain;
	constructor(private _pussyService: PussyService) { }
	ngOnInit() {
		this.getDomains();
		this.title += ' - ready.';
	}
	getDomains() {
		this._pussyService.getDomains().then(domains => this.domains = domains);
	}
	onSelect(domain: Domain) {
		if(domain == this.selectedDomain) domain = null;
		this.selectedDomain = domain;
	}
}