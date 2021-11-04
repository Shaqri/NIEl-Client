import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import userReducer from './userReducer';
import genreReducer from './genreReducer';
import beatReducer from './beatReducer';
import licenseReducer from './licenseReducer';

const rootReducer = combineReducers({
  user: userReducer,
  beat: beatReducer,
  genre: genreReducer,
  license: licenseReducer
});

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ["beat"]
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default () => {
  const store = createStore(persistedReducer, applyMiddleware(thunk));
  const persistor = persistStore(store);
  return { store, persistor }
}
