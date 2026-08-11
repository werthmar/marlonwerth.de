'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { FaArrowRight, FaEnvelope } from 'react-icons/fa';

import { Dialog, DialogContent, DialogTitle, DialogTrigger } from './ui/dialog';
import SocialLinks from './SocialLinks';

export default function ContactDialog() {
    const tNav = useTranslations('Navbar');
    const tContact = useTranslations('contact');

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<
        'idle' | 'success' | 'error'
    >('idle');

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus('idle');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setSubmitStatus('success');
                setFormData({ name: '', email: '', subject: '', message: '' });
            } else {
                setSubmitStatus('error');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <Dialog>
            <DialogTrigger className="flex flex-col items-center hover:text-gray-400 lg:flex-row">
                <FaEnvelope className="text-foreground lg:mr-2" size={25} />
                <span className="lg:inline">{tNav('contact')}</span>
            </DialogTrigger>
            <DialogContent className="bg-accent">
                <DialogTitle>{tContact('title')}</DialogTitle>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label
                            htmlFor="name"
                            className="mb-2 block text-sm font-medium text-gray-700"
                        >
                            {tContact('fullName')}
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full rounded-full border border-gray-300 bg-background px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-accentColor"
                            placeholder={tContact('fullNamePlaceholder')}
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="email"
                            className="mb-2 block text-sm font-medium text-gray-700"
                        >
                            {tContact('emailAddress')}
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full rounded-full border border-gray-300 bg-background px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-accentColor"
                            placeholder={tContact('emailPlaceholder')}
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="subject"
                            className="mb-2 block text-sm font-medium text-gray-700"
                        >
                            {tContact('subject')}
                        </label>
                        <input
                            type="text"
                            id="subject"
                            name="subject"
                            required
                            value={formData.subject}
                            onChange={handleChange}
                            className="w-full rounded-full border border-gray-300 bg-background px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-accentColor"
                            placeholder={tContact('subjectPlaceholder')}
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="message"
                            className="mb-2 block text-sm font-medium text-gray-700"
                        >
                            {tContact('message')}
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            required
                            rows={5}
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full resize-none rounded-lg border border-gray-300 bg-background px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-accentColor"
                            placeholder={tContact('messagePlaceholder')}
                        />
                    </div>

                    <div className="flex justify-center">
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="group flex items-center rounded-full border-2 border-solid border-foreground bg-background pb-2 pl-8 pr-8 pt-2 text-lg font-bold text-foreground shadow transition duration-300 hover:bg-foreground hover:text-background md:border-[0.2rem] md:text-2xl"
                        >
                            {isSubmitting
                                ? tContact('sending')
                                : tContact('sendMessage')}
                            <FaArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                        </button>
                    </div>
                </form>

                {submitStatus === 'success' && (
                    <div className="mt-4 rounded border border-green-400 bg-green-100 p-4 text-green-700">
                        {tContact('successMessage')}
                    </div>
                )}

                {submitStatus === 'error' && (
                    <div className="mt-4 rounded border border-red-400 bg-red-100 p-4 text-red-700">
                        {tContact('errorMessage')}
                    </div>
                )}

                <SocialLinks />
            </DialogContent>
        </Dialog>
    );
}
