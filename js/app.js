
document.addEventListener("DOMContentLoaded", () => {
  const current = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".links a").forEach(a => {
    const href = a.getAttribute("href").split("/").pop();
    if (href === current) a.classList.add("active");
  });

  const menu = document.querySelector(".mobile-menu");
  const links = document.querySelector(".links");
  if (menu && links) menu.addEventListener("click", () => links.classList.toggle("open"));

  const cart = document.querySelector("[data-cart]");
  let count = 0;
  document.querySelectorAll("[data-add-cart]").forEach(btn => {
    btn.addEventListener("click", () => {
      count++;
      if (cart) cart.textContent = count;
      btn.textContent = "تمت الإضافة";
      setTimeout(() => btn.textContent = "أضف للسلة", 900);
    });
  });

  const filterButtons = document.querySelectorAll("[data-filter]");
  const products = document.querySelectorAll("[data-category]");
  filterButtons.forEach(button => {
    button.addEventListener("click", () => {
      filterButtons.forEach(b => b.classList.remove("active"));
      button.classList.add("active");
      const f = button.dataset.filter;
      products.forEach(p => {
        p.style.display = f === "all" || p.dataset.category.includes(f) ? "" : "none";
      });
    });
  });

  const form = document.querySelector("[data-contact-form]");
  const msg = document.querySelector("[data-form-message]");
  if (form && msg) {
    form.addEventListener("submit", e => {
      e.preventDefault();
      msg.textContent = "تم تسجيل الرسالة بنجاح كتجربة داخل الموقع.";
    });
  }
});
