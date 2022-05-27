import { call, put, takeEvery } from "redux-saga/effects";
import { getInsurancePolicySuccess, getInsurancePolicyFailure } from "./insurancePolicySlice";
import {InsurancePolicyType} from './insurancePolicySlice'


export const apiEndpoint = "https://7946a218-d225-4d0e-80ac-450bbc9713a0.mock.pstmn.io/booking";




export function* fetchInsurancePolicy(){
    try {
        
       const policies : InsurancePolicyType[] = yield call(() => fetch(apiEndpoint).then(res => res.json()).then(data => data.policies));

       yield put(getInsurancePolicySuccess(policies))

    } catch (error) {
        let errorMessage = "Failed to do something exceptional";

        if (error instanceof Error) {
            errorMessage = error.message;
          }

        yield put(getInsurancePolicyFailure(errorMessage))
    }
}

export default function* insurancePolicySaga() {
    yield takeEvery("insurance-policy/getInsurancePolicyFetch",fetchInsurancePolicy )
}