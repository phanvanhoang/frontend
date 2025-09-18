"use client";
import React from "react";
import { Card, Table, Button } from "antd";

const columns = [
  { title: "User", dataIndex: "user", key: "user" },
  { title: "Thời gian", dataIndex: "time", key: "time" },
  { title: "Thao tác", dataIndex: "action", key: "action" },
  { title: "Trạng thái", dataIndex: "status", key: "status" },
];

const data = [
  { key: 1, user: "Nguyễn Văn Bệnh Nhân", time: "18/09/2025", action: "Đăng nhập", status: "Thành công" },
];

const AdminAuditBackup: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-yellow-50 to-blue-50">
      <Card className="w-full max-w-3xl shadow-lg rounded-2xl p-6">
        <div className="text-center font-bold text-xl mb-4">Quản lý audit log, backup/restore</div>
        <Table columns={columns} dataSource={data} pagination={false} className="rounded-xl shadow mb-6" />
        <div className="flex gap-4 justify-end mt-4">
          <Button type="primary" className="bg-yellow-500">Backup</Button>
          <Button>Restore</Button>
        </div>
      </Card>
    </div>
  );
};

export default AdminAuditBackup;
