const wrapper = document.querySelector(".sliderWrapper");

const menuItems = document.querySelectorAll(".menuItem");


const Products = [
    {
        id:"1",
        title:"Jamon",
        price:"$120",
        img:"./img/jamon.png",
        desc:"Qualtias cuenta con diferentes tipos de Jamones."
    },
    {
        id:"2",
        title:"Chorizo",
        price:"$80",
        img:"./img/chorizo.png",
        desc:"Qualtias cuenta con diferentes tipos de chorizos."
     },
    {
        id:"3",
        title:"Queso Manchego",
        price:"$100",
        img:"./img/queso.png",
        desc:"Qualtias cuenta con diferentes tipos de quesos."
     },
     {
        id:"4",
        title:"Queso Panela",
        price:"$50",
        img:"./img/zwan.png",
        desc:"Qualtias cuenta con diferentes tipos de quesos."
     },
     {
        id:"5",
        title:"Carnes",
        price:"$400",
        img:"./img/meatproduct.png",
        desc:"Qualtias cuenta con diferentes cortes de carnes."
     },
     {
        id:"6",
        title:"Pollo",
        price:"$300",
        img:"./img/pollo.png",
        desc:"Qualtias cuenta con diferentes piezas de pollo."
     },
     {
        id:"7",
        title:"Plan 1",
        price:"$100",
        img:"./img/plan1.png",
        desc:"Este plan contiene varidad de productos para poder tener una comida completa."
     },
     {
        id:"8",
        title:"Plan 2",
        price:"$100",
        img:"./img/plan2.png",
        desc:"Este plan contiene varidad de productos para poder tener una comida completa."
     },
     {
        id:"9",
        title:"Mayonesa",
        price:"$60",
        img:"./img/mayo.png",
        desc:"Este es un producto adicional que se puede llevar dentro de la canasta."
     },
     {
        id:"10",
        title:"Catsup",
        price:"$45",
        img:"./img/ketchup.png",
        desc:"Este es un producto adicional que se puede llevar dentro de la canasta."
     },
]


let choosenProducts = Products[0]
let choosenProducts2 = Products[1]


const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");

const currentProductImg2 = document.querySelector(".productImg2");
const currentProductTitle2 = document.querySelector(".productTitle2");
const currentProductPrice2 = document.querySelector(".productPrice2");

menuItems.forEach((item, index)=>{
   item.addEventListener("click", () => {
       //Change the current slide
       wrapper.style.transform = `translateX(${-100 * index}vw)`;

       //change the choosen product
       choosenProducts = Products[index*2]
       choosenProducts2 = Products[(index*2)+1]

       //Change Text
       currentProductTitle.textContent = choosenProducts.title;
       currentProductPrice.textContent = choosenProducts.price;
       currentProductImg.src = choosenProducts.img;

       currentProductTitle2.textContent = choosenProducts2.title;
       currentProductPrice2.textContent = choosenProducts2.price;
       currentProductImg2.src = choosenProducts2.img;

   
   })
   });







