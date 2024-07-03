import { Link, useParams } from 'react-router-dom';
import { IDoctor } from '../../../interfaces';
import { doctorsData } from '../../../data';
import ArrowLeft from '../../../assets/icons/arrow-left.svg?react'
import Pencil from "../../../assets/icons/white-pencil.svg?react";
import Trash from "../../../assets/icons/trash-black.svg?react";
import Plus from "../../../assets/icons/plus-black.svg?react";

import { Checkbox, Col, Form, Input, Row, Segmented, Space, Tabs, TabsProps, Typography } from "antd";
import { useState } from 'react';
import AppButton from '../../../components/ui/AppButton';
import BasicInformation from '../../../components/doctors/BasicInformation';
import ProfessionalBackground from '../../../components/doctors/ProfessionalBackground';
import AdditionalDetails from '../../../components/doctors/AdditionalDetails';
import ActionButton from '../../../components/ui/ActionButton';
import { ACTION_COLORS } from '../../../config/constants';

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


function PlanningTab() {
  return (
    <div className='space-y-5'>
      <div className='bg-indigo-50 rounded-md p-5 space-y-5'>

        <Form
          layout="vertical"
          requiredMark={false}
        >
          <Row gutter={[20, 20]} justify="center">
            <Col span={24}>
              <Form.Item name='weekday'>
                <Checkbox>
                  <Text>Monday</Text>
                </Checkbox>
              </Form.Item>
            </Col>
            <Col span={5}>
              <Form.Item
                label='Beginning'
                name="beginTime"
                rules={[{ required: true }]}
              >
                <Input size='large' placeholder="08:00" />
              </Form.Item>
            </Col>
            <Col span={5}>
              <Form.Item
                label='End'
                name="endTime"
                rules={[{ required: true }]}
              >
                <Input size='large' placeholder="16:00" />
              </Form.Item>
            </Col>
            <Col span={5}>
              <Form.Item
                label='Type of appointment'
                name="type"
                rules={[{ required: true }]}
              >
                <Input size='large' />
              </Form.Item>
            </Col>
            <Col span={5}>
              <Form.Item
                label='Address'
                name="address"
                rules={[{ required: true }]}
                extra="if different from the address of the structure"
              >
                <Input size='large' placeholder="Enter" />
              </Form.Item>
            </Col>
            <Col span={4}>
              <Form.Item>
                <div className="flex justify-center mt-8">
                  <Space>
                    <ActionButton
                      background={ACTION_COLORS.NEUTRAL}
                      icon={<Plus />}
                    />
                    <ActionButton
                      background={ACTION_COLORS.NEUTRAL}
                      icon={<Trash />}
                    />
                  </Space>
                </div>
              </Form.Item>
            </Col>
          </Row>

        </Form>
      </div>
    </div>
  )
}


