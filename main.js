// VOORRAAD ARRAY MET TV'S
const inventory = [
  {
    type: '43PUS6504/12',
    name: '4K TV',
    brand: 'Philips',
    price: 379,
    availableSizes: [43, 50, 58, 65],
    refreshRate: 50,
    screenType: 'LED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: false,
      hdr: true,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 23,
    sold: 2,
  },
  {
    type: 'NH3216SMART',
    name: 'HD smart TV',
    brand: 'Nikkei',
    price: 159,
    availableSizes: [32],
    refreshRate: 100,
    screenType: 'LED',
    screenQuality: 'HD ready',
    smartTv: true,
    options: {
      wifi: true,
      speech: false,
      hdr: false,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 4,
    sold: 4,
  },
  {
    type: 'QE55Q60T',
    name: '4K QLED TV',
    brand: 'Samsung',
    price: 709,
    availableSizes: [43, 50, 55, 58, 65],
    refreshRate: 60,
    screenType: 'QLED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: true,
      hdr: true,
      bluetooth: true,
      ambiLight: false,
    },
    originalStock: 7,
    sold: 0,
  },
  {
    type: '43HAK6152',
    name: 'Ultra HD SMART TV',
    brand: 'Hitachi',
    price: 349,
    availableSizes: [43, 50, 55, 58],
    refreshRate: 60,
    screenType: 'LCD',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: true,
      hdr: true,
      bluetooth: true,
      ambiLight: false,
    },
    originalStock: 5,
    sold: 5,
  },
  {
    type: '50PUS7304/12',
    name: 'The One 4K TV',
    brand: 'Philips',
    price: 479,
    availableSizes: [43, 50, 55, 58, 65, 70],
    refreshRate: 50,
    screenType: 'LED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: true,
      hdr: true,
      bluetooth: true,
      ambiLight: true,
    },
    originalStock: 8,
    sold: 3,
  },
  {
    type: '55PUS7805',
    name: '4K LED TV',
    brand: 'Philips',
    price: 689,
    availableSizes: [55],
    refreshRate: 100,
    screenType: 'LED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: false,
      hdr: true,
      bluetooth: false,
      ambiLight: true,
    },
    originalStock: 6,
    sold: 3,
  },
  {
    type: 'B2450HD',
    name: 'LED TV',
    brand: 'Brandt',
    price: 109,
    availableSizes: [24],
    refreshRate: 60,
    screenType: 'LED',
    screenQuality: 'Full HD',
    smartTv: false,
    options: {
      wifi: false,
      speech: false,
      hdr: false,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 10,
    sold: 8,
  },
  {
    type: '32WL1A63DG',
    name: 'HD TV',
    brand: 'Toshiba',
    price: 161,
    availableSizes: [32],
    refreshRate: 50,
    screenType: 'LED',
    screenQuality: 'Full HD',
    smartTv: false,
    options: {
      wifi: false,
      speech: false,
      hdr: true,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 10,
    sold: 8,
  },
];

// Opdracht 1.A
const leftToSell = inventory.map((television) => {
  return television.originalStock - television.sold;
});
const totalCount = leftToSell.reduce((a, b) => a + b)


// Opdracht 1.B
document.getElementById('left-to-sell');
document.getElementById("left-to-sell").textContent = totalCount;


// Opdracht 2.A
const allTvNames = (products) => products.map((tv) => `${tv.brand} ${tv.type}`);
console.log('Opdracht 2a: ', allTvNames(inventory));

// Opdracht 2.B:
const soldOut = inventory.filter((television) => {
  return television.originalStock === television.sold
});
console.log("UITVERKOCHT", soldOut);


// Opdracht 2c:
const backLight = inventory.filter((inventory) => {
  return inventory.options.ambiLight === inventory.options.ambiLight;
});
console.log(backLight);


// Opdracht 2d:
inventory.sort((a, b) => {
  return a.price - b.price;
});


// Opdracht 3a
function calculateTargetRevenue (products) {
  let revenueTarget = 0;
  for (const product of products) {
    const revenueTargetPerProduct = product.originalStock * product.price;
    revenueTarget = revenueTarget + revenueTargetPerProduct;
  }
  return revenueTarget;
}
const revenueTarget = calculateTargetRevenue(inventory)


const revenueTargetElement = document.getElementById("revenue-target")

revenueTargetElement.textContent = revenueTarget;


// Opdracht 3b
function currentProfit(products) {
  const profitPerItem = products.map((product) => product.sold * product.price);
  return profitPerItem.reduce((itemA, itemB) => itemA + itemB);
}

const totalProfit = document.querySelector('#total-profit');
totalProfit.textContent = currentProfit(inventory).toLocaleString('nl-NL', {
  style: 'currency',
  currency: 'EUR',
});


// Opdracht 4
function display(product) {
  const productElement = document.createElement('li');
  const price = document.createElement('span');
  const panel = document.createElement('div');
  const panelText = document.createElement('p');

  productElement.classList.add('product-list__item');
  price.classList.add('price');
  panel.classList.add('product-list__panel');

  productElement.textContent = toString(product);
  price.textContent = formatPrice(product.price);
  panelText.textContent = screenSizesToString(product);

  const list = document.querySelector('.product-list');
  list.appendChild(productElement);
  list.appendChild(panel);
  productElement.appendChild(price);
  panel.appendChild(panelText);
}

for (let i = 0; i < inventory.length; i++) {
  display(inventory[i]);
}


// Opdracht 5a
function toString(product) {
  return `${product.brand} ${product.type} – ${product.name}`;
}


// Opdracht 5b
function formatPrice(productPrice) {
  return `€ ${productPrice},-`;
}


// Opdracht 5c
function screenSizesToString(product) {
  const screenSizes = product.availableSizes;
  let string = '';
  for (let i = 0; i < screenSizes.length; i++) {
    string += `${screenSizes[i]} inch (${(screenSizes[i] * 2.54).toFixed(0)} cm)`;
    if (i !== screenSizes.length - 1) {
      string += ' | ';
    }
  }
  return string;
}


// Opdracht 5d



// Opdracht 5e



// #### Bonusopdracht
