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
