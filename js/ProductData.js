module.exports = {
  // Load Mock Product Data Into localStorage
  init: function () {
    localStorage.clear();
    localStorage.setItem('product', JSON.stringify([
      {
        id: '0011001',
        name: 'One Plus 6',
        image: 'oneplus6.png',
        description: 'The Speed You Need - Buy the best 19:9 Optic AMOLED Smartphone flagship OnePlus 6 on OnePlus.in, Comes in Mirror Black, Midnight Black or Silk White.',
        variants: [
          {
            sku: '123123',
            type: '64 GB',
            price: 34999,
            inventory: 1

          },
          {
            sku: '123124',
            type: '128 GB',
            price: 39999,
            inventory: 5
          },
          {
            sku: '1231235',
            type: '256 GB',
            price: 43999,
            inventory: 3
          }
        ]
      }
    ]));
  }

};