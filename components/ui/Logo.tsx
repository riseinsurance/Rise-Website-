import Image from "next/image";

// Source files: ~/Desktop/Rise Logos (Blue/White Letter Transparent.png),
// trimmed of vertical padding and copied into public/logo.
const LOGO_ASPECT = 2000 / 458;

type LogoProps = {
  variant?: "blue" | "white";
  className?: string;
  height?: number;
};

export function Logo({ variant = "blue", className = "", height = 28 }: LogoProps) {
  const src = variant === "white" ? "/logo/rise-logo-white.png" : "/logo/rise-logo-blue.png";
  const width = Math.round(height * LOGO_ASPECT);

  return (
    <Image
      src={src}
      alt="Rise Insurance Agency"
      width={width}
      height={height}
      className={className}
      priority
    />
  );
}
