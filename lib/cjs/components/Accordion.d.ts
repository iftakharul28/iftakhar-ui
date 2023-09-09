import React from 'react';
import { AccordionProps, AccordionContentProps, AccordionItemProps, AccordionTriggerProps } from '../model/accordion';
export declare const Accordion: {
    (props: AccordionProps): React.JSX.Element;
    Item: React.FC<AccordionItemProps>;
    Trigger: React.FC<AccordionTriggerProps>;
    Content: React.FC<AccordionContentProps>;
};
