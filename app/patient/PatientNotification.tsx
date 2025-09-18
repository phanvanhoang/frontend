"use client";
import React from "react";
import { Card, List, Button, Checkbox, Badge, Modal } from "antd";

const notifications = [
  { id: 1, type: "Kết quả khám", time: "09:00 18/09/2025", status: "Chưa đọc" },
  { id: 2, type: "Đơn thuốc", time: "10:00 18/09/2025", status: "Đã đọc" },
];

const PatientNotification: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-blue-200">
      <Card className="w-full max-w-xl shadow-lg rounded-2xl p-6">
        <div className="text-center font-bold text-xl mb-4">Quản lý thông báo</div>
        <List
          itemLayout="horizontal"
          dataSource={notifications}
          renderItem={item => (
            <List.Item
              actions={[
                <Button type="link">Đánh dấu đã đọc</Button>,
                <Button danger type="link">Xóa</Button>,
              ]}
            >
              <List.Item.Meta
                title={<span className="font-semibold">{item.type}</span>}
                description={<span>{item.time}</span>}
              />
              <Badge status={item.status === "Chưa đọc" ? "processing" : "success"} text={item.status} />
            </List.Item>
          )}
        />
        <div className="mt-6">
          <Button type="primary" className="bg-blue-500">Cài đặt kênh nhận thông báo</Button>
          <Modal open={false} footer={null}>
            <div className="font-bold mb-2">Cài đặt kênh nhận thông báo</div>
            <Checkbox>Email</Checkbox>
            <Checkbox className="ml-4">SMS</Checkbox>
            <Checkbox className="ml-4">Push</Checkbox>
          </Modal>
        </div>
      </Card>
    </div>
  );
};

export default PatientNotification;
