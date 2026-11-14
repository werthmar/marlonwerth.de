'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Dialog } from '@base-ui/react/dialog';
import { ArrowRight, X } from 'lucide-react';

interface ContactDialogProps {
    trigger: React.ReactNode;
    triggerClassName?: string;
}

type Status = 'idle' | 'sending' | 'success' | 'error';

// `website` is a honeypot, see /api/contact
const EMPTY = { name: '', email: '', subject: '', message: '', website: '' };

export default function ContactDialog({
    trigger,
    triggerClassName,
}: ContactDialogProps) {
    const t = useTranslations('contact');
    const [form, setForm] = useState(EMPTY);
    const [status, setStatus] = useState<Status>('idle');

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('sending');
        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form),
            });
            if (!response.ok) throw new Error(String(response.status));
            setStatus('success');
            setForm(EMPTY);
        } catch (error) {
            console.error('Error submitting form:', error);
            setStatus('error');
        }
    };

    const fields = [
        { name: 'name', type: 'text', autoComplete: 'name' },
        { name: 'email', type: 'email', autoComplete: 'email' },
        { name: 'subject', type: 'text', autoComplete: 'off' },
    ] as const;
    const labels = {
        name: [t('fullName'), t('fullNamePlaceholder')],
        email: [t('emailAddress'), t('emailPlaceholder')],
        subject: [t('subject'), t('subjectPlaceholder')],
    };

    return (
        <Dialog.Root
            onOpenChange={(open) => {
                if (open && status !== 'sending') setStatus('idle');
            }}
        >
            <Dialog.Trigger className={triggerClassName}>
                {trigger}
            </Dialog.Trigger>
            <Dialog.Portal>
                <Dialog.Backdrop className="dialog-backdrop fixed inset-0 z-50" />
                <Dialog.Popup className="dialog-popup fixed left-1/2 top-1/2 z-50 max-h-[calc(100dvh-2rem)] w-[calc(100%-2rem)] max-w-lg -translate-x-1/2 -translate-y-1/2 overflow-y-auto rounded-panel bg-bg p-6 text-ink shadow-float outline-none ring-1 ring-line sm:p-8">
                    <div className="mb-6 flex items-start justify-between gap-4">
                        <div>
                            <Dialog.Title className="h3 !text-[1.625rem] !font-[500] !tracking-[-0.02em]">
                                {t('title')}
                            </Dialog.Title>
                            <Dialog.Description className="mt-1.5 text-[0.9375rem] text-muted">
                                {t('intro')}
                            </Dialog.Description>
                        </div>
                        <Dialog.Close
                            aria-label={t('close')}
                            className="-mr-2 -mt-1 grid size-11 shrink-0 place-items-center rounded-full text-muted transition-colors hover:bg-surface hover:text-ink"
                        >
                            <X size={20} strokeWidth={1.75} />
                        </Dialog.Close>
                    </div>

                    {status === 'success' ? (
                        <p
                            role="status"
                            className="rounded-xl bg-ice px-4 py-3.5 text-on-ice"
                        >
                            {t('successMessage')}
                        </p>
                    ) : (
                        <form onSubmit={handleSubmit} className="grid gap-4">
                            {/* Honeypot: hidden from people and screen readers, bots fill it */}
                            <input
                                type="text"
                                name="website"
                                value={form.website}
                                onChange={handleChange}
                                tabIndex={-1}
                                autoComplete="off"
                                aria-hidden="true"
                                className="hidden"
                            />
                            {fields.map((f) => (
                                <label key={f.name} className="grid gap-1.5">
                                    <span className="text-sm font-medium">
                                        {labels[f.name][0]}
                                    </span>
                                    <input
                                        className="field"
                                        type={f.type}
                                        name={f.name}
                                        autoComplete={f.autoComplete}
                                        required
                                        value={form[f.name]}
                                        onChange={handleChange}
                                        placeholder={labels[f.name][1]}
                                    />
                                </label>
                            ))}
                            <label className="grid gap-1.5">
                                <span className="text-sm font-medium">
                                    {t('message')}
                                </span>
                                <textarea
                                    className="field resize-y"
                                    name="message"
                                    required
                                    rows={5}
                                    value={form.message}
                                    onChange={handleChange}
                                    placeholder={t('messagePlaceholder')}
                                />
                            </label>

                            {status === 'error' && (
                                <p
                                    role="alert"
                                    className="rounded-xl bg-[#fde8e6] px-4 py-3 text-[0.9375rem] text-[#8a1c12] dark:bg-[#3a1714] dark:text-[#ffb4aa]"
                                >
                                    {t('errorMessage')}
                                </p>
                            )}

                            <button
                                type="submit"
                                disabled={status === 'sending'}
                                className="btn btn-primary mt-2 w-full disabled:cursor-progress disabled:opacity-70 sm:w-auto sm:justify-self-start"
                            >
                                {status === 'sending'
                                    ? t('sending')
                                    : t('sendMessage')}
                                <ArrowRight
                                    size={18}
                                    className="btn-arrow"
                                    aria-hidden
                                />
                            </button>
                        </form>
                    )}
                </Dialog.Popup>
            </Dialog.Portal>
        </Dialog.Root>
    );
}
