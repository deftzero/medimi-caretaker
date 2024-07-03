import { Link, useParams } from 'react-router-dom';
import { IDoctor } from '../../../interfaces';
import { consultationOptions, doctorsData, serviceOptions } from '../../../data';
import ArrowLeft from '../../../assets/icons/arrow-left.svg?react'
import Pencil from "../../../assets/icons/white-pencil.svg?react";
import Trash from "../../../assets/icons/trash-black.svg?react";
import Plus from "../../../assets/icons/plus-black.svg?react";

import { Button, Checkbox, Col, Form, Input, Row, Segmented, Select, Space, Tabs, TabsProps, Typography } from "antd";
import { useState } from 'react';
import AppButton from '../../../components/ui/AppButton';
import BasicInformation from '../../../components/doctors/BasicInformation';
import ProfessionalBackground from '../../../components/doctors/ProfessionalBackground';
import AdditionalDetails from '../../../components/doctors/AdditionalDetails';

const { Title, Text } = Typography;


export default function Doctor() {

  const { id } = useParams();

  const data: IDoctor = doctorsData.find((item: IDoctor) => item.id === id)!

  const items: TabsProps['items'] = [
    {
      key: '1',
      label: 'Information',
      children: <InformationTab />,
    },
    {
      key: '2',
      label: 'Planning',
      children: <PlanningTab />,
    },
  ];


  return (
    <div className='space-y-5'>
      <div className='flex flex-row items-center gap-5'>
        <Link to={'/doctors'}>
          <ArrowLeft />
        </Link>
        <Title level={3} className='mt-2'>
          {data.firstName + ' ' + data.lastName}
        </Title>
      </div>

      <div>
        <Tabs defaultActiveKey="1" items={items} />
      </div>
    </div>
  )
}

function InformationTab() {
  const [value, setValue] = useState<string | number>('Basic Info');

  return (
    <div className="bg-white p-5 rounded-md space-y-5">
      <div className='flex flex-row justify-between items-center'>
        <Segmented options={['Basic Info', 'Professional Background', 'Additional Details']} value={value} onChange={setValue} />
        <AppButton
          type="primary"
          icon={<Pencil />}
          size='small'
          onClick={() => { }}
        >
          Edit
        </AppButton>
      </div>

      <div className='ml-0.5'>
        {value == 'Basic Info' && (
          <BasicInformation />
        )}

        {value == 'Professional Background' && (
          <ProfessionalBackground />
        )}

        {value === 'Additional Details' && (
          <AdditionalDetails />
        )}
      </div>
    </div>
  )
}

function WeekdayForm({ week }: { week: string }) {

  const [form] = Form.useForm()

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
              <div className="header flex flex-row justify-between items-center mb-5">
                <Checkbox>
                  <Text>{week}</Text>
                </Checkbox>
                {(timesList === undefined || timesList.length === 0) && (
                  <Button onClick={() => add()} icon={<Plus />} />
                )}
              </div>
              {fields.map(({ key, name, ...restField }) => (
                <Row key={key} gutter={[20, 20]} justify="center">
                  <Col span={5}>
                    <Form.Item
                      {...restField}
                      name={[name, 'begin']}
                      label="Beginning"
                      rules={[{ required: true }]}
                    >
                      <Input placeholder="Beginning" />
                    </Form.Item>
                  </Col>
                  <Col span={5}>
                    <Form.Item
                      {...restField}
                      label="End"
                      name={[name, 'end']}
                      rules={[{ required: true }]}
                    >
                      <Input placeholder="End" />
                    </Form.Item>
                  </Col>
                  <Col span={5}>
                    <Form.Item
                      {...restField}
                      label="Type"
                      name={[name, 'type']}
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
                      label="Address"
                      name={[name, 'address']}
                      rules={[{ required: true }]}
                      extra="if different from the address of the structure"
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

function PlanningTab() {

  const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

  return (
    <div className='space-y-5'>
      {weekdays.map((item: string) => (
        <WeekdayForm key={item} week={item} />
      ))}

      <div className="bg-indigo-50 rounded-md p-5">
      </div>
    </div>
  )
}


