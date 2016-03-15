import {DOMAINS} from './mock-domains';
import {Domain} from './domain';
import {Injectable} from 'angular2/core';

@Injectable()

export class PussyService {
	getDomains() {
		return Promise.resolve(DOMAINS);
	}
	getDomainsSlow() {
		return new Promise<Domain[]>(resolve =>
			setTimeout(() => resolve(DOMAINS), 2000)
		);
	}
	getDomain(id: number) {
		return Promise.resolve(DOMAINS).then(
			domains => domains.filter(domain => domain.id === id)[0]
		);
	}
}