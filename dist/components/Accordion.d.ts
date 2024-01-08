import React from 'react';
import type { AccordionContentProps, AccordionTriggerProps, AccordionProps, AccordionItemProps } from '../model/accordion';
export declare const Accordion: {
    ({ defaultValue, children, ...rest }: AccordionProps): React.JSX.Element;
    Item: ({ className, value, activeClass, children, ...rest }: AccordionItemProps) => React.JSX.Element;
    Trigger: ({ value, activeClass, className, children, icon, ...rest }: AccordionTriggerProps) => React.JSX.Element;
    Content: ({ className, value, activeClass, style, children, ...rest }: AccordionContentProps) => React.JSX.Element;
};
