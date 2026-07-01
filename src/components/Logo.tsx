type LogoProps = {
  className?: string
}

/**
 * Unique Barid mark: a "B" monogram inside a coffee-ring badge,
 * with a single steam curl as the signature detail.
 */
export default function Logo({ className = '' }: LogoProps) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* outer ring */}
      <circle cx="32" cy="34" r="22" stroke="currentColor" strokeWidth="1" />
      {/* inner ring, slightly offset like a stamped cup rim */}
      <circle cx="32" cy="34" r="18.5" stroke="currentColor" strokeWidth="0.5" opacity="0.5" />

      {/* Monogram B, drawn as a custom letterform (not a system font) */}
      <path
        d="M24 22.5H32.5C35.5 22.5 37.8 24.4 37.8 27.1C37.8 29.1 36.6 30.6 34.8 31.3C37.1 31.9 38.6 33.6 38.6 35.9C38.6 38.9 36.1 41 32.8 41H24V22.5Z M27.6 25.7V30.2H32.1C33.7 30.2 34.7 29.3 34.7 27.9C34.7 26.6 33.7 25.7 32.1 25.7H27.6Z M27.6 33.3V37.8H32.4C34.1 37.8 35.2 36.9 35.2 35.5C35.2 34.2 34.1 33.3 32.4 33.3H27.6Z"
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
      />

      {/* single rising steam curl above the mark */}
      <path
        d="M32 15C30.5 13.2 30.5 11.8 32 10C33.5 8.2 33.5 6.8 32 5"
        stroke="currentColor"
        strokeWidth="1.1"
        strokeLinecap="round"
      />
    </svg>
  )
}