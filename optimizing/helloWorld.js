define(["moment"], function(moment){

	function sayHello() {
		console.log("Hi! The time is currently " + moment().format("LLLL"));
	}

	return {
		sayHello: sayHello
	};
});