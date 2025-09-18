"use client";
import React from "react";
import { Card, Avatar, Statistic, Table, Button, Badge } from "antd";
import { UserOutlined, BellOutlined } from "@ant-design/icons";

const columns = [
  { title: "Ngày", dataIndex: "date", key: "date" },
  { title: "Giờ", dataIndex: "time", key: "time" },
  { title: "Bác sĩ", dataIndex: "doctor", key: "doctor" },
  { title: "Trạng thái", dataIndex: "status", key: "status", render: (status: string) => <Badge status={status === "Đã xác nhận" ? "success" : "processing"} text={status} /> },
  { title: "", key: "action", render: () => <Button type="link">Chi tiết</Button> },
];

const data = [
  { key: 1, date: "18/09/2025", time: "09:00", doctor: "Dr. Nguyễn Văn A", status: "Đã xác nhận" },
  { key: 2, date: "20/09/2025", time: "14:00", doctor: "Dr. Trần Thị B", status: "Chờ xác nhận" },
];

const PatientDashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-300 py-10 px-4 flex justify-center">
      <Card className="w-full max-w-4xl shadow-xl rounded-2xl p-6">
        <div className="flex flex-col md:flex-row gap-6 items-center mb-8">
          <Avatar size={80} icon={<UserOutlined />} />
          <div className="flex-1 text-center md:text-left">
            <div className="font-bold text-xl">Nguyễn Văn Bệnh Nhân</div>
            <div className="text-gray-500">Tài khoản: Đã xác thực</div>
          </div>
          <Badge count={3} offset={[10, 0]}>
            <BellOutlined className="text-2xl text-blue-500" />
          </Badge>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <Statistic title="Lịch khám" value={5} className="bg-white rounded-xl shadow p-4" />
          <Statistic title="Số lần khám" value={12} className="bg-white rounded-xl shadow p-4" />
          <Statistic title="Hóa đơn chưa thanh toán" value={2} className="bg-white rounded-xl shadow p-4" />
        </div>
        <Table columns={columns} dataSource={data} pagination={false} className="rounded-xl shadow" />
        <div className="flex gap-4 justify-end mt-6">
          <Button type="primary" className="bg-blue-500">Đặt lịch mới</Button>
          <Button> Xem hồ sơ </Button>
          <Button danger> Thanh toán </Button>
        </div>
      </Card>
    </div>
  );
};

export default PatientDashboard;
