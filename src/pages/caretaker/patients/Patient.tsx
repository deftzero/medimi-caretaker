import { Segmented, Typography } from 'antd';
import ArrowLeft from '../../../assets/icons/arrow-left.svg?react'
import { Link, useParams } from 'react-router-dom'
import { IPatient } from '../../../interfaces';
import { patientsData } from '../../../data';
import { useState } from 'react';
import Information from '../../../components/patients/Information';
import Consultation from '../../../components/patients/Consultations';
import Documents from '../../../components/patients/Documents';

const { Title } = Typography;


export default function Patient() {


  const { id } = useParams()

  const data: IPatient = patientsData.find((item: IPatient) => item.id === id)!

  const segmentOptions: string[] = [
    "Information",
    "Consultations",
    "Documents"
  ]

  const [value, setValue] = useState<string>(segmentOptions[0]);


  return (
    <div className='space-y-5'>
      <div className='flex flex-row items-center gap-5'>
        <Link to={'/patients'}>
          <ArrowLeft />
        </Link>
        <Title level={3} className='mt-2'>
          {data.firstName + ' ' + data.lastName}
        </Title>
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





