import { useTranslation } from "react-i18next";
import { IPatient } from "../../interfaces";
import { Col, Row, Typography } from "antd";
import { format } from "date-fns";

const { Text } = Typography;



export default function Information({ data }: { data: IPatient }) {
  const { t } = useTranslation();
  return (
    <div className="p-5 rounded-md bg-white">
      <div className='bg-indigo-50 rounded-md p-5 space-y-5'>
        <Row gutter={[12, 12]}>
          <Col span={6} className='flex flex-col gap-0.5'>
            <Text type='secondary'>{t('patient.tabs.information.firstName')}</Text>
            <Text className='font-semibold'>{data.firstName}</Text>
          </Col>
          <Col span={6} className='flex flex-col gap-0.5'>
            <Text type='secondary'>{t('patient.tabs.information.lastName')}</Text>
            <Text className='font-semibold'>{data.lastName}</Text>
          </Col>
          <Col span={6} className='flex flex-col gap-0.5'>
            <Text type='secondary'>{t('patient.tabs.information.dob')}</Text>
            <Text className='font-semibold'>{format(new Date(data.dob), 'dd/MM/yyyy')}</Text>
          </Col>
          <Col span={6} className='flex flex-col gap-0.5'>
            <Text type='secondary'>{t('patient.tabs.information.address')}</Text>
            <Text className='font-semibold'>{data.address}</Text>
          </Col>
          <Col span={6} className='flex flex-col gap-0.5'>
            <Text type='secondary'>{t('patient.tabs.information.phoneNumber')}</Text>
            <Text className='font-semibold'>{data.phoneNumber}</Text>
          </Col>

          <Col span={6} className='flex flex-col gap-0.5'>
            <Text type='secondary'>{t('patient.tabs.information.email')}</Text>
            <Text className='font-semibold'>{data.email}</Text>
          </Col>
          <Col span={6} className='flex flex-col gap-0.5'>
            <Text type='secondary'>{t('patient.tabs.information.bloodType')}</Text>
            <Text className='font-semibold'>{data.bloodType}</Text>
          </Col>

          <Col span={6} className='flex flex-col gap-0.5'>
            <Text type='secondary'>{t('patient.tabs.information.background')}</Text>
            <Text className='font-semibold'>{data.background.join(', ')}</Text>
          </Col>
          
          <Col span={6} className='flex flex-col gap-0.5'>
            <Text type='secondary'>{t('patient.tabs.information.field')}</Text>
            <Text className='font-semibold'>{data.field.join(', ')}</Text>
          </Col>
        </Row>

      </div>
    </div>
  )
}