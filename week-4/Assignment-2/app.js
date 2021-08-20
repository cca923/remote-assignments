function ajax(src, callback) {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      const products = JSON.parse(xhr.responseText);
      callback(products);
    }
  };
  xhr.open("GET", src);
  xhr.send();
}
function render(data) {
  const product = document.querySelector(".products");

  for (let i = 0; i < data.length; i++) {
    let productN = document.createElement("div");
    productN.textContent = data[i].name;
    productN.className = "product-name";
    product.appendChild(productN);

    let productP = document.createElement("ul");
    productP.textContent = `價格：${data[i].price} 元`;
    productP.className = "product-price";
    productN.appendChild(productP);

    let productD = document.createElement("ul");
    productD.textContent = `介紹：${data[i].description}`;
    productD.className = "product-description";
    productN.appendChild(productD);
  }
}
ajax("http://13.230.176.178:4000/api/1.0/remote-w4-data", function (response) {
  render(response);
});
