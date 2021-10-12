let dogs = [
    {
    image:"./images/dog1.jfif",
    name: "american dog",
    price: "$80",
},
{
    image:"./images/dog2.jfif",
    name: "pet dog",
    price: "$50",
},
{
    image:"./images/dog7.jfif",
    name: "niger dog",
    price: "$40",
},
{
    image:"./images/dog10.jfif",
    name: "african dog",
    price: "$20",
},
{
    image:"./images/dog12.jfif",
    name: "pet dog",
    price: "$50",
},
{
    image:"./images/dog14.jfif",
    name: "ghana dog",
    price: "$10",
},
{   image:"./images/dog1.jfif",
    name: "nigerian dog",
    price: "$30",
},
{
    image:"./images/dog2.jfif",
    name: "spanish dog",
    price: "$90",
},
{
    image:"./images/dog7.jfif",
    name: "german dog",
    price: "$60",
},
{
    image:"./images/dog10.jfif",
    name: "english dog",
    price: "$40",
},
{
    image:"./images/dog12.jfif",
    name: "beau dog",
    price: "$70",
},
{
    image:"./images/dog14.jfif",
    name: "fine dog",
    price: "$80",
}]


let gallery = document.getElementById("gallery")



for (let i = 0; i < dogs.length; i++){

    gallery.innerHTML += `<div class="col-lg-3 col-md-6 mb-4" >
    <div class="card">
      <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
        <img src=${dogs[i].image} class="img-fluid" />
        <a href="./gallery.html">
          <div class="mask" style="background-color: rgba(251, 251, 251, 0.15);"></div>
        </a>
      </div>
      <div class="card-body">
        <h5 class="card-title">${dogs[i].name}</h5>
        <p href="#!" class="btn btn-primary">${dogs[i].price}</p>
      </div>
    </div>
  </div>`
 
}

