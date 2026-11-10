"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { useRouter } from "next/navigation";

import { primaryButtonClassName } from "@/components/admin/form-primitives";
import { ROUTES } from "@/constants/routes";
import { getCurrentAdmin, logout, onSessionExpired } from "@/lib/api/admin";
import type { AdminUserDto } from "@/lib/api/types";

type SessionState =
  | { status: "checking" }
  | { status: "authenticated"; admin: AdminUserDto }
  | { status: "unavailable" };

type AdminSession = {
  admin: AdminUserDto;
  /** Revoke the session and go to the login page. Throws if logout fails. */
  signOut: () => Promise<void>;
};

const AdminSessionContext = createContext<AdminSession | null>(null);

/** Session of the logged-in admin. Only usable inside the protected area. */
export function useAdminSession(): AdminSession {
  const session = useContext(AdminSessionContext);
  if (!session) {
    throw new Error("useAdminSession must be used inside AdminSessionProvider");
  }
  return session;
}

/**
 * Guards the protected admin area (UC-A03).
 *
 * The session cookie belongs to the backend host, so the check runs in the
 * browser against `/admin/auth/me`. This is a UX gate: the backend still
 * authorizes every admin API call. Children render only once the session is
 * confirmed, and any later 401 (expired/revoked session) redirects to login.
 */
export function AdminSessionProvider({ children }: { children: ReactNode }) {
  const router = useRouter();
  const [state, setState] = useState<SessionState>({ status: "checking" });
  const [attempt, setAttempt] = useState(0);

  useEffect(() => {
    let active = true;

    const redirectToLogin = () => {
      const next = `${window.location.pathname}${window.location.search}`;
      router.replace(`${ROUTES.admin.login}?next=${encodeURIComponent(next)}`);
    };

    getCurrentAdmin().then(
      (admin) => {
        if (!active) return;
        if (admin) setState({ status: "authenticated", admin });
        else redirectToLogin();
      },
      () => {
        if (active) setState({ status: "unavailable" });
      },
    );

    const unsubscribe = onSessionExpired(() => {
      setState({ status: "checking" });
      redirectToLogin();
    });

    return () => {
      active = false;
      unsubscribe();
    };
  }, [router, attempt]);

  if (state.status === "checking") {
    return <SessionStatus message="Đang kiểm tra phiên đăng nhập..." />;
  }

  if (state.status === "unavailable") {
    return (
      <SessionStatus message="Không thể kết nối tới máy chủ.">
        <button
          type="button"
          onClick={() => {
            setState({ status: "checking" });
            setAttempt((value) => value + 1);
          }}
          className={`px-5 ${primaryButtonClassName}`}
        >
          Thử lại
        </button>
      </SessionStatus>
    );
  }

  const session: AdminSession = {
    admin: state.admin,
    signOut: async () => {
      await logout();
      router.replace(ROUTES.admin.login);
    },
  };

  return (
    <AdminSessionContext.Provider value={session}>
      {children}
    </AdminSessionContext.Provider>
  );
}

function SessionStatus({
  message,
  children,
}: {
  message: string;
  children?: ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-surface px-5">
      <p role="status" className="text-sm text-text-secondary">
        {message}
      </p>
      {children}
    </div>
  );
}
