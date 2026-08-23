import Image from "next/image";

// Drop-in replacement for PhotoPlaceholder wherever the parent container
// already defines the box (aspect-ratio, absolute inset-0, etc.) — fills it
// with a real photo via next/image's `fill` + object-cover.
//
// `focusX`/`focusY` bias the crop instead of the default center crop — the
// site's card and offset-frame boxes often have a different aspect ratio
// than the source photo, so a plain center crop can cut off part of the
// actual subject (a house pushed to one side, a face positioned high in the
// frame). 50 is a plain center crop; move toward 0/100 to shift which edge
// of the source image stays fully visible.
export function Photo({
  src,
  alt,
  focusX = 50,
  focusY = 50,
}: {
  src: string;
  alt: string;
  focusX?: number;
  focusY?: number;
}) {
  return (
    <div className="relative h-full w-full">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(min-width: 1024px) 50vw, 100vw"
        className="object-cover"
        style={{ objectPosition: `${focusX}% ${focusY}%` }}
      />
    </div>
  );
}
