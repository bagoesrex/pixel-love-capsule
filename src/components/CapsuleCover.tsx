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
    <section className="capsule-cover">
      <div className="brand-mark" aria-label="giftkuy.id">
        <span aria-hidden="true">♥</span> giftkuy.id
      </div>

      <div className="capsule-cover__copy">
        <p className="eyebrow">{occasion}</p>
        <h1>Ada hadiah untuk {recipientName}</h1>
        <p className="capsule-cover__intro">
          Seseorang menyiapkan kejutan kecil khusus untukmu.
        </p>
      </div>

      <button
        type="button"
        onClick={onOpen}
        className="capsule-trigger"
      >
        <span className="capsule" aria-hidden="true">
          <span className="capsule__shine" />
          <span className="capsule__heart">♥</span>
          <span className="capsule__band" />
        </span>
        <span className="capsule-trigger__label">Ketuk untuk membuka hadiah</span>
        <span className="capsule-trigger__hint" aria-hidden="true">
          sentuh kapsulnya
        </span>
      </button>

      <p className="capsule-cover__privacy">
        <span aria-hidden="true">✦</span> Hanya untukmu
      </p>
    </section>
  );
}
