import { applyMiddleware, createStore } from "redux";
import { ProductListState } from "../reducers/ProductListReducer";
import { ProductViewState } from "../reducers/ProductViewReducer";
import rootReducer from "../reducers/rootRecucer";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../sagas/rootSaga";

const sagaMiddleWare = createSagaMiddleware();
export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleWare))
);

sagaMiddleWare.run(rootSaga);

export interface AppState {
  productList: ProductListState;
  productView: ProductViewState;
}
