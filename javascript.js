var allPizzas = [
	{name:"Bolognese", price: 8.50},
	{name:"Calzone Speciale", price: 8.50},
	{name:"Carbonara", price: 8.50},
	{name:"Diavola", price: 8.50},
	{name:"Formaggi Pomodori", price: 8.50},
	{name:"Funghi", price: 8.50},
	{name:"Hawaii", price: 8.50},
	{name:"Margherita", price: 8.50},
	{name:"Mista di Mare", price: 8.50},
	{name:"Mozzarella", price: 8.50},
	{name:"Mozzarella Pesto", price: 8.50},
	{name:"Pancetta Delicata", price: 8.50},
	{name:"Pepperoni Salame Piccante", price: 8.50},
	{name:"Pollo", price: 8.50},
	{name:"Prosciutto", price: 8.50},
	{name:"Quattro Formaggi", price: 8.50},
	{name:"Quattro Stagioni", price: 8.50},
	{name:"Salame", price: 8.50},
	{name:"Salame Mozzarella Pesto", price: 8.50},
	{name:"Speciale", price: 8.50},
	{name:"Spinaci", price: 8.50},
	{name:"Spinaci Ricotta", price: 8.50},
	{name:"Tonno", price: 8.50},
	{name:"Vegetale", price: 8.50},
	{name:"BBQ Chicken", price: 8.50},
	{name:"BBQ Pulled Pork", price: 8.50},
	{name:"Beef Nachos", price: 8.50},
	{name:"Cheese Onion", price: 8.50},
	{name:"Double Pepperoni", price: 8.50},
	{name:"Kebab", price: 8.50},
	{name:"Spicy Chicken", price: 8.50},
];

console.log(allPizzas.length);

var allToppings = [
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

function createPizzaList() {
	var pizzaCounter = 0;
	var div = document.createElement("div");
	var title = document.createElement("h1");
	var h1 = document.createElement("h1");
	var nav = document.createElement("nav");
	var ol = document.createElement("ol");

	div.appendChild(title);
	div.setAttribute("id", "pizzaTitle");
	div.setAttribute("class", "w3-padding-64 w3-center");
	title.appendChild(document.createTextNode("Pizza's"));
	title.setAttribute("class", "Oswald");
	nav.appendChild(ol);
	nav.setAttribute("id", "pizzaList");
	ol.appendChild(h1);
	h1.appendChild(document.createTextNode("Italian Pizza's"));
	h1.setAttribute("class", "Oswald w3-black w3-block w3-center w3-padding-16 w3-xxxlarge");

	allPizzas.forEach(function(pizza) {
		pizzaCounter++;
		console.log(pizza);
		var li = document.createElement("li");
		ol.appendChild(li);
		li.setAttribute("class", "w3-button w3-black w3-block w3-hover-#626E60 w3-padding-16");
		li.setAttribute("id", pizza["name"]);
		li.setAttribute("onclick", "createPizzaInfo(this.id), removePizzaList()");
		li.appendChild(document.createTextNode(pizza["name"]));

		if (pizzaCounter == 24) {
			var h1 = document.createElement("h1");
			ol.appendChild(h1);
			h1.appendChild(document.createTextNode("American Pizza's"));
			h1.setAttribute("class", "Oswald w3-black w3-block w3-center w3-padding-16 w3-xxxlarge");
		}
	});

	var element = document.getElementById("firstHalf");
	element.appendChild(div);
	element.appendChild(nav);
}

function removePizzaList() {
 	var title = document.getElementById("pizzaTitle");
 	var list = document.getElementById("pizzaList");
 	title.parentElement.removeChild(title);
 	list.parentElement.removeChild(list);
}

function createPizzaInfo($name) {
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
	var title = document.createTextNode($name);
	
	div1.className = "w3-border";
	div1.setAttribute("id", "pizza");
	div1.appendChild(div2);
	div2.className = "w3-center";
	div2.appendChild(div3);
	div2.className = "w3-container";
	div3.appendChild(h1);
	h1.appendChild(title);
	div3.appendChild(p);
	p.appendChild(lorem);
	div3.appendChild(img);
	img.setAttribute("src", "Images/pizza" + $name + ".jpg");
	img.setAttribute('class', 'w3-image');
	div3.appendChild(buttonLeft);
	buttonLeft.className = "button w3-left";
	buttonLeft.appendChild(left);
	buttonLeft.setAttribute("id", "buttonLeft");
	buttonLeft.setAttribute("onclick", "removePizzaInfo(), createPizzaList()");
	div3.appendChild(buttonRight);
	buttonRight.className = "button w3-right";
	buttonRight.appendChild(right);
	buttonRight.setAttribute("id", "buttonRight");
	buttonRight.setAttribute("onclick", "removePizzaInfo(), chosenPizza(" + $name + ")");
	
	var element = document.getElementById("firstHalf");
	element.appendChild(div1);
}

function removePizzaInfo() {
 	var title = document.getElementById("pizza");
 	title.parentElement.removeChild(title);
}

function chosenPizza($name) {
	var h1 = document.createElement("h1");
	var title = document.createTextNode($name);
	var div = document.createElement("div");
	div.appendChild(h1);
	h1.appendChild(title);
	console.log(allPizzas[1]);

	var element = document.getElementById("firstHalf");
	element.appendChild(div);
}

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
