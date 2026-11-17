"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  FormField,
  inputClassName,
  primaryButtonClassName,
} from "@/components/admin/form-primitives";
import { ROUTES } from "@/constants/routes";
import { getCurrentAdmin, login } from "@/lib/api/admin";
import { isApiError } from "@/lib/api/errors";
import {
  adminLoginSchema,
  type AdminLoginFormValues,
} from "@/schemas/admin-login-schema";

function getLoginErrorMessage(error: unknown): string {
  if (isApiError(error, "UNAUTHENTICATED")) {
    return "Email hoặc mật khẩu không đúng.";
  }
  if (isApiError(error, "RATE_LIMITED")) {
    return "Bạn đã thử đăng nhập quá nhiều lần. Vui lòng thử lại sau 15 phút.";
  }
  if (isApiError(error, "VALIDATION_ERROR")) {
    return "Thông tin đăng nhập không hợp lệ.";
  }
  if (isApiError(error, "NETWORK_ERROR")) {
    return "Không thể kết nối tới máy chủ. Vui lòng thử lại.";
  }
  return "Đã có lỗi xảy ra. Vui lòng thử lại.";
}

/**
 * Where to go after login: the `next` query param set by the session guard,
 * accepted only for paths inside the admin area (no open redirect).
 */
function getRedirectTarget(): string {
  const next = new URLSearchParams(window.location.search).get("next");
  const isAdminPath =
    next !== null &&
    /^\/admin(?:[/?#]|$)/.test(next) &&
    !next.startsWith(ROUTES.admin.login);
  return isAdminPath ? next : ROUTES.admin.dashboard;
}

export function AdminLoginForm() {
  const router = useRouter();

  // Already logged in (e.g. opened /admin/login directly): skip the form.
  useEffect(() => {
    let active = true;
    getCurrentAdmin().then(
      (admin) => {
        if (active && admin) router.replace(getRedirectTarget());
      },
      () => {
        // Backend unreachable: keep the form; submitting reports the error.
      },
    );
    return () => {
      active = false;
    };
  }, [router]);

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<AdminLoginFormValues>({
    resolver: zodResolver(adminLoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // Never log the submitted credentials.
  async function onSubmit({ email, password }: AdminLoginFormValues) {
    try {
      await login(email, password);
      router.replace(getRedirectTarget());
    } catch (error) {
      setError("root", { message: getLoginErrorMessage(error) });
    }
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

      {errors.root?.message && (
        <p role="alert" className="text-sm text-red-600">
          {errors.root.message}
        </p>
      )}

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
