import { Modal, Form, Input, Select, Row, Col, DatePicker } from "antd";
import { useTranslation } from "react-i18next";

export default function ConsultationRegisterModal({
  visible,
  onCreate,
  onCancel,
}: any) {
  const { t } = useTranslation();
  const [form] = Form.useForm();

  return (
    <Modal
      open={visible}
      centered
      title={t("patients.modal.title")}
      okText={t("patients.modal.generate")}
      cancelText={t("patients.modal.cancel")}
      onCancel={onCancel}
      onOk={() => {
        form
          .validateFields()
          .then((values) => {
            form.resetFields();
            onCreate(values);
          })
          .catch((info) => {
            console.log("Validate Failed:", info);
          });
      }}
    >
      <Form
        form={form}
        layout="vertical"
        requiredMark={false}
        name="form_in_modal"
      >
        <Row gutter={16} className="mt-4">
          <Col span={12}>
            <Form.Item
              label={t("patients.modal.startDate")}
              name="startDate"
              rules={[ { required: true } ]}
            >
              <DatePicker style={{ width: '100%' }} />
              </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label={t("patients.modal.endDate")}
              name="endDate"
              rules={[ { required: true } ]}
            >
              <DatePicker style={{ width: '100%' }} />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </Modal>
  );
};

