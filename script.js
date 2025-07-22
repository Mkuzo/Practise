const add = document.querySelectorAll(".add");
const items = document.getElementById("items");
const total = document.getElementById("total");
const cart = document.getElementById("cart");
const cartItem = [];
cartCount = 0;
cartPrice = 0;

add.forEach(button =>{
  button.addEventListener("click",function(){
    const card = button.closest(".card");
    if(!card){
      return;
    };
    const shoeName = card.querySelector("h3")?.textContent || "shoeName not found";
    const priceParagraph = Array.from(card.querySelectorAll('p')).find(p =>
      p.textContent.includes('Price:$')
    );

    if (!priceParagraph) {
      console.warn('Price not found for:', shoeName);
      return;
    }
   const priceText = card.querySelector("p")[0].textContent;
   const price = parseFloat(priceText.replace("Price:$",""));
  });
});