"use client";
import React from "react";
import { Card, Form, Input, Button, DatePicker, Upload, Calendar } from "antd";
import { UserOutlined } from "@ant-design/icons";

const DoctorAuth: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-blue-300">
      <Card className="w-full max-w-xl shadow-lg rounded-2xl p-6">
        <div className="text-center font-bold text-xl mb-4">Đăng nhập / Quản lý tài khoản</div>
        <Form layout="vertical" className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Form.Item label="Tên" name="name"><Input prefix={<UserOutlined />} /></Form.Item>
          <Form.Item label="Phòng khám" name="clinic"><Input /></Form.Item>
          <Form.Item label="Chuyên khoa" name="specialty"><Input /></Form.Item>
          <Form.Item label="Ảnh đại diện" name="avatar"><Upload listType="picture"><Button>Chọn ảnh</Button></Upload></Form.Item>
        </Form>
        <div className="mt-6">
          <div className="font-semibold mb-2">Đăng ký lịch làm việc</div>
          <Calendar fullscreen={false} className="rounded-xl shadow" />
        </div>
        <div className="flex gap-4 justify-end mt-6">
          <Button type="primary" className="bg-blue-500">Lưu</Button>
          <Button>Đăng xuất</Button>
        </div>
      </Card>
    </div>
  );
};

export default DoctorAuth;
