/**
Tree (Sort):
           Petal.Length < 2.45
		  /                  \ 
     "setosa"		Petal.Width >= 2.45         
					/				  \
              "versicolor"        "virginica"

**/
QUnit.test("binary search tree as decision tree test", function(assert){
    var decisionTree = 
        new Case( true, Array(
                      new Case ( function(observation){ return observation.Petal_Length < 2.45; },  "setosa" ),
                      new Case ( function(observation){ return observation.Petal_Length >= 2.45; }, Array(
                                                              new Case ( function(observation){ return observation.Petal_Width < 1.75 }, "versicolor"),
                                                              new Case ( function(observation){ return observation.Petal_Width >= 1.75 }, "virginica" )
                                                              ))
                      ));

	dataset = new Array()
	// setosa test object
	dataset[0] = {
        Petal_Length : "2",
        Petal_Width : "3",
        Sepal_Length : "5",
		Sepal_Width : "13"
	}
	
	// versicolor test object
	dataset[1] = {
        Petal_Length : "3",
        Petal_Width : "1.5",
        Sepal_Length : "5",
		Sepal_Width : "13"
	}

	// virginica test object
	dataset[2] = {
        Petal_Length : "2.45",
        Petal_Width : "1.75",
        Sepal_Length : "5",
		Sepal_Width : "13"
	}

	
    assert.ok(decisionTree.evaluate(dataset[0]).result == "setosa", "Correctly classified as setosa!");
	assert.ok(decisionTree.evaluate(dataset[1]).result == "versicolor", "Correctly classified as versicolor!");
	assert.ok(decisionTree.evaluate(dataset[2]).result == "virginica", "Correctly classified as virginica!");
})