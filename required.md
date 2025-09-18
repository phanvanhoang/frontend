# Patient Management Frontend Screens Specification
# Công nghệ:  Next.js + TypeScript + Tailwind + Ant Design.**
---

## I. Patient (Bệnh nhân)

### 1. Đăng ký/Đăng nhập

**Screen:** PatientAuth  
- **Purpose:** Đăng ký tài khoản, đăng nhập, quên mật khẩu, xác thực OTP/social login  
- **Components:**  
  - Card (antd): form đăng ký/đăng nhập, bo tròn, shadow  
  - Form (antd Form):  
    - Họ tên (Input)  
    - Email/SĐT (Input)  
    - Mật khẩu (Password)  
    - Ngày sinh (DatePicker)  
    - Địa chỉ (Input)  
    - Bảo hiểm (Input)  
    - Avatar (Upload)  
    - Xác thực OTP (Input)  
    - Google/Facebook Login (antd Button, Icon)  
  - Button: Đăng ký, Đăng nhập, Quên mật khẩu  
  - Notification: antd notification khi đăng ký/đăng nhập thành công/thất bại  
- **API:**  
  - POST /api/auth/register  
  - POST /api/auth/login  
  - POST /api/auth/otp  
  - POST /api/auth/social  
- **Style:** Card giữa màn hình, responsive, nút primary xanh, form 1 cột mobile, 2 cột desktop

---

### 2. Dashboard cá nhân

**Screen:** PatientDashboard  
- **Purpose:** Tổng quan tài khoản, lịch khám, hóa đơn, thông báo  
- **Components:**  
  - Header: Avatar, tên, trạng thái tài khoản  
  - Statistic Widget (antd Statistic): số lịch khám, số lần khám, hóa đơn chưa thanh toán  
  - Table (antd Table): lịch khám sắp tới (ngày, giờ, bác sĩ, trạng thái, nút chi tiết)  
  - Buttons: Đặt lịch mới, Xem hồ sơ, Thanh toán  
  - NotificationBadge: số thông báo mới  
- **API:** GET /api/patient/dashboard  
- **Style:** Grid 2 cột desktop, 1 cột mobile, spacing đều, màu xanh chủ đạo

---

### 3. Quản lý thông tin cá nhân

**Screen:** PatientProfile  
- **Purpose:** Xem/chỉnh sửa thông tin cá nhân, bảo hiểm, avatar  
- **Components:**  
  - Form (antd Form): Họ tên, ngày sinh, địa chỉ, bảo hiểm, tài khoản ngân hàng, avatar  
  - Upload (antd Upload): Ảnh đại diện  
  - Button: Cập nhật, Đổi mật khẩu  
  - Table: Lịch sử chỉnh sửa thông tin  
- **API:**  
  - GET /api/patient/profile  
  - PUT /api/patient/profile  
  - POST /api/file/avatar  
- **Style:** Card chính giữa, responsive, nút primary, form grid

---

### 4. Đặt lịch khám

**Screen:** PatientAppointmentCreate  
- **Purpose:** Đặt lịch khám với bác sĩ  
- **Components:**  
  - Card: chứa form  
  - Form:  
    - Chuyên khoa (Select, data từ /api/specialties)  
    - Bác sĩ (Select, data từ /api/doctors?specialty=...)  
    - Ngày khám (DatePicker)  
    - Giờ khám (TimePicker, slot trống từ /api/doctors/:id/slots)  
    - Lý do khám (TextArea)  
    - Tích hợp bảo hiểm (Checkbox)  
  - Button: Đặt lịch, Hủy  
  - Notification: antd notification  
- **API:**  
  - GET /api/specialties  
  - GET /api/doctors?specialty=...  
  - GET /api/doctors/:id/slots?date=...  
  - POST /api/appointments  
- **Style:** Card bo tròn, shadow, form grid 2 cột desktop, 1 cột mobile

---

### 5. Quản lý lịch khám

