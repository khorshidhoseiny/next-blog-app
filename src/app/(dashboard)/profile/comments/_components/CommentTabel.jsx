import Table from "@/ui/Table";
import Empty from "@/ui/Empty";
<<<<<<< HEAD
import { getAllCommentsApi } from "@/services/commentService";
import CommentRow from "./CommentRow";
import { Fragment } from "react";

export async function CommentTabel() {
  const { comments, commentsCount } = await getAllCommentsApi();
  console.log(comments);

=======
import CommentRow from "./CommentRow";
import { Fragment } from "react";

export function CommentTabel({ comments }) {
>>>>>>> fix resposive mobile bugs
  if (!comments.length) return <Empty resourceName="نظری" />;
  let iterator = 0;
  return (
    <Table>
      <Table.Header>
        <th>#</th>
        <th>متن</th>
        <th>نویسنده</th>
        <th>تاریخ ایجاد</th>
        <th>وضعیت</th>
        <th>عملیات</th>
      </Table.Header>
      <Table.Body>
        {comments.map((comment) => {
          iterator++;
          return (
            <Fragment key={comment._id}>
              <CommentRow
                comment={comment}
                index={iterator}
                key={comment._id}
              />
              {comment.answers.map((commentAnswer) => {
                iterator++;
                return (
                  <CommentRow
                    key={commentAnswer._id}
                    comment={commentAnswer}
                    index={iterator}
                  />
                );
              })}
            </Fragment>
          );
        })}
      </Table.Body>
    </Table>
  );
}
