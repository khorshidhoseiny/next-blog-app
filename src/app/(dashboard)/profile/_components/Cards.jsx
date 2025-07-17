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
  green: "bg-green-300/15 border border-green-500  first:[&>div]:bg-green-500",
  blue: "bg-blue-300/15 border border-blue-500 first:[&>div]:bg-blue-500",
  pink: "bg-pink-300/15 border border-pink-500 first:[&>div]:bg-pink-500",
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
