"use client";

import { Activity, Clock, CloudOff, SearchIcon, ShieldAlert } from "lucide-react";

import AdminHeader from "@/components/AdminHeader";
import ChartCard from "@/components/ChartCard";
import DataTable from "@/components/DataTable";
import StatCard from "@/components/StatCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export type StatCardProps = {
	title: string;
	value: string;
	change: string;
	trend: "up" | "down";
	color: string;
	icon: string;
};

export default function AnalyticsPage() {
	// Mock chart data
	const usageOverTimeData = {
		labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
		datasets: [
			{
				label: "Triage",
				data: [1200, 1300, 1250, 1400, 1500, 1450, 1600],
				borderColor: "var(--color-chart-1)",
				backgroundColor: "rgba(var(--color-chart-1-rgb), 0.1)",
			},
		],
	};

	const languageBreakdownData = {
		labels: ["English", "Amharic", "Other"],
		values: [62, 38, 0],
		colors: ["var(--color-chart-1)", "var(--color-chart-2)", "var(--color-chart-3)"],
	};

	const offlineUtilityData = {
		labels: ["Offline", "Online"],
		values: [25, 75],
		colors: ["var(--color-chart-4)", "var(--color-chart-5)"],
	};

	const safetyMetricsData = {
		labels: ["Low Risk", "Medium Risk", "High Risk"],
		values: [65, 25, 10],
		colors: ["var(--color-chart-1)", "var(--color-chart-2)", "var(--color-chart-3)"],
	};

	const mostViewedTopics = [
		{ topic: "Headache", sessions: 4320, duration: "3m 12s", redFlag: "1.2%" },
		{ topic: "Diarrhea", sessions: 3980, duration: "2m 54s", redFlag: "0.8%" },
		{ topic: "Sore Throat", sessions: 3210, duration: "2m 40s", redFlag: "0.6%" },
		{ topic: "Fever", sessions: 2880, duration: "3m 01s", redFlag: "1.0%" },
	];

	return (
		<div className="flex overflow-hidden min-h-screen">
			<div className="relative flex font-inter">
				{/* === ANALYTICS CONTENT === */}
				<div className="flex w-full flex-col gap-4">
					{/* Header Controls */}
					<AdminHeader>
						<div className="flex gap-2">
							<Input type="text" placeholder="Search topics, content, or flags..." />
							<Button>
								<SearchIcon />
							</Button>
						</div>
					</AdminHeader>

					<div className="mb-8 px-7">
						<h2 className="text-xl font-bold mb-2">Key Metrics Summary</h2>

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
					<div className="mb-8 px-7">
						<h2 className="text-xl font-bold mb-2">Charts & Visualizations</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							<ChartCard
								title="Usage Over Time"
								chartType="line"
								data={usageOverTimeData}
								height="300px"
							/>
							<ChartCard
								title="Language Breakdown"
								chartType="pie"
								data={languageBreakdownData}
								height="300px"
							/>
							<ChartCard
								title="Offline Utility"
								chartType="donut"
								data={offlineUtilityData}
								height="300px"
							/>
							<ChartCard title="Safety Metrics" chartType="bar" data={safetyMetricsData} height="300px" />
						</div>
					</div>

					<div className="px-7 mb-8">
						<h2 className="text-xl font-bold mb-2">Most Viewed Topics</h2>
						<DataTable data={mostViewedTopics} />
					</div>
					<div className="px-7 mb-5">
						<div className="bg-amber-gold rounded-sm p-4 flex gap-2">
							<ShieldAlert />
							<p>Analytics are aggregated and anonymous. No personal health data is stored.</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
