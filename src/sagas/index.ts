import { all } from "redux-saga/effects";
import insurancePolicySaga from '../features/insurance-policy/insurancePolicySaga';

export default function* rootSaga() {
    yield all([
        insurancePolicySaga()
    ])
}
