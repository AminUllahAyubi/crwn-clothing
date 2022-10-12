const SHOP_DATA = [
  {
    id: 1,
    title: 'Hats',
    routeName: 'hats',
    items: [
      {
        id: 1,
        name: 'Brown Brim',
        imageUrl: '../../../images/hats/h1.jpg',
        price: 25
      },
      {
        id: 2,
        name: 'Blue Beanie',
        imageUrl: '../../../images/hats/h2.jpg',
        price: 18
      },
      {
        id: 3,
        name: 'Brown Cowboy',
        imageUrl: '../../../images/hats/h3.jpg',
        price: 35
      },
      {
        id: 4,
        name: 'Grey Brim',
        imageUrl: '../../../images/hats/h4.jpg',
        price: 25
      },
      {
        id: 5,
        name: 'Green Beanie',
        imageUrl: 'https://i.ibb.co/YTjW3vF/green-beanie.png',
        price: 18
      },
      {
        id: 6,
        name: 'Palm Tree Cap',
        imageUrl: 'https://i.ibb.co/rKBDvJX/palm-tree-cap.png',
        price: 14
      },
      {
        id: 7,
        name: 'Red Beanie',
        imageUrl: 'https://i.ibb.co/bLB646Z/red-beanie.png',
        price: 18
      },
      {
        id: 8,
        name: 'Wolf Cap',
        imageUrl: 'https://i.ibb.co/1f2nWMM/wolf-cap.png',
        price: 14
      },
      {
        id: 9,
        name: 'Blue Snapback',
        imageUrl: 'https://i.ibb.co/X2VJP2W/blue-snapback.png',
        price: 16
      }
    ]
  },
  {
    id: 2,
    title: 'Sneakers',
    routeName: 'sneakers',
    items: [
      {
        id: 10,
        name: 'Adidas NMD',
        imageUrl: '../../../images/sneakers/s1.jpg',
        price: 220
      },
      {
        id: 11,
        name: 'Adidas Yeezy',
        imageUrl: '../../../images/sneakers/s2.jpeg',
        price: 280
      },
      {
        id: 12,
        name: 'Black Converse',
        imageUrl: '../../../images/sneakers/s3.jpg',
        price: 110
      },
      {
        id: 13,
        name: 'Nike White AirForce',
        imageUrl: '../../../images/sneakers/s4.jpeg',
        price: 160
      },
      {
        id: 14,
        name: 'Nike Red High Tops',
        imageUrl: 'https://i.ibb.co/QcvzydB/nikes-red.png',
        price: 160
      },
      {
        id: 15,
        name: 'Nike Brown High Tops',
        imageUrl: 'https://i.ibb.co/fMTV342/nike-brown.png',
        price: 160
      },
      {
        id: 16,
        name: 'Air Jordan Limited',
        imageUrl: 'https://i.ibb.co/w4k6Ws9/nike-funky.png',
        price: 190
      },
      {
        id: 17,
        name: 'Timberlands',
        imageUrl: 'https://i.ibb.co/Mhh6wBg/timberlands.png',
        price: 200
      }
    ]
  },
  {
    id: 3,
    title: 'Jackets',
    routeName: 'jackets',
    items: [
      {
        id: 18,
        name: 'Black Jean Shearling',
        imageUrl: '../../../images/jackets/cl1.jpeg',
        price: 125
      },
      {
        id: 19,
        name: 'Blue Jean Jacket',
        imageUrl:'../../../images/jackets/cl2.jpg',
        price: 90
      },
      {
        id: 20,
        name: 'Grey Jean Jacket',
        imageUrl: '../../../images/jackets/cl2.jpeg',
        price: 90
      },
      {
        id: 21,
        name: 'Brown Shearling',
        imageUrl: '../../../images/jackets/cl4.jpg',
        price: 165
      },
      {
        id: 22,
        name: 'Tan Trench',
        imageUrl: 'https://i.ibb.co/M6hHc3F/brown-trench.png',
        price: 185
      }
    ]
  },
  {
    id: 4,
    title: 'Womens',
    routeName: 'womens',
    items: [
      {
        id: 23,
        name: 'Blue Tanktop',
        imageUrl: '../../../images/woman/w1.jpeg',
        price: 25
      },
      {
        id: 24,
        name: 'Floral Blouse',
        imageUrl: '../../../images/woman/free-crochet-beanie-pattern-square-d787bbe.jpg',
        price: 20
      },
      {
        id: 25,
        name: 'Floral Dress',
        imageUrl:'../../../images/woman/w1.jpg',
        price: 80
      },
      {
        id: 26,
        name: 'Red Dots Dress',
        imageUrl:'../../../images/woman/w2.jpg',
        price: 80
      },
      {
        id: 27,
        name: 'Striped Sweater',
        imageUrl: 'https://i.ibb.co/KmSkMbH/striped-sweater.png',
        price: 45
      },
      {
        id: 28,
        name: 'Yellow Track Suit',
        imageUrl: 'https://i.ibb.co/v1cvwNf/yellow-track-suit.png',
        price: 135
      },
      {
        id: 29,
        name: 'White Blouse',
        imageUrl: 'https://i.ibb.co/qBcrsJg/white-vest.png',
        price: 20
      }
    ]
  },
  {
    id: 5,
    title: 'Mens',
    routeName: 'mens',
    items: [
      {
        id: 30,
        name: 'Camo Down Vest',
        imageUrl: '../../../images/man/m1.jpg',
        price: 325
      },
      {
        id: 31,
        name: 'Floral T-shirt',
        imageUrl: '../../../images/man/m2.jpg',
        price: 20
      },
      {
        id: 32,
        name: 'Black & White Longsleeve',
        imageUrl:'../../../images/man/m3.jpg',
        price: 25
      },
      {
        id: 33,
        name: 'Pink T-shirt',
        imageUrl: '../../../images/man/m4.jpg',
        price: 25
      },
      {
        id: 34,
        name: 'Jean Long Sleeve',
        imageUrl:'../../../images/man/m5.jpeg',
        price: 40
      },
      {
        id: 35,
        name: 'Burgundy T-shirt',
        imageUrl: 'https://i.ibb.co/mh3VM1f/polka-dot-shirt.png',
        price: 25
      }
    ]
  }
];

export default SHOP_DATA;
