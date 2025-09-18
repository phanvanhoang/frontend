"use client";
import React from "react";
import { Card, Form, Input, Button, Checkbox } from "antd";

const DoctorNotificationSend: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-blue-200">
      <Card className="w-full max-w-xl shadow-lg rounded-2xl p-6">
        <div className="text-center font-bold text-xl mb-4">Gửi thông báo cho bệnh nhân</div>
        <Form layout="vertical" className="grid grid-cols-1 gap-4">
          <Form.Item label="Chọn bệnh nhân" name="patient"><Input /></Form.Item>
          <Form.Item label="Nội dung" name="content"><Input.TextArea rows={2} /></Form.Item>
          <Form.Item label="Kênh gửi" name="channels">
            <Checkbox.Group options={["Email", "SMS", "Push"]} />
          </Form.Item>
        </Form>
        <div className="flex gap-4 justify-end mt-4">
          <Button type="primary" className="bg-blue-500">Gửi</Button>
        </div>
      </Card>
    </div>
  );
};

export default DoctorNotificationSend;
