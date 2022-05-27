import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface InsurancePolicyType {
  coverage_end_date: string | null;
  coverage_start_date: string;
  description: string;
  id: string;
  partner: {id: string; name: string; logo: string;};
  payment_date: string;
  premium: number;
  premium_formatted: string;
  renewal: string | null;
  status: string;
  title: string;
  type: string;
}


export interface insurancePolicyState {
  policies: InsurancePolicyType[];
  isLoading: boolean,
  error: string | null,

}

const initialState: insurancePolicyState = {
  policies: [],
  isLoading: false,
  error: null
};

export const insurancePolicySlice = createSlice({
  name: "insurance-policy",
  initialState,
  reducers: {
    getInsurancePolicyFetch: (state) => {
      state.isLoading = true;
    },
    getInsurancePolicySuccess: (state, action: PayloadAction<InsurancePolicyType[]>) => {
      state.policies = action.payload
      state.isLoading = false;
    },
    getInsurancePolicyFailure: (state, action: PayloadAction<string>) => {
        state.isLoading = false;
        state.error = action.payload;
      },
  },
});

export const { getInsurancePolicyFetch, getInsurancePolicySuccess, getInsurancePolicyFailure } = insurancePolicySlice.actions;

export default insurancePolicySlice.reducer;
