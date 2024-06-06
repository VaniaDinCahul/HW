fetch(".api/product")
  .then((response) => response.json())
  .then((json) => {
    let h1 = document.createElement("h1");
    h1.innerText = json.title;
    document.body.append(h1);

    let h2 = document.createElement("h2");
    h2.innerText = json.subtitle;
    document.body.append(h2);

    let p = document.createElement("p");
    p.innerText = json.descriptio;
    document.body.append(p);

    let img = document.createElement("img");
    img.innerText = json.image;
    document.body.append(img);

    p = document.createElement("p");
    p.innerText = `${json.price.amount}${json.price.currency}`;
    document.body.append(p);

    let btn = document.createElement("button");
    btn.innerText = "Order";
    document.body.append(btn);

    btn.addEventListener("click", orderProduct);

  })

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


    let form = document.createAttribute('form')
    let input = document.createAttribute('input')
    input.placeholder = 'enter your email ...'
    input.id = 'orderEmail'
    form.append(input)

    input = document.createAttribute("input");
    input.type = 'password'
    input.placeholder = "enter your phone number ...";
    input.id = "orderPhone";
    form.append(input);

    input = document.createAttribute("input");
    input.type = "number";
    input.placeholder = "quantity";
    input.value = "1"
    input.id = "orderQuantity";
    form.append(input);

    input = document.createAttribute("input");
    input.placeholder = "enter your pin  ...";
    input.id = "orderPin";
    form.append(input);

   input = document.createAttribute("input");
    input.type = 'hidden'
    input.value = productId
    input.id = "productId";
    form.append(input);

    let button = document.createElement('button')
    button.innerText = 'CONFIRM ORDER'

    button.addEventListener('click', (e) => {
      e.preventDefault()
      
        body: JSON.stringify
    })
    
    document.body.replaceChild(form, document.body.lastElementChild)
  }