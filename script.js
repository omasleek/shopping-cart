document.addEventListener("DOMContentLoaded", () => {
  const updateTotal = () => {
    let total = 0;
    document.querySelectorAll(".card-body").forEach((card) => {
      const quantity = parseInt(card.querySelector(".quantity").textContent);
      const price = parseInt(card.querySelector(".unit-price").textContent);
      total += quantity * price;
    });
    document.querySelector(".total").textContent = `${total} $`;
  };

  document.querySelectorAll(".fa-plus-circle").forEach((btn) => {
    btn.addEventListener("click", () => {
      let quantity = btn.nextElementSibling;
      quantity.textContent = parseInt(quantity.textContent) + 1;
      updateTotal();
    });
  });

  document.querySelectorAll(".fa-minus-circle").forEach((btn) => {
    btn.addEventListener("click", () => {
      let quantity = btn.previousElementSibling;
      if (parseInt(quantity.textContent) > 0) {
        quantity.textContent = parseInt(quantity.textContent) - 1;
        updateTotal();
      }
    });
  });

  document.querySelectorAll(".fa-trash-alt").forEach((btn) => {
    btn.addEventListener("click", () => {
      btn.closest(".card-body").remove();
      updateTotal();
    });
  });

  document.querySelectorAll(".fa-heart").forEach((btn) => {
    btn.addEventListener("click", () => {
      btn.classList.toggle("text-danger");
    });
  });

  updateTotal();
});
