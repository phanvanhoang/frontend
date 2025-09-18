"use client";
import React from "react";
import { Card, Form, Select, DatePicker, TimePicker, Input, Checkbox, Button, notification } from "antd";

const specialties = [
  { label: "Nội tổng quát", value: "noi-tong-quat" },
  { label: "Nhi khoa", value: "nhi-khoa" },
];
const doctors = [
  { label: "Dr. Nguyễn Văn A", value: "1" },
  { label: "Dr. Trần Thị B", value: "2" },
];
const slots = [
  { label: "09:00", value: "09:00" },
  { label: "14:00", value: "14:00" },
];

const PatientAppointmentCreate: React.FC = () => {
  const [form] = Form.useForm();
  const onFinish = (values: any) => {
    notification.success({ message: "Đặt lịch thành công!" });
    form.resetFields();
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-blue-200">
      <Card className="w-full max-w-xl shadow-lg rounded-2xl p-6">
        <div className="text-center font-bold text-xl mb-4">Đặt lịch khám</div>
        <Form form={form} layout="vertical" onFinish={onFinish} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Form.Item label="Chuyên khoa" name="specialty" rules={[{ required: true }]}><Select options={specialties} /></Form.Item>
          <Form.Item label="Bác sĩ" name="doctor" rules={[{ required: true }]}><Select options={doctors} /></Form.Item>
          <Form.Item label="Ngày khám" name="date" rules={[{ required: true }]}><DatePicker className="w-full" /></Form.Item>
          <Form.Item label="Giờ khám" name="slot" rules={[{ required: true }]}><TimePicker className="w-full" format="HH:mm" /></Form.Item>
          <Form.Item label="Lý do khám" name="reason" className="md:col-span-2"><Input.TextArea rows={2} /></Form.Item>
          <Form.Item name="insurance" valuePropName="checked" className="md:col-span-2"><Checkbox>Tích hợp bảo hiểm</Checkbox></Form.Item>
          <div className="md:col-span-2 flex gap-4 justify-end mt-2">
            <Button type="primary" htmlType="submit" className="bg-blue-500">Đặt lịch</Button>
            <Button danger>Hủy</Button>
          </div>
        </Form>
      </Card>
    </div>
  );
};

export default PatientAppointmentCreate;
