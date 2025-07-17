import Table from "@/ui/Table";
import { toLocalDateShort } from "@/utils/dateFormatter";
import { toPersianDigits } from "@/utils/numberFormatter";
import truncateText from "@/utils/trancateText";
import React from "react";
import { DeletePost, Editpost } from "../../../../../ui/Buttons";

function PostRow({ post, index }) {
  const { text, author, category, createdAt, type, status } = post;

  const typeStyle = {
    free: {
      label: "رایگان",
      className: "badge--success",
    },
    premium: {
      label: "پولی",
      className: "badge--secondary",
    },
  };

  return (
    <Table.Row>
      <td>{toPersianDigits(index + 1)}</td>
      <td>{truncateText(text, 20)}</td>
      <td>{category.title}</td>
      <td>{author.name}</td>
      <td>{toLocalDateShort(createdAt)}</td>
      <td>
        <span className={`badge ${typeStyle[type].className}`}>
          {typeStyle[type].label}
        </span>
      </td>
      <td className="flex justify-center gap-x-3">
        <Editpost id={post._id} />
        <DeletePost post={post} />
      </td>
    </Table.Row>
  );
}

export default PostRow;
