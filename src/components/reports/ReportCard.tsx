
import React from 'react';

type ReportCardProps = {
  title: string;
  date: string;
  status: 'In Progress' | 'Resolved' | 'Pending';
};

const ReportCard = ({ title, date, status }: ReportCardProps) => {
  const getStatusClass = () => {
    switch (status) {
      case 'In Progress':
        return 'bg-yellow-100 text-yellow-800';
      case 'Resolved':
        return 'bg-green-100 text-green-800';
      case 'Pending':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };
  
  return (
    <div className="bg-white rounded-lg shadow overflow-hidden mb-2">
      <div className="p-3">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-medium">{title}</h3>
            <p className="text-xs text-oulu-gray">Reported {date}</p>
          </div>
          <span className={`text-xs ${getStatusClass()} px-2 py-0.5 rounded`}>{status}</span>
        </div>
      </div>
    </div>
  );
};

export default ReportCard;
