import {Component, View, bootstrap} from 'angular2/angular2';

@Component({
	selector: 'angularjs2'
})
@View({
	template: '<h1>Hello {{name}}<h1>'
})

class angularjs2Component {
	name: string;
	constructor() {
		this.name = "World";
	}
}

bootstrap(angularjs2Component);