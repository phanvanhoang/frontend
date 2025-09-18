"use client";
import React from "react";
import { Card, Form, Input, DatePicker, Button, Upload, Table } from "antd";
import { UserOutlined } from "@ant-design/icons";

const columns = [
  { title: "Thời gian", dataIndex: "time", key: "time" },
  { title: "Thay đổi", dataIndex: "change", key: "change" },
];

const data = [
  { key: 1, time: "01/09/2025", change: "Cập nhật địa chỉ" },
  { key: 2, time: "10/09/2025", change: "Đổi mật khẩu" },
];

const PatientProfile: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-blue-200">
      <Card className="w-full max-w-2xl shadow-lg rounded-2xl p-6">
        <div className="text-center font-bold text-xl mb-4">Thông tin cá nhân</div>
        <Form layout="vertical" className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Form.Item label="Họ tên" name="name"><Input prefix={<UserOutlined />} /></Form.Item>
          <Form.Item label="Ngày sinh" name="dob"><DatePicker className="w-full" /></Form.Item>
          <Form.Item label="Địa chỉ" name="address"><Input /></Form.Item>
          <Form.Item label="Bảo hiểm" name="insurance"><Input /></Form.Item>
          <Form.Item label="Tài khoản ngân hàng" name="bank"><Input /></Form.Item>
          <Form.Item label="Avatar" name="avatar"><Upload listType="picture"><Button>Chọn ảnh</Button></Upload></Form.Item>
        </Form>
        <div className="flex gap-4 justify-end mt-4">
          <Button type="primary" className="bg-blue-500">Cập nhật</Button>
          <Button>Đổi mật khẩu</Button>
        </div>
        <div className="mt-8">
          <div className="font-semibold mb-2">Lịch sử chỉnh sửa thông tin</div>
          <Table columns={columns} dataSource={data} pagination={false} className="rounded-xl shadow" />
        </div>
      </Card>
    </div>
  );
};

export default PatientProfile;
