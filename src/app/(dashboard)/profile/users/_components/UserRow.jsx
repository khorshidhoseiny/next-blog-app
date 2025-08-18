"use client";
import Table from "@/ui/Table";
import { toLocalDateShort } from "@/utils/dateFormatter";
import { toPersianDigits } from "@/utils/numberFormatter";
import truncateText from "@/utils/trancateText";
import React, { useState } from "react";
import Avatar from "@/ui/Avatar";
<<<<<<< HEAD
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import ButtonIcon from "@/ui/ButtonIcon";
=======

>>>>>>> fix resposive mobile bugs

function UserRow({ user, index, children }) {
  const { name, bookmarkedPosts, likedPosts, email, createdAt, avatarUrl } =
    user;
  console.log(bookmarkedPosts.length);

  const numOfBookmarks = Number(bookmarkedPosts.length);
  const numOfLikes = Number(likedPosts.length);

  return (
    <Table.Row>
      <td>{toPersianDigits(index + 1)}</td>
      <td>
        <Avatar src={avatarUrl} />
      </td>
      <td>{name}</td>
      <td>{truncateText(email, 20)}</td>
      <td>{toLocalDateShort(createdAt)}</td>
      <td className="m-auto max-w-md relative items-center">
        <span className="text-primary-800 font-semibold">{numOfBookmarks}</span>{" "}
        پست بوکمارک شده
      </td>
      <td className="m-auto max-w-md relative items-center">
        <span className="text-error font-semibold">{numOfLikes}</span> پست لایک
        شده
      </td>
    </Table.Row>
  );
}

export default UserRow;
