define(["slowComplicatedService"], function(service){

	function fetchSomeValue() {
		return service.getSomeValue();
	}

	return {
		fetchSomeValue: fetchSomeValue
	};
});