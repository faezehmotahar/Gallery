function searchArtist() {
  let input = document.querySelector(".ui-input").value.toLowerCase().trim();
  let cards = document.querySelectorAll(".card");

  cards.forEach(card => {
    let name = card.querySelector(".title").textContent.toLowerCase();
  let col = card.parentElement;
    if (name.includes(input)) {
    col.style.display = ""; 
    } else {
      col.style.display = "none";    
    }
  });
}


function searchArtist2() {
  let input2 = document.querySelector(".ui-input-2").value.toLowerCase().trim();
  let cards2 = document.querySelectorAll(".card-1");

  cards2.forEach(card2 => {
    let name2 = card2.querySelector("h5").textContent.toLowerCase().trim();
    let col2 = card2.parentElement; 

    if (name2.includes(input2)) {
      col2.style.display = "";   
    } else {
      col2.style.display = "none"; 
    }
  });
}






document.querySelectorAll(".dropdown-menu .dropdown-item").forEach(item => {
  item.addEventListener("click", function(e) {
    e.preventDefault(); 
    let category = this.getAttribute("data-filter");

    let cards3 = document.querySelectorAll(".card-1");

    cards3.forEach(card3 => {
      let cardCategory = card3.getAttribute("data-category");
      if (category === "all" || cardCategory === category) {
        card3.style.display = ""; 
      } else {
        card3.style.display = "none";  
      }
    });
  });
});


  $('.owl-carousel').owlCarousel({
      loop:true,
      margin:10,
      responsiveClass:true,
      responsive:{
        0:{
          items:1,
          nav:true
        },
        600:{
          items:3,
          nav:false
        },
        1000:{
          items:5,
          nav:true,
          loop:false
        }
      }
    })



    function searchwork2() {
  let input3 = document.querySelector(".ui-input3").value.toLowerCase().trim();
  let cards3 = document.querySelectorAll(".card");

  cards3.forEach(card3 => {
    let name = card3.querySelector(".card__title").textContent.toLowerCase();
  let col = card3.parentElement;
    if (name.includes(input3)) {
    col.style.display = ""; 
    } else {
      col.style.display = "none";    
    }
  });
}

let cart = [];
let total = 0;

function addToCart(name, price, img) {
  cart.push({ name, price, img });
  total += price;
  renderCart();
  showMessage(name + " به سبد خرید اضافه شد ✅");
}


function showMessage(text) {
  const msg = document.getElementById("message");
  msg.textContent = text;
  msg.style.display = "block";
  msg.style.opacity = "1";

  setTimeout(() => {
    msg.style.opacity = "0";
    setTimeout(() => {
      msg.style.display = "none";
    }, 500);
  }, 2000); 
}

function renderCart() {
  const cartList = document.getElementById("cart");
  const totalElement = document.getElementById("total");

  cartList.innerHTML = "";

  cart.forEach(item => {
    const li = document.createElement("li");
    li.innerHTML = `
      <img src="${item.img}" style="width:50px; height:50px; object-fit:cover; border-radius:5px; margin-left:10px;margin-bottom:20px;">
      ${item.name} - ${item.price.toLocaleString("fa-IR")} تومان
    `;
    li.style.display = "flex";
    li.style.alignItems = "center";
    cartList.appendChild(li);
  });

  totalElement.textContent = total.toLocaleString("fa-IR");
}
