"use client";
import React, { useState } from "react";
import { Card, Form, Input, Button, DatePicker, Upload, Select, notification } from "antd";
import { GoogleOutlined, FacebookOutlined, UserOutlined } from "@ant-design/icons";

const roleOptions = [
  { label: "Patient", value: "patient" },
  { label: "Doctor", value: "doctor" },
  { label: "Admin", value: "admin" },
];

const Auth: React.FC = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [role, setRole] = useState("patient");

  const onFinish = async (values: any) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      notification.success({
        message: `Đăng nhập thành công với vai trò ${role}!`,
      });
      // Redirect logic here
    }, 1000);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-blue-300">
      <Card className="w-full max-w-md shadow-lg rounded-xl">
        <div className="text-center font-bold text-lg mb-4">Đăng nhập hệ thống</div>
        <Form
          form={form}
          layout="vertical"
          onFinish={onFinish}
          className="grid grid-cols-1 gap-4"
        >
          <Form.Item label="Vai trò" name="role" initialValue={role} rules={[{ required: true }]}> <Select options={roleOptions} onChange={setRole} /> </Form.Item>
          <Form.Item name="username" label="Email/SĐT" rules={[{ required: true, message: "Vui lòng nhập email/SĐT" }]}> <Input prefix={<UserOutlined />} /> </Form.Item>
          <Form.Item name="password" label="Mật khẩu" rules={[{ required: true, message: "Vui lòng nhập mật khẩu" }]}> <Input.Password /> </Form.Item>
          {role === "patient" && (
            <Form.Item name="dob" label="Ngày sinh" rules={[{ required: true, message: "Vui lòng chọn ngày sinh" }]}> <DatePicker className="w-full" /> </Form.Item>
          )}
          <div className="flex flex-col gap-2">
            <Button type="primary" htmlType="submit" loading={loading} className="bg-blue-500">Đăng nhập</Button>
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

export default Auth;
