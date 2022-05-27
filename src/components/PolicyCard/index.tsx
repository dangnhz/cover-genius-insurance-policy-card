import React, {useState} from "react";
import Arrow from "../Icons/Arrow";
import { StyledPolicyCard } from "../styles/PolicyCard/PolicyCard.styled";
import { StyledPolicyCardLabel } from "../styles/PolicyCard/PolicyCardLabel.styled";
import { StyledPolicyCardPartner } from "../styles/PolicyCard/PolicyCardPartner.styled";
import { StyledPolicyCardSummary } from "../styles/PolicyCard/PolicyCardSummary.styled";
import { StyledPolicyCardSummaryItem } from "../styles/PolicyCard/PolicyCardSummaryItem.styled";
import { InsurancePolicyType } from "../../features/insurance-policy/insurancePolicySlice";
import Moment from "react-moment";
import { getRenewalDate } from "../../utils";

interface Props {
  policy:InsurancePolicyType,
  index?: number
}

const PolicyCard = ({index, policy}: Props ) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <StyledPolicyCard data-testid={`policy-card-item-${index}`} className={`${isActive ? 'is-active' : ''}`} isActive={isActive} onClick={() => setIsActive((prev) => !prev)}>
      <StyledPolicyCardLabel isActive={isActive}>
        <div className="arrow">
          <Arrow />
        </div>
        <div className="content">
          <div className="title">{policy.title}</div>
          <div className="description"> {policy.id} | {policy.description} </div>
        </div>
      </StyledPolicyCardLabel>

      <StyledPolicyCardSummary>
        {policy.payment_date && <StyledPolicyCardSummaryItem className="payment-date">
          <div className="value"> <Moment format="DD-MMM-YYYY" >{policy.payment_date}</Moment></div>
          <div className="label">Payment date</div>
        </StyledPolicyCardSummaryItem>}

        <StyledPolicyCardSummaryItem className="coverage-date">
          <div className="value">
            { policy.coverage_start_date && <Moment format="DD-MMM-YYYY" >{policy.coverage_start_date}</Moment>}
            {policy.coverage_end_date && ( <>{' '}to <Moment format="DD-MMM-YYYY" >{policy.coverage_end_date}</Moment></>)}
          </div>
          <div className="label">{ policy.type === 'parcel' ? 'Date shipped' : 'Coverage dates'}</div>
        </StyledPolicyCardSummaryItem>

        <StyledPolicyCardSummaryItem className="price">
          <div className="value">{policy.premium_formatted}</div>
          <div className="label">Price/Premium</div>
        </StyledPolicyCardSummaryItem>

       {policy.renewal && policy.coverage_end_date && <StyledPolicyCardSummaryItem className="renewal-date">
          <div className="value"><Moment format="DD-MMM-YYYY" >{getRenewalDate(policy.coverage_end_date, policy.renewal)}</Moment></div>
          <div className="label">Renewal date</div>
        </StyledPolicyCardSummaryItem>}

      </StyledPolicyCardSummary>

      <StyledPolicyCardPartner>
        <img title={policy.partner.name} src={policy.partner.logo} alt={policy.partner.name} />
      </StyledPolicyCardPartner>
    </StyledPolicyCard>
  );
};

export default PolicyCard;
