/// <reference path="../typings/mocha/mocha.d.ts"/>

import {MyObject} from "../lib/myobj";

describe("Test myobj", ()=> {
	
	it("test getName", (done) => {
		var myObj = new MyObject('from test');
		console.log(myObj.getName());
		done();
	});
});