import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/root.reducer';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import throttle from 'lodash/throttle';
import { saveRecentTerms } from '../services/localStorage';

export default function configureStore(initialState) {
  const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunk)),
  );

  store.subscribe(throttle(() => {
    saveRecentTerms(store.getState().searchReducer.recentTerms);
  }, 1000));

  return store;
}
