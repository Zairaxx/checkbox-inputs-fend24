let clothing_items = [
    {"name": "T-shirt", "color": "blue"},
    {"name": "Jeans", "color": "red"},
    {"name": "Jacket", "color": "yellow"},
    {"name": "Sweater", "color": "blue"},
    {"name": "Shorts", "color": "red"},
    {"name": "Hat", "color": "yellow"},
    {"name": "Dress", "color": "blue"},
    {"name": "Skirt", "color": "red"},
    {"name": "Shirt", "color": "yellow"},
    {"name": "Sneakers", "color": "blue"}
]



const filterClothes = () => {
 
    //Spara alla checkade värden i en array - selectedColors
    let selectedColors = [];
    let colorBoxes = document.querySelectorAll("input[type='checkbox'][name='color']:checked");
    colorBoxes.forEach(box => {
            selectedColors.push(box.value);
    })
    //Filtrera originaldata baserat på om deras färg finns bland våra val 
    let filteredArray = clothing_items.filter(item => selectedColors.includes(item.color))

    //Skriver ut filtrerad array i DOM:en
    document.querySelector("#clothes").innerHTML = "";
    filteredArray.forEach(item => {
        let li = document.createElement("li");
        li.innerText = item.name + " Color: " + item.color
    
        document.querySelector("#clothes").append(li);
    })

}

let filterBtn = document.querySelector("#filterBtn")
filterBtn.addEventListener("click", filterClothes)