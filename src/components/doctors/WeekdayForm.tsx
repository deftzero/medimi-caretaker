import { Button, Checkbox, Col, Form, Input, Row, Select, Typography } from "antd";
import Trash from "../../assets/icons/trash-black.svg?react";
import Plus from "../../assets/icons/plus-black.svg?react";
import { consultationOptions } from "../../data";
import { useTranslation } from "react-i18next";

const { Text } = Typography

export default function WeekdayForm({ week }: { week: string }) {

  const [form] = Form.useForm()
  const { t } = useTranslation()

  const onFinish = (values: any) => {
    console.log('Received values of form:', values);
  };

  const timesList = Form.useWatch('times', form);

  return (
    <div className="bg-indigo-50 rounded-md p-5">
      <Form
        form={form}
        name='weekday_form'
        onFinish={onFinish}
        layout='vertical'
        requiredMark={false}
      >
        <Form.List name="times">
          {(fields, { add, remove }) => (
            <>
              <div className="header flex flex-row justify-between items-center">
                <Checkbox>
                  <Text>{week}</Text>
                </Checkbox>
                {(timesList === undefined || timesList.length === 0) && (
                  <Button onClick={() => add()} icon={<Plus />} />
                )}
              </div>
              {fields.map(({ key, name, ...restField }) => (
                <Row key={key} gutter={[20, 20]} justify="center" className="mt-5">
                  <Col span={5}>
                    <Form.Item
                      {...restField}
                      name={[name, 'begin']}
                      label={t("doctor.tabs.planning.beginning")}
                      rules={[{ required: true }]}
                    >
                      <Input placeholder="08:00" />
                    </Form.Item>
                  </Col>
                  <Col span={5}>
                    <Form.Item
                      {...restField}
                      name={[name, 'end']}
                      label={t("doctor.tabs.planning.end")}
                      rules={[{ required: true }]}
                    >
                      <Input placeholder="16:00" />
                    </Form.Item>
                  </Col>
                  <Col span={5}>
                    <Form.Item
                      {...restField}
                      name={[name, 'type']}
                      label={t("doctor.tabs.planning.typeOfAppointment")}
                      rules={[{ required: true }]}
                    >
                      <Select>
                        {consultationOptions.map((item: any) => (
                          <Select.Option key={item.id} value={item.id}>
                            {item.name}
                          </Select.Option>
                        ))}
                      </Select>
                    </Form.Item>
                  </Col>
                  <Col span={5}>
                    <Form.Item
                      {...restField}
                      name={[name, 'address']}
                      label={t("doctor.tabs.planning.address")}
                      rules={[{ required: true }]}
                      extra={<Text type="secondary" style={{ fontSize: '12px' }} className="text-sm">{t("doctor.tabs.planning.addressInfo")}</Text>}
                    >
                      <Input placeholder="Enter" />
                    </Form.Item>
                  </Col>
                  <Col span={4}>
                    <div className="mt-7 flex flex-row justify-center gap-2.5">
                      {fields.length - 1 == name && (
                        <Button onClick={() => add()} icon={<Plus />} />
                      )}
                      <Button onClick={() => remove(name)} icon={<Trash />} />
                    </div>
                  </Col>
                </Row>
              ))}
            </>
          )}
        </Form.List>
      </Form>

    </div>
  )
}