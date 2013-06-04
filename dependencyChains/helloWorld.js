define(["whatTosay"], function(whatToSay){
	function sayHello() {
		console.log(whatToSay);
	}

	return {
		sayHello: sayHello
	};
});