**Screen:** PatientAppointmentList  
- **Purpose:** Xem, đổi, hủy lịch khám  
- **Components:**  
  - Table: danh sách lịch hẹn (ngày, giờ, bác sĩ, trạng thái, nút xem/đổi/hủy)  
  - Filter: trạng thái, thời gian, bác sĩ  
  - Notification: thông báo thay đổi  
- **API:**  
  - GET /api/appointments?patientId=...  
  - PUT /api/appointments/:id (đổi lịch)  
  - DELETE /api/appointments/:id (hủy lịch)  
- **Style:** Table antd, filter dạng dropdown, badge trạng thái

---

### 6. Xem hồ sơ bệnh án, kết quả khám, báo cáo

**Screen:** PatientMedicalRecordList  
- **Purpose:** Xem hồ sơ bệnh án, báo cáo, đơn thuốc, file đính kèm  
- **Components:**  
  - Table: danh sách lần khám (ngày, bác sĩ, chuyên khoa, trạng thái)  
  - Modal: Chi tiết hồ sơ (chẩn đoán, đơn thuốc, file đính kèm)  
  - Button: Tải báo cáo PDF, gửi thắc mắc  
  - Filter: bệnh, thời gian, bác sĩ  
- **API:**  
  - GET /api/medical-records?patientId=...  
  - GET /api/reports?patientId=...  
  - GET /api/file/:id  
- **Style:** Table antd, modal rộng, nút tải PDF

---

### 7. Thanh toán dịch vụ

**Screen:** PatientBilling  
- **Purpose:** Xem, thanh toán hóa đơn, lịch sử thanh toán  
- **Components:**  
  - Table: hóa đơn (lịch khám, dịch vụ, trạng thái)  
  - Modal: chi tiết hóa đơn  
  - Button: Thanh toán, yêu cầu hoàn tiền  
  - Form: chọn phương thức thanh toán (ví, ngân hàng, bảo hiểm)  
- **API:**  
  - GET /api/billing?patientId=...  
  - POST /api/payment  
  - POST /api/refund  
- **Style:** Table antd, modal, nút primary, icon ví/ngân hàng/bảo hiểm

---

### 8. Quản lý thông báo

**Screen:** PatientNotification  
- **Purpose:** Quản lý, cài đặt kênh nhận thông báo  
- **Components:**  
  - List: thông báo (loại, thời gian, trạng thái)  
  - Button: Đánh dấu đã đọc, xóa, cài đặt kênh (checkbox email/sms/push)  
- **API:**  
  - GET /api/notifications?userId=...  
  - PUT /api/notifications/:id (đánh dấu đã đọc)  
  - PUT /api/notification-settings  
- **Style:** List antd, badge trạng thái, modal cài đặt

---

### 9. Tra cứu truy cập cá nhân

**Screen:** PatientAuditLog  
- **Purpose:** Xem lịch sử đăng nhập, thao tác  
- **Components:**  
  - Table: lịch sử đăng nhập (ngày, thiết bị, IP)  
  - Table: lịch sử thao tác (thời gian, hành động, trạng thái)  
  - Button: Xem chi tiết, báo cáo bất thường  
- **API:**  
  - GET /api/audit-log?userId=...  
- **Style:** Table antd, badge cảnh báo

---

## II. Doctor (Bác sĩ)

### 1. Đăng nhập/Quản lý tài khoản

**Screen:** DoctorAuth  
- **Purpose:** Đăng nhập, đổi mật khẩu, cập nhật thông tin, lịch làm việc  
- **Components:**  
  - Card: đăng nhập, đổi mật khẩu  
  - Form: tên, phòng khám, chuyên khoa, ảnh đại diện  
  - Calendar: đăng ký lịch làm việc  
  - Button: Lưu, đăng xuất  
- **API:**  
  - POST /api/auth/login  
  - PUT /api/doctor/profile  
  - POST /api/file/avatar  
- **Style:** Card, calendar antd, form grid

---

### 2. Dashboard bác sĩ

**Screen:** DoctorDashboard  
- **Purpose:** Tổng quan lịch, ca khám, hiệu suất  
- **Components:**  
  - Statistic Widget: số ca khám, bệnh nhân mới, thông báo  
  - Table: lịch hẹn hôm nay (ngày, giờ, bệnh nhân, trạng thái)  
  - Chart: bệnh phổ biến, hiệu suất làm việc  
  - Shortcut: vào lịch khám, báo cáo, xuất PDF  
