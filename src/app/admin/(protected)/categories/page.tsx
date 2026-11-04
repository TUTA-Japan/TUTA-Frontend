import {
  AdminCreateLink,
  AdminEmptyPanel,
  AdminPageHeader,
} from "@/components/admin/admin-page-header";
import { ROUTES } from "@/constants/routes";

export default function AdminCategoriesPage() {
  return (
    <div>
      <AdminPageHeader
        eyebrow="Quản lý"
        title="Danh mục"
        description="Quản lý các danh mục sản phẩm hiển thị trên website TUTA."
        action={
          <AdminCreateLink href={ROUTES.admin.newCategory}>
            Thêm danh mục
          </AdminCreateLink>
        }
      />

      <AdminEmptyPanel
        title="Danh sách danh mục"
        message="Dữ liệu danh mục sẽ được hiển thị sau khi kết nối backend."
      />
    </div>
  );
}
