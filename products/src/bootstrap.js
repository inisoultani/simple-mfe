import faker from 'faker';

const mount = (el) => {
  let products = '';

  for (let i = 0; i < 5; i++) {
    const name = faker.commerce.productName();
    products += `<div>${name}</div>`;
  }

  el.innerHTML = products;
};

// Context 1
// we are running this file in development isolation
// we are using  our local index.html file, which DEFINITELY has element with an id of dev-products
if (process.env.NODE_ENV === 'development') {
  const el = document.querySelector('#dev-products');
  if (el) {
    mount(el);
  }
}

// Context 2
// we are running in development / production runtime integration
// we cant guarantee the element with the specific expected id exist
// so we will leave  it to the container to decide when and how to use this componenet
export { mount };
