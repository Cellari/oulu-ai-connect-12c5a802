
import React from 'react';
import { ChevronDown } from 'lucide-react';
import { 
  Collapsible, 
  CollapsibleContent, 
  CollapsibleTrigger 
} from "@/components/ui/collapsible";

type CollapsibleSectionProps = {
  title: string;
  children: React.ReactNode;
  collapsibleContent: React.ReactNode;
};

const CollapsibleSection = ({ title, children, collapsibleContent }: CollapsibleSectionProps) => {
  return (
    <div>
      <Collapsible className="w-full">
        <div className="flex justify-between items-center mb-2">
          <h2 className="font-semibold text-oulu-dark">{title}</h2>
          <CollapsibleTrigger className="text-oulu-secondary text-sm flex items-center">
            See all <ChevronDown size={16} className="ml-1" />
          </CollapsibleTrigger>
        </div>
        
        {children}
        
        <CollapsibleContent>
          {collapsibleContent}
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
};

export default CollapsibleSection;
