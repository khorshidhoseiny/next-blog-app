import Table from "@/ui/Table";
import { toLocalDateShort } from "@/utils/dateFormatter";
import { toPersianDigits } from "@/utils/numberFormatter";
import truncateText from "@/utils/trancateText";
import React from "react";
import { DeleteCategory, UpdateCategory } from "@/ui/Buttons";

function CategoryRow({ category, index }) {
  const { title, englishTitle, slug, description, createdAt } = category;
<<<<<<< HEAD
  console.log(category);

  return (
    <Table.Row >
=======

  return (
    <Table.Row>
>>>>>>> fix resposive mobile bugs
      <td>{toPersianDigits(index + 1)}</td>
      <td>{title}</td>
      <td>{englishTitle}</td>
      <td>
        <span className="badge badge--secondary">{slug}</span>
      </td>
      <td>{truncateText(description, 20)}</td>
      <td>{toLocalDateShort(createdAt)}</td>

      <td className="flex justify-center gap-x-3">
        <UpdateCategory category={category} />
        <DeleteCategory category={category} />
      </td>
    </Table.Row>
  );
}

export default CategoryRow;
