import React from "react";
import { Card } from "./Cards";
import { fetchCartData } from "@/services/data";

async function CardRaper() {
  const { numberOfComments, numberOfPosts, numberOfUsers } =
    await fetchCartData();
  return (
    <div className="grid  gap-6 md:grid-cols-3 mb-8">
      <Card value={numberOfUsers} color="green" title="کاربران" type="users" />
      <Card
        value={numberOfComments}
        color="blue"
        title="نظرات"
        type="comments"
      />
      <Card value={numberOfPosts} color="pink" title="پست ها" type="posts" />
    </div>
  );
}

export default CardRaper;
