'use client';

import * as React from 'react';
import { Accordion as AccordionPrimitive } from '@base-ui/react/accordion';

import { cn } from '@/lib/utils';

function Accordion({ className, ...props }: AccordionPrimitive.Root.Props) {
    return (
        <AccordionPrimitive.Root
            data-slot="accordion"
            className={cn(className)}
            {...props}
        />
    );
}

function AccordionItem({ className, ...props }: AccordionPrimitive.Item.Props) {
    return (
        <AccordionPrimitive.Item
            data-slot="accordion-item"
            className={cn(className)}
            {...props}
        />
    );
}

function AccordionTrigger({
    className,
    children,
    ...props
}: AccordionPrimitive.Trigger.Props) {
    return (
        <AccordionPrimitive.Header data-slot="accordion-header">
            <AccordionPrimitive.Trigger
                data-slot="accordion-trigger"
                className={cn(
                    'focus-visible:ring-3 focus-visible:ring-ring/50 group flex w-full items-center justify-between gap-4 text-left outline-none',
                    className
                )}
                {...props}
            >
                {children}
            </AccordionPrimitive.Trigger>
        </AccordionPrimitive.Header>
    );
}

function AccordionContent({
    className,
    children,
    ...props
}: AccordionPrimitive.Panel.Props) {
    return (
        <AccordionPrimitive.Panel
            data-slot="accordion-content"
            className="h-[var(--accordion-panel-height)] overflow-hidden transition-[height] duration-300 ease-out data-[ending-style]:h-0 data-[starting-style]:h-0"
            {...props}
        >
            <div className={cn('pt-6', className)}>{children}</div>
        </AccordionPrimitive.Panel>
    );
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
