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