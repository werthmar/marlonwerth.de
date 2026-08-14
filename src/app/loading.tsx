import { Skeleton } from './components/ui/skeleton';

export default function Loading() {
    return (
        <>
            <div className="flex min-h-[calc(100vh-5rem)] flex-col items-center justify-center p-4">
                <Skeleton className="mb-6 h-48 w-48 rounded-full md:h-60 md:w-60" />
                <Skeleton className="mb-12 h-12 w-3/4 max-w-md" />
                <div className="mb-8 flex max-w-2xl flex-col gap-4">
                    <Skeleton className="h-6 w-full" />
                    <Skeleton className="h-6 w-5/6" />
                </div>
            </div>

            <div className="flex w-full flex-col items-center gap-20">
                {/* Featured Projects */}
                <div className="flex w-full max-w-5xl flex-col items-center gap-8 p-4">
                    <Skeleton className="h-9 w-64" />
                    <div className="flex w-full flex-col items-center gap-8 md:flex-row md:justify-center">
                        <Skeleton className="h-80 w-full max-w-sm rounded-lg" />
                        <Skeleton className="hidden h-80 w-full max-w-sm rounded-lg md:block" />
                        <Skeleton className="hidden h-80 w-full max-w-sm rounded-lg lg:block" />
                    </div>
                </div>

                {/* Universities & Work */}
                <div className="flex w-full max-w-6xl flex-col gap-8 px-4 lg:flex-row lg:gap-6 lg:px-0">
                    <div className="flex flex-1 flex-col gap-3">
                        <Skeleton className="mb-3 h-8 w-48" />
                        <Skeleton className="h-20 w-full rounded-lg" />
                        <Skeleton className="h-20 w-full rounded-lg" />
                        <Skeleton className="h-20 w-full rounded-lg" />
                    </div>
                    <div className="flex flex-1 flex-col gap-3">
                        <Skeleton className="mb-3 h-8 w-32" />
                        <Skeleton className="h-20 w-full rounded-lg" />
                        <Skeleton className="h-20 w-full rounded-lg" />
                    </div>
                </div>

                {/* Timeline & Technologies */}
                <div className="flex w-full max-w-6xl flex-col gap-12 px-4 lg:flex-row lg:items-start lg:gap-20 lg:px-0">
                    <div className="flex flex-1 flex-col gap-4">
                        <Skeleton className="mb-4 h-9 w-40" />
                        <Skeleton className="h-16 w-full" />
                        <Skeleton className="h-16 w-full" />
                        <Skeleton className="h-16 w-full" />
                    </div>
                    <div className="flex flex-1 flex-col gap-4">
                        <Skeleton className="mb-4 h-9 w-48" />
                        <Skeleton className="h-14 w-full rounded-lg" />
                        <Skeleton className="h-14 w-full rounded-lg" />
                        <Skeleton className="h-14 w-full rounded-lg" />
                    </div>
                </div>

                <Skeleton className="mb-12 h-14 w-56 rounded-full" />
            </div>
        </>
    );
}
