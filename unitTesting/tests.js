asyncTest("add", function() {
	require(["calculator"], function(calculator) {
		var result = calculator.add(5,7);
		
		strictEqual(result, 12);
		
		start();
	});
});

asyncTest("subtract", function() {
	require(["calculator"], function(calculator) {
		var result = calculator.subtract(5,7);
		
		strictEqual(result, -2);
		
		start();
	});
});