import Item1 from "../../images/ProductD.png";
import Item2 from "../../images/ProductB.png";
import Item3 from "../../images/ProductC.png";
import Item4 from "../../images/ProductA.png";
import Item5 from "../../images/ProductD.png";
import Item6 from "../../images/ProductC.png";
import {
  ADD_TO_CART,
  REMOVE_ITEM,
  SUB_QUANTITY,
  ADD_QUANTITY,
  SHOW_PRODUCT,
  CLEAR_PRODUCT,
  SWITCH_CURRENCY_USD,
  SWITCH_CURRENCY_EUR,
  SWITCH_CURRENCY_YEN
} from "../Actions/Action-Types/cart-actions";

const initState = {
  items: [
    {
      id: 1,
      stock: 6,
      title: "Apollo",
      classification: "Running Short",
      description:
        "Find stunning women's cocktail dresses and party dresses. Stand out in lace and metallic cocktail dresses and party dresses from all your favorite brands.",
      price: 50,
      img: Item1,
    },
    {
      id: 2,
      stock: 5,
      title: "Apollo",
      classification: "Running Short",
      description:
        "Find stunning women's cocktail dresses and party dresses. Stand out in lace and metallic cocktail dresses and party dresses from all your favorite brands.",
      price: 60,
      img: Item2,
    },
    {
      id: 3,
      stock: 0,
      title: "Apollo",
      classification: "Running Short",
      description:
        "Find stunning women's cocktail dresses and party dresses. Stand out in lace and metallic cocktail dresses and party dresses from all your favorite brands.",
      price: 70,
      img: Item3,
    },
    {
      id: 4,
      stock: 3,
      title: "Apollo",
      classification: "Running Short",
      description:
        "Find stunning women's cocktail dresses and party dresses. Stand out in lace and metallic cocktail dresses and party dresses from all your favorite brands.",
      price: 80,
      img: Item4,
    },
    {
      id: 5,
      stock: 3,
      title: "Apollo",
      classification: "Running Short",
      description:
        "Find stunning women's cocktail dresses and party dresses. Stand out in lace and metallic cocktail dresses and party dresses from all your favorite brands.",
      price: 90,
      img: Item5,
    },
    {
      id: 6,
      stock: 3,
      title: "Apollo",
      classification: "Running Short",
      description:
        "Find stunning women's cocktail dresses and party dresses. Stand out in lace and metallic cocktail dresses and party dresses from all your favorite brands.",
      price: 100,
      img: Item6,
    },
  ],
  addedItems: [],
  total: 0,
  quantity: 0,
  stock: 0,
  productPrice: 1,
  currencySymbol: "$",
  showItems: [],
  total: 0,
  quantity: 0,
  currency: 2
};

const cartReducer = (state = initState, action) => {
  if (action.type === SWITCH_CURRENCY_USD) {
    let newCurrencySymbol = ["$"];
    return {
      ...state,
      productPrice: 1,
      currencySymbol: newCurrencySymbol.toString(),
    };
  }
  if (action.type === SWITCH_CURRENCY_EUR) {
    let newCurrencySymbol = ["€"];
    return {
      ...state,
      productPrice: 0.91,
      currencySymbol: newCurrencySymbol.toString(),
    };
  }
  if (action.type === SWITCH_CURRENCY_YEN) {
    let newCurrencySymbol = ["¥"];
    return {
      ...state,
      productPrice: 121.68,
      currencySymbol: newCurrencySymbol.toString(),
    };
  }
  if (action.type === SHOW_PRODUCT) {
    let showItem = state.items.find((item) => item.id === action.id);
    let existed_item = state.showItems.find((item) => action.id === item.id);
    if (existed_item) {
      showItem.quantity += 1;
      return {
        ...state,
        total: state.total + showItem.price,
        quantity: (state.quantity += 1),
      };
    } else {
      showItem.quantity = 1;
      let newTotal = state.total + showItem.price;
      let newQuantity = state.quantity + 1;
      return {
        ...state,
        showItems: [...state.showItems, showItem],
        total: newTotal,
        quantity: newQuantity,
      };
    }
  }
  if (action.type === CLEAR_PRODUCT) {
    let itemToRemove = state.showItems.find((item) => action.id === item.id);
    let new_items = state.showItems.filter((item) => action.id !== item.id);
    let newTotal = state.total - itemToRemove.price * itemToRemove.quantity;
    console.log(itemToRemove);
    let newQuantity = state.quantity - itemToRemove.quantity;
    return {
      ...state,
      showItems: new_items,
      total: newTotal,
      quantity: newQuantity,
    };
  }
  if (action.type === ADD_TO_CART) {
    let addedItem = state.items.find((item) => item.id === action.id);
    let existed_item = state.addedItems.find((item) => action.id === item.id);
    if (existed_item) {
      addedItem.quantity += 1;
      addedItem.stock -= 1;
      return {
        ...state,
        total: state.total + addedItem.price,
        quantity: state.quantity += 1,
        stock: state.stock -= 1
      };
    } else {
      addedItem.quantity = 1;
      addedItem.stock -= 1;
      let newTotal = state.total + addedItem.price;
      let newQuantity = state.quantity + 1;
      let newStock = state.stock + 1;
      return {
        ...state,
        addedItems: [...state.addedItems, addedItem],
        total: newTotal,
        quantity: newQuantity,
        stock: newStock,
      };
    }
  }
  if (action.type === REMOVE_ITEM) {
    let itemToRemove = state.addedItems.find((item) => action.id === item.id);
    let new_items = state.addedItems.filter((item) => action.id !== item.id);
    let newTotal = state.total - itemToRemove.price * itemToRemove.quantity;
    console.log(itemToRemove);
    let newQuantity = state.quantity - itemToRemove.quantity;
    let newStock = state.stock + 1;
    return {
      ...state,
      addedItems: new_items,
      total: newTotal,
      quantity: newQuantity,
      stock: newStock,
    };
  }
  if (action.type === ADD_QUANTITY) {
    let addedItem = state.items.find((item) => item.id === action.id);
    addedItem.quantity += 1;
    addedItem.stock -= 1;
    let newTotal = state.total + addedItem.price;
    let newQuantity = state.quantity + 1;
    let newStock = state.stock - 1;
    return {
      ...state,
      total: newTotal,
      quantity: newQuantity,
      stock: newStock,
    };
  }
  if (action.type === SUB_QUANTITY) {
    let addedItem = state.items.find((item) => item.id === action.id);
    if (addedItem.quantity === 1) {
      let new_items = state.addedItems.filter((item) => item.id !== action.id);
      let newTotal = state.total - addedItem.price;
      let newQuantity = state.quantity - 1;
      addedItem.stock += 1;
      let newStock = state.stock + 1;
      return {
        ...state,
        addedItems: new_items,
        total: newTotal,
        quantity: newQuantity,
        stock: newStock,
      };
    } else {
      addedItem.quantity -= 1;
      addedItem.stock += 1;
      let newTotal = state.total - addedItem.price;
      let newQuantity = state.quantity - 1;
      let newStock = state.stock + 1;
      return {
        ...state,
        total: newTotal,
        quantity: newQuantity,
        stock: newStock,
      };
    }
  } else {
    return state;
  }
};

export default cartReducer;
