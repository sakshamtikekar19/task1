export default function Logo({
  size = 'md',
  showName = false,
  variant = 'integrated',
  light = false,
  className = '',
  glow = false,
}) {
  const sizes = {
    xs: 'h-9 w-9',
    sm: 'h-10 w-10',
    md: 'h-12 w-12',
    lg: 'h-14 w-14',
    xl: 'h-20 w-20',
    '2xl': 'h-28 w-28',
  };

  const img = (
    <img
      src="/logo.png"
      alt="Dr. Ritham Debnath logo"
      className={`${sizes[size]} object-contain shrink-0`}
      loading="eager"
    />
  );

  const mark =
    variant === 'plate' ? (
      <div className="relative shrink-0">
        <span
          aria-hidden
          className="absolute inset-0 rounded-2xl bg-rose-blush/12 backdrop-blur-md ring-1 ring-rose-blush/25"
        />
        <span
          aria-hidden
          className="absolute -inset-2 rounded-3xl bg-rose-deep/15 blur-xl"
        />
        <div className="relative p-2">{img}</div>
      </div>
    ) : glow ? (
      <div className="relative shrink-0">
        <span
          aria-hidden
          className="absolute inset-0 -m-6 rounded-full bg-rose-soft/25 blur-2xl"
        />
        <div className="relative">{img}</div>
      </div>
    ) : (
      img
    );

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {mark}
      {showName && (
        <div className="leading-tight">
          <p
            className={`font-script text-lg sm:text-xl ${
              light ? 'text-rose-blush' : 'text-rose-deep'
            }`}
          >
            Dr. Ritham Debnath
          </p>
          <p
            className={`text-[9px] sm:text-[10px] tracking-[0.3em] uppercase mt-1 ${
              light ? 'text-white/55' : 'text-ink/50'
            }`}
          >
            Consultant Dental Surgeon
          </p>
        </div>
      )}
    </div>
  );
}
