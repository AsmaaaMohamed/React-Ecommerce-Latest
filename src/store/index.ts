import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart/cartSlice";
import wishlistReducer from "./wishlist/wishlistSlice";
import authReducer from "./auth/authSlice";
import ordersReducer from "./orders/ordersSlice";
import storage from "redux-persist/lib/storage";
import {persistStore , persistReducer , FLUSH , REHYDRATE ,PAUSE ,PERSIST, PURGE , REGISTER} from "redux-persist"
import { categoriesApiSlice } from "./categories/api/categoriesApiSlice";
import { productsApiSlice } from "./products/api/productsApiSlice";

const rootPersistConfig = {
  key: "root",
  storage,
  whitelist: ["cart", "auth"],
};

const authPersistConfig = {
  key: "auth",
  storage,
  whiteList: ["user", "accessToken"],
};

// nested persist
const cartPersistConfig ={
    key:"cart",
    storage,
    whitelist:["items"],
}

const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, authReducer),
  orders: ordersReducer,
  [categoriesApiSlice.reducerPath]: categoriesApiSlice.reducer,
  [productsApiSlice.reducerPath]: productsApiSlice.reducer,
  cart: persistReducer(cartPersistConfig, cartReducer),
  wishlist: wishlistReducer,
});
const persistedReducer = persistReducer(rootPersistConfig, rootReducer);
const reduxPersistActions = [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER];
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [...reduxPersistActions],
      },
    }).concat(categoriesApiSlice.middleware).concat(productsApiSlice.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
const persistor = persistStore(store)
export { store , persistor};