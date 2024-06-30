import AppButton from '../../components/ui/AppButton';
import Logo from '../../assets/medimi-logo-light-bg.svg?react'
import EmailSent from '../../assets/email-sent.svg?react'
import ArrowLeft from "../../assets/icons/arrow-left.svg?react";
import { Card, Col, Form, Input, Row, Typography } from 'antd';
import { Link } from 'react-router-dom';
import IllustrationSection from '../../components/auth/IllustrationSection';
import { useState } from 'react';

const { Title, Text } = Typography;


export default function ResetPassword() {

  // Change it to true to see next section
  const [formSuccess, setFormSuccess] = useState(false)
  const [username, setUsername] = useState('')

  function handleFormSuccess(name: string) {
    setFormSuccess(true)
    setUsername(name)
  }

  return (

    <section className='page-wrapper bg-gray-100 h-screen'>
      <div className="layout h-full grid grid-cols-1 lg:grid-cols-2">
        <div className="left p-10 md:p-16 space-y-20">
          <div className="logo">
            <Logo />
          </div>
          <div className="login-form">
            {formSuccess ? (
              <EmailSentSection username={username} />
            ) : (
              <ResetForm handleFormSuccess={handleFormSuccess} />
            )}
          </div>
        </div>
        <div className="right hidden lg:block">
          <IllustrationSection />
        </div>
      </div>
    </section>
  )
}



function ResetForm({ handleFormSuccess }: { handleFormSuccess: any }) {

  const onSubmit = (values: any) => {
    console.log(values)
    handleFormSuccess(values.username)
  }

  return (
    <Card bordered={false} className='p-5'>
      <Link to={"/login"}>
        <ArrowLeft />
      </Link>
      <div className="title-wrapper mt-5">
        <Title level={2} style={{ margin: 0 }}>
          Reset password
        </Title>
        <Text className='text-gray-500 mt-2 block'>
          Input your email ID or Phone Number to receive a reset link
        </Text>
      </div>
      <Form
        layout="vertical"
        name="reset_form"
        onFinish={onSubmit}
        requiredMark={false}
      >
        <Row gutter={[16, 4]} className="mt-8">
          <Col span={24}>
            <Form.Item
              label='Email or Phone Number'

              name="username"
              rules={[{ required: true }]}
            >
              <Input size='large' />
            </Form.Item>
          </Col>
          <Col span={24}>
            <AppButton block type="primary" size='large' htmlType='submit'>Continue</AppButton>
          </Col>
          <Col span={24} className='mt-5'>
            <div className='flex gap-1 justify-center'>
              <Text type='secondary'>Remember your password?</Text>
              <Link to={"/login"}>
                <Text className='text-primary font-semibold text-end block'>Try Login</Text>
              </Link>
            </div>
          </Col>
        </Row>
      </Form>
    </Card>
  )
}

function EmailSentSection({ username = 'test@gmail.com' }: { username: string }) {
  return (
    <Card bordered={false} className='p-8 text-center'>
      <EmailSent />
      <Title level={3} style={{ margin: '10px 0' }}>
        Check your email
      </Title>
      <Text type='secondary' className='mt-2.5 block'>We have sent a password recovery instruction to your email <Text strong>{username}</Text></Text>
    </Card>
  )
}

