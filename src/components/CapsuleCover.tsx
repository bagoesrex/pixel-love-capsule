type CapsuleCoverProps = {
  recipientName: string;
  occasion: string;
  onOpen: () => void;
};

export function CapsuleCover({
  recipientName,
  occasion,
  onOpen,
}: CapsuleCoverProps) {
  return (
    <section className="flex min-h-svh flex-col items-center justify-center px-5 py-10 text-center">
      <p className="mb-3 text-xs font-semibold tracking-[0.2em] uppercase opacity-70">
        {occasion}
      </p>
      <h1 className="max-w-sm text-3xl font-semibold tracking-tight sm:text-4xl">
        Ada hadiah untuk {recipientName}
      </h1>

      <div className="my-10" aria-hidden="true">
        <div className="h-44 w-28 rounded-full border-4 border-current opacity-80" />
      </div>

      <button
        type="button"
        onClick={onOpen}
        className="min-h-12 rounded-full bg-current px-7 py-3 font-semibold focus-visible:outline-2 focus-visible:outline-offset-4"
      >
        <span className="text-white">Ketuk untuk membuka hadiah</span>
      </button>
      <p className="mt-4 text-sm opacity-60">Satu kejutan kecil dibuat khusus untukmu</p>
    </section>
  );
}
