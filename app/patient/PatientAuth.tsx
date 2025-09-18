"use client";
import React, { useState } from "react";
import { Card, Form, Input, Button, DatePicker, Upload, notification } from "antd";
import { GoogleOutlined, FacebookOutlined } from "@ant-design/icons";
import type { UploadProps } from "antd";
import { RcFile } from "antd/es/upload";
import "tailwindcss/tailwind.css";

const PatientAuth: React.FC = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const onFinish = async (values: any) => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      notification.success({
        message: "Đăng ký/Đăng nhập thành công!",
      });
    }, 1000);
  };

  const uploadProps: UploadProps = {
    beforeUpload: (file: RcFile) => {
      return false;
    },
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <Card
        className="w-full max-w-md shadow-lg rounded-xl"
        title={<div className="text-center font-bold text-lg">Đăng ký / Đăng nhập</div>}
      >
        <Form
          form={form}
          layout="vertical"
          onFinish={onFinish}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          <Form.Item name="name" label="Họ tên" rules={[{ required: true, message: "Vui lòng nhập họ tên" }]}> <Input /> </Form.Item>
          <Form.Item name="email" label="Email/SĐT" rules={[{ required: true, message: "Vui lòng nhập email/SĐT" }]}> <Input /> </Form.Item>
          <Form.Item name="password" label="Mật khẩu" rules={[{ required: true, message: "Vui lòng nhập mật khẩu" }]}> <Input.Password /> </Form.Item>
          <Form.Item name="dob" label="Ngày sinh" rules={[{ required: true, message: "Vui lòng chọn ngày sinh" }]}> <DatePicker className="w-full" /> </Form.Item>
          <Form.Item name="address" label="Địa chỉ"> <Input /> </Form.Item>
          <Form.Item name="insurance" label="Bảo hiểm"> <Input /> </Form.Item>
          <Form.Item name="avatar" label="Avatar"> <Upload {...uploadProps} listType="picture"> <Button>Chọn ảnh</Button> </Upload> </Form.Item>
          <Form.Item name="otp" label="Xác thực OTP"> <Input /> </Form.Item>
          <div className="col-span-2 flex flex-col gap-2">
            <Button type="primary" htmlType="submit" loading={loading} className="bg-blue-500">Đăng ký</Button>
            <Button className="bg-blue-500 text-white">Đăng nhập</Button>
            <Button type="link">Quên mật khẩu?</Button>
            <div className="flex gap-2 justify-center mt-2">
              <Button icon={<GoogleOutlined />} className="bg-red-500 text-white">Google</Button>
              <Button icon={<FacebookOutlined />} className="bg-blue-600 text-white">Facebook</Button>
            </div>
          </div>
        </Form>
      </Card>
    </div>
  );
};

export default PatientAuth;
