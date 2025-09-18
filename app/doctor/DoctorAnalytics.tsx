"use client";
import React from "react";
import { Card, Table } from "antd";

const columns = [
  { title: "Tháng", dataIndex: "month", key: "month" },
  { title: "Số ca khám", dataIndex: "cases", key: "cases" },
  { title: "Tỷ lệ hủy lịch", dataIndex: "cancelRate", key: "cancelRate" },
  { title: "Đánh giá", dataIndex: "rating", key: "rating" },
];

const data = [
  { key: 1, month: "09/2025", cases: 8, cancelRate: "10%", rating: "4.8/5" },
];

const DoctorAnalytics: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-blue-200">
      <Card className="w-full max-w-2xl shadow-lg rounded-2xl p-6">
        <div className="text-center font-bold text-xl mb-4">Dashboard hiệu suất</div>
        <Table columns={columns} dataSource={data} pagination={false} className="rounded-xl shadow" />
      </Card>
    </div>
  );
};

export default DoctorAnalytics;
