import React from "react";

import { StyledPolicyCard } from "../styles/PolicyCard/PolicyCard.styled";
import SkeletonElement from "./SkeletonElement";
import { StyledPolicyCardLabel } from "../styles/PolicyCard/PolicyCardLabel.styled";
import { StyledPolicyCardSummary } from "../styles/PolicyCard/PolicyCardSummary.styled";
import { StyledPolicyCardSummaryItem } from "../styles/PolicyCard/PolicyCardSummaryItem.styled";
import { StyledPolicyCardPartner } from "../styles/PolicyCard/PolicyCardPartner.styled";
import Shimmer from "./Shimmer";
import { StyledSkeletonWrapper } from '../styles/SkeletonWrapper.styled';


const PolicyCardSkeleton = ({index} : {index?: number}) => {
  return (
    <StyledSkeletonWrapper data-testid={`policy-skeleton-item-${index}`} className="skeleton-wrapper">
      <StyledPolicyCard isActive={false}>
        <StyledPolicyCardLabel isActive={false}>
          <div className="arrow">
            <SkeletonElement type="circle" />
          </div>
          <div className="content">
            <SkeletonElement type="heading" />
            <SkeletonElement type="text" />
          </div>
        </StyledPolicyCardLabel>

        <StyledPolicyCardSummary>
          <StyledPolicyCardSummaryItem>
            <SkeletonElement type="heading" />
            <SkeletonElement type="text" />
          </StyledPolicyCardSummaryItem>

          <StyledPolicyCardSummaryItem className="coverage-date">
            <SkeletonElement type="heading" />
            <SkeletonElement type="text" />
          </StyledPolicyCardSummaryItem>

          <StyledPolicyCardSummaryItem>
            <SkeletonElement type="heading" />
            <SkeletonElement type="text" />
          </StyledPolicyCardSummaryItem>

          <StyledPolicyCardSummaryItem>
            <SkeletonElement type="heading" />
            <SkeletonElement type="text" />
          </StyledPolicyCardSummaryItem>
        </StyledPolicyCardSummary>

        <StyledPolicyCardPartner>
          <SkeletonElement type="logo" />
        </StyledPolicyCardPartner>
      </StyledPolicyCard>
      <Shimmer />
    </StyledSkeletonWrapper>
  );
};

export default PolicyCardSkeleton;