- **API:**  
  - GET /api/doctor/dashboard  
- **Style:** Grid 2 cột, chart antd, màu xanh đậm

---

### 3. Quản lý lịch khám

**Screen:** DoctorAppointmentList  
- **Purpose:** Xác nhận, đổi, hủy lịch, xem chi tiết bệnh nhân  
- **Components:**  
  - Table: lịch hẹn (ngày, giờ, bệnh nhân, trạng thái, nút xác nhận/đổi/hủy)  
  - Modal: chi tiết bệnh nhân  
  - Filter: trạng thái, thời gian  
- **API:**  
  - GET /api/appointments?doctorId=...  
  - PUT /api/appointments/:id  
  - DELETE /api/appointments/:id  
- **Style:** Table antd, status badge, modal rộng

---

### 4. Quản lý bệnh nhân

**Screen:** DoctorPatientList  
- **Purpose:** Xem danh sách, tìm kiếm bệnh nhân  
- **Components:**  
  - Table: bệnh nhân (tên, tuổi, liên hệ, trạng thái hồ sơ)  
  - Search: theo tên, bệnh, thời gian  
  - Modal: chi tiết hồ sơ bệnh án  
- **API:**  
  - GET /api/patients?doctorId=...  
- **Style:** Table antd, modal chi tiết

---

### 5. Khám bệnh, cập nhật hồ sơ, viết báo cáo

**Screen:** DoctorMedicalRecordEdit  
- **Purpose:** Nhập kết quả khám, đơn thuốc, xét nghiệm, báo cáo  
- **Components:**  
  - Form: chẩn đoán, đơn thuốc, xét nghiệm, ghi chú  
  - Upload: file ảnh, scan, pdf  
  - Button: Lưu hồ sơ, gửi thông báo, xuất PDF  
- **API:**  
  - POST /api/medical-records  
  - POST /api/reports  
  - POST /api/file  
- **Style:** Form antd, upload, button primary

---

### 6. Gửi thông báo cho bệnh nhân

**Screen:** DoctorNotificationSend  
- **Purpose:** Soạn, gửi thông báo kết quả khám, đơn thuốc  
- **Components:**  
  - Form: chọn bệnh nhân, nội dung, chọn kênh (email/sms/push)  
  - Button: Gửi  
- **API:**  
  - POST /api/notifications  
- **Style:** Modal antd, checkbox kênh gửi

---

### 7. Dashboard hiệu suất

**Screen:** DoctorAnalytics  
- **Purpose:** Thống kê ca khám, đánh giá, bệnh phổ biến  
- **Components:**  
  - Chart: số ca khám, tỷ lệ hủy lịch, đánh giá  
  - Table: tổng hợp từng tháng/quý  
- **API:**  
  - GET /api/doctor/analytics  
- **Style:** Chart antd, table, màu xanh

---

### 8. Tra cứu truy cập cá nhân

**Screen:** DoctorAuditLog  
- **Purpose:** Xem lịch sử đăng nhập, thao tác  
- **Components:**  
  - Table: lịch sử đăng nhập, thao tác  
- **API:**  
  - GET /api/audit-log?userId=...  
- **Style:** Table antd

---

## III. Admin

### 1. Dashboard quản trị

**Screen:** AdminDashboard  
- **Purpose:** Thống kê toàn hệ thống, cảnh báo, shortcut  
- **Components:**  
  - Statistic Widget: số bệnh nhân, bác sĩ, lịch khám, doanh thu  
  - Chart: bệnh phổ biến, trạng thái hệ thống  
  - Table: cảnh báo bảo mật, audit log  
  - Shortcut: quản lý user, backup, báo cáo  
- **API:**  
  - GET /api/admin/dashboard  
- **Style:** Grid, chart, table, màu xanh/vàng

---

### 2. Quản lý user, phân quyền

