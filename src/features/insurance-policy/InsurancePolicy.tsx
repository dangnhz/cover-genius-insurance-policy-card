import React, { useEffect } from "react";
import PolicyCard from "../../components/PolicyCard";
import PolicyCardSkeleton from "../../components/skeletons/PolicyCardSkeleton";
import { StyledHeader } from "../../components/styles/Header.styled";
import { StyledInsurancePolicy } from "../../components/styles/InsurancePolicy.styled";
import { useSelector, useDispatch } from "react-redux";
import { getInsurancePolicyFetch } from "./insurancePolicySlice";
import { RootState } from "../../app/store";

const InsurancePolicy = () => {

  const { policies, isLoading, error } = useSelector((state: RootState) => state.insurancePolicy);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getInsurancePolicyFetch());
  }, [dispatch]);

  return (
    <StyledInsurancePolicy>
      <StyledHeader>Protection</StyledHeader>
      <div className="insurance-policy-listing">
        {isLoading && [1, 2, 3].map((n, index) => <PolicyCardSkeleton index={index} key={n} />)}
        {!error && !isLoading && policies.map((item, index) => <PolicyCard index={index} policy={item} key={item.id} />)}
        {!isLoading && error && <p>{error}</p>}
      </div>
    </StyledInsurancePolicy>
  );
};

export default InsurancePolicy;
