export class Config {
	public apiUrl :String = 'http://localhost:3000';

	constructor() {
		if (window.location.host === '127.0.0.1:3001') {
			this.apiUrl = 'http://127.0.0.1:3000';
		}
	}
}