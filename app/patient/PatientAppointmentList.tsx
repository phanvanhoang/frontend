"use client";
import React from "react";
import { Card, Table, Button, Badge, Select } from "antd";

const columns = [
  { title: "Ngày", dataIndex: "date", key: "date" },
  { title: "Giờ", dataIndex: "time", key: "time" },
  { title: "Bác sĩ", dataIndex: "doctor", key: "doctor" },
  { title: "Trạng thái", dataIndex: "status", key: "status", render: (status: string) => <Badge status={status === "Đã xác nhận" ? "success" : "processing"} text={status} /> },
  { title: "", key: "action", render: () => (
    <div className="flex gap-2">
      <Button type="link">Xem</Button>
      <Button type="link">Đổi</Button>
      <Button danger type="link">Hủy</Button>
    </div>
  ) },
];

const data = [
  { key: 1, date: "18/09/2025", time: "09:00", doctor: "Dr. Nguyễn Văn A", status: "Đã xác nhận" },
  { key: 2, date: "20/09/2025", time: "14:00", doctor: "Dr. Trần Thị B", status: "Chờ xác nhận" },
];

const PatientAppointmentList: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-blue-200">
      <Card className="w-full max-w-3xl shadow-lg rounded-2xl p-6">
        <div className="text-center font-bold text-xl mb-4">Quản lý lịch khám</div>
        <div className="flex gap-4 mb-4">
          <Select placeholder="Trạng thái" className="w-32" options={[{ label: "Tất cả", value: "all" }, { label: "Đã xác nhận", value: "confirmed" }, { label: "Chờ xác nhận", value: "pending" }]} />
          <Select placeholder="Bác sĩ" className="w-32" options={[{ label: "Tất cả", value: "all" }, { label: "Dr. Nguyễn Văn A", value: "1" }]} />
        </div>
        <Table columns={columns} dataSource={data} pagination={false} className="rounded-xl shadow" />
      </Card>
    </div>
  );
};

export default PatientAppointmentList;
