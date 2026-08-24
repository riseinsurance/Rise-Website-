import type { InputHTMLAttributes, SelectHTMLAttributes, TextareaHTMLAttributes } from "react";

const fieldClasses =
  "w-full border-2 border-ink/15 bg-white px-4 py-3 text-ink placeholder:text-ink/40 focus:border-brand-blue focus:outline-none";

type LabelWrapProps = { label: string; id: string; required?: boolean };

function LabelWrap({ label, id, required }: LabelWrapProps) {
  return (
    <label htmlFor={id} className="mb-1.5 block text-sm font-semibold text-ink">
      {label}
      {required && <span className="text-brand-blue"> *</span>}
    </label>
  );
}

export function TextField({
  label,
  id,
  required,
  ...props
}: LabelWrapProps & Omit<InputHTMLAttributes<HTMLInputElement>, "id">) {
  return (
    <div>
      <LabelWrap label={label} id={id} required={required} />
      <input id={id} required={required} className={fieldClasses} {...props} />
    </div>
  );
}

export function TextAreaField({
  label,
  id,
  required,
  ...props
}: LabelWrapProps & Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, "id">) {
  return (
    <div>
      <LabelWrap label={label} id={id} required={required} />
      <textarea id={id} required={required} rows={4} className={fieldClasses} {...props} />
    </div>
  );
}

export function FileField({
  label,
  id,
  required,
  ...props
}: LabelWrapProps & Omit<InputHTMLAttributes<HTMLInputElement>, "id" | "type">) {
  return (
    <div>
      <LabelWrap label={label} id={id} required={required} />
      <input
        id={id}
        type="file"
        required={required}
        className="w-full border-2 border-ink/15 bg-white text-sm text-ink/70 file:mr-4 file:border-0 file:bg-brand-blue file:px-4 file:py-3 file:text-sm file:font-semibold file:uppercase file:tracking-wide file:text-white hover:file:bg-brand-blue-dark"
        {...props}
      />
    </div>
  );
}

export function SelectField({
  label,
  id,
  required,
  children,
  ...props
}: LabelWrapProps & Omit<SelectHTMLAttributes<HTMLSelectElement>, "id">) {
  return (
    <div>
      <LabelWrap label={label} id={id} required={required} />
      <select id={id} required={required} className={fieldClasses} {...props}>
        {children}
      </select>
    </div>
  );
}
