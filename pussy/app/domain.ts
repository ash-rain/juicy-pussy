export class Domain {
	id: number;
	name: string;
	notes: string;

	constructor(model: any) {
		if (model) {
			this.id = model.id;
			this.name = model.name;
			this.notes = model.notes;
		}
	}
}