// add to cart
export const addToCart = ({
  dateCreated,
  prodId,
  quantity,
  price,
  totalPrice,
}) => ({
  type: "ADD_TO_CART",
  product: {
    dateCreated,
    prodId,
    quantity,
    price,
    totalPrice,
  },
});

// add to love
export const addToLove = ({ dateCreated, prodId }) => ({
  type: "ADD_TO_LOVE",
  product: { dateCreated, prodId },
});

// chat a product with owner
export const startChat = (prodId) => ({
  type: "START_CHAT",
  product: { prodId },
});

// share a product
export const startShare = (prodId) => ({
  type: "START_SHARE",
  product: { prodId },
});
