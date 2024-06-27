import { Modal, Form, Input, Select, Row, Col } from "antd";
import { useTranslation } from "react-i18next";
import { serviceOptions } from "../../../data";
import { IUpsertMotiveModal } from "../../../interfaces";

const { TextArea } = Input;

const UpsertMotiveModal: React.FC<IUpsertMotiveModal> = ({
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
      title={initialValues ? t("motives.modal.editTitle") : t("motives.modal.title")}
      okText={t("motives.modal.okText")}
      cancelText={t("motives.modal.cancelText")}
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
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              label={t("motives.modal.form.wording")}
              style={{ marginBottom: 0 }}
            >
              <Form.Item
                name="wording"
                rules={[{ required: true, message: t("motives.modal.form.wordingPlaceholder") }]}
                noStyle
              >
                <Input />
              </Form.Item>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label={t("motives.modal.form.price")}
              style={{ marginBottom: 0 }}
            >
              <Form.Item
                name="price"
                rules={[{ required: true, message: t("motives.modal.form.pricePlaceholder") }]}
                noStyle
              >
                <Input />
              </Form.Item>
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16} className="mt-4">
          <Col span={12}>
            <Form.Item
              label={t("motives.modal.form.duration")}
              style={{ marginBottom: 0 }}
            >
              <Form.Item
                name="duration"
                rules={[{ required: true, message: t("motives.modal.form.durationPlaceholder") }]}
                noStyle
              >
                <Input />
              </Form.Item>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label={t("motives.modal.form.service")}
              style={{ marginBottom: 0 }}
            >
              <Form.Item
                name="service"
                rules={[{ required: true, message: t("motives.modal.form.servicePlaceholder") }]}
                noStyle
              >
                <Select placeholder={t("motives.modal.form.servicePlaceholder")}>
                  {serviceOptions.map((item:any) => (
                    <Select.Option key={item.id} value={item.name}>
                      {item.name}
                    </Select.Option>
                  ))}
                </Select>
              </Form.Item>
            </Form.Item>
          </Col>
        </Row>
        <Form.Item
          label={t("motives.modal.form.appointmentTypes")}
          style={{ marginBottom: 0 }}
          className="mt-4"
        >
          <Form.Item
            name="appointmentTypes"
            rules={[{ required: true, message: t("motives.modal.form.appointmentTypesPlaceholder") }]}
            noStyle
          >
            <Select
              placeholder={t("motives.modal.form.appointmentTypesPlaceholder")}
              mode="multiple"
            >
              <Select.Option value="Face-to-Face">Face-to-Face</Select.Option>
              <Select.Option value="Teleconsultation">Teleconsultation</Select.Option>
            </Select>
          </Form.Item>
        </Form.Item>
        <Form.Item
          label={t("motives.modal.form.description")}
          style={{ marginBottom: 0 }}
          className="mt-4"
        >
          <Form.Item
            name="description"
            rules={[{ required: true, message: t("motives.modal.form.descriptionPlaceholder") }]}
            noStyle
          >
            <TextArea rows={4} />
          </Form.Item>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default UpsertMotiveModal;
