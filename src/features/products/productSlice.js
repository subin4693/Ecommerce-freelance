import { createSlice, current } from "@reduxjs/toolkit";

// Initial state with product details, cart, and wishlist
const initialState = {
  products: [
    {
      _id: "prod1",
      name: "Dress One",
      price: "500",
      brand: "Adidas",
      isOutOfStock: true,
      quantity: 0,
      description: "Description for the product Description for the product",
      image:
        "https://olliesplace.com.au/cdn/shop/files/IPBG2271-BK-baby-girls-blue-rosel-dress-online-sale_eb8f7d1f-2143-4b84-a5c3-78fd2a33b48b.jpg?v=1722494617&width=533",
    },
    {
      _id: "prod2",
      name: "Dress Two",
      price: "600",
      brand: "Nike",
      isOutOfStock: false,
      quantity: 0,
      description: "Description for another product",
      image:
        "https://olliesplace.com.au/cdn/shop/files/IPBG2271-BK-baby-girls-blue-rosel-dress-online-sale_eb8f7d1f-2143-4b84-a5c3-78fd2a33b48b.jpg?v=1722494617&width=533",
    },
  ],
  cart: [],
  wishlist: [],
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addQuantity: (state, action) => {
      const { payload: id } = action;
      let updatedProduct = null;

      state.products = state.products.map((prod) => {
        if (prod._id === id) {
          updatedProduct = {
            ...prod,
            quantity: (prod.quantity || 0) + 1,
          };
          return updatedProduct;
        }
        return prod;
      });

      const cartIndex = state.cart.findIndex((prod) => prod._id === id);
      if (cartIndex !== -1) {
        state.cart[cartIndex].quantity += 1;
      } else if (updatedProduct) {
        state.cart.push({ ...updatedProduct, quantity: 1 });
      }

      const wishlistIndex = state.wishlist.findIndex((prod) => prod._id === id);
      if (wishlistIndex !== -1) {
        state.wishlist[wishlistIndex].quantity += 1;
      }
    },

    seperateQuantity: (state, action) => {
      const { payload: id } = action;
      let updatedProduct = null;

      state.products = state.products.map((prod) => {
        if (prod._id === id) {
          updatedProduct = {
            ...prod,
            quantity: (prod.quantity || 0) - 1,
          };
          return updatedProduct;
        }
        return prod;
      });

      const cartIndex = state.cart.findIndex((prod) => prod._id === id);
      if (cartIndex !== -1) {
        state.cart[cartIndex].quantity -= 1;

        if (state.cart[cartIndex].quantity == 0) {
          state.cart.splice(cartIndex, 1);
        }
      } else if (updatedProduct) {
        state.cart.push({ ...updatedProduct, quantity: 1 });
      }

      const wishlistIndex = state.wishlist.findIndex((prod) => prod._id === id);
      if (wishlistIndex !== -1) {
        state.wishlist[wishlistIndex].quantity -= 1;
      }
    },

    removeFromCart: (state, action) => {
      const { payload: id } = action;
      const cartIndex = state.cart.findIndex((prod) => prod._id === id);
      state.cart.splice(cartIndex, 1);

      state.products = state.products.map((prod) => {
        if (prod._id === id) {
          return {
            ...prod,
            quantity: 0,
          };
        }
        return prod;
      });

      state.wishlist = state.wishlist.map((prod) => {
        if (prod._id === id) {
          return {
            ...prod,
            quantity: 0,
          };
        }
        return prod;
      });
    },

    addToWishList: (state, action) => {
      const { payload: id } = action;

      const wishlistIndex = state.wishlist.findIndex((prod) => prod._id == id);
      if (wishlistIndex != -1) return;

      let productIndex = -1;
      state.products = state.products.map((prod, index) => {
        if (prod._id === id) {
          productIndex = index;
          return {
            ...prod,
            isInWishList: true,
          };
        }
        return prod;
      });

      state.wishlist.push({ ...state.products[productIndex] });
    },

    removeFromWishList: (state, action) => {
      const { payload: id } = action;
      console.log(id);
      const wishlistIndex = state.wishlist.findIndex((prod) => prod._id == id);
      if (wishlistIndex == -1) return;

      state.products = state.products.map((prod) => {
        if (prod._id === id) {
          return {
            ...prod,
            isInWishList: false,
          };
        }
        return prod;
      });

      state.wishlist.splice(wishlistIndex, 1);
    },
  },
});

export const {
  addQuantity,
  seperateQuantity,
  removeFromCart,
  addToWishList,
  removeFromWishList,
} = productSlice.actions;

export default productSlice.reducer;
