export function CapsuleOpening() {
  return (
    <section
      className="flex min-h-svh flex-col items-center justify-center px-5 text-center"
      role="status"
      aria-live="polite"
    >
      <div className="mb-8 h-44 w-28 animate-pulse rounded-full border-4 border-current" aria-hidden="true" />
      <p className="text-lg font-medium">Sedang membuka kejutanmu…</p>
    </section>
  );
}
