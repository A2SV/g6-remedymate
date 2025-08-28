 "use client";

// src/app/(main)/admin/analytics/page.tsx
import {
  Activity,
  Clock,
  CloudOff,
  ShieldAlert,
  UserCog
} from "lucide-react";

import { useState } from 'react';
import StatCard from '@/components/StatCard';
import ChartCard from '@/components/ChartCard';
import DataTable from '@/components/DataTable';

export type StatCardProps = {
  title: string;
  value: string;
  change: string;
  trend: 'up' | 'down';
  color: string;
  icon: string;
};

export default function AnalyticsPage() {
  const [searchTerm, setSearchTerm] = useState('');

  // Key Metrics
  const keyMetrics: StatCardProps[] = [
    {
      title: 'Usage Counts',
      value: '28,760',
      change: '+6.2%',
      trend: 'up',
      color: 'bg-blue-900',
      icon: 'lucide:activity',
    },
    {
      title: 'Language Usage',
      value: 'EN 62% • AM 38%',
      change: '+2.1% AM',
      trend: 'up',
      color: 'bg-emerald-600',
      icon: 'lucide:globe',
    },
    {
      title: 'Offline Hits',
      value: '2,140',
      change: '+4.8%',
      trend: 'up',
      color: 'bg-orange-500',
      icon: 'lucide:cloud-download',
    },
    {
      title: 'Red-Flag Escalations',
      value: '102',
      change: '-1.4%',
      trend: 'down',
      color: 'bg-red-500',
      icon: 'lucide:alert-circle',
    },
  ];

  // Mock chart data
  const usageOverTimeData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Triage',
        data: [1200, 1300, 1250, 1400, 1500, 1450, 1600],
        borderColor: 'var(--color-chart-1)',
        backgroundColor: 'rgba(var(--color-chart-1-rgb), 0.1)',
      },
    ],
  };

  const languageBreakdownData = {
    labels: ['English', 'Amharic', 'Other'],
    values: [62, 38, 0],
    colors: ['var(--color-chart-1)', 'var(--color-chart-2)', 'var(--color-chart-3)'],
  };

  const offlineUtilityData = {
    labels: ['Offline', 'Online'],
    values: [25, 75],
    colors: ['var(--color-chart-4)', 'var(--color-chart-5)'],
  };

  const safetyMetricsData = {
    labels: ['Low Risk', 'Medium Risk', 'High Risk'],
    values: [65, 25, 10],
    colors: ['var(--color-chart-1)', 'var(--color-chart-2)', 'var(--color-chart-3)'],
  };

  const mostViewedTopics = [
    { topic: 'Headache', sessions: 4320, duration: '3m 12s', redFlag: '1.2%' },
    { topic: 'Diarrhea', sessions: 3980, duration: '2m 54s', redFlag: '0.8%' },
    { topic: 'Sore Throat', sessions: 3210, duration: '2m 40s', redFlag: '0.6%' },
    { topic: 'Fever', sessions: 2880, duration: '3m 01s', redFlag: '1.0%' },
  ];

  return (
    <div className="relative flex min-h-[644px] scale-100 bg-background w-full max-w-[1200px] mx-auto font-inter"
        style={{
    background: 'rgba(255, 255, 255, 0.12)',
    opacity: 1,
    minHeight: '900px',
  }}
>


      {/* Scrollable content area */}
        <div className="rounded-[32px] overflow-hidden relative">
        <div className="w-[100%]" style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start' }}>
          <div style={{ borderRadius: '32px', overflow: 'hidden', position: 'relative' }}>
            <div id="">
              <div
                className="relative flex min-h-[644px] scale-100 bg-background w-[1200px] font-inter"
                style={{
                  background: 'rgba(255, 255, 255, 0.12)',
                  opacity: 1,
                  minHeight: '900px',
                }}
              >
                {/* === ANALYTICS CONTENT === */}
                <div className="flex w-full flex-col p-8">
                  {/* Header Controls */}
                  <div className="mb-6 flex items-center justify-between">
                    <div className="relative flex-1 max-w-md">
                      <input
                        type="text"
                        placeholder="Search topics, content, or flags..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full rounded-full border border-input bg-background/80 pl-10 pr-4 py-2 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                      <svg
                        className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                      </svg>
                    </div>
                    <button className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
                        <UserCog size={18} />
                        <span>Admin</span>
                    </button>
                
                </div>

                  {/* Key Metrics Summary */}
                  {/* <div className="mb-8">
                    <h2 className="text-xl font-semibold mb-4 text-foreground">Key Metrics Summary</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                      {keyMetrics.map((metric, i) => (
                        <StatCard key={i} {...metric} />
                      ))}
                    </div>
                  </div> */}
                  <div className="mb-8">
                    <h2 className="text-xl font-bold">Key Metrics Summary</h2>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        <StatCard
                        title="Usage Counts"
                        value="28,760"
                        change="+6.2%"
                        isPositive={true}
                        icon={<Activity />}
                        className="bg-blue-900"
                        />

                        <StatCard
                        title="Language Usage"
                        value="EN 62% · AM 38%"
                        change="+2.1% AM"
                        isPositive={true}
                        icon={<Clock />}
                        className="bg-green-700"
                        />

                        <StatCard
                        title="Offline Hits"
                        value="2,140"
                        change="+4.8%"
                        isPositive={true}
                        icon={<CloudOff />}
                        className="bg-yellow-600"
                        />

                        <StatCard
                        title="Red-Flag Escalations"
                        value="102"
                        change="-1.4%"
                        isPositive={false}
                        icon={<ShieldAlert />}
                        className="bg-red-500"
                        />
                    </div>
                  </div>

                  {/* Charts & Visualizations */}
                  <div className="mb-8">
                    <h2 className="text-xl font-bold">Charts & Visualizations</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <ChartCard title="Usage Over Time" chartType="line" data={usageOverTimeData} height="300px" />
                      <ChartCard title="Language Breakdown" chartType="pie" data={languageBreakdownData} height="300px" />
                      <ChartCard title="Offline Utility" chartType="donut" data={offlineUtilityData} height="300px" />
                      <ChartCard title="Safety Metrics" chartType="bar" data={safetyMetricsData} height="300px" />
                    </div>
                  </div>

                  {/* Most Viewed Topics */}
                  <div>
                    <h2 className="text-xl font-bold">Most Viewed Topics</h2>
                    <DataTable data={mostViewedTopics} />
                    <p className="text-xs text-muted-foreground mt-2">
                      Analytics are aggregated and anonymous. No personal health data is stored.
                    </p>
                  </div>
                </div>
                {/* === END ANALYTICS CONTENT === */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}



// import { useState } from 'react';
// import StatCard, { type StatCardProps } from '@/components/StatCard';
// // import StatCard from '@/components/StatCard';
// import ChartCard from '@/components/ChartCard';
// import DataTable from '@/components/DataTable';

// // Optional: only if you want theme-aware rendering
// // Remove if `next-themes` is not installed
// // import { useTheme } from 'next-themes';

// export default function AnalyticsPage() {
//   const [dateRange] = useState('7d');
//   const [searchTerm, setSearchTerm] = useState('');

//   // Key Metrics
// const keyMetrics: StatCardProps[] = [
//   {
//     title: 'Usage Counts',
//     value: '28,760',
//     change: '+6.2%',
//     trend: 'up',
//     color: 'bg-blue-900',
//     icon: 'lucide:activity', // or 'lucide:bar-chart'
//   },
//   {
//     title: 'Language Usage',
//     value: 'EN 62% • AM 38%',
//     change: '+2.1% AM',
//     trend: 'up',
//     color: 'bg-emerald-600',
//     icon: 'lucide:globe',
//   },
//   {
//     title: 'Offline Hits',
//     value: '2,140',
//     change: '+4.8%',
//     trend: 'up',
//     color: 'bg-orange-500',
//     icon: 'lucide:cloud-download',
//   },
//   {
//     title: 'Red-Flag Escalations',
//     value: '102',
//     change: '-1.4%',
//     trend: 'down',
//     color: 'bg-red-500',
//     icon: 'lucide:alert-circle',
//   },
// ];

//   // Chart data
//   const usageOverTimeData = {
//     labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
//     datasets: [
//       {
//         label: 'Triage',
//         data: [1200, 1300, 1250, 1400, 1500, 1450, 1600],
//         borderColor: 'var(--color-chart-1)',
//         backgroundColor: 'rgba(var(--color-chart-1-rgb), 0.1)',
//       },
//       {
//         label: 'Map',
//         data: [900, 950, 920, 1000, 1100, 1050, 1150],
//         borderColor: 'var(--color-chart-2)',
//         backgroundColor: 'rgba(var(--color-chart-2-rgb), 0.1)',
//       },
//       {
//         label: 'Compose',
//         data: [700, 750, 720, 800, 850, 820, 900],
//         borderColor: 'var(--color-chart-3)',
//         backgroundColor: 'rgba(var(--color-chart-3-rgb), 0.1)',
//       },
//     ],
//   };

//   const languageBreakdownData = {
//     labels: ['English', 'Amharic', 'Other'],
//     values: [62, 38, 0],
//     colors: ['var(--color-chart-1)', 'var(--color-chart-2)', 'var(--color-chart-3)'],
//   };

//   const offlineUtilityData = {
//     labels: ['Offline Usage', 'Online Usage'],
//     values: [25, 75],
//     colors: ['var(--color-chart-4)', 'var(--color-chart-5)'],
//   };

//   const safetyMetricsData = {
//     labels: ['Low Risk', 'Medium Risk', 'High Risk'],
//     values: [65, 25, 10],
//     colors: ['var(--color-chart-1)', 'var(--color-chart-2)', 'var(--color-chart-3)'],
//   };

//   const insights = [
//     {
//       title: '70% of Amharic sessions completed successfully — goal achieved!',
//       description: 'Great progress in accessibility and comprehension for Amharic speakers.',
//       image: 'https://placehold.co/100x60/1e3a5f/ffffff?text=M+ENTL+HEALTH',
//       icon: '✅',
//     },
//     {
//       title: '25% sessions served via offline utility is more than expected',
//       description: 'Offline packs are effective in regions with limited connectivity.',
//       image: 'https://placehold.co/100x60/1e3a5f/ffffff?text=📱',
//       icon: '📱',
//     },
//   ];

//   const mostViewedTopics = [
//     { topic: 'Headache', sessions: 4320, duration: '3m 12s', redFlag: '1.2%' },
//     { topic: 'Diarrhea', sessions: 3980, duration: '2m 54s', redFlag: '0.8%' },
//     { topic: 'Sore Throat', sessions: 3210, duration: '2m 40s', redFlag: '0.6%' },
//     { topic: 'Fever', sessions: 2880, duration: '3m 01s', redFlag: '1.0%' },
//     { topic: 'Back Pain', sessions: 2420, duration: '2m 45s', redFlag: '0.4%' },
//     { topic: 'Skin Rash', sessions: 2100, duration: '2m 11s', redFlag: '0.3%' },
//     { topic: 'Cough', sessions: 1980, duration: '2m 38s', redFlag: '0.5%' },
//     { topic: 'Heartburn', sessions: 1760, duration: '2m 07s', redFlag: '0.2%' },
//     { topic: 'Constipation', sessions: 1520, duration: '2m 33s', redFlag: '0.3%' },
//     { topic: 'Cold & Flu', sessions: 1320, duration: '2m 49s', redFlag: '0.9%' },
//   ];

//   return (
//     <div className="flex flex-col h-screen">
//       {/* Header Controls */}
//       <div className="px-6 py-4 border-b border-border bg-card">
//         <div className="flex items-center justify-between gap-4">
//           <div className="flex-1">
//             <div className="relative">
//               <input
//                 type="text"
//                 placeholder="Search topics, content, or flags..."
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//                 className="w-full pl-10 pr-4 py-2 rounded-lg border border-input bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
//               />
//               <svg
//                 className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
//                 />
//               </svg>
//             </div>
//           </div>
//           <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
//             Notifications
//           </button>
//         </div>
//       </div>

//       <main className="flex-1 overflow-y-auto p-6 bg-background">
//         {/* Key Metrics */}
//         <section className="mb-8">
//           <h2 className="text-xl font-semibold mb-4">Key Metrics Summary</h2>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
//             {keyMetrics.map((metric, i) => (
//               <StatCard key={i} {...metric} />
//             ))}
//           </div>
//         </section>

//         {/* Charts */}
//         <section className="mb-8">
//           <h2 className="text-xl font-semibold mb-4">Charts & Visualizations</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             <ChartCard title="Usage Over Time" chartType="line" data={usageOverTimeData} height="300px" />
//             <ChartCard title="Language Breakdown" chartType="pie" data={languageBreakdownData} height="300px" />
//             <ChartCard title="Offline Utility" chartType="donut" data={offlineUtilityData} height="300px" />
//             <ChartCard title="Safety Metrics" chartType="bar" data={safetyMetricsData} height="300px" />
//           </div>
//         </section>

//         {/* Insights */}
//         <section className="mb-8">
//           <h2 className="text-xl font-semibold mb-4">Illustrative Insights</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             {insights.map((insight, i) => (
//               <div key={i} className="p-4 bg-card rounded-lg border border-border hover:shadow-md transition-shadow">
//                 <div className="flex items-start gap-3">
//                   <img src={insight.image} alt="insight" className="w-16 h-10 object-cover rounded" />
//                   <div>
//                     <h3 className="font-medium">{insight.title}</h3>
//                     <p className="text-sm text-muted-foreground mt-1">{insight.description}</p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* Table */}
//         <section>
//           <h2 className="text-xl font-semibold mb-4">Most Viewed Topics</h2>
//           <DataTable data={mostViewedTopics} />
//           <p className="text-xs text-muted-foreground mt-2">
//             Analytics are aggregated and anonymous. No personal health data is stored.
//           </p>
//         </section>
//       </main>
//     </div>
//   );
// }


// // // src/app/(main)/admin/analytics/page.tsx
// // import { useState } from 'react';
// // import StatCard from '@/components/StatCard';
// // import ChartCard from '@/components/ChartCard';
// // import DataTable from '@/components/DataTable';
// // import { useTheme } from 'next-themes';

// // export default function AnalyticsPage() {
// //   const [dateRange, setDateRange] = useState('7d');
// //   const [searchTerm, setSearchTerm] = useState('');
// //   const { resolvedTheme } = useTheme();

// //   // Mock data for analytics
// //   const keyMetrics = [
// //     {
// //       title: 'Usage Counts',
// //       value: '28,760',
// //       change: '+6.2%',
// //       trend: 'up',
// //       color: 'bg-blue-900',
// //       icon: '📈',
// //     },
// //     {
// //       title: 'Language Usage',
// //       value: 'EN 62% • AM 38%',
// //       change: '+2.1% AM',
// //       trend: 'up',
// //       color: 'bg-emerald-600',
// //       icon: '🌐',
// //     },
// //     {
// //       title: 'Offline Hits',
// //       value: '2,140',
// //       change: '+4.8%',
// //       trend: 'up',
// //       color: 'bg-orange-500',
// //       icon: '⚡',
// //     },
// //     {
// //       title: 'Red-Flag Escalations',
// //       value: '102',
// //       change: '-1.2%',
// //       trend: 'down',
// //       color: 'bg-red-500',
// //       icon: '⚠️',
// //     },
// //   ];

// //   const usageOverTimeData = {
// //     labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
// //     datasets: [
// //       {
// //         label: 'Triage',
// //         data: [1200, 1300, 1250, 1400, 1500, 1450, 1600],
// //         borderColor: 'var(--color-chart-1)',
// //         backgroundColor: 'rgba(var(--color-chart-1-rgb), 0.1)',
// //       },
// //       {
// //         label: 'Map',
// //         data: [900, 950, 920, 1000, 1100, 1050, 1150],
// //         borderColor: 'var(--color-chart-2)',
// //         backgroundColor: 'rgba(var(--color-chart-2-rgb), 0.1)',
// //       },
// //       {
// //         label: 'Compose',
// //         data: [700, 750, 720, 800, 850, 820, 900],
// //         borderColor: 'var(--color-chart-3)',
// //         backgroundColor: 'rgba(var(--color-chart-3-rgb), 0.1)',
// //       },
// //     ],
// //   };

// //   const languageBreakdownData = {
// //     labels: ['English', 'Amharic', 'Other'],
// //     values: [62, 38, 0],
// //     colors: ['var(--color-chart-1)', 'var(--color-chart-2)', 'var(--color-chart-3)'],
// //   };

// //   const offlineUtilityData = {
// //     labels: ['Offline Usage', 'Online Usage'],
// //     values: [25, 75],
// //     colors: ['var(--color-chart-4)', 'var(--color-chart-5)'],
// //   };

// //   const safetyMetricsData = {
// //     labels: ['Low Risk', 'Medium Risk', 'High Risk'],
// //     values: [65, 25, 10],
// //     colors: ['var(--color-chart-1)', 'var(--color-chart-2)', 'var(--color-chart-3)'],
// //   };

// //   const insights = [
// //     {
// //       title: '70% of Amharic sessions completed successfully — goal achieved!',
// //       description: 'Great progress in accessibility and comprehension for Amharic speakers.',
// //       image: 'https://placehold.co/100x60/1e3a5f/ffffff?text=M+ENTL+HEALTH',
// //       icon: '✅',
// //     },
// //     {
// //       title: '25% sessions served via offline utility is more than expected',
// //       description: 'Offline packs are effective in regions with limited connectivity.',
// //       image: 'https://placehold.co/100x60/1e3a5f/ffffff?text=📱',
// //       icon: '📱',
// //     },
// //   ];

// //   const mostViewedTopics = [
// //     { topic: 'Headache', sessions: 4320, duration: '3m 12s', redFlag: '1.2%' },
// //     { topic: 'Diarrhea', sessions: 3980, duration: '2m 54s', redFlag: '0.8%' },
// //     { topic: 'Sore Throat', sessions: 3210, duration: '2m 40s', redFlag: '0.6%' },
// //     { topic: 'Fever', sessions: 2880, duration: '3m 01s', redFlag: '1.0%' },
// //     { topic: 'Back Pain', sessions: 2420, duration: '2m 45s', redFlag: '0.4%' },
// //     { topic: 'Skin Rash', sessions: 2100, duration: '2m 11s', redFlag: '0.3%' },
// //     { topic: 'Cough', sessions: 1980, duration: '2m 38s', redFlag: '0.5%' },
// //     { topic: 'Heartburn', sessions: 1760, duration: '2m 07s', redFlag: '0.2%' },
// //     { topic: 'Constipation', sessions: 1520, duration: '2m 33s', redFlag: '0.3%' },
// //     { topic: 'Cold & Flu', sessions: 1320, duration: '2m 49s', redFlag: '0.9%' },
// //   ];

// //   return (
// //     <div className="flex flex-col h-screen">
// //       {/* Header Controls */}
// //       <div className="px-6 py-4 border-b border-border bg-card">
// //         <div className="flex items-center justify-between gap-4">
// //           <div className="flex-1">
// //             <div className="relative">
// //               <input
// //                 type="text"
// //                 placeholder="Search topics, content, or flags..."
// //                 value={searchTerm}
// //                 onChange={(e) => setSearchTerm(e.target.value)}
// //                 className="w-full pl-10 pr-4 py-2 rounded-lg border border-input bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
// //               />
// //               <svg
// //                 className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground"
// //                 fill="none"
// //                 stroke="currentColor"
// //                 viewBox="0 0 24 24"
// //               >
// //                 <path
// //                   strokeLinecap="round"
// //                   strokeLinejoin="round"
// //                   strokeWidth={2}
// //                   d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
// //                 />
// //               </svg>
// //             </div>
// //           </div>
// //           <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
// //             Notifications
// //           </button>
// //           <button className="px-4 py-2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-lg hover:from-emerald-600 hover:to-teal-600 transition-all">
// //             Try Banani
// //           </button>
// //         </div>
// //       </div>

// //       <div className="flex-1 overflow-y-auto p-6">
// //         {/* Key Metrics Summary */}
// //         <div className="mb-6">
// //           <h2 className="text-xl font-semibold mb-4">Key Metrics Summary</h2>
// //           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
// //             {keyMetrics.map((metric, index) => (
// //               <StatCard
// //                 key={index}
// //                 title={metric.title}
// //                 value={metric.value}
// //                 change={metric.change}
// //                 trend={metric.trend}
// //                 color={metric.color}
// //                 icon={metric.icon}
// //               />
// //             ))}
// //           </div>
// //         </div>

// //         {/* Charts & Visualizations */}
// //         <div className="mb-6">
// //           <div className="flex items-center justify-between mb-4">
// //             <h2 className="text-xl font-semibold">Charts & Visualizations</h2>
// //             <div className="flex items-center gap-2">
// //               <span className="text-sm text-muted-foreground">Daily</span>
// //               <span className="text-sm text-muted-foreground">•</span>
// //               <span className="text-sm text-muted-foreground">Weekly</span>
// //             </div>
// //           </div>
// //           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// //             <ChartCard
// //               title="Usage Over Time"
// //               chartType="line"
// //               data={usageOverTimeData}
// //               height="300px"
// //             />
// //             <ChartCard
// //               title="Language Breakdown"
// //               chartType="pie"
// //               data={languageBreakdownData}
// //               height="300px"
// //             />
// //             <ChartCard
// //               title="Offline Utility"
// //               chartType="donut"
// //               data={offlineUtilityData}
// //               height="300px"
// //             />
// //             <ChartCard
// //               title="Safety Metrics"
// //               chartType="bar"
// //               data={safetyMetricsData}
// //               height="300px"
// //             />
// //           </div>
// //         </div>

// //         {/* Illustrative Insights */}
// //         <div className="mb-6">
// //           <h2 className="text-xl font-semibold mb-4">Illustrative Insights</h2>
// //           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// //             {insights.map((insight, index) => (
// //               <div
// //                 key={index}
// //                 className="p-4 bg-card rounded-lg border border-border hover:shadow-md transition-shadow"
// //               >
// //                 <div className="flex items-start gap-3">
// //                   <img
// //                     src={insight.image}
// //                     alt={insight.title}
// //                     className="w-16 h-10 object-cover rounded-md"
// //                   />
// //                   <div className="flex-1">
// //                     <h3 className="font-medium">{insight.title}</h3>
// //                     <p className="text-sm text-muted-foreground mt-1">{insight.description}</p>
// //                   </div>
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //         </div>

// //         {/* Most Viewed Topics */}
// //         <div>
// //           <h2 className="text-xl font-semibold mb-4">Most Viewed Topics</h2>
// //           <DataTable data={mostViewedTopics} />
// //           <p className="text-xs text-muted-foreground mt-2">
// //             Analytics are aggregated and anonymous. No personal health data is stored.
// //           </p>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }