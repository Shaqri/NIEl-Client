import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import userReducer from './userReducer';
import genreReducer from './genreReducer';
import beatReducer from './beatReducer';

const rootReducer = combineReducers({
  user: userReducer,
  beat: beatReducer,
  genre: genreReducer
});

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default () => {
  const store = createStore(persistedReducer, applyMiddleware(thunk));
  const persistor = persistStore(store);
  return { store, persistor }
}
