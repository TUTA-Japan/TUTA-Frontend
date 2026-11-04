import type { ReactNode } from "react";

export const inputClassName =
  "h-11 w-full rounded-lg border border-border bg-background px-3 text-sm outline-none transition focus:border-tuta-green";

export const textareaClassName =
  "w-full resize-y rounded-lg border border-border bg-background px-3 py-2.5 text-sm leading-6 outline-none transition focus:border-tuta-green";

export const primaryButtonClassName =
  "h-11 rounded-lg bg-tuta-green text-sm font-semibold text-white transition hover:bg-tuta-green-dark disabled:cursor-not-allowed disabled:opacity-60";

type FormFieldProps = {
  id: string;
  label: string;
  error?: string;
  className?: string;
  children: ReactNode;
};

export function FormField({
  id,
  label,
  error,
  className,
  children,
}: FormFieldProps) {
  return (
    <div className={className}>
      <label
        htmlFor={id}
        className="mb-2 block text-sm font-medium text-text-primary"
      >
        {label}
      </label>

      {children}

      {error && <p className="mt-1.5 text-xs text-red-600">{error}</p>}
    </div>
  );
}

type FormSectionProps = {
  title: string;
  description?: string;
  children: ReactNode;
};

export function FormSection({ title, description, children }: FormSectionProps) {
  return (
    <section className="rounded-xl border border-border bg-background p-5 md:p-6">
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-text-primary">{title}</h2>

        {description && (
          <p className="mt-1 text-sm text-text-secondary">{description}</p>
        )}
      </div>

      {children}
    </section>
  );
}
