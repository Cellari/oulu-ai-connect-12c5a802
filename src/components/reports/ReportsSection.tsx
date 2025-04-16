
import React from 'react';
import CollapsibleSection from '../collapsible/CollapsibleSection';
import ReportCard from './ReportCard';

const ReportsSection = () => {
  // Main visible report
  const mainReport = {
    title: 'Pothole on Torikatu',
    date: 'April 10',
    status: 'In Progress' as const
  };
  
  // Additional reports for collapsible content
  const additionalReports = [
    {
      title: 'Broken Street Light',
      date: 'April 5',
      status: 'Resolved' as const
    }
  ];
  
  return (
    <CollapsibleSection 
      title="Recent Reports" 
      collapsibleContent={
        <>
          {additionalReports.map((report, index) => (
            <ReportCard key={index} {...report} />
          ))}
        </>
      }
    >
      <ReportCard {...mainReport} />
    </CollapsibleSection>
  );
};

export default ReportsSection;
