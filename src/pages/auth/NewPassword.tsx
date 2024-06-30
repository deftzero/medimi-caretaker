import AppButton from '../../components/ui/AppButton';
import Logo from '../../assets/medimi-logo-light-bg.svg?react'
import ArrowLeft from "../../assets/icons/arrow-left.svg?react";
import TickCircle from "../../assets/icons/ticket-circle.svg?react";
import { Card, Col, Form, Input, Row, Typography } from 'antd';
import { Link } from 'react-router-dom';
import IllustrationSection from '../../components/auth/IllustrationSection';
import { useState } from 'react';

const { Title, Text } = Typography;


export default function NewPassword() {

  // Change it to true to see next section
  const [formSuccess, setFormSuccess] = useState(true)

  function handleFormSuccess() {
    setFormSuccess(true)
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
              <SuccessSection />
            ) : (
              <NewPasswordForm handleFormSuccess={handleFormSuccess} />
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



function NewPasswordForm({ handleFormSuccess }: { handleFormSuccess: any }) {

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
          Create New Password
        </Title>
        <Text className='text-gray-500 mt-2 block'>
          Your new password must be different from previously used password
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
              label='New Password'
              name="password"
              rules={[{ required: true }]}
            >
              <Input.Password size='large' />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item
              label='Confirm New Password'

              name="confirmPassword"
              rules={[{ required: true }]}
            >
              <Input.Password size='large' />
            </Form.Item>
          </Col>
          <Col span={24} className='mt-5'>
            <AppButton block type="primary" size='large' htmlType='submit'>Continue</AppButton>
          </Col>
        </Row>
      </Form>
    </Card>
  )
}

function SuccessSection() {
  return (
    <Card bordered={false} className='p-8 text-center'>
      <TickCircle />
      <Title level={3} style={{ margin: '10px 0' }}>
        Password Sucessfully Reset
      </Title>
      <Text type='secondary' className='mt-2.5 block'>You can now login with new password</Text>

      <Link to={'/login'}>
        <AppButton block type="primary" size='large' className="mt-5">Login now</AppButton>
      </Link>

    </Card>
  )
}

