"use client";
import React from "react";
import { Card, Table, Button } from "antd";

const columns = [
  { title: "Loại", dataIndex: "type", key: "type" },
  { title: "Tên", dataIndex: "name", key: "name" },
  { title: "", key: "action", render: () => (
    <div className="flex gap-2">
      <Button type="link">Sửa</Button>
      <Button danger type="link">Xóa</Button>
      <Button type="link">Xuất báo cáo</Button>
    </div>
  ) },
];

const data = [
  { key: 1, type: "Bệnh nhân", name: "Nguyễn Văn Bệnh Nhân" },
];

const AdminDataManagement: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-yellow-50 to-blue-50">
      <Card className="w-full max-w-3xl shadow-lg rounded-2xl p-6">
        <div className="text-center font-bold text-xl mb-4">Quản lý dữ liệu hệ thống</div>
        <Table columns={columns} dataSource={data} pagination={false} className="rounded-xl shadow" />
      </Card>
    </div>
  );
};

export default AdminDataManagement;
