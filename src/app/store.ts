import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import insurancePolicyReducer from "../features/insurance-policy/insurancePolicySlice";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../sagas";


const sagaMiddleware = createSagaMiddleware();

const middleware = [...getDefaultMiddleware({ thunk: false }), sagaMiddleware];

const store = configureStore({
  reducer: {
    insurancePolicy: insurancePolicyReducer,
  },
  middleware
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
