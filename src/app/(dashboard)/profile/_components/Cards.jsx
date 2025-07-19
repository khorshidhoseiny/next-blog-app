import { toPersianDigits } from "@/utils/numberFormatter";
import {
  UserGroupIcon,
  ChatBubbleBottomCenterTextIcon,
  DocumentIcon,
} from "@heroicons/react/24/solid";

const iconMap = {
  comments: ChatBubbleBottomCenterTextIcon,
  users: UserGroupIcon,
  posts: DocumentIcon,
};
const CartColorStyle = {
  primary:
    "bg-primary-100/20 border border-primary-500 first:[&>div]:bg-primary-500",
  secondary:
    "bg-secondary-100/20 border border-secondary-500 first:[&>div]:bg-secondary-500",
  amber: "bg-amber-100/20 border border-amber-500 first:[&>div]:bg-amber-500",
};

export function Card({ title, value, color, type }) {
  const Icon = iconMap[type];

  return (
    <div
      className={`rounded-2xl ${CartColorStyle[color]}  flex md:flex-col items-end p-5 md:justify-center justify-between shadow-sm`}
    >
      <div className="rounded-full flex justify-center items-center my-auto w-14 h-14 p-2">
        {Icon ? <Icon className="h-7 text-secondary-0 w-7" /> : null}
      </div>
      <div className="flex flex-col mt-5 md:text-base text-lg  font-semibold text-secondary-500">
        <h1>تعداد {title} </h1>
        <p
          className={`truncate flex justify-end items-start font-semibold text-lg  text-secondary-900`}
        >
          {toPersianDigits(value)}
        </p>
      </div>
    </div>
  );
}
