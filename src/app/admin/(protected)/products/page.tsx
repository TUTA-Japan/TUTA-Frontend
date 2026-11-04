import {
  AdminCreateLink,
  AdminEmptyPanel,
  AdminPageHeader,
} from "@/components/admin/admin-page-header";
import { ROUTES } from "@/constants/routes";

export default function AdminProductsPage() {
  return (
    <div>
      <AdminPageHeader
        eyebrow="Quản lý"
        title="Sản phẩm"
        description="Quản lý các sản phẩm hiển thị trên website TUTA."
        action={
          <AdminCreateLink href={ROUTES.admin.newProduct}>
            Thêm sản phẩm
          </AdminCreateLink>
        }
      />

      <AdminEmptyPanel
        title="Danh sách sản phẩm"
        message="Dữ liệu sản phẩm sẽ được hiển thị sau khi kết nối backend."
      />
    </div>
  );
}
