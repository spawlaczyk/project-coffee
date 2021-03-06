export const select = {
  templateOf: {
    homePage: '#template-home',
    productsPage: '#template-products',
  },

  containerOf: {
    home: '.home-wrapper',
    products: '.product-list',
    contact: '.contact-wrapper',
    pages: '#pages',
    homeProductList: '.home-product-list',
  },

  nav: {
    links: '.nav-links a',
  },

  all: {
    productsList: '#product-list > .product',
  }
};

export const classNames = {
  nav: {
    active: 'active',
  },

  pages: {
    active: 'active',
  }
};

export const settings = {
  db: {
    url: '//' + window.location.hostname + (window.location.hostname=='localhost' ? ':3131' : ''),
    products: 'products',
  },
};

export const templates = {
  homePage: Handlebars.compile(document.querySelector(select.templateOf.homePage).innerHTML),
  productsPage: Handlebars.compile(document.querySelector(select.templateOf.productsPage).innerHTML),
};
