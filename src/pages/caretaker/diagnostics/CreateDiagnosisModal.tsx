// CreateDiagnosisModal.tsx
import { Modal, Form, Input, Select, Row, Col } from "antd";
import { useTranslation } from "react-i18next";
import { serviceOptions } from "../../../data";

const { Option } = Select;

interface CreateDiagnosisModalProps {
  visible: boolean;
  onCreate: (values: any) => void;
  onCancel: () => void;
}

const CreateDiagnosisModal: React.FC<CreateDiagnosisModalProps> = ({
  visible,
  onCreate,
  onCancel,
}) => {
  const { t } = useTranslation();
  const [form] = Form.useForm();

  return (
    <Modal
      open={visible}
      centered
      title={t("diagnosis.modal.title")}
      okText={t("diagnosis.modal.okText")}
      cancelText={t("diagnosis.modal.cancelText")}
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
        name="form_in_modal"
        initialValues={{ modifier: "public" }}
      >
        <Row gutter={16} className="mt-4">
          <Col span={12}>
            <Form.Item
              label={t("diagnosis.modal.form.wording")}
              style={{ marginBottom: 0 }}
            >
              <Form.Item
                name="wording"
                rules={[
                  {
                    required: true,
                    message: t("diagnosis.modal.form.wordingPlaceholder"),
                  },
                ]}
                noStyle
              >
                <Input />
              </Form.Item>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label={t("diagnosis.modal.form.service")}
              style={{ marginBottom: 0 }}
            >
              <Form.Item
                name="service"
                rules={[
                  {
                    required: true,
                    message: t("diagnosis.modal.form.servicePlaceholder"),
                  },
                ]}
              >
                <Select
                  placeholder={t("diagnosis.modal.form.servicePlaceholder")}
                >
                  {serviceOptions.map((item: any) => (
                    <Option key={item.id} value={item.name}>
                      {item.name}
                    </Option>
                  ))}
                </Select>
              </Form.Item>
            </Form.Item>
          </Col>
        </Row>
        <Form.Item
          label={t("diagnosis.modal.form.description")}
          style={{ marginBottom: 0 }}
          className="mt-4"
        >
          <Form.Item
            name="description"
            rules={[
              {
                required: true,
                message: t("diagnosis.modal.form.descriptionPlaceholder"),
              },
            ]}
          >
            <Input.TextArea />
          </Form.Item>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default CreateDiagnosisModal;
