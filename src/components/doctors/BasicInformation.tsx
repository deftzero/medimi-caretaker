import { useParams } from "react-router-dom";
import { IDoctor } from "../../interfaces";
import { doctorsData } from "../../data";
import Star from "../../assets/icons/star.svg?react";
import { Avatar, Col, Row, Table, Typography } from "antd";
import { useTranslation } from "react-i18next";

const { Title, Text } = Typography;


export default function BasicInformation() {
  const { id } = useParams();
  const { t } = useTranslation()

  const data: IDoctor = doctorsData.find((item: IDoctor) => item.id === id)!

  const columns = [
    {
      title: t("doctor.tabs.information.tabs.basicInfo.table.name"),
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: t("doctor.tabs.information.tabs.basicInfo.table.label"),
      dataIndex: 'label',
      key: 'label',
    },
    {
      title: t("doctor.tabs.information.tabs.basicInfo.table.longitude"),
      dataIndex: 'longitude',
      key: 'longitude',
    },
    {
      title: t("doctor.tabs.information.tabs.basicInfo.table.latitude"),
      dataIndex: 'latitude',
      key: 'latitude',
    },
    {
      title: t("doctor.tabs.information.tabs.basicInfo.table.indications"),
      dataIndex: 'indications',
      key: 'indications',
    },
    {
      title: t("doctor.tabs.information.tabs.basicInfo.table.city"),
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
              <Text type='secondary'>{data.reviews + ' ' + t("doctor.tabs.information.tabs.basicInfo.reviews")}</Text>
            </div>
          </div>
        </div>
        <div className='bg-white rounded-md p-5'>
          <Row>
            <Col span={8}>
              <Row gutter={[24, 10]}>
                <Col span={12}>
                  <Text type='secondary'>{t("doctor.tabs.information.tabs.basicInfo.email")}</Text>
                </Col>
                <Col span={12} className='flex justify-end'>
                  <Text className='font-semibold text-end w-full'>{data.email}</Text>
                </Col>
                <Col span={12}>
                  <Text type='secondary'>{t("doctor.tabs.information.tabs.basicInfo.phoneNumber")}</Text>
                </Col>
                <Col span={12} className='flex justify-end'>
                  <Text className='font-semibold text-end'>{data.phoneNumber}</Text>
                </Col>
                <Col span={12}>
                  <Text type='secondary'>{t("doctor.tabs.information.tabs.basicInfo.id")}</Text>
                </Col>
                <Col span={12} className='flex justify-end'>
                  <Text className='font-semibold text-end'>{data.id}</Text>
                </Col>
                <Col span={12}>
                  <Text type='secondary'>{t("doctor.tabs.information.tabs.basicInfo.additionalRole")}</Text>
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