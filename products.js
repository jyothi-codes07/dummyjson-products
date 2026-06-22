async function fetchproducts() {
try {
let response = await fetch("https://dummyjson.com/products");
let data = await response.json();
displayProducts(data.products);
}
catch(error) {
        console.error(error);
    }
}
function displayProducts(products) {
const template = document.getElementById("product-template");
const container =document.getElementById("products");
container.innerHTML = "";
products.forEach(x => {
const clone =template.content.cloneNode(true);
clone.querySelector(".card-title").textContent = x.title;
clone.querySelector(".price").textContent = "Price : $ " + x.price;
clone.querySelector(".card-img-top").src = x.thumbnail;
clone.querySelector(".card-text").textContent = x.description;
const link =clone.querySelector(".btn");
link.textContent = "View Details";
link.href ="product.html?id=" + x.id;
container.appendChild(clone);
    });
}
async function loadCategories() {
try {
let response = await fetch("https://dummyjson.com/products/categories");
let categories = await response.json();
let container = document.getElementById("Buttons");
container.innerHTML = "";
let allBtn =document.createElement("button");
allBtn.textContent ="All Products";
allBtn.className = "category-btn";
allBtn.addEventListener("click", fetchproducts);
container.appendChild(allBtn);
categories.forEach(category => {
let button = document.createElement("button");
button.textContent = category.name;
button.className ="category-btn";
button.addEventListener("click",async function() {
try {
let response =await fetch(`https://dummyjson.com/products/category/${category.slug}`);
let data = await response.json();
displayProducts(data.products);
}
catch(error) {
console.error(error);
}
});
container.appendChild(button);
});
}
catch(error) {
console.error(error);
}
}
fetchproducts();
loadCategories();
async function searchProducts() {
let keyword =document.getElementById("searchInput").value.trim().toLowerCase();
if (keyword === "") {
fetchproducts();
return;
}
try {
let response =await fetch("https://dummyjson.com/products/categories");
let categories =await response.json();
let match =categories.find(category =>category.slug.toLowerCase() === keyword);
if (match) {
let categoryResponse =await fetch(`https://dummyjson.com/products/category/${match.slug}`);
let categoryData =await categoryResponse.json();
displayProducts(categoryData.products);
} else {
let searchResponse =await fetch(`https://dummyjson.com/products/search?q=${keyword}`);
let searchData =await searchResponse.json();
displayProducts(searchData.products);
}
}catch(error) {
console.error(error);
}
}

document.getElementById("searchInput").addEventListener("input", searchProducts);



console.log("start");

setTimeout(() => {
    console.log("Middle");
}, 2000);

console.log("End");