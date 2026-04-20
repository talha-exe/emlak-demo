'use client';
import { useState, useEffect } from 'react';
import ContactModal from './ContactModal';

export default function ModalRoot() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setOpen(true);
    window.addEventListener('open-contact-modal', handler);
    return () => window.removeEventListener('open-contact-modal', handler);
  }, []);

  return <ContactModal isOpen={open} onClose={() => setOpen(false)} />;
}
