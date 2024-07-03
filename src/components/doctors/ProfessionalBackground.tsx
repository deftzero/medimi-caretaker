import { useParams } from "react-router-dom";
import { IDoctor, IDoctorExperience, IDoctorTraining } from "../../interfaces";
import { doctorsData } from "../../data";
import { Col, Row, Typography } from "antd";


const { Title, Text } = Typography;



export default function ProfessionalBackground() {

  const { id } = useParams();

  const data: IDoctor = doctorsData.find((item: IDoctor) => item.id === id)!

  return (
    <div className='bg-indigo-50 rounded-md p-5 space-y-5'>
      <div className='flex flex-col gap-2.5'>
        <Title level={4} style={{ margin: 0 }}>About Doctor</Title>
        <Text>{data.professionalBackground?.about}</Text>
      </div>
      <div className='flex flex-row gap-5'>
        <div className="bg-white py-2.5 px-5 rounded-md flex flex-col items-center gap-1">
          <Title level={4} style={{ margin: 0 }}>{data.professionalBackground?.successRate + '%'}</Title>
          <Text type='secondary'>Success Rate</Text>
        </div>
        <div className="bg-white py-2.5 px-5 rounded-md flex flex-col items-center gap-1">
          <Title level={4} style={{ margin: 0 }}>{data.professionalBackground?.experienceYears + ' Years'}</Title>
          <Text type='secondary'>Experience</Text>
        </div>
      </div>
      <Row gutter={[20, 20]}>
        <Col span={24}>
          <div className="bg-white rounded-md p-5">
            <TrainingSection data={data} />
          </div>
        </Col>
        <Col span={14}>
          <div className="bg-white rounded-md p-5">
            <SubSpecialitySection data={data} />
          </div>
        </Col>
        <Col span={10}>
          <div className="bg-white rounded-md p-5">
            <ExpertiseSection data={data} />
          </div>
        </Col>
        <Col span={24}>
          <div className="bg-white rounded-md p-5">
            <ExperienceSection data={data} />
          </div></Col>
      </Row>
    </div>
  )
}

function TrainingSection({ data }: { data: any }) {
  return (
    <>
      <Title level={4} style={{ margin: 0 }}>Training</Title>
      <div className='mt-5'>
        <Row>
          <Col span={16}>
            <Row gutter={[24, 10]}>
              <Col span={8}>
                <Text type='secondary'>Year</Text>
              </Col>
              <Col span={8}>
                <Text type='secondary'>Training</Text>
              </Col>
              <Col span={8}>
                <Text type='secondary'>School</Text>
              </Col>
              {data.professionalBackground?.training?.map((item: IDoctorTraining) => (
                <>
                  <Col span={8}>
                    <Text className='font-medium'>{item.year}</Text>
                  </Col>
                  <Col span={8}>
                    <Text className='font-medium'>{item.training}</Text>
                  </Col>
                  <Col span={8}>
                    <Text className='font-medium'>{item.school}</Text>
                  </Col>
                </>
              ))}
            </Row>
          </Col>
        </Row>
      </div>
    </>
  )
}

function SubSpecialitySection({ data }: { data: IDoctor }) {
  return (
    <>
      <Title level={4} style={{ margin: 0 }}>Sub-specialities</Title>
      <div className='mt-5 flex flex-col gap-2.5'>
        {data?.professionalBackground?.subSpecialities.map((item: string) => (
          <div className='flex flex-row gap-5 items-center'>
            <div className='h-3 w-3 bg-amber-500 rounded-full'></div>
            <Text>{item}</Text>
          </div>
        ))}
      </div>
    </>
  )
}

function ExpertiseSection({ data }: { data: IDoctor }) {
  return (
    <>
      <Title level={4} style={{ margin: 0 }}>Expertise</Title>
      <div className='mt-5 flex flex-col gap-2.5'>
        {data?.professionalBackground?.experties.map((item: string) => (
          <div className='flex flex-row gap-5 items-center'>
            <div className='h-3 w-3 bg-amber-500 rounded-full'></div>
            <Text>{item}</Text>
          </div>
        ))}
      </div>
    </>
  )
}

function ExperienceSection({ data }: { data: any }) {
  return (
    <>
      <Title level={4} style={{ margin: 0 }}>Expertise</Title>
      <div className='mt-5'>
        <Row>
          <Col span={16}>
            <Row gutter={[24, 10]}>
              <Col span={8}>
                <Text type='secondary'>Year</Text>
              </Col>
              <Col span={8}>
                <Text type='secondary'>Medical Facility</Text>
              </Col>
              <Col span={8}>
                <Text type='secondary'>Job</Text>
              </Col>
              {data.professionalBackground?.experience?.map((item: IDoctorExperience) => (
                <>
                  <Col span={8}>
                    <Text className='font-medium'>{item.startDate + ' - ' + item.endDate}</Text>
                  </Col>
                  <Col span={8}>
                    <Text className='font-medium'>{item.facility}</Text>
                  </Col>
                  <Col span={8}>
                    <Text className='font-medium'>{item.job}</Text>
                  </Col>
                </>
              ))}
            </Row>
          </Col>
        </Row>
      </div>
    </>
  )
}