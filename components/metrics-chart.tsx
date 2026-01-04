"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend
} from "recharts";
import type { MetricPoint } from "@/data/projects";

type Props = {
  data: MetricPoint[];
};

export function MetricsChart({ data }: Props) {
  const hasAccuracy = data.some((d) => d.accuracy !== undefined);
  const hasRmse = data.some((d) => d.rmse !== undefined);
  const hasMae = data.some((d) => d.mae !== undefined);

  return (
    <div className="h-72 w-full rounded-2xl border border-white/10 bg-white/5 p-4">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid stroke="rgba(255,255,255,0.08)" vertical={false} />
          <XAxis dataKey="name" stroke="#cbd5e1" />
          <YAxis stroke="#cbd5e1" />
          <Tooltip
            contentStyle={{
              background: "rgba(15,23,42,0.9)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: 12,
              color: "#e2e8f0"
            }}
          />
          <Legend />
          {hasAccuracy && (
            <Line
              type="monotone"
              dataKey="accuracy"
              stroke="#22d3ee"
              strokeWidth={2.4}
              dot={{ r: 4 }}
            />
          )}
          {hasRmse && (
            <Line
              type="monotone"
              dataKey="rmse"
              stroke="#a855f7"
              strokeWidth={2.4}
              dot={{ r: 4 }}
            />
          )}
          {hasMae && (
            <Line
              type="monotone"
              dataKey="mae"
              stroke="#f97316"
              strokeWidth={2.4}
              dot={{ r: 4 }}
            />
          )}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
