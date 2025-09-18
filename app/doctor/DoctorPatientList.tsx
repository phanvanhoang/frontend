"use client";
import React from "react";
import { Card, Table, Button, Modal, Input } from "antd";

const columns = [
  { title: "Tên", dataIndex: "name", key: "name" },
  { title: "Tuổi", dataIndex: "age", key: "age" },
  { title: "Liên hệ", dataIndex: "contact", key: "contact" },
  { title: "Trạng thái hồ sơ", dataIndex: "status", key: "status" },
  { title: "", key: "action", render: () => <Button type="link">Chi tiết</Button> },
];

const data = [
  { key: 1, name: "Nguyễn Văn Bệnh Nhân", age: 30, contact: "0123456789", status: "Đầy đủ" },
];

const DoctorPatientList: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-blue-200">
      <Card className="w-full max-w-3xl shadow-lg rounded-2xl p-6">
        <div className="text-center font-bold text-xl mb-4">Quản lý bệnh nhân</div>
        <div className="flex gap-4 mb-4">
          <Input placeholder="Tìm kiếm theo tên, bệnh, thời gian" className="w-64" />
        </div>
        <Table columns={columns} dataSource={data} pagination={false} className="rounded-xl shadow" />
      </Card>
    </div>
  );
};

export default DoctorPatientList;
