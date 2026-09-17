import { PortableText, type PortableTextBlock, type PortableTextComponents } from "next-sanity";

const components: PortableTextComponents = {
  block: {
    normal: ({ children }) => <p className="mb-6 text-lg leading-relaxed text-ink/80">{children}</p>,
    h2: ({ children }) => (
      <h2 className="mb-4 mt-10 font-display text-2xl font-semibold text-ink sm:text-3xl">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="mb-3 mt-8 font-display text-xl font-semibold text-ink">{children}</h3>
    ),
    blockquote: ({ children }) => (
      <blockquote className="my-8 border-l-4 border-brand-blue pl-6 text-xl italic text-ink/70">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="mb-6 list-disc space-y-2 pl-6 text-lg leading-relaxed text-ink/80">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="mb-6 list-decimal space-y-2 pl-6 text-lg leading-relaxed text-ink/80">{children}</ol>
    ),
  },
  marks: {
    strong: ({ children }) => <strong className="font-semibold text-ink">{children}</strong>,
    em: ({ children }) => <em className="italic">{children}</em>,
    link: ({ value, children }) => (
      <a
        href={typeof value?.href === "string" ? value.href : "#"}
        className="font-semibold text-brand-blue hover:underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    ),
  },
};

export function PostBody({ value }: { value: PortableTextBlock[] }) {
  return <PortableText value={value} components={components} />;
}
