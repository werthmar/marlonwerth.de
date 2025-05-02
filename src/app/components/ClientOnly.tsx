/**
 * A wrapper component that ensures its children are rendered in a client-side context.
 * This eliminates the need to add the `'use client'` directive to the root component,
 * making it easier to manage client-side rendering for specific parts of the application.
 *
 * @param children - The React nodes to be rendered within the client-side context.
 */
'use client';

export default function ClientOnly({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
