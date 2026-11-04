"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  FormField,
  inputClassName,
  primaryButtonClassName,
} from "@/components/admin/form-primitives";
import {
  adminLoginSchema,
  type AdminLoginFormValues,
} from "@/schemas/admin-login-schema";

export function AdminLoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<AdminLoginFormValues>({
    resolver: zodResolver(adminLoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit() {
    // TODO: Send credentials to the auth API. Never log them.
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-5">
      <FormField id="email" label="Email" error={errors.email?.message}>
        <input
          id="email"
          type="email"
          autoComplete="email"
          {...register("email")}
          className={inputClassName}
        />
      </FormField>

      <FormField id="password" label="Mật khẩu" error={errors.password?.message}>
        <input
          id="password"
          type="password"
          autoComplete="current-password"
          {...register("password")}
          className={inputClassName}
        />
      </FormField>

      <button
        type="submit"
        disabled={isSubmitting}
        className={`w-full ${primaryButtonClassName}`}
      >
        {isSubmitting ? "Đang xử lý..." : "Đăng nhập"}
      </button>
    </form>
  );
}
