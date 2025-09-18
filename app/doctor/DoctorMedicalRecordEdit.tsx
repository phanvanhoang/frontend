"use client";
import React from "react";
import { Card, Form, Input, Button, Upload } from "antd";

const DoctorMedicalRecordEdit: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-blue-200">
      <Card className="w-full max-w-2xl shadow-lg rounded-2xl p-6">
        <div className="text-center font-bold text-xl mb-4">Khám bệnh, cập nhật hồ sơ</div>
        <Form layout="vertical" className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Form.Item label="Chẩn đoán" name="diagnosis"><Input /></Form.Item>
          <Form.Item label="Đơn thuốc" name="prescription"><Input /></Form.Item>
          <Form.Item label="Xét nghiệm" name="test"><Input /></Form.Item>
          <Form.Item label="Ghi chú" name="note"><Input.TextArea rows={2} /></Form.Item>
          <Form.Item label="File ảnh/scan/pdf" name="file" className="md:col-span-2"><Upload listType="picture"><Button>Upload</Button></Upload></Form.Item>
        </Form>
        <div className="flex gap-4 justify-end mt-4">
          <Button type="primary" className="bg-blue-500">Lưu hồ sơ</Button>
          <Button>Gửi thông báo</Button>
          <Button>Xuất PDF</Button>
        </div>
      </Card>
    </div>
  );
};

export default DoctorMedicalRecordEdit;
