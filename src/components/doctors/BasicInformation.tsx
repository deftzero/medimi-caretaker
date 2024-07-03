import { useParams } from "react-router-dom";
import { IDoctor } from "../../interfaces";
import { doctorsData } from "../../data";
import Star from "../../assets/icons/star.svg?react";
import { Avatar, Col, Row, Table, Typography } from "antd";

const { Title, Text } = Typography;


export default function BasicInformation() {
  const { id } = useParams();

  const data: IDoctor = doctorsData.find((item: IDoctor) => item.id === id)!

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Label',
      dataIndex: 'label',
      key: 'label',
    },
    {
      title: 'Longitude',
      dataIndex: 'longitude',
      key: 'longitude',
    },
    {
      title: 'Latitude',
      dataIndex: 'latitude',
      key: 'latitude',
    },
    {
      title: 'Indications',
      dataIndex: 'indications',
      key: 'indications',
    },
    {
      title: 'City',
      dataIndex: 'city',
      key: 'city',
    },
  ];

  return (
    <div className='space-y-5'>
      <div className='bg-indigo-50 rounded-md p-5 space-y-5'>
        <div className='flex flex-row gap-5'>
          <Avatar size={82} src="https://i.pravatar.cc/300">{data.firstName?.charAt(0)}{data.lastName?.charAt(0)}</Avatar>
          <div className='flex flex-col gap-2'>
            <Title level={5} style={{ margin: 0 }}>{data.firstName + ' ' + data.lastName}</Title>
            <Text>{data.service}</Text>
            <div className='flex flex-row items-center gap-1'>
              <Star />
              <Text type='secondary'>{data.stars + ' • '}</Text>
              <Text type='secondary'>{data.reviews + ' Reviews'}</Text>
            </div>
          </div>
        </div>
        <div className='bg-white rounded-md p-5'>
          <Row>
            <Col span={8}>
              <Row gutter={[24, 10]}>
                <Col span={12}>
                  <Text type='secondary'>Email</Text>
                </Col>
                <Col span={12} className='flex justify-end'>
                  <Text className='font-semibold text-end w-full'>{data.email}</Text>
                </Col>
                <Col span={12}>
                  <Text type='secondary'>Phone Number</Text>
                </Col>
                <Col span={12} className='flex justify-end'>
                  <Text className='font-semibold text-end'>{data.phoneNumber}</Text>
                </Col>
                <Col span={12}>
                  <Text type='secondary'>ID</Text>
                </Col>
                <Col span={12} className='flex justify-end'>
                  <Text className='font-semibold text-end'>{data.id}</Text>
                </Col>
                <Col span={12}>
                  <Text type='secondary'>Additional Role</Text>
                </Col>
                <Col span={12} className='flex justify-end'>
                  <Text className='font-semibold text-end'>{data.additionalRole}</Text>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </div>
      <Table dataSource={data.locations} columns={columns} pagination={false} />
    </div>
  )
}