import React from 'react';
import { Prettify } from '../model/common';
import { AccordionContentProps, AccordionItemProps, AccordionTriggerProps, Props } from '../model/accordion';
export declare const Accordion: {
    (props: Prettify<Props>): React.JSX.Element;
    Item: (props: Prettify<AccordionItemProps>) => React.JSX.Element;
    Trigger: (props: Prettify<AccordionTriggerProps>) => React.JSX.Element;
    Content: (props: Prettify<AccordionContentProps>) => React.JSX.Element | null;
};
export declare const AccordionItem: (props: Prettify<AccordionItemProps>) => React.JSX.Element;
export declare const AccordionTrigger: (props: Prettify<AccordionTriggerProps>) => React.JSX.Element;
export declare const AccordionContent: (props: Prettify<AccordionContentProps>) => React.JSX.Element | null;
