"use client";
import React from "react";
import { Card, Statistic, Table, Button } from "antd";

const columns = [
  { title: "Cảnh báo", dataIndex: "alert", key: "alert" },
  { title: "Thời gian", dataIndex: "time", key: "time" },
];

const data = [
  { key: 1, alert: "Bảo mật hệ thống", time: "18/09/2025" },
];

const AdminDashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 to-blue-100 py-10 px-4 flex justify-center">
      <Card className="w-full max-w-4xl shadow-xl rounded-2xl p-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Statistic title="Bệnh nhân" value={120} className="bg-white rounded-xl shadow p-4" />
          <Statistic title="Bác sĩ" value={30} className="bg-white rounded-xl shadow p-4" />
          <Statistic title="Lịch khám" value={50} className="bg-white rounded-xl shadow p-4" />
          <Statistic title="Doanh thu" value={50000000} className="bg-white rounded-xl shadow p-4" />
        </div>
        <Table columns={columns} dataSource={data} pagination={false} className="rounded-xl shadow" />
        <div className="flex gap-4 justify-end mt-6">
          <Button type="primary" className="bg-yellow-500">Quản lý user</Button>
          <Button>Backup</Button>
          <Button>Xuất báo cáo</Button>
        </div>
      </Card>
    </div>
  );
};

export default AdminDashboard;
