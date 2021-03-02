export const userData = {
  userId: "29ydf321hgbnfq",
  username: "milim_nava",
  loved: [
    { dateLoved: Date.now(), prodId: "nf734" },
    { dateLoved: Date.now() - 5, prodId: "nt724" },
  ],
  carts: [
    {
      dateCreated: Date.now(),
      prodId: "nf734",
      quantity: 2,
      price: 200.35,
      totalPrice: 400.7,
    },
  ],
};

export const products = [
  {
    prodId: "nf734",
    productName: "tv",
    dateCreated: Date.now(),
    stocks: 10,
    price: 250,
    lovedCount: 199,
    cartCount: 88,
    image: "/media/prods/nf734.png",
  },
  {
    prodId: "nt724",
    productName: "cat",
    dateCreated: Date.now(),
    stocks: 5,
    price: 312,
    lovedCount: 1,
    cartCount: 8,
    image: "/media/prods/nt724.png",
  },
];
