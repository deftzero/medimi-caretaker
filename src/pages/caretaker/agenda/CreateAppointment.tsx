import React from "react";
import {
  Modal,
  Form,
  Input,
  Select,
  DatePicker,
  TimePicker,
  Typography,
  Row,
  Col,
} from "antd";
import { useTranslation } from "react-i18next";
import AppButton from "../../../components/ui/AppButton";
import { INewAppointmentModalProps } from "../../../interfaces";
import Search from "../../../assets/icons/search.svg?react";

const { Title, Text } = Typography;

const NewAppointmentModal: React.FC<INewAppointmentModalProps> = ({
  visible,
  onClose,
}) => {
  const { t } = useTranslation();
  const [form] = Form.useForm();

  const handleSubmit = () => {
    form
      .validateFields()
      .then((values) => {
        console.log("Form values:", values);
        // Handle form submission
        onClose();
      })
      .catch((info) => {
        console.log("Validate Failed:", info);
      });
  };

  return (
    <Modal
      open={visible}
      onCancel={onClose}
      centered
      footer={null}
      className="new-appointment-modal"
      height="90vh"
    >
      <div>
        <Title level={4} className="!m-0">
          {t("agenda.appointment.newAppointment")}
        </Title>
        <Form
          layout="vertical"
          form={form}
          className="space-y-4"
          requiredMark={false}
        >
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                label={t("agenda.appointment.doctor")}
                name="doctor"
                rules={[
                  { required: true, message: t("agenda.appointment.required") },
                ]}
              >
                <Select placeholder={t("agenda.appointment.selectDoctor")}>
                  <Select.Option value="Bara Loum">Bara Loum</Select.Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label={t("agenda.appointment.typeOfAppointment")}
                name="typeOfAppointment"
                rules={[
                  { required: true, message: t("agenda.appointment.required") },
                ]}
              >
                <Select placeholder={t("agenda.appointment.selectType")}>
                  <Select.Option value="face-to-face">
                    {t("agenda.appointment.faceToFace")}
                  </Select.Option>
                  <Select.Option value="online">
                    {t("agenda.appointment.online")}
                  </Select.Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item
                label={t("agenda.appointment.appointmentReason")}
                name="appointmentReason"
                rules={[
                  { required: true, message: t("agenda.appointment.required") },
                ]}
              >
                <Select placeholder={t("agenda.appointment.selectReason")}>
                  <Select.Option value="follow-up visit">
                    {t("agenda.appointment.followUpVisit")}
                  </Select.Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label={t("agenda.appointment.appointmentDate")}
                name="appointmentDate"
                rules={[
                  { required: true, message: t("agenda.appointment.required") },
                ]}
              >
                <DatePicker className="w-full" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label={t("agenda.appointment.appointmentTime")}
                name="appointmentTime"
                rules={[
                  { required: true, message: t("agenda.appointment.required") },
                ]}
              >
                <TimePicker className="w-full" format="HH:mm" />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Text strong>{t("agenda.appointment.patients")}</Text>
              <Form.Item>
                <Input
                  prefix={<Search />}
                  className="mt-2"
                  placeholder={t("agenda.appointment.searchPatient")}
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label={t("agenda.appointment.firstName")}
                name="firstName"
                rules={[
                  { required: true, message: t("agenda.appointment.required") },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label={t("agenda.appointment.lastName")}
                name="lastName"
                rules={[
                  { required: true, message: t("agenda.appointment.required") },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label={t("agenda.appointment.dateOfBirth")}
                name="dateOfBirth"
                rules={[
                  { required: true, message: t("agenda.appointment.required") },
                ]}
              >
                <DatePicker className="w-full" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label={t("agenda.appointment.email")}
                name="email"
                rules={[
                  { required: true, message: t("agenda.appointment.required") },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item
                label={t("agenda.appointment.address")}
                name="address"
                rules={[
                  { required: true, message: t("agenda.appointment.required") },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item
                label={t("agenda.appointment.phoneNumber")}
                name="phoneNumber"
                rules={[
                  { required: true, message: t("agenda.appointment.required") },
                ]}
              >
                <Input
                  addonBefore={
                    <Select defaultValue="UK">
                      <Select.Option value="UK">UK</Select.Option>
                    </Select>
                  }
                />
              </Form.Item>
            </Col>
            <Col span={24}>
              <div className="my-2">
                <Text strong>{t("agenda.appointment.consultation")}</Text>
              </div>
              <Form.Item
                label={t("agenda.appointment.preConsultationInformation")}
                name="preConsultationInformation"
              >
                <Input.TextArea rows={3} />
              </Form.Item>
            </Col>
          </Row>
          <div className="flex justify-end space-x-4">
            <AppButton onClick={onClose}>
              {t("agenda.appointment.cancel")}
            </AppButton>
            <AppButton type="primary" onClick={handleSubmit}>
              {t("agenda.appointment.create")}
            </AppButton>
          </div>
        </Form>
      </div>
    </Modal>
  );
};

export default NewAppointmentModal;
