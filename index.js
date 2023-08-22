function handClickPrice(tergat) {
    const showItems = document.getElementById("itam-bar");
    const itemName = tergat.parentNode.childNodes[3].innerText;
    const li = document.createElement("li");
    li.innerText = itemName;
    showItems.appendChild(li);

    const parPrice = parseFloat(tergat.parentNode.querySelector("p span").innerText);
    const finalPrice = parPrice; // No discount for non-numeric values

    cart.add({ price: finalPrice }); // Add item with final price to cart
}

const cart = {
    items: [],
    total: 0,
    discount: 0,
    finalPrice: 0,


    add(item) {
        this.items.push(item);
        this.calculateTotal();
        this.updateSidebar();

    const buttonElement = document.getElementById("applyCouponBtn");

    if (this.total < 200) {
        buttonElement.disabled = true; // Disable the button
    } else {
        buttonElement.disabled = false; // Enable the button
    }

    },

    calculateTotal() {
        this.total = this.items.reduce((acc, item) => acc + item.price, 0);
        this.finalPrice = this.total - this.discount;
    },

    updateSidebar() {
        const totalElement = document.querySelector("#sidebar-total");
        const discountElement = document.querySelector("#sidebar-discount");
        const finalElement = document.querySelector("#sidebar-final");

        totalElement.textContent = this.total.toFixed(2);
        discountElement.textContent = this.discount.toFixed(2);
        finalElement.textContent = this.finalPrice.toFixed(2);
    },
};

const applyCouponBtn = document.getElementById("applyCouponBtn");



applyCouponBtn.addEventListener("click", () => {
    const couponInput = document.getElementById("couponInput");
    const couponCode = couponInput.value;

    if (couponCode === "SELL200" & cart.total >= 200 ) {
        const discountAmount = cart.total * 0.2;
        cart.discount = discountAmount;
        cart.calculateTotal(); 
        cart.updateSidebar();
    }
});
