// src/components/ChartCard.tsx
import React from 'react';
import { LineChart, BarChart, PieChart, Cell, ResponsiveContainer, Line, Bar, Pie, Tooltip, Legend } from 'recharts';

interface ChartData {
  labels: string[];
  values?: number[];
  datasets?: {
    label: string;
    data: number[];
    borderColor: string;
    backgroundColor: string;
  }[];
  colors?: string[];
}

interface ChartCardProps {
  title: string;
  chartType: 'line' | 'bar' | 'pie' | 'donut';
  data: ChartData;
  height: string;
}

const ChartCard: React.FC<ChartCardProps> = ({ title, chartType, data, height }) => {
  const renderChart = () => {
    switch (chartType) {
      case 'line':
        return (
          <ResponsiveContainer width="100%" height={height}>
            <LineChart data={data.datasets?.[0].data.map((value, index) => ({
              name: data.labels[index],
              value,
            }))}>
              <Tooltip
                contentStyle={{
                  background: 'var(--card)',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius-sm)',
                }}
                formatter={(value) => [`${value}`, 'Sessions']}
              />
              <Legend />
              {data.datasets?.map((dataset, index) => (
                <Line
                  key={index}
                  type="monotone"
                  dataKey="value"
                  stroke={dataset.borderColor}
                  strokeWidth={2}
                  dot={{ r: 4 }}
                  activeDot={{ r: 8 }}
                />
              ))}
            </LineChart>
          </ResponsiveContainer>
        );

      case 'bar':
        return (
          <ResponsiveContainer width="100%" height={height}>
            <BarChart data={data.labels.map((label, index) => ({
              name: label,
              value: data.values?.[index] || 0,
            }))}>
              <Tooltip
                contentStyle={{
                  background: 'var(--card)',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius-sm)',
                }}
                formatter={(value) => [`${value}`, 'Sessions']}
              />
              <Bar dataKey="value" fill="var(--color-chart-1)" />
            </BarChart>
          </ResponsiveContainer>
        );

      case 'pie':
        return (
          <ResponsiveContainer width="100%" height={height}>
            <PieChart>
              <Tooltip
                contentStyle={{
                  background: 'var(--card)',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius-sm)',
                }}
                formatter={(value) => [`${value}%`, 'Percentage']}
              />
              <Pie
                data={data.labels.map((label, index) => ({
                  name: label,
                  value: data.values?.[index] || 0,
                }))}
                cx="50%"
                cy="50%"
                outerRadius={80}
                fill="var(--color-chart-1)"
                dataKey="value"
              >
                {data.colors?.map((color, index) => (
                  <Cell key={`cell-${index}`} fill={color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        );

      case 'donut':
        return (
          <ResponsiveContainer width="100%" height={height}>
            <PieChart>
              <Tooltip
                contentStyle={{
                  background: 'var(--card)',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius-sm)',
                }}
                formatter={(value) => [`${value}%`, 'Percentage']}
              />
              <Pie
                data={data.labels.map((label, index) => ({
                  name: label,
                  value: data.values?.[index] || 0,
                }))}
                cx="50%"
                cy="50%"
                outerRadius={80}
                innerRadius={40}
                fill="var(--color-chart-1)"
                dataKey="value"
              >
                {data.colors?.map((color, index) => (
                  <Cell key={`cell-${index}`} fill={color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        );

      default:
        return null;
    }
  };

  return (
    <div className="bg-card rounded-lg border border-border p-4 shadow-sm">
      <h3 className="font-medium mb-4">{title}</h3>
      <div className="overflow-hidden">
        {renderChart()}
      </div>
    </div>
  );
};

export default ChartCard;