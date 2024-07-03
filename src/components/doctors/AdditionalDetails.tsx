import { useParams } from "react-router-dom";
import { IDoctor } from "../../interfaces";
import { doctorsData } from "../../data";
import { Col, Row, Typography, Image } from "antd";

const { Title, Text } = Typography;


export default function AdditionalDetails() {

  const { id } = useParams();

  const data: IDoctor = doctorsData.find((item: IDoctor) => item.id === id)!

  return (
    <div className='space-y-5'>
      <div className='bg-indigo-50 rounded-md p-5 space-y-5'>
        <Row gutter={[12, 12]}>
          <Col span={12}>
            <div className="bg-white rounded-md p-5">
              <LanguageSection data={data} />
            </div>
          </Col>
          <Col span={12}>
            <div className="bg-white rounded-md p-5">
              <LegalInformationSection data={data} />
            </div>
          </Col>
        </Row>
      </div>
      
      <div>

      <Title level={4} style={{ margin: 0 }}>Gallery</Title>
      <div className="list flex flex-wrap gap-5 mt-5">
        {data?.gallery?.map((item: any) => (
          <Image
            width={150}
            style={{ borderRadius: '5px'}}
            src={item.url}
          />
        ))}
      </div>
      </div>
    </div>
  )
}


function LanguageSection({ data }: { data: IDoctor }) {
  return (
    <>
      <Title level={4} style={{ margin: 0 }}>Expertise</Title>
      <div className='mt-5 flex flex-col gap-2.5'>
        {data?.additionalDetails?.languages.map((item: string) => (
          <div className='flex flex-row gap-5 items-center'>
            <div className='h-3 w-3 bg-amber-500 rounded-full'></div>
            <Text>{item}</Text>
          </div>
        ))}
      </div>
    </>
  )
}

function LegalInformationSection({ data }: { data: IDoctor }) {
  return (
    <>
      <Title level={4} style={{ margin: 0 }}>Legal Information</Title>
      <div className='mt-5'>
        <Row gutter={[24, 10]}>
          <Col span={12}>
            <Text type='secondary'>Numbero ONMS</Text>
          </Col>
          <Col span={12} className='flex justify-end'>
            <Text className='font-semibold text-end w-full'>{data.additionalDetails?.legalDetails.onms}</Text>
          </Col>
          <Col span={12}>
            <Text type='secondary'>ID</Text>
          </Col>
          <Col span={12} className='flex justify-end'>
            <Text className='font-semibold text-end w-full'>{data.additionalDetails?.legalDetails.id}</Text>
          </Col>
        </Row>

      </div>
    </>
  )
}