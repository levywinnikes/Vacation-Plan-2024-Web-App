import { createStore } from 'redux';
import { persistStore } from 'redux-persist';
import persistReducerConfig from '../config/persistReducerConfig';
import reducer from '../reducers';

const store = createStore(persistReducerConfig(reducer));
const persistor = persistStore(store);

export { store, persistor };
 