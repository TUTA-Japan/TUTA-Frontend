import { z } from "zod";

export const adminLoginSchema = z.object({
  email: z.string().min(1, "Vui lòng nhập email").email("Email không hợp lệ"),

  password: z.string().min(1, "Vui lòng nhập mật khẩu"),
});

export type AdminLoginFormValues = z.infer<typeof adminLoginSchema>;
