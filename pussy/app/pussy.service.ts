import { Injectable } from 'angular2/core';
import { Http, Response } from 'angular2/http';
import { Domain } from './domain';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx'

@Injectable()

export class PussyService {
	private handleError(error: Response) {
		console.error(error);
		return Observable.throw(error.json().error || 'Server error');
	}
	private _apiUrl(path) {
		switch(process.env.NODE_ENV) {
			case 'azure': return 'http://juicypussy.cloudapp.net:3000/api/' + path;
		}
		return 'http://localhost:3000/api/' + path;
	}
	private _apiCallGet(path) {
		return this.http.get(this._apiUrl(path));
	}

	constructor (private http: Http) {}

	getDomains() {
		return this._apiCallGet('Domains')
			.map(res => <Domain[]> res.json())
			.catch(this.handleError);
	}
	getDomain(id: any) {
		return this._apiCallGet('Domains/' + id)
			.map(res => <Domain> res.json())
			.catch(this.handleError);
	}
}