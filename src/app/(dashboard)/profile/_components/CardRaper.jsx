import React from "react";
import { Card } from "./Cards";
import { fetchCartData } from "@/services/data";

async function CardRaper() {
  const { numberOfComments, numberOfPosts, numberOfUsers } =
    await fetchCartData();
  return (
    <div className="grid  gap-6 md:grid-cols-3 mb-8">
      <Card
        value={numberOfUsers}
        color="primary"
        title="کاربران"
        type="users"
      />
      <Card
        value={numberOfComments}
        color="secondary"
        title="نظرات"
        type="comments"
      />
      <Card value={numberOfPosts} color="amber" title="پست ها" type="posts" />
    </div>
  );
}

export default CardRaper;
