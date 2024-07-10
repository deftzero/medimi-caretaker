import { Segmented, Space, Typography } from 'antd';
import ArrowLeft from '../../../assets/icons/arrow-left.svg?react'
import Print from '../../../assets/icons/print.svg?react'
import ArrowRight from '../../../assets/icons/arrow-right.svg?react'
import { Link, useParams } from 'react-router-dom'
import { IPatient } from '../../../interfaces';
import { patientsData } from '../../../data';
import { useState } from 'react';
import Information from '../../../components/patients/Information';
import Consultation from '../../../components/patients/Consultations';
import Documents from '../../../components/patients/Documents';
import AppButton from '../../../components/ui/AppButton';
import { useTranslation } from 'react-i18next';

const { Title } = Typography;


export default function Patient() {


  const { id } = useParams()

  const { t } = useTranslation()

  const data: IPatient = patientsData.find((item: IPatient) => item.id === id)!

  const segmentOptions: string[] = [
    "Information",
    "Consultations",
    "Documents"
  ]

  const [value, setValue] = useState<string>(segmentOptions[0]);


  return (
    <div className='space-y-5'>
      <div className="header flex flex-row justify-between items-center">

        <div className='flex flex-row items-center gap-5'>
          <Link to={'/patients'}>
            <ArrowLeft />
          </Link>
          <Title level={3} className='mt-2'>
            {data.firstName + ' ' + data.lastName}
          </Title>
        </div>
        {value == 'Documents' && (

          <Space>
            <AppButton size="small" icon={<Print />}>
              {t("patient.tabs.documents.depositDocument")}
            </AppButton>
            <AppButton
              type="primary"
              size="small"
              icon={<ArrowRight />}
            >
              {t("patient.tabs.documents.generateDocument")}
            </AppButton>
          </Space>
        )}
      </div>
      <div>
        <Segmented options={segmentOptions} value={value} onChange={setValue} />
      </div>

      <div className='ml-0.5'>
        {value == segmentOptions[0] && (
          <Information data={data} />
        )}

        {value == segmentOptions[1] && (
          <Consultation data={data} />
        )}

        {value === segmentOptions[2] && (
          <Documents data={data} />
        )}
      </div>
    </div>
  )
}





