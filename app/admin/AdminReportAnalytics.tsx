"use client";
import React from "react";
import { Card, Table, Button } from "antd";

const columns = [
  { title: "Phòng ban", dataIndex: "department", key: "department" },
  { title: "Bác sĩ", dataIndex: "doctor", key: "doctor" },
  { title: "Bệnh nhân", dataIndex: "patient", key: "patient" },
  { title: "Số liệu", dataIndex: "data", key: "data" },
];

const data = [
  { key: 1, department: "Nội tổng quát", doctor: "Dr. Nguyễn Văn A", patient: "Nguyễn Văn Bệnh Nhân", data: 10 },
];

const AdminReportAnalytics: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-yellow-50 to-blue-50">
      <Card className="w-full max-w-3xl shadow-lg rounded-2xl p-6">
        <div className="text-center font-bold text-xl mb-4">Quản lý báo cáo, thống kê nâng cao</div>
        <Table columns={columns} dataSource={data} pagination={false} className="rounded-xl shadow mb-6" />
        <div className="flex gap-4 justify-end mt-4">
          <Button type="primary" className="bg-yellow-500">Xuất Excel</Button>
          <Button>Xuất PDF</Button>
        </div>
      </Card>
    </div>
  );
};

export default AdminReportAnalytics;
