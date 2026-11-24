function purchaseLink(product) {
  const link = document.createElement("a");
  const direct = /^[A-Z0-9]{10}$/.test(product.asin);
  link.href = direct ? "https://www.amazon.in/dp/" + product.asin : "https://www.amazon.in/s?k=" + encodeURIComponent("VAYASTHA " + product.name);
  link.className = "cta";
  link.textContent = direct ? "Buy now on Amazon ↗" : "Find on Amazon ↗";
  return link;
}
const featuredAsin = document.querySelector("#collection").dataset.asin;
const more = document.querySelector("#more");
for (const product of products.filter(item => item.asin !== featuredAsin)) {
  more.hidden = false;
  const card = document.createElement("article");
  const name = document.createElement("h3");
  name.textContent = product.name;
  const photo = new Image();
  photo.src = product.image;
  photo.alt = product.name;
  card.append(photo, name, purchaseLink(product));
  document.querySelector("#catalog").append(card);
}