**Screen:** AdminUserList  
- **Purpose:** Duyệt đăng ký, phân quyền, quản lý user  
- **Components:**  
  - Table: user (tên, loại, trạng thái, quyền)  
  - Filter: loại user, trạng thái  
  - Modal: phân quyền, reset mật khẩu  
- **API:**  
  - GET /api/users  
  - PUT /api/users/:id/role  
  - POST /api/users/:id/reset-password  
- **Style:** Table antd, modal phân quyền

---

### 3. Quản lý dữ liệu hệ thống

**Screen:** AdminDataManagement  
- **Purpose:** Quản lý bệnh nhân, bác sĩ, lịch khám, hồ sơ, báo cáo  
- **Components:**  
  - Table: bệnh nhân, bác sĩ, lịch khám, hồ sơ, báo cáo  
  - Button: Xuất báo cáo, sửa, xóa  
- **API:**  
  - GET /api/patients  
  - GET /api/doctors  
  - GET /api/appointments  
  - GET /api/medical-records  
  - GET /api/reports  
- **Style:** Table antd, button action

---

### 4. Quản lý hóa đơn, thanh toán

**Screen:** AdminBilling  
- **Purpose:** Xác nhận, hoàn tiền, xuất hóa đơn, thống kê  
- **Components:**  
  - Table: hóa đơn (dịch vụ, bệnh nhân, trạng thái)  
  - Button: xác nhận, hoàn tiền, xuất hóa đơn  
  - Chart: doanh thu, chi phí  
- **API:**  
  - GET /api/billing  
  - POST /api/payment/confirm  
  - POST /api/refund  
- **Style:** Table antd, chart, button primary

---

### 5. Quản lý thông báo, cấu hình hệ thống

**Screen:** AdminNotificationConfig  
- **Purpose:** Quản lý mẫu thông báo, kênh gửi, backup/restore  
- **Components:**  
  - Table: mẫu thông báo  
  - Form: cấu hình kênh gửi (email/sms/push)  
  - Button: backup, restore  
- **API:**  
  - GET /api/notifications/templates  
  - PUT /api/notifications/config  
  - POST /api/admin/backup  
  - POST /api/admin/restore  
- **Style:** Table antd, form, button

---

### 6. Quản lý audit log, backup/restore

**Screen:** AdminAuditBackup  
- **Purpose:** Xem lịch sử truy cập, backup, restore  
- **Components:**  
  - Table: audit log (user, thời gian, thao tác, trạng thái)  
  - Button: backup, restore  
- **API:**  
  - GET /api/audit-log  
  - POST /api/admin/backup  
  - POST /api/admin/restore  
- **Style:** Table antd, button

---

### 7. Quản lý file lưu trữ, báo cáo PDF

**Screen:** AdminFileManager  
- **Purpose:** Quản lý file, báo cáo PDF  
- **Components:**  
  - Table: file (ảnh, scan, báo cáo PDF)  
  - Button: tải về, xóa, phân quyền truy cập  
- **API:**  
  - GET /api/files  
  - DELETE /api/files/:id  
- **Style:** Table antd, button

---

### 8. Quản lý báo cáo, thống kê nâng cao

**Screen:** AdminReportAnalytics  
- **Purpose:** Dashboard báo cáo, xuất excel/pdf  
- **Components:**  
  - Chart: tổng hợp từng phòng ban, bác sĩ, bệnh nhân  
  - Table: số liệu chi tiết  
  - Button: xuất excel, xuất PDF  
- **API:**  
  - GET /api/analytics  
  - GET /api/reports  
- **Style:** Chart antd, table, button

---

# IV. General Style & Best Practice

- Dùng antd cho component nâng cao (Table, Form, Modal, Select, DatePicker, Statistic, Chart, Upload...)
- Dùng Tailwind cho layout, spacing, responsive, màu nền, font, grid/flex
- Các màn hình đều phải responsive, tối ưu cho mobile & desktop
- Validate đầy đủ, loading khi call API, error state rõ ràng
- Dùng icon Ant Design, màu xanh chủ đạo, font rõ ràng
- Từng màn có comment/heading rõ ràng để Copilot hiểu và sinh code đẹp, chuyên nghiệp

---
