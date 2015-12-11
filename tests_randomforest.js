/**
Tree (Sort):
           Petal.Length < 2.45
		  /                  \ 
     "setosa"		Petal.Width >= 2.45         
					/				  \
              "versicolor"        "virginica"

**/
QUnit.test("binary search tree as decision tree test", function(assert){
	

	var decisionTree1 = 
        new Case( true, Array(
                      new Case ( function(observation){ return observation.Petal_Length < 2.45; },  "setosa" ),
                      new Case ( function(observation){ return observation.Petal_Length >= 2.45; }, Array(
                                                              new Case ( function(observation){ return observation.Petal_Width < 1.75 }, "versicolor"),
                                                              new Case ( function(observation){ return observation.Petal_Width >= 1.75 }, "virginica" )
                                                              ))
                      ));
					  
	var decisionTree2 = 
        new Case( true, Array(
                      new Case ( function(observation){ return observation.Petal_Length < 2.45; },  "setosa" ),
                      new Case ( function(observation){ return observation.Petal_Length >= 2.45; }, Array(
                                                              new Case ( function(observation){ return observation.Petal_Width < 1.75 }, "versicolor"),
                                                              new Case ( function(observation){ return observation.Petal_Width >= 1.75 }, "virginica" )
                                                              ))
                      ));
					  
					  
    var decisionTreeBad = 
        new Case( true, Array(
                      new Case ( function(observation){ return observation.Petal_Length < 1.45; },  "setosa" ),
                      new Case ( function(observation){ return observation.Petal_Length >= 1.45; }, Array(
                                                              new Case ( function(observation){ return observation.Petal_Width < 1.75 }, "versicolor"),
                                                              new Case ( function(observation){ return observation.Petal_Width >= 1.75 }, "virginica" )
                                                              ))
                      ));

					  
	var myRandomForest = {
		dt1 : decisionTree1,
		dt2 : decisionTree2,
		dt3 : decisionTreeBad	
	}

	
	// TESTDATA	
					  
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
	
    assert.ok(evaluateRandomForest(myRandomForest, dataset[0]) == "setosa", "Correctly classified as setosa!");
	assert.ok(evaluateRandomForest(myRandomForest, dataset[1]) == "versicolor", "Correctly classified as versicolor!");
	assert.ok(evaluateRandomForest(myRandomForest, dataset[2]) == "virginica", "Correctly classified as virginica!");
})