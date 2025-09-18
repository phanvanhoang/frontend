"use client";
import React from "react";
import { Card, Table } from "antd";

const columns = [
  { title: "Ngày", dataIndex: "date", key: "date" },
  { title: "Thiết bị", dataIndex: "device", key: "device" },
  { title: "IP", dataIndex: "ip", key: "ip" },
  { title: "Thao tác", dataIndex: "action", key: "action" },
];

const data = [
  { key: 1, date: "18/09/2025", device: "Laptop", ip: "192.168.1.2", action: "Đăng nhập" },
];

const DoctorAuditLog: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-blue-200">
      <Card className="w-full max-w-2xl shadow-lg rounded-2xl p-6">
        <div className="text-center font-bold text-xl mb-4">Tra cứu truy cập cá nhân</div>
        <Table columns={columns} dataSource={data} pagination={false} className="rounded-xl shadow" />
      </Card>
    </div>
  );
};

export default DoctorAuditLog;
