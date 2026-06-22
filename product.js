async function getProductDetails() {

    let params = new URLSearchParams(window.location.search);
    let id = params.get("id");
    let response = await fetch("https://dummyjson.com/products/" + id);
    let data = await response.json();
    document.getElementById("title").textContent =data.title;
    document.getElementById("price").textContent ="Price : $" + data.price;
    document.getElementById("description").textContent =data.description;
    document.getElementById("image").src =data.thumbnail;
    document.getElementById("category").textContent ="Category : " +data.category;
    document.getElementById("discount").textContent ="Discount percentage : " +data.discountPercentage;
    document.getElementById("rating").textContent ="Rating : "+ data.rating;
    document.getElementById("stock").textContent ="Stock : "+data.stock;
    document.getElementById("available").textContent ="Availability : "+data.availabilityStatus;
    document.getElementById("warranty").textContent ="Warranty : "+data.warrantyInformation;
    document.getElementById("shipping").textContent ="Shipping : "+data.shippingInformation;

}
getProductDetails();