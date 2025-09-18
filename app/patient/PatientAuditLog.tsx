"use client";
import React from "react";
import { Card, Table, Button, Badge } from "antd";

const loginColumns = [
  { title: "Ngày", dataIndex: "date", key: "date" },
  { title: "Thiết bị", dataIndex: "device", key: "device" },
  { title: "IP", dataIndex: "ip", key: "ip" },
  { title: "", key: "action", render: () => <Button type="link">Xem chi tiết</Button> },
];
const loginData = [
  { key: 1, date: "18/09/2025", device: "iPhone", ip: "192.168.1.1" },
];

const actionColumns = [
  { title: "Thời gian", dataIndex: "time", key: "time" },
  { title: "Hành động", dataIndex: "action", key: "action" },
  { title: "Trạng thái", dataIndex: "status", key: "status", render: (status: string) => <Badge status={status === "Thành công" ? "success" : "error"} text={status} /> },
  { title: "", key: "action", render: () => <Button type="link">Báo cáo bất thường</Button> },
];
const actionData = [
  { key: 1, time: "09:00 18/09/2025", action: "Đăng nhập", status: "Thành công" },
  { key: 2, time: "10:00 18/09/2025", action: "Đổi mật khẩu", status: "Thành công" },
];

const PatientAuditLog: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-blue-200">
      <Card className="w-full max-w-3xl shadow-lg rounded-2xl p-6">
        <div className="text-center font-bold text-xl mb-4">Tra cứu truy cập cá nhân</div>
        <div className="font-semibold mb-2">Lịch sử đăng nhập</div>
        <Table columns={loginColumns} dataSource={loginData} pagination={false} className="rounded-xl shadow mb-6" />
        <div className="font-semibold mb-2">Lịch sử thao tác</div>
        <Table columns={actionColumns} dataSource={actionData} pagination={false} className="rounded-xl shadow" />
      </Card>
    </div>
  );
};

export default PatientAuditLog;
