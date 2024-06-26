import { Modal, Form, Input, Select, Row, Col, DatePicker } from "antd";
import { useTranslation } from "react-i18next";
import { IUpsertServiceModal } from "../../../interfaces";
import { servicesDropdownOptions } from "../../../data";

const UpsertServiceModal: React.FC<IUpsertServiceModal> = ({
  visible,
  onCreate,
  onCancel,
  initialValues,
}) => {
  const { t } = useTranslation();
  const [form] = Form.useForm();

  return (
    <Modal
      open={visible}
      centered
      title={
        initialValues ? t("services.modal.editTitle") : t("services.modal.title")
      }
      okText={t("services.modal.okText")}
      cancelText={t("services.modal.cancelText")}
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
        initialValues={initialValues || { modifier: "public" }}
      >
        <Row gutter={16} className="mt-4">
          <Col span={12}>
            <Form.Item
              label={t("services.modal.form.startDate")}
              style={{ marginBottom: 0 }}
            >
              <Form.Item
                name="startDate"
                rules={[
                  {
                    required: true,
                    message: t("services.modal.form.startDatePlaceholder"),
                  },
                ]}
                noStyle
              >
                <DatePicker style={{ width: '100%' }} />
              </Form.Item>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label={t("services.modal.form.serviceAssistants")}
              style={{ marginBottom: 0 }}
            >
              <Form.Item
                name="serviceAssistants"
                rules={[
                  {
                    required: true,
                    message: t("services.modal.form.serviceAssistantsPlaceholder"),
                  },
                ]}
                noStyle
              >
                <Input />
              </Form.Item>
            </Form.Item>
          </Col>
        </Row>
        <Form.Item
          label={t("services.modal.form.headOfService")}
          style={{ marginBottom: 0 }}
          className="mt-4"
        >
          <Form.Item
            name="headOfService"
            rules={[
              {
                required: true,
                message: t("services.modal.form.headOfServicePlaceholder"),
              },
            ]}
            noStyle
          >
            <Select placeholder={t("services.modal.form.headOfService")}>
              {servicesDropdownOptions.map((item) => (
                <Select.Option key={item.id} value={item.name}>
                  {item.name}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
        </Form.Item>
        <Form.Item
          label={t("services.modal.form.description")}
          style={{ marginBottom: 0 }}
          className="mt-4"
        >
          <Form.Item
            name="description"
            rules={[
              {
                required: true,
                message: t("services.modal.form.descriptionPlaceholder"),
              },
            ]}
            noStyle
          >
            <Input.TextArea />
          </Form.Item>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default UpsertServiceModal;
