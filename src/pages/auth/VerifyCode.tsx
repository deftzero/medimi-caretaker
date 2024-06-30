import AppButton from '../../components/ui/AppButton';
import Logo from '../../assets/medimi-logo-light-bg.svg?react'
import { Card, Col, Form, Input, Row, Typography } from 'antd';
import CodeIllustration from '../../assets/verify-code.svg?react'
import IllustrationSection from '../../components/auth/IllustrationSection';

const { Title, Text } = Typography;


export default function VerifiyCode() {

  return (

    <section className='page-wrapper bg-gray-100 h-screen'>
      <div className="layout h-full grid grid-cols-1 lg:grid-cols-2">
        <div className="left p-10 md:p-16 space-y-20">
          <div className="logo">
            <Logo />
          </div>
          <div className="login-form">
            <CodeForm />
          </div>
        </div>
        <div className="right hidden lg:block">
          <IllustrationSection />
        </div>
      </div>
    </section>
  )
}



function CodeForm() {

  const onSubmit = (values: any) => {
    console.log(values)
  }

  return (
    <Card bordered={false} className='px-8 pb-8 text-center'>
      <div className="flex flex-col items-center">
        <CodeIllustration />
        <div className='-mt-16'>
          <div className='bg-blue-100 inline-block p-3 rounded-full'>
            <Text className='text-5xl'>
              🤗
            </Text>
          </div>
        </div>
      </div>
      <Title level={3} style={{ margin: '10px 0' }}>
        Verification Code
      </Title>
      <Text type='secondary' className='mt-2.5 block md:px-16'>Enter the verifaction code we just sent you on your email address.</Text>

      <Form
        layout="vertical"
        name="reset_form"
        onFinish={onSubmit}
        requiredMark={false}
      >
        <Row gutter={[16, 4]} className="mt-8">
          <Col span={24}>
            <Form.Item
              name="otp"
              rules={[{ required: true }]}
            >
              <Input.OTP length={4} size='large' />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Text type='secondary' className='mt-2.5 block'>Did not receive? <Text className='text-primary'>Resend</Text></Text>
          </Col>
          <Col span={24} className='mt-5'>
            <AppButton block type="primary" size='large' htmlType='submit'>Continue</AppButton>
          </Col>
        </Row>
      </Form>
    </Card>
  )
}