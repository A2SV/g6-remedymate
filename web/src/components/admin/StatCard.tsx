
"use client";

import { ReactNode } from "react";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";

type StatCardProps = {
  title: string;
  value: string | number;
  change: string;
  isPositive?: boolean;
  icon?: ReactNode;
  className?: string;
};

export default function StatCard({
  title,
  value,
  change,
  isPositive = true,
  icon,
  className = "",
}: StatCardProps) {
  return (
    <div
      className={`flex flex-col justify-between rounded-2xl p-5 shadow-sm text-white ${className}`}
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium opacity-90">{title}</span>
        {icon && <div className="text-lg">{icon}</div>}
      </div>

      {/* Value */}
      <div className="mt-2 text-3xl font-bold">{value}</div>

      {/* Change */}
      <div className="mt-3 flex items-center space-x-1 text-sm font-semibold">
        {isPositive ? (
          <ArrowUpRight size={16} />
        ) : (
          <ArrowDownRight size={16} />
        )}
        <span>{change}</span>
      </div>
    </div>
  );
}
