type LoveNoteProps = {
  message: string;
  senderName: string;
  recipientName: string;
};

export function LoveNote({
  message,
  senderName,
  recipientName,
}: LoveNoteProps) {
  return (
    <div className="love-note">
      <span className="love-note__mark" aria-hidden="true">
        “
      </span>
      <p className="love-note__message">{message}</p>
      <p className="love-note__signature">
        Dari {senderName}, untuk {recipientName}
        <span aria-hidden="true"> ♥</span>
      </p>
    </div>
  );
}
