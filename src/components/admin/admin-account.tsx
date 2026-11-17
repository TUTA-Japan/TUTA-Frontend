"use client";

import { useState } from "react";

import { useAdminSession } from "@/components/admin/admin-session-provider";

/** Current admin and the logout action, shown in the admin header (UC-A02). */
export function AdminAccount() {
  const { admin, signOut } = useAdminSession();
  const [isSigningOut, setIsSigningOut] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSignOut() {
    setIsSigningOut(true);
    setError(null);
    try {
      await signOut();
      // Stay in the pending state while navigating to the login page.
    } catch {
      setError("Không thể đăng xuất. Vui lòng thử lại.");
      setIsSigningOut(false);
    }
  }

  return (
    <div className="flex items-center gap-4">
      {error && (
        <p role="alert" className="text-xs text-red-600">
          {error}
        </p>
      )}

      <span className="hidden text-sm text-text-secondary sm:inline">
        {admin.name ?? admin.email}
      </span>

      <button
        type="button"
        onClick={handleSignOut}
        disabled={isSigningOut}
        className="text-sm font-medium text-text-secondary transition hover:text-text-primary disabled:cursor-not-allowed disabled:opacity-50"
      >
        {isSigningOut ? "Đang đăng xuất..." : "Đăng xuất"}
      </button>
    </div>
  );
}
