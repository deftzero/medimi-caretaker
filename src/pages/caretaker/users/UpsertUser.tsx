import { Modal, Form, Input, Select, Row, Col } from "antd";
import { useTranslation } from "react-i18next";
import { rolesOptions } from "../../../data";
import { IUpsertUserModal } from "../../../interfaces";

const UpsertUserModal: React.FC<IUpsertUserModal> = ({
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
        initialValues ? t("users.modal.editTitle") : t("users.modal.title")
      }
      okText={t("users.modal.okText")}
      cancelText={t("users.modal.cancelText")}
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
              label={t("users.modal.form.name")}
              style={{ marginBottom: 0 }}
            >
              <Form.Item
                name="name"
                rules={[
                  {
                    required: true,
                    message: t("users.modal.form.namePlaceholder"),
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
              label={t("users.modal.form.phoneNumber")}
              style={{ marginBottom: 0 }}
            >
              <Form.Item
                name="phoneNumber"
                rules={[
                  {
                    required: true,
                    message: t("users.modal.form.phoneNumberPlaceholder"),
                  },
                ]}
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
              label={t("users.modal.form.email")}
              style={{ marginBottom: 0 }}
            >
              <Form.Item
                name="email"
                rules={[
                  {
                    required: true,
                    message: t("users.modal.form.emailPlaceholder"),
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
              label={t("users.modal.form.password")}
              style={{ marginBottom: 0 }}
            >
              <Form.Item
                name="password"
                rules={[
                  {
                    required: true,
                    message: t("users.modal.form.passwordPlaceholder"),
                  },
                ]}
                noStyle
              >
                <Input.Password />
              </Form.Item>
            </Form.Item>
          </Col>
        </Row>
        <Form.Item
          label={t("users.modal.form.roles")}
          style={{ marginBottom: 0 }}
          className="mt-4"
        >
          <Form.Item
            name="role"
            rules={[
              {
                required: true,
                message: t("users.modal.form.rolesPlaceholder"),
              },
            ]}
            noStyle
          >
            <Select placeholder={t("Users.service")}>
              {rolesOptions.map((item: any) => (
                <Select.Option key={item.id} value={item.id}>
                  {item.name}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default UpsertUserModal;
