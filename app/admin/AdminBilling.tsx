"use client";
import React from "react";
import { Card, Table, Button } from "antd";

const columns = [
  { title: "Dịch vụ", dataIndex: "service", key: "service" },
  { title: "Bệnh nhân", dataIndex: "patient", key: "patient" },
  { title: "Trạng thái", dataIndex: "status", key: "status" },
  { title: "", key: "action", render: () => (
    <div className="flex gap-2">
      <Button type="link">Xác nhận</Button>
      <Button danger type="link">Hoàn tiền</Button>
      <Button type="link">Xuất hóa đơn</Button>
    </div>
  ) },
];

const data = [
  { key: 1, service: "Khám tổng quát", patient: "Nguyễn Văn Bệnh Nhân", status: "Chưa thanh toán" },
];

const AdminBilling: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-yellow-50 to-blue-50">
      <Card className="w-full max-w-3xl shadow-lg rounded-2xl p-6">
        <div className="text-center font-bold text-xl mb-4">Quản lý hóa đơn, thanh toán</div>
        <Table columns={columns} dataSource={data} pagination={false} className="rounded-xl shadow" />
      </Card>
    </div>
  );
};

export default AdminBilling;
