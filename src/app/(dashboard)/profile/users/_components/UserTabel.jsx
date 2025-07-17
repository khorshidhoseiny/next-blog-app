import Table from "@/ui/Table";
import Empty from "@/ui/Empty";
import UserRow from "./UserRow";

export async function UserTabel({ users }) {
  if (!users.length) return <Empty resourceName=" کاربری" />;
  return (
    <Table>
      <Table.Header>
        <th>#</th>
        <th>آواتار</th>
        <th>نام</th>
        <th>ایمیل</th>
        <th>تاریخ ثبت نام</th>
        <th>پست های ذخیره شده </th>
        <th> پست های لایک شده </th>
      </Table.Header>
      <Table.Body>
        {users.map((user, index) => {
          return <UserRow user={user} index={index} key={user._id} />;
        })}
      </Table.Body>
    </Table>
  );
}
