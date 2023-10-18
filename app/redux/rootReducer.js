import productReducer from "./product/reducer";
import cartReducer from "./cart/reducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    products: productReducer, cart: cartReducer
});

export default rootReducer;