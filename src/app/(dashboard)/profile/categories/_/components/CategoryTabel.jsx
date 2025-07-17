import Table from "@/ui/Table";
import PostRow from "../../../posts/_components/PostRow";
import Empty from "@/ui/Empty";
import CategoryRow from "./CategoryRow";

export async function CategoryTabel({ categories }) {
  if (!categories.length) return <Empty resourceName="دسته بندی" />;
  return (
    <Table>
      <Table.Header>
        <th>#</th>
        <th>عنوان</th>
        <th>نام انگلیسی</th>
        <th>اسلاگ</th>
        <th>توضیحات</th>
        <th>تاریخ ایجاد</th>
        <th>عملیات</th>
      </Table.Header>
      <Table.Body>
        {categories.map((category, index) => {
          return (
            <CategoryRow category={category} index={index} key={category._id} />
          );
        })}
      </Table.Body>
    </Table>
  );
}
