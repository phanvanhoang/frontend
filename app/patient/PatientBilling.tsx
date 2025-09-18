"use client";
import React, { useState } from "react";
import { Card, Table, Modal, Button, Form, Select } from "antd";
import { WalletOutlined } from "@ant-design/icons";

const columns = [
  { title: "Lịch khám", dataIndex: "appointment", key: "appointment" },
  { title: "Dịch vụ", dataIndex: "service", key: "service" },
  { title: "Trạng thái", dataIndex: "status", key: "status" },
  { title: "", key: "action", render: () => <Button type="link">Thanh toán</Button> },
];

const data = [
  { key: 1, appointment: "18/09/2025", service: "Khám tổng quát", status: "Chưa thanh toán" },
  { key: 2, appointment: "20/09/2025", service: "Xét nghiệm máu", status: "Đã thanh toán" },
];

const PatientBilling: React.FC = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-blue-200">
      <Card className="w-full max-w-3xl shadow-lg rounded-2xl p-6">
        <div className="text-center font-bold text-xl mb-4">Thanh toán dịch vụ</div>
        <Table columns={columns} dataSource={data} pagination={false} className="rounded-xl shadow" />
        <Modal open={visible} onCancel={() => setVisible(false)} footer={null} width={500}>
          <div className="font-bold text-lg mb-2">Chi tiết hóa đơn</div>
          <div>Lịch khám: 18/09/2025</div>
          <div>Dịch vụ: Khám tổng quát</div>
          <div>Trạng thái: Chưa thanh toán</div>
          <Form layout="vertical" className="mt-4">
            <Form.Item label="Phương thức thanh toán" name="method">
              <Select options={[{ label: "Ví", value: "wallet" }, { label: "Ngân hàng", value: "bank" }, { label: "Bảo hiểm", value: "insurance" }]} />
            </Form.Item>
            <Button type="primary" icon={<WalletOutlined />} className="bg-blue-500">Thanh toán</Button>
            <Button danger className="ml-2">Yêu cầu hoàn tiền</Button>
          </Form>
        </Modal>
      </Card>
    </div>
  );
};

export default PatientBilling;
