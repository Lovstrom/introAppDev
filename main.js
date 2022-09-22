/*
var x=50;


var i = 1;
var list = document.getElementById("list");
var add = document.getElementById('addElem');
add.addEventListener('click', function() {
  var itemsByTagName = document.getElementsByTagName("li");
  list.innerHTML += '<li>item ' + i++ + '</li>'
});

function myFunction() {
    x= Math.floor(Math.random() * 500);
  
    document.getElementById("myDIV").style.right = `${x}px`;

         
  }
*/

/*
function myFunction1() {
   

  var ul = document.getElementById("list");
  var li = document.createElement("li");
  li.appendChild(document.createTextNode("Four"));
  li.setAttribute("id", "element4"); // added line
  ul.appendChild(li);
  /*alert(li.id);
}

var i = 1;
var list = document.getElementById("list");
var add = document.getElementById('addElem');

add.addEventListener('click', function() {
  var itemsByTagName = document.getElementsByTagName("li");
  list.innerHTML += '<li>item ' + i++ + '</li>'
});


*/


var i=1;    
function myFunction() {

  // Create an "li" node:
  const node = document.createElement("li");
  
  // Create a text node:
  const textnode = document.createTextNode("Water "+i);
  i=i+1;

  // Append the text node to the "li" node:
  node.appendChild(textnode);
  
  // Append the "li" node to the list:
  document.getElementById("myList").appendChild(node);
/*alert("dickeater");*/
  };


