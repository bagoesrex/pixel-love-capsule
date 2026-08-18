export function CapsuleOpening() {
  return (
    <section className="capsule-opening" role="status" aria-live="polite">
      <div className="opening-scene" aria-hidden="true">
        <span className="burst burst--one">♥</span>
        <span className="burst burst--two">✦</span>
        <span className="burst burst--three">♥</span>
        <span className="burst burst--four">✦</span>
        <span className="opening-capsule opening-capsule--top" />
        <span className="opening-glow" />
        <span className="opening-capsule opening-capsule--bottom" />
      </div>
      <p>Sedang membuka kejutanmu…</p>
    </section>
  );
}
