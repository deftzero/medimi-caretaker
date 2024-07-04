import { Typography } from 'antd';
import SectionImage from '../../assets/login-illustration.svg?react'

const { Title } = Typography;


export default function IllustrationSection() {
  return (
    <div className="bg-primary h-screen">
      <div className="content p-16 space-y-16 h-auto">
        <div className='text-center mt-12'>
          <SectionImage height={450} />
        </div>
        <div className="title">
          <Title level={2} style={{ margin: 0, color: 'white' }}>
            Your Echo-system all-in-one
          </Title>
          <Title level={5} style={{ margin: '5px 0', color: 'white', fontWeight: 'normal' }}>
            For the first time, you can manage your health analysis within our app Medimi on the web
          </Title>
        </div>
      </div>
    </div>
  )
}

