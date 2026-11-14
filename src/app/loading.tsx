import { Skeleton } from './components/ui/skeleton';

// Mirrors the hero's split so the page does not jump when it loads.
export default function Loading() {
    return (
        <div className="wrap grid min-h-[calc(100svh-4rem)] grid-cols-1 content-center gap-10 py-10 lg:grid-cols-12 lg:gap-6">
            <div className="flex flex-col justify-center gap-4 lg:col-span-5">
                <Skeleton className="h-14 w-11/12 rounded-xl" />
                <Skeleton className="h-14 w-3/4 rounded-xl" />
                <Skeleton className="mt-4 h-5 w-full" />
                <Skeleton className="h-5 w-11/12" />
                <Skeleton className="h-5 w-2/3" />
                <div className="mt-4 flex gap-3">
                    <Skeleton className="h-11 w-36 rounded-full" />
                    <Skeleton className="h-11 w-40 rounded-full" />
                </div>
            </div>
            <Skeleton className="h-[420px] rounded-panel lg:col-span-6 lg:col-start-7 lg:h-[min(716px,calc(100svh-7rem))]" />
        </div>
    );
}
