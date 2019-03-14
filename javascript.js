var allPizzas = [
	{name:"Bolognese", price: 8.50},
	{name:"Calzone Speciale", price: 9.50},
	{name:"Carbonara", price: 9.50},
	{name:"Diavola", price: 9.50},
	{name:"Formaggi Pomodori", price: 9.50},
	{name:"Funghi", price: 8.50},
	{name:"Hawaii", price: 7.50},
	{name:"Margherita", price: 6.50},
	{name:"Mista di Mare", price: 10.50},
	{name:"Mozzarella", price: 8.00},
	{name:"Mozzarella Pesto", price: 8.50},
	{name:"Pancetta Delicata", price: 9.50},
	{name:"Pepperoni Salame Piccante", price: 10.50},
	{name:"Pollo", price: 8.50},
	{name:"Prosciutto", price: 8.50},
	{name:"Quattro Formaggi", price: 8.50},
	{name:"Quattro Stagioni", price: 9.50},
	{name:"Salame", price: 8.50},
	{name:"Salame Mozzarella Pesto", price: 9.00},
	{name:"Speciale", price: 8.50},
	{name:"Spinaci", price: 7.50},
	{name:"Spinaci Ricotta", price: 8.00},
	{name:"Tonno", price: 6.50},
	{name:"Vegetale", price: 7.50},
	{name:"BBQ Chicken", price: 10.50},
	{name:"BBQ Pulled Pork", price: 10.50},
	{name:"Beef Nachos", price: 10.50},
	{name:"Cheese Onion", price: 10.50},
	{name:"Double Pepperoni", price: 10.50},
	{name:"Kebab", price: 10.50},
	{name:"Spicy Chicken", price: 10.50},
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

		console.log(pizza);
		var li = document.createElement("li");
		ol.appendChild(li);
		li.setAttribute("class", "w3-button w3-black w3-block w3-hover-#626E60 w3-padding-16");
		li.setAttribute("id", pizzaCounter);
		li.setAttribute("onclick", "createPizzaInfo(this.id), removePizzaList()");
		li.appendChild(document.createTextNode(pizza["name"]));

		if (pizzaCounter == 23) {
			var h1 = document.createElement("h1");
			ol.appendChild(h1);
			h1.appendChild(document.createTextNode("American Pizza's"));
			h1.setAttribute("class", "Oswald w3-black w3-block w3-center w3-padding-16 w3-xxxlarge");
		}
		pizzaCounter++;
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

function createPizzaInfo(id) {
	var h1 = document.createElement("h1");
	var title = document.createTextNode(allPizzas[id].name);
	var h4 = document.createElement("h4");
	var price = document.createTextNode("€" + allPizzas[id].price.toFixed(2));
	var p = document.createElement("p");
	var lorem = document.createTextNode("Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui.");
	var img = document.createElement("img");

	var container = document.createElement("div");
	var subContainer = document.createElement("div");
	var div = document.createElement("div");

	var buttonLeft = document.createElement("button");
	var buttonRight = document.createElement("button");
	var left = document.createTextNode("◀");
	var right = document.createTextNode("▶");
	
	container.className = "w3-border";
	container.setAttribute("id", "pizza");
	container.appendChild(subContainer);
	subContainer.className = "w3-center";
	subContainer.appendChild(div);
	subContainer.className = "w3-container";
	div.appendChild(h1);
	h1.appendChild(title);
	div.appendChild(h4);
	h4.appendChild(price);
	div.appendChild(p);
	p.appendChild(lorem);
	div.appendChild(img);
	img.setAttribute("src", "Images/pizza" + allPizzas[id].name + ".jpg");
	img.setAttribute('class', 'w3-image');
	subContainer.appendChild(buttonLeft);
	buttonLeft.className = "button w3-left";
	buttonLeft.appendChild(left);
	buttonLeft.setAttribute("onclick", "removePizzaInfo(), createPizzaList()");
	subContainer.appendChild(buttonRight);
	buttonRight.className = "button w3-right";
	buttonRight.appendChild(right);
	buttonRight.setAttribute("id", id);
	buttonRight.setAttribute("onclick", "removePizzaInfo(), chosenPizza(this.id)");
	console.log(allPizzas[id].name);
	
	var element = document.getElementById("firstHalf");
	element.appendChild(container);
}

function removePizzaInfo() {
 	var title = document.getElementById("pizza");
 	title.parentElement.removeChild(title);
}

function chosenPizza(id) {
	console.log(allPizzas[id].name);
	var h1 = document.createElement("h1");
	var title = document.createTextNode(allPizzas[id].name);
	var h4 = document.createElement("h4");
	var price = document.createTextNode("€" + allPizzas[id].price.toFixed(2));
	var form = document.createElement("form");
	var container = document.createElement("div");
	var subContainer = document.createElement("div");
	var div = document.createElement("div");

	var inputNormal = document.createElement("input");
	var inputMedium = document.createElement("input");
	var inputLarge = document.createElement("input");
	var inputKingsize = document.createElement("input");
	var pNormal = document.createTextNode("Normal: ");
	var pMedium = document.createTextNode("Medium: ");
	var pLarge = document.createTextNode("Large: ");
	var pKingsize = document.createTextNode("Kingsize: ");
	
	var buttonLeft = document.createElement("button");
	var buttonRight = document.createElement("button");
	var left = document.createTextNode("◀");
	var right = document.createTextNode("▶");

	container.className = "w3-border";
	container.setAttribute("id", "pizza");
	container.appendChild(subContainer);
	subContainer.className = "w3-center";
	subContainer.appendChild(div);
	subContainer.className = "w3-container";

	subContainer.appendChild(buttonLeft);
	buttonLeft.className = "button w3-left";
	buttonLeft.appendChild(left);
	buttonLeft.setAttribute("id", id);
	buttonLeft.setAttribute("onclick", "removeChosenPizza(), createPizzaInfo(this.id)");
	subContainer.appendChild(buttonRight);
	buttonRight.className = "button w3-right";
	buttonRight.appendChild(right);
	buttonRight.setAttribute("id", id);
	buttonRight.setAttribute("onclick", "removeChosenPizza()");
	
	var element = document.getElementById("firstHalf");
	element.appendChild(container);

	div.appendChild(h1);
	h1.appendChild(title);
	div.appendChild(h4);
	h4.appendChild(price);
	h4.setAttribute("id", "price");
	div.appendChild(form);
	form.appendChild(pNormal);
	form.appendChild(inputNormal);
	inputNormal.setAttribute("type", "radio");
	inputNormal.setAttribute("name", "size");
	inputNormal.setAttribute("value", "1");
	inputNormal.setAttribute("checked", "checked");
	inputNormal.setAttribute("onclick", "calculatePrice(allPizzas[" + id + "].price.toFixed(2), this.value)");
	form.appendChild(pMedium);
	form.appendChild(inputMedium);
	inputMedium.setAttribute("type", "radio");
	inputMedium.setAttribute("name", "size");
	inputMedium.setAttribute("value", "1.2");
	inputMedium.setAttribute("onclick", "calculatePrice(allPizzas[" + id + "].price.toFixed(2), this.value)");
	form.appendChild(pLarge);
	form.appendChild(inputLarge);
	inputLarge.setAttribute("type", "radio");
	inputLarge.setAttribute("name", "size");
	inputLarge.setAttribute("value", "1.4");
	inputLarge.setAttribute("onclick", "calculatePrice(allPizzas[" + id + "].price.toFixed(2), this.value)");
	form.appendChild(pKingsize);
	form.appendChild(inputKingsize);
	inputKingsize.setAttribute("type", "radio");
	inputKingsize.setAttribute("name", "size");
	inputKingsize.setAttribute("value", "2");
	inputKingsize.setAttribute("onclick", "calculatePrice(allPizzas[" + id + "].price.toFixed(2), this.value)");

	var element = document.getElementById("firstHalf");
	element.appendChild(container);
}

function removeChosenPizza() {
 	var title = document.getElementById("pizza");
 	title.parentElement.removeChild(title);
}

function calculatePrice(oldPrice, multiplier) {
	var newPrice = oldPrice * multiplier;
 	var price = "€" + newPrice.toFixed(2);
 	document.getElementById("price").innerHTML = price;
}