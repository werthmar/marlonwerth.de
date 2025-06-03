'use client';

import { useTranslations } from 'next-intl';
import NextPageButton from '../components/NextPageButton';

export default function CV() {
    const t = useTranslations('cv');

    const handlePrint = () => {
        // Open the PDF in a new window and trigger print
        const printWindow = window.open('/marlon-werth-cv.pdf', '_blank');
        if (printWindow) {
            printWindow.onload = () => {
                printWindow.print();
            };
        }
    };

    return (
        <div className="min-h-screen bg-background px-4 py-16 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl">
                {/* Header */}
                <div className="mb-8 text-center">
                    <h1 className="mb-2 text-3xl font-bold text-foreground">
                        {t('title')}
                    </h1>
                    <p className="text-gray-600">{t('subtitle')}</p>
                </div>

                {/* CV Container */}
                <div className="overflow-hidden rounded-lg bg-white shadow-lg">
                    {/* Download Button */}
                    <div className="flex items-center justify-between border-b border-gray-200 bg-gray-50 px-6 py-4">
                        <h2 className="text-lg font-semibold text-gray-800">
                            {t('document')}
                        </h2>
                        <a
                            href="/marlon-werth-cv.pdf"
                            download="Marlon_Werth_CV.pdf"
                            className="inline-flex items-center rounded-md bg-blue-600 px-4 py-2 font-medium text-white transition-colors duration-200 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                        >
                            <svg
                                className="mr-2 h-4 w-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                />
                            </svg>
                            {t('download')}
                        </a>
                    </div>

                    {/* PDF Viewer */}
                    <div className="relative">
                        <iframe
                            src="/marlon-werth-cv.pdf"
                            className="h-[800px] w-full border-0"
                            title="Marlon Werth CV"
                        />

                        {/* Fallback for browsers that don't support iframe PDF viewing */}
                        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 opacity-0 transition-opacity duration-300 hover:opacity-100">
                            <div className="p-8 text-center">
                                <svg
                                    className="mx-auto mb-4 h-16 w-16 text-gray-400"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                    />
                                </svg>
                                <p className="mb-4 text-gray-600">
                                    {t('viewerNotSupported')}
                                </p>
                                <a
                                    href="/marlon-werth-cv.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center rounded-md bg-blue-600 px-4 py-2 font-medium text-white transition-colors duration-200 hover:bg-blue-700"
                                >
                                    {t('openInNewTab')}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Additional Actions */}
                <div className="mt-8 text-center">
                    <div className="inline-flex space-x-4">
                        <a
                            href="/marlon-werth-cv.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-medium text-blue-600 transition-colors duration-200 hover:text-blue-800"
                        >
                            {t('openFullscreen')}
                        </a>
                        <span className="text-gray-300">|</span>
                        <button
                            onClick={handlePrint}
                            className="font-medium text-blue-600 transition-colors duration-200 hover:text-blue-800"
                        >
                            {t('print')}
                        </button>
                    </div>
                </div>
            </div>

            <div className="mt-16 flex justify-center">
                <NextPageButton
                    link="/contact"
                    text="nextPageButtonText-Contact"
                />
            </div>
        </div>
    );
}
