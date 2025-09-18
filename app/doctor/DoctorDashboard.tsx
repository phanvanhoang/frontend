"use client";
import React from "react";
import { Card, Statistic, Table, Button } from "antd";
import { UserOutlined } from "@ant-design/icons";

const columns = [
  { title: "Ngày", dataIndex: "date", key: "date" },
  { title: "Giờ", dataIndex: "time", key: "time" },
  { title: "Bệnh nhân", dataIndex: "patient", key: "patient" },
  { title: "Trạng thái", dataIndex: "status", key: "status" },
  { title: "", key: "action", render: () => <Button type="link">Vào lịch khám</Button> },
];

const data = [
  { key: 1, date: "18/09/2025", time: "09:00", patient: "Nguyễn Văn Bệnh Nhân", status: "Đã xác nhận" },
];

const DoctorDashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-200 to-blue-400 py-10 px-4 flex justify-center">
      <Card className="w-full max-w-4xl shadow-xl rounded-2xl p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <Statistic title="Số ca khám" value={8} className="bg-white rounded-xl shadow p-4" />
          <Statistic title="Bệnh nhân mới" value={3} className="bg-white rounded-xl shadow p-4" />
          <Statistic title="Thông báo" value={2} className="bg-white rounded-xl shadow p-4" />
        </div>
        <Table columns={columns} dataSource={data} pagination={false} className="rounded-xl shadow" />
        <div className="flex gap-4 justify-end mt-6">
          <Button type="primary" className="bg-blue-600">Báo cáo</Button>
          <Button>Xuất PDF</Button>
        </div>
      </Card>
    </div>
  );
};

export default DoctorDashboard;
