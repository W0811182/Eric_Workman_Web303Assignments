
//For JSON data format, uncomment from next line to xml.send()
// var xjson = new XMLHttpRequest
// xjson.onload = function(){
//   var jsonObj = JSON.parse(this.responseText);
//   let el = document.getElementById("ajax-data-wrapper");
//   el.innerHTML= jsonObj.OntarioCities[0].name;
// }
// xjson.open("GET",'temp1.json',true);
// xjson.send();



// For XML data format, uncomment from next line to xml.send()
// var xml = new XMLHttpRequest();
// xml.onload = function() {
//   var xmlDoc = xml.responseXML;
//   var x = xmlDoc.getElementsByTagName("event");
//   console.log(x[0].getElementsByTagName("location")[0].childNodes[0].nodeValue);
// }
// xml.open("GET",'CSS/test.xml');
// xml.send();




// For HTML data format, uncomment from next line to xml.send()
// var xhr = new XMLHttpRequest;
// xhr.open('GET','test1.html',true);
// xhr.onload = function()
// {
//  if(this.status=== 200)
//  {
//    let el = document.getElementById("ajax-data-wrapper");
  
//    el.innerHTML=xhr.responseText;
 
//  }
// }   
//  xhr.send();
