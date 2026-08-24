// Drop-in replacement for PhotoPlaceholder/Photo wherever the parent
// container already defines the box (absolute inset-0, etc.) — fills it
// with an autoplaying, muted, looping background video instead of a photo.
export function VideoBackground({ src }: { src: string }) {
  return (
    <video
      className="absolute inset-0 h-full w-full object-cover"
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}
