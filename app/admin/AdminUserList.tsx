"use client";
import React from "react";
import { Card, Table, Button, Modal, Select } from "antd";

const columns = [
  { title: "Tên", dataIndex: "name", key: "name" },
  { title: "Loại", dataIndex: "type", key: "type" },
  { title: "Trạng thái", dataIndex: "status", key: "status" },
  { title: "Quyền", dataIndex: "role", key: "role" },
  { title: "", key: "action", render: () => <Button type="link">Phân quyền</Button> },
];

const data = [
  { key: 1, name: "Nguyễn Văn Bệnh Nhân", type: "Bệnh nhân", status: "Hoạt động", role: "User" },
];

const AdminUserList: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-yellow-50 to-blue-50">
      <Card className="w-full max-w-3xl shadow-lg rounded-2xl p-6">
        <div className="text-center font-bold text-xl mb-4">Quản lý user, phân quyền</div>
        <div className="flex gap-4 mb-4">
          <Select placeholder="Loại user" className="w-32" options={[{ label: "Tất cả", value: "all" }, { label: "Bệnh nhân", value: "patient" }, { label: "Bác sĩ", value: "doctor" }]} />
          <Select placeholder="Trạng thái" className="w-32" options={[{ label: "Tất cả", value: "all" }, { label: "Hoạt động", value: "active" }]} />
        </div>
        <Table columns={columns} dataSource={data} pagination={false} className="rounded-xl shadow" />
      </Card>
    </div>
  );
};

export default AdminUserList;
