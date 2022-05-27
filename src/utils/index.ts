import moment from "moment";

const getRenewalDate = (endDate: string, renewal: string) : moment.Moment => {
  let renewalDate : moment.Moment;

  switch (renewal) {
    case "weekly":
      renewalDate = moment(endDate).subtract(1, "weeks");
      break;
    case "monthly":
      renewalDate = moment(endDate).subtract(1, "months");
      break;
    case "annual":
      renewalDate = moment(endDate).subtract(1, "years");
      break;
    default:
      renewalDate = moment(endDate);
      break;
  }

  return renewalDate;
};

export { getRenewalDate };
