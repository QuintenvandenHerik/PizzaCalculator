

var alltoppings = [
	{name:"Artichoke Hearts", price: 2.50},
	{name:"Capers", price: 1.00},
	{name:"Crème Fraîche", price: 1.00},
	{name:"Eggplant", price: 0.50},
	{name:"Endive", price: 0.20},
	{name:"Fresh Tomato", price: 1.00},
	{name:"Mushrooms", price: 0.80},
	{name:"Olive", price: 1.20},
	{name:"Onion", price: 0.20},
	{name:"Paprika", price: 0.50},
	{name:"Pineapple", price: 0.50},
	{name:"Pumpkin", price: 1.50},
	{name:"Spinach", price: 0.20},
	{name:"Sun Dried Tomato", price: 0.80},
	{name:"Tomato Sauce", price: 0.10},
	{name:"Basil", price: 0.75},
	{name:"Garlic", price: 0.75},
	{name:"Oregano", price: 0.75},
	{name:"Parsley", price: 0.75},
	{name:"Peppers", price: 0.50},
	{name:"Rosemary", price: 0.75},
	{name:"Cheese", price: 0.60},
	{name:"Mozzarella", price: 0.60},
	{name:"Parmigiano", price: 1.60},
	{name:"Pecorino", price: 1.60},
	{name:"Bacon", price: 1.00},
	{name:"BBQ Chicken", price: 2.00},
	{name:"Beef", price: 2.00},
	{name:"Chorizo", price: 2.00},
	{name:"Parma Ham", price: 2.50},
	{name:"Pork Sausage", price: 1.75},
	{name:"Salami", price: 1.50},
	{name:"Great King Prawns", price: 2.00},
	{name:"Mussels", price: 1.80},
	{name:"Shrimps", price: 1.50},
	{name:"Squid", price: 2.50},
	{name:"Tuna", price: 0.50},
];

function createPizzaInfo() {
var h1 = document.createElement("h1");
var p = document.createElement("p");
var buttonLeft = document.createElement("button");
var buttonRight = document.createElement("button");
var div1 = document.createElement("div");
var div2 = document.createElement("div");
var div3 = document.createElement("div");
var img = document.createElement("img");
var lorem = document.createTextNode("Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui.");
var left = document.createTextNode("◀");
var right = document.createTextNode("▶");
var title = document.createTextNode("Pizza Bolognese");

div1.className = "w3-border";
div1.setAttribute("id", "pizza");
div1.appendChild(div2);
div2.className = "w3-center";
div2.appendChild(div3);
div2.className = "w3-display-topleft w3-container";
div2.appendChild(img);
img.setAttribute("src", "Images/pizzaBolognese.jpg");
img.setAttribute('max-height', '609px');
img.setAttribute('max-width', '609px');
div3.appendChild(h1);
h1.appendChild(title)
div3.appendChild(p);
p.appendChild(lorem);
div3.appendChild(buttonLeft);
buttonLeft.className = "button w3-left";
buttonLeft.appendChild(left);
div3.appendChild(buttonRight);
buttonRight.className = "button w3-right";
buttonRight.appendChild(right);


var element = document.getElementById("firstHalf");
element.appendChild(div1);









/*  				<div id="pizza" class="w3-dropdown-content w3-border">
                        <div class="w3-center">
                            <div class="w3-display-topleft w3-container">
                                <h1>Pizza Bolognese</h1>
                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui.
                                </p>
                                <button class="button w3-left">◀</button>
                                <button class="button w3-right">▶</button>
                            </div>
                            <img src="Images/pizza.jpg" style="max-width:609px">
                        </div>
                    </div>*/
}

function pizza1() {
  var x = document.getElementById("pizza1");
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else { 
    x.className = x.className.replace(" w3-show", "");
  }
}

function pizza2() {
  var x = document.getElementById("pizza2");
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else { 
    x.className = x.className.replace(" w3-show", "");
  }
}

function pizza3() {
  var x = document.getElementById("pizza3");
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else { 
    x.className = x.className.replace(" w3-show", "");
  }
}

function pizza4() {
  var x = document.getElementById("pizza4");
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else { 
    x.className = x.className.replace(" w3-show", "");
  }
}

function pizza5() {
  var x = document.getElementById("pizza5");
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else { 
    x.className = x.className.replace(" w3-show", "");
  }
}

function pizza6() {
  var x = document.getElementById("pizza6");
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else { 
    x.className = x.className.replace(" w3-show", "");
  }
}

function pizza7() {
  var x = document.getElementById("pizza7");
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else { 
    x.className = x.className.replace(" w3-show", "");
  }
}

function pizza8() {
  var x = document.getElementById("pizza8");
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else { 
    x.className = x.className.replace(" w3-show", "");
  }
}

function pizza9() {
  var x = document.getElementById("pizza9");
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else { 
    x.className = x.className.replace(" w3-show", "");
  }
}

function pizza10() {
  var x = document.getElementById("pizza10");
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else { 
    x.className = x.className.replace(" w3-show", "");
  }
}

function pizza11() {
  var x = document.getElementById("pizza11");
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else { 
    x.className = x.className.replace(" w3-show", "");
  }
}

function pizza12() {
  var x = document.getElementById("pizza12");
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else { 
    x.className = x.className.replace(" w3-show", "");
  }
}

