import { Link, useParams } from 'react-router-dom';
import { IDoctor } from '../../../interfaces';
import { doctorsData } from '../../../data';
import ArrowLeft from '../../../assets/icons/arrow-left.svg?react'
import Pencil from "../../../assets/icons/white-pencil.svg?react";


import { Button, Checkbox, Col, Form, Input, Row, Segmented, Select, Space, Tabs, TabsProps, Typography } from "antd";
import { useState } from 'react';
import AppButton from '../../../components/ui/AppButton';
import BasicInformation from '../../../components/doctors/BasicInformation';
import ProfessionalBackground from '../../../components/doctors/ProfessionalBackground';
import AdditionalDetails from '../../../components/doctors/AdditionalDetails';
import { useTranslation } from 'react-i18next';
import WeekdayForm from '../../../components/doctors/WeekdayForm';
import LeaveModal from '../../../components/doctors/LeaveModal';

const { Title, Text } = Typography;


export default function Doctor() {

  const { id } = useParams();
  const { t } = useTranslation()

  const data: IDoctor = doctorsData.find((item: IDoctor) => item.id === id)!

  const items: TabsProps['items'] = [
    {
      key: '1',
      label: t("doctor.tabs.information.title"),
      children: <InformationTab />,
    },
    {
      key: '2',
      label: t("doctor.tabs.planning.title"),
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

  const { t } = useTranslation()

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
          {t("doctor.tabs.information.edit")}
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

  const { t } = useTranslation()

  const [visible, setVisible] = useState(false);
  const onCreate = (values: any) => {
    console.log("Received values of form: ", values);
    setVisible(false);
  };


  const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

  return (
    <div className='space-y-5'>
      {weekdays.map((item: string) => (
        <WeekdayForm key={item} week={item} />
      ))}

      <div className="bg-indigo-50 rounded-md p-5 flex flex-row justify-between items-center">
        <Title level={5}>{t("doctor.tabs.planning.holidays")}</Title>
        <Button onClick={() => setVisible(true)}>{t("doctor.tabs.planning.takeLeave")}</Button>
      </div>
      <LeaveModal
        visible={visible}
        onCreate={onCreate}
        onCancel={() => setVisible(false)}
      />
    </div>
  )
}


