import { createStore } from 'redux';
import cartReducer from './reducer/cartReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: 'cartItems',
};

const persistedReducer = persistReducer(persistConfig, cartReducer);

const store = createStore(persistedReducer, composeWithDevTools());

export const persistor = persistStore(store);

export default store;
