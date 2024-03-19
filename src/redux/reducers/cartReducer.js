import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : {
        vegcheeseBurger: {
          quantity: 0,
          price: 200,
        },
        nonvegCheeseBurger: {
          quantity: 0,
          price: 400,
        },
        burgerWithFries: {
          quantity: 0,
          price: 600,
        },
      },
  subTotal: localStorage.getItem("cartPrices")
    ? JSON.parse(localStorage.getItem("cartPrices")).subTotal
    : 0,
  tax: localStorage.getItem("cartPrices")
    ? JSON.parse(localStorage.getItem("cartPrices")).tax
    : 0,
  shippingCharges: localStorage.getItem("cartPrices")
    ? JSON.parse(localStorage.getItem("cartPrices")).shippingCharges
    : 0,
  total: localStorage.getItem("cartPrices")
    ? JSON.parse(localStorage.getItem("cartPrices")).total
    : 0,
  shippingInfo: localStorage.getItem("shippingInfo")
    ? JSON.parse(localStorage.getItem("shippingInfo"))
    : {},
};

export const cartReducer = createReducer(initialState, {
  vegcheeseBurgerIncrement: (state) => {
    state.cartItems.vegcheeseBurger.quantity += 1;
  },
  nonvegCheeseBurgerIncrement: (state) => {
    state.cartItems.nonvegCheeseBurger.quantity += 1;
  },
  burgerWithFriesIncrement: (state) => {
    state.cartItems.burgerWithFries.quantity += 1;
  },
  vegcheeseBurgerDecrement: (state) => {
    state.cartItems.vegcheeseBurger.quantity -= 1;
  },
  nonvegCheeseBurgerDecrement: (state) => {
    state.cartItems.nonvegCheeseBurger.quantity -= 1;
  },
  burgerWithFriesDecrement: (state) => {
    state.cartItems.burgerWithFries.quantity -= 1;
  },

  calculatePrice: (state) => {
    state.subTotal =
      state.cartItems.vegcheeseBurger.price *
        state.cartItems.vegcheeseBurger.quantity +
      state.cartItems.nonvegCheeseBurger.price *
        state.cartItems.nonvegCheeseBurger.quantity +
      state.cartItems.burgerWithFries.price *
        state.cartItems.burgerWithFries.quantity;

    state.tax = state.subTotal * 0.18;
    state.shippingCharges = state.subTotal > 1000 ? 0 : 40;
    state.total = state.subTotal + state.tax + state.shippingCharges;
  },

  emptyState: (state) => {
    state.cartItems = {
      vegcheeseBurger: {
        quantity: 0,
        price: 200,
      },
      nonvegCheeseBurger: {
        quantity: 0,
        price: 400,
      },
      burgerWithFries: {
        quantity: 0,
        price: 600,
      },
    };

    state.subTotal = 0;
    state.shippingCharges = 0;
    state.tax = 0;
    state.total = 0;
  },

  addShippingInfo: (state, action) => {
    state.shippingInfo = {
      hNo: action.payload.hNo,
      city: action.payload.city,
      state: action.payload.state,
      country: action.payload.country,
      pinCode: action.payload.pinCode,
      phoneNo: action.payload.phoneNo,
    };
  },
});