function pizza13() {
  var x = document.getElementById("pizza13");
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else { 
    x.className = x.className.replace(" w3-show", "");
  }
}

function pizza14() {
  var x = document.getElementById("pizza14");
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else { 
    x.className = x.className.replace(" w3-show", "");
  }
}

function pizza15() {
  var x = document.getElementById("pizza15");
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else { 
    x.className = x.className.replace(" w3-show", "");
  }
}

function pizza16() {
  var x = document.getElementById("pizza16");
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else { 
    x.className = x.className.replace(" w3-show", "");
  }
}

function pizza17() {
  var x = document.getElementById("pizza17");
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else { 
    x.className = x.className.replace(" w3-show", "");
  }
}

function pizza18() {
  var x = document.getElementById("pizza18");
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else { 
    x.className = x.className.replace(" w3-show", "");
  }
}

function pizza19() {
  var x = document.getElementById("pizza19");
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else { 
    x.className = x.className.replace(" w3-show", "");
  }
}

function pizza20() {
  var x = document.getElementById("pizza20");
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else { 
    x.className = x.className.replace(" w3-show", "");
  }
}

function pizza21() {
  var x = document.getElementById("pizza21");
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else { 
    x.className = x.className.replace(" w3-show", "");
  }
}

function pizza22() {
  var x = document.getElementById("pizza22");
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else { 
    x.className = x.className.replace(" w3-show", "");
  }
}

function pizza23() {
  var x = document.getElementById("pizza23");
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else { 
    x.className = x.className.replace(" w3-show", "");
  }
}

function pizza24() {
  var x = document.getElementById("pizza24");
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else { 
    x.className = x.className.replace(" w3-show", "");
  }
}

function pizza25() {
  var x = document.getElementById("pizza25");
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else { 
    x.className = x.className.replace(" w3-show", "");
  }
}

function pizza1() {
  var x = document.getElementById("pizza1");
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else { 
    x.className = x.className.replace(" w3-show", "");
  }
}

function pizza26() {
  var x = document.getElementById("pizza26");
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else { 
    x.className = x.className.replace(" w3-show", "");
  }
}

function pizza27() {
  var x = document.getElementById("pizza27");
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else { 
    x.className = x.className.replace(" w3-show", "");
  }
}

function pizza28() {
  var x = document.getElementById("pizza28");
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else { 
    x.className = x.className.replace(" w3-show", "");
  }
}

function pizza29() {
  var x = document.getElementById("pizza29");
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else { 
    x.className = x.className.replace(" w3-show", "");
  }
}

function pizza30() {
  var x = document.getElementById("pizza30");
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else { 
    x.className = x.className.replace(" w3-show", "");
  }
}

function pizza31() {
  var x = document.getElementById("pizza31");
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else { 
    x.className = x.className.replace(" w3-show", "");
  }
}


document.getElementById("Kopje").addEventListener("click", createPizzaInfo);
//document.getElementById("pizza1Btn").addEventListener("click", pizza1);
//document.getElementById("pizza2Btn").addEventListener("click", pizza2);
//document.getElementById("pizza3Btn").addEventListener("click", pizza3);
//document.getElementById("pizza4Btn").addEventListener("click", pizza4);
//document.getElementById("pizza5Btn").addEventListener("click", pizza5);
//document.getElementById("pizza6Btn").addEventListener("click", pizza6);
//document.getElementById("pizza7Btn").addEventListener("click", pizza7);
//document.getElementById("pizza8Btn").addEventListener("click", pizza8);
//document.getElementById("pizza9Btn").addEventListener("click", pizza9);
//document.getElementById("pizza10Btn").addEventListener("click", pizza10);
//document.getElementById("pizza11Btn").addEventListener("click", pizza11);
//document.getElementById("pizza12Btn").addEventListener("click", pizza12);
//document.getElementById("pizza13Btn").addEventListener("click", pizza13);
//document.getElementById("pizza14Btn").addEventListener("click", pizza14);
//document.getElementById("pizza15Btn").addEventListener("click", pizza15);
//document.getElementById("pizza16Btn").addEventListener("click", pizza16);
//document.getElementById("pizza17Btn").addEventListener("click", pizza17);
//document.getElementById("pizza18Btn").addEventListener("click", pizza18);
//document.getElementById("pizza19Btn").addEventListener("click", pizza19);
//document.getElementById("pizza20Btn").addEventListener("click", pizza20);
//document.getElementById("pizza21Btn").addEventListener("click", pizza21);
//document.getElementById("pizza22Btn").addEventListener("click", pizza22);
//document.getElementById("pizza23Btn").addEventListener("click", pizza23);
//document.getElementById("pizza24Btn").addEventListener("click", pizza24);
//document.getElementById("pizza25Btn").addEventListener("click", pizza25);
//document.getElementById("pizza26Btn").addEventListener("click", pizza26);
//document.getElementById("pizza27Btn").addEventListener("click", pizza27);
//document.getElementById("pizza28Btn").addEventListener("click", pizza28);
//document.getElementById("pizza29Btn").addEventListener("click", pizza29);
//document.getElementById("pizza30Btn").addEventListener("click", pizza30);
//document.getElementById("pizza31Btn").addEventListener("click", pizza31);
