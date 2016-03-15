import {Component} from 'angular2/core';
import {Domain} from './domain';

@Component({
	selector: 'domain-details',
	inputs: ['domain'],
	template: `
	<div *ngIf="domain">
		<h2>{{domain.name}} details!</h2>
		<div><label>ID: </label>{{domain.id}}</div>
		<div>
			<label>Name: </label>
			<input [(ngModel)]="domain.name" placeholder="Name"/>
		</div>
	</div>
	`
})

export class DomainDetailsComponent {
	domain: Domain;
}