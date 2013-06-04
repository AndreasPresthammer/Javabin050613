asyncTest("fetchSomeValue", function() {
	define("standinService", [], function() {
		return {
			getSomeValue: function() {
				return "some value";
			}
		};
	});
	
	require.config({
		map: {
			"*": {
				"slowComplicatedService": "standinService"
			}
		}
	});

	require(["serviceClient"], function(serviceClient) {
		var result = serviceClient.fetchSomeValue();
		
		strictEqual(result, "some value");
		
		start();
	});
});