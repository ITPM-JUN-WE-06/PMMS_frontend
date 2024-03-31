import React, { ReactNode } from "react";
import Button from "../button";

interface CardDataStatsProps {
  title: string;
  total: string;
}

interface CardDataStatsProps {
  title: string;
  total: string;
  children: React.ReactNode;
}

const TotalCard: React.FC<CardDataStatsProps> = ({
  title,
  total,
  children,
}) => {
  return (
    <div className="border border-stroke bg-white px-3 py-3 shadow-sm dark:border-strokedark dark:bg-boxdark rounded-lg text-center">
      <div className="flex h-11.5 w-11.5 items-center justify-center rounded-full bg-meta-5 dark:bg-meta-2 mx-auto mb-4">
        {children}
      </div>

      <div className="flex flex-col items-center">
        <span className="text-lg font-bold text-text-light">{title}</span>
        <h4 className="text-2xl font-bold text-text-light">{total}</h4>
      </div>
    </div>
  );
};

export default TotalCard;
