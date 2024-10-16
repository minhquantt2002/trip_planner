import { Plan, PlanType } from "@/types/types";
import { formatDatetime, formatTime, getRangeTime } from "./datetime";

export interface PlanTypeItemProps {
  planType: PlanType;
  titleRight: string;
  valueLeft: string;
  descriptionRight: string;
  datetime: string;
}

export const formatPlanByPlanItem = (plan: Plan): PlanTypeItemProps[] => {
  switch (plan.plan_type) {
    case "lodging":
      return [
        {
          titleRight: plan.name!,
          descriptionRight: `Checkin: ${formatTime(plan.checkin_at!)}`,
          valueLeft: "",
          datetime: formatDatetime(plan.checkin_at!),
          planType: plan.plan_type,
        },
        {
          titleRight: plan.name!,
          descriptionRight: `Checkout: ${formatTime(plan.checkout_at!)}`,
          valueLeft: "",
          datetime: formatDatetime(plan.checkout_at!),
          planType: plan.plan_type,
        },
      ];

    case "carRental":
      return [
        {
          titleRight: plan.rentalAgency!,
          descriptionRight: `Pick up: ${formatTime(plan.pickup?.datetime!)}`,
          valueLeft: "",
          datetime: formatDatetime(plan.pickup?.datetime!),
          planType: plan.plan_type,
        },
        {
          titleRight: plan.rentalAgency!,
          descriptionRight: `Drop-off: ${formatTime(plan.drop_off?.datetime!)}`,
          valueLeft: "",
          datetime: formatDatetime(plan.drop_off?.datetime!),
          planType: plan.plan_type,
        },
      ];

    case "flight":
      return [
        {
          titleRight: "Flight",
          descriptionRight: `${plan.airline}\nArriving in ${getRangeTime(plan.departure?.datetime!, plan.arrival?.datetime!)} at ${formatTime(plan.pickup?.datetime!)}`,
          valueLeft: formatTime(plan.departure?.datetime!),
          datetime: formatDatetime(plan.departure?.datetime!),
          planType: plan.plan_type,
        },
      ];

    case "boat":
      return [
        {
          titleRight: plan.name!,
          descriptionRight: plan.arrival?.address!,
          valueLeft: formatTime(plan.departure?.datetime!),
          datetime: formatDatetime(plan.departure?.datetime!),
          planType: plan.plan_type,
        },
      ];

    case "train":
      return [
        {
          titleRight: plan.name!,
          descriptionRight: plan.arrival?.address!,
          valueLeft: formatTime(plan.departure?.datetime!),
          datetime: formatDatetime(plan.departure?.datetime!),
          planType: plan.plan_type,
        },
      ];

    default:
      return [
        {
          titleRight: plan.name!,
          descriptionRight: "",
          valueLeft: formatTime(plan.start_datetime!),
          datetime: formatDatetime(plan.start_datetime!),
          planType: plan.plan_type,
        },
      ];
  }
};
