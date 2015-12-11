QUnit.test("decision tree test 1", function(assert){
    var decisionTree = 
        new Case( true, Array(
                      new Case ( function(n){ return n < 0; }, Math.sin ),
                      new Case ( function(n){ return n < 2; }, "0<= n < 2" ),
                      new Case ( true, "Greater than two " )));

    decisionTree.evaluate(1); // evaluates to string "0<= n < 2"
    decisionTree.evaluate(-Math.PI/2); // evaluates to -1
    decisionTree.evaluate(5); // evaluates to string "Greater than two"

    console.log( decisionTree.evaluate(-Math.PI/2));
    assert.ok(decisionTree.evaluate(-Math.PI/2).result == -1, "Passed -pi/2!")
})

/**
Tree (Sort):
            5
     3              8
1       2       7       9

**/
QUnit.test("binary search tree as decision tree test", function(assert){
    var decisionTree = 
        new Case( true, Array(
                      new Case ( function(n){ return n < 5; },  Array(
                                                              new Case ( function(n){ return n < 3; }, "<3"),
                                                              new Case ( function(n){ return n > 3; }, ">3" )
                                                              )),
                      new Case ( function(n){ return n > 5; }, Array(
                                                              new Case ( function(n){ return n < 8; }, "<8"),
                                                              new Case ( function(n){ return n > 8; }, ">8" )
                                                              ))
                      ));

    assert.ok(decisionTree.evaluate(1).result == "<3", "Passed <3!");
    assert.ok(decisionTree.evaluate(10).result == ">8", "Passed >8!");
})