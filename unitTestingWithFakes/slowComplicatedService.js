define(["slowComplicatedService"], function(service){

	function getSomeValue() {
		return "foo";
	}

	return {
		getSomeValue: getSomeValue
	};
});