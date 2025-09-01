"use client";

type DataRow = {
  topic: string;
  sessions: number;
  duration: string;
  redFlag: string;
};

type DataTableProps = {
  data: DataRow[];
};

export default function DataTable({ data }: DataTableProps) {
  return (
    <div className="rounded-2xl overflow-hidden border border-border bg-card shadow-sm">
      <table className="min-w-full text-sm text-left border-collapse">
        {/* Table Header */}
        <thead>
          <tr className="bg-blue-900 text-white">
            <th className="px-6 py-3 font-medium">Topic</th>
            <th className="px-6 py-3 font-medium">Sessions</th>
            <th className="px-6 py-3 font-medium">Avg. Duration</th>
            <th className="px-6 py-3 font-medium">% Red-Flag</th>
          </tr>
        </thead>

        {/* Table Body */}
        <tbody>
          {data.map((row, idx) => (
            <tr
              key={idx}
              className={idx % 2 === 0 ? "bg-white" : "bg-blue-100/40"}
            >
              <td className="px-6 py-3 font-medium text-foreground">{row.topic}</td>
              <td className="px-6 py-3">{row.sessions.toLocaleString()}</td>
              <td className="px-6 py-3">{row.duration}</td>
              <td className="px-6 py-3">{row.redFlag}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}



