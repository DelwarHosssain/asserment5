function handClickPrice (tergat){
    const showItams =document.getElementById("itam-bar")
    const itemName = tergat.parentNode.childNodes[3].innerText;
    const li = document.createElement("li");
    li.innerText =itemName;
    showItams.appendChild(li);

    const parPrice = tergat.parentNode.childNodes[2].innerText;
 
}
const cart = {
    items: [],
    total: 0,
    add(item) {
      this.items.push(item);
      this.calculateTotal();
    },
    calculateTotal() {
      this.total = this.items.reduce((acc, item) => acc + item.price, 0);
      this.updateSidebarTotal();
    },
    updateSidebarTotal() {
      const totalElement = document.querySelector("#sidebar-total");
      totalElement.textContent = this.total.toFixed(2);
    },
  };
  
function handleClickPrice(card) {
    const price = parseFloat(card.querySelector("p span").textContent);
    const item = { price };
    cart.add(item);
}
  
const cards = document.querySelectorAll(".card-body");
  cards.forEach((card) => {
    card.addEventListener("click", () => {
      handleClickPrice(card);
    });
});

// console.log(li);