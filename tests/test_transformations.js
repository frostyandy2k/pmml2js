QUnit.test("decision tree test 1", function(assert){
  
    var generated_code = transform("http://localhost:3000/models/test_rpart.xml", "http://localhost:3000/pmml2js_decision_tree.xsl")

    var decisionTree = eval(generated_code);

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

/** 
Code from http://www.w3schools.com/xsl/xsl_client.asp 
Copyright 1999-2015 by Refsnes Data. All Rights Reserved.
**/
function loadXMLDoc(filename)
{
  if (window.ActiveXObject)
    {
    xhttp = new ActiveXObject("Msxml2.XMLHTTP");
    }
  else 
    {
    xhttp = new XMLHttpRequest();
    }
  xhttp.open("GET", filename, false);
  try {xhttp.responseType = "msxml-document"} catch(err) {} // Helping IE11
  xhttp.send("");
  return xhttp.responseXML;
}

function transform(xmlfile, xslfile)
{
  xml = loadXMLDoc(xmlfile);
  xsl = loadXMLDoc(xslfile);
  // code for IE
  if (window.ActiveXObject || xhttp.responseType == "msxml-document")
    {
    ex = xml.transformNode(xsl);
    return ex;
    // document.getElementById("results").innerHTML = ex;
    }
  // code for Chrome, Firefox, Opera, etc.
  else if (document.implementation && document.implementation.createDocument)
    {
    xsltProcessor = new XSLTProcessor();
    xsltProcessor.importStylesheet(xsl);
    resultDocument = xsltProcessor.transformToFragment(xml, document);
    return resultDocument;
    // document.getElementById("results").appendChild(resultDocument);
    }
}