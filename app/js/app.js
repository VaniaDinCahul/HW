let products = []
let currentProductIndex = 0;

const pageContent = document.querySelector("#pageContent");

fetch("/api/product")
  .then((response) => response.json())
  .then((prodctData) => {

    products = prodctData
    renderProduct(currentProductIndex)

  })

  const renderProduct = (index) => {

    pageContent.innerHTML = ''

    let product = products[index]

    let h1 = document.createElement("h1");
    h1.innerText = product.title;
    document.body.append(h1);

    let h2 = document.createElement("h2");
    h2.innerText = product.subtitle;
    document.body.append(h2);

    let p = document.createElement("p");
    p.innerText = product.descriptio;
    document.body.append(p);

    let img = document.createElement("img");
    img.innerText = product.image;
    document.body.append(img);

    p = document.createElement("p");
    p.innerText = `${product.price.amount}${product.price.currency}`;
    document.body.append(p);

    let btn = document.createElement("button");
    btn.innerText = "Order";
    document.body.append(btn);

    let nextBtn = document.createElement("button");
    nextBtn.innerText = ">>>";
    document.body.append(nextBtn);

    let prevBtn = document.createElement("button");
    prevBtn.innerText = "<<<";
    document.body.append(prevBtn);

    btn.addEventListener("click", orderProduct);
    nextBtn.addEventListener("click", () => { 
      if (currentProductIndex++ > products.length) {
        currentProductIndex++;
        renderProduct(currentProductIndex);
      }
    });
    nextBtn.addEventListener("click", () => {
      if (currentProductIndex-- < 0) {
         currentProductIndex--;
        renderProduct(currentProductIndex);
       }
    });
  }

  const orderProduct = () => {
    
    // fetch('/api/order', {
    //     method: 'POST'
    // })
    //     .then(response => response.json())
    //     .then( json => {
    //         alert(json.message)
    //     })
    //     .catch( err => {
    //         alert('error')
    //     })


    let form = document.createElement("form");
    let input = document.createElement('input')
    input.placeholder = 'enter your email ...'
    input.id = 'orderEmail'
    form.append(input)

    input = document.createElement("input");
    input.type = 'password'
    input.placeholder = "enter your phone number ...";
    input.id = "orderPhone";
    form.append(input);

    input = document.createElement("input");
    input.type = "number";
    input.min = "1"
    input.max = "10"
    input.placeholder = "quantity";
    input.value = "1"
    input.id = "orderQuantity";
    form.append(input);

    input = document.createElement("input");
    input.placeholder = "enter your pin  ...";
    input.id = "orderPin";
    form.append(input);

   input = document.createElement("input");
    input.type = 'hidden'
    input.value = productId
    input.id = "productId";
    form.append(input);

    let button = document.createElement('button')
    button.innerText = 'CONFIRM ORDER'

    button.addEventListener('click', (e) => {
      e.preventDefault()
      
        fetch('/api/order', {
          method: 'POST',
          body: JSON.stringify({
            productId: document.getElementById('productId').value,
            orderEmail: document.getElementById('OrderEmail').value,
            orderPhone: document.getElementById('orderPhone').value,
            orderQuantity: document.getElementById('orderQuantity').value,
            orderPin: document.getElementById('orderPin').value
          })
        })
          .then(response => response.json())
          .then (json => {
            e.target.innerText = json.message
          })
          .catch(err => {
            alert('Error')
          })
        })
    document.body.replaceChild(form, document.body.lastElementChild)
    }