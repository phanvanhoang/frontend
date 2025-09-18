"use client";
import React, { useState } from "react";
import { Card, Table, Modal, Button, Badge, Select } from "antd";

const columns = [
  { title: "Ngày", dataIndex: "date", key: "date" },
  { title: "Bác sĩ", dataIndex: "doctor", key: "doctor" },
  { title: "Chuyên khoa", dataIndex: "specialty", key: "specialty" },
  { title: "Trạng thái", dataIndex: "status", key: "status", render: (status: string) => <Badge status={status === "Hoàn thành" ? "success" : "processing"} text={status} /> },
  { title: "", key: "action", render: (_: any, record: any) => <Button type="link" onClick={() => record.onView(record)}>Chi tiết</Button> },
];

const data = [
  { key: 1, date: "01/09/2025", doctor: "Dr. Nguyễn Văn A", specialty: "Nội tổng quát", status: "Hoàn thành", onView: () => {} },
  { key: 2, date: "10/09/2025", doctor: "Dr. Trần Thị B", specialty: "Nhi khoa", status: "Chờ kết quả", onView: () => {} },
];

const PatientMedicalRecordList: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState<any>(null);

  const handleView = (record: any) => {
    setSelected(record);
    setVisible(true);
  };

  const enhancedData = data.map((item) => ({ ...item, onView: () => handleView(item) }));

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-blue-200">
      <Card className="w-full max-w-3xl shadow-lg rounded-2xl p-6">
        <div className="text-center font-bold text-xl mb-4">Hồ sơ bệnh án</div>
        <div className="flex gap-4 mb-4">
          <Select placeholder="Bệnh" className="w-32" options={[{ label: "Tất cả", value: "all" }]} />
          <Select placeholder="Bác sĩ" className="w-32" options={[{ label: "Tất cả", value: "all" }]} />
        </div>
        <Table columns={columns} dataSource={enhancedData} pagination={false} className="rounded-xl shadow" />
        <Modal open={visible} onCancel={() => setVisible(false)} footer={null} width={600}>
          <div className="font-bold text-lg mb-2">Chi tiết hồ sơ</div>
          <div>Chẩn đoán: Viêm họng</div>
          <div>Đơn thuốc: Paracetamol, Vitamin C</div>
          <div className="mt-2">File đính kèm: <Button type="link">Tải PDF</Button></div>
          <Button type="primary" className="mt-4 bg-blue-500">Gửi thắc mắc</Button>
        </Modal>
      </Card>
    </div>
  );
};

export default PatientMedicalRecordList;
