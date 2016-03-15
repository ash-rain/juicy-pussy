import {DOMAINS} from './mock-domains';
import {Domain} from './domain';
import {Injectable} from 'angular2/core';

@Injectable()

export class PussyService {
	getDomains1() {
		return Promise.resolve(DOMAINS);
	}
	getDomains() {
		return new Promise<Domain[]>(resolve =>
			setTimeout(() => resolve(DOMAINS), 2000)
		);
	}
}