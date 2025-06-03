'use client';

import { useTranslations } from 'next-intl';

export default function CV() {
    const t = useTranslations('cv');

    const handlePrint = () => {
        // Open the PDF in a new window and trigger print
        const printWindow = window.open('/cv.pdf', '_blank');
        if (printWindow) {
            printWindow.onload = () => {
                printWindow.print();
            };
        }
    };

    return (
        <div className="min-h-screen bg-background py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-foreground mb-2">
                        {t('title')}
                    </h1>
                    <p className="text-gray-600">{t('subtitle')}</p>
                </div>

                {/* CV Container */}
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    {/* Download Button */}
                    <div className="px-6 py-4 bg-gray-50 border-b border-gray-200 flex justify-between items-center">
                        <h2 className="text-lg font-semibold text-gray-800">
                            {t('document')}
                        </h2>
                        <a
                            href="/cv.pdf"
                            download="Marlon_Werth_CV.pdf"
                            className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                        >
                            <svg
                                className="w-4 h-4 mr-2"
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
                            src="/cv.pdf"
                            className="w-full h-[800px] border-0"
                            title="Marlon Werth CV"
                        />

                        {/* Fallback for browsers that don't support iframe PDF viewing */}
                        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 opacity-0 hover:opacity-100 transition-opacity duration-300">
                            <div className="text-center p-8">
                                <svg
                                    className="w-16 h-16 mx-auto text-gray-400 mb-4"
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
                                <p className="text-gray-600 mb-4">
                                    {t('viewerNotSupported')}
                                </p>
                                <a
                                    href="/cv.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors duration-200"
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
                            href="/cv.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200"
                        >
                            {t('openFullscreen')}
                        </a>
                        <span className="text-gray-300">|</span>
                        <button
                            onClick={handlePrint}
                            className="text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200"
                        >
                            {t('print')}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
