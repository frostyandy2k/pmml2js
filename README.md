# PMML to Javascript (pmml2js)

This projects aims on allowing PMML to JavaScript Code transformation so that you can run it in your browser.

## Decision Trees

The decision tree engine was created by artistoex.

Code Attribution
Author: artistoex
Source: http://stackoverflow.com/questions/8368698/how-to-implement-a-decision-tree-in-javascript-looking-for-a-better-solution-th/8369235#8369235
Date:  Dec 3 '11 at 16:50
SO License: CC-Wiki
No other License Mentioned (Checked on Dec. 11 2015)

Notes (Andrei Miclaus):
Depth First Search through the tree.
Supports non-binary decision trees.

### Usage Examples

```
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
```

Examples are also available as QUnit tests.