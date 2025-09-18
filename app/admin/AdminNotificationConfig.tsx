"use client";
import React from "react";
import { Card, Table, Button, Form, Checkbox } from "antd";

const columns = [
  { title: "Mẫu thông báo", dataIndex: "template", key: "template" },
];

const data = [
  { key: 1, template: "Thông báo kết quả khám" },
];

const AdminNotificationConfig: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-yellow-50 to-blue-50">
      <Card className="w-full max-w-2xl shadow-lg rounded-2xl p-6">
        <div className="text-center font-bold text-xl mb-4">Quản lý thông báo, cấu hình hệ thống</div>
        <Table columns={columns} dataSource={data} pagination={false} className="rounded-xl shadow mb-6" />
        <Form layout="vertical">
          <Form.Item label="Cấu hình kênh gửi">
            <Checkbox.Group options={["Email", "SMS", "Push"]} />
          </Form.Item>
        </Form>
        <div className="flex gap-4 justify-end mt-4">
          <Button type="primary" className="bg-yellow-500">Backup</Button>
          <Button>Restore</Button>
        </div>
      </Card>
    </div>
  );
};

export default AdminNotificationConfig;
