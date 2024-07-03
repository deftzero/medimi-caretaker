import { Modal, Form, Input, Select, Row, Col } from "antd";
import { useTranslation } from "react-i18next";
import { doctorServiceOptions, doctorSpecialityOptions, doctorTypeOptions } from "../../../data";
import { IUpsertUserModal } from "../../../interfaces";

const UpsertDoctorModal: React.FC<IUpsertUserModal> = ({
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
      title='Modification'
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
        requiredMark={false}
      >
        <Row gutter={[12,12]}>
          <Col span={12}>
            <Form.Item
              label='First Name'
              name="firstName"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label='Last Name'
              name="lastName"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item
              name="type"
              label='Type'
              rules={[{ required: true }]}
            >
              <Select>
                {doctorTypeOptions.map((item: any) => (
                  <Select.Option key={item.id} value={item.id}>
                    {item.name}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item
              name="speciality"
              label='Speciality'
              rules={[{ required: true }]}
            >
              <Select>
                {doctorSpecialityOptions.map((item: any) => (
                  <Select.Option key={item.id} value={item.id}>
                    {item.name}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
          </Col>

          <Col span={24}>
            <Form.Item
              name="presentation"
              label='Presentation'
              rules={[{ required: true }]}
            >
              <Input.TextArea rows={5} />
            </Form.Item>
          </Col>

          <Col span={24}>
            <Form.Item
              name="service"
              label='Service'
              rules={[{ required: true }]}
            >
              <Select>
                {doctorServiceOptions.map((item: any) => (
                  <Select.Option key={item.id} value={item.id}>
                    {item.name}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
          </Col>

        </Row>
      </Form>
    </Modal>
  );
};

export default UpsertDoctorModal;
