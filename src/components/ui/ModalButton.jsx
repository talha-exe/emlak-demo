'use client';

export default function ModalButton({ children, className }) {
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new CustomEvent('open-contact-modal'))}
      className={className}
    >
      {children}
    </button>
  );
}
