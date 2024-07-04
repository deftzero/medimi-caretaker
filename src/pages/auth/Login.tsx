import AppButton from '../../components/ui/AppButton';
import Logo from '../../assets/medimi-logo-light-bg.svg?react'
import { Card, Checkbox, Col, Form, Input, Row, Typography } from 'antd';
import { Link } from 'react-router-dom';
import IllustrationSection from '../../components/auth/IllustrationSection';

const { Title, Text } = Typography;


export default function Login() {

  return (

    <section className='page-wrapper bg-gray-100 h-screen'>
      <div className="layout h-full grid grid-cols-1 lg:grid-cols-2">
        <div className="left p-10 md:p-16 space-y-20">
          <div className="logo">
            <Logo />
          </div>
          <div className="login-form">
            <LoginForm />
          </div>
        </div>
        <div className="right hidden lg:block">
          <IllustrationSection />
        </div>
      </div>
    </section>
  )
}



function LoginForm() {

  const onSubmit = (values: any) => {
    console.log(values)
  }

  return (
    <Card bordered={false} className='p-5'>
      <Title level={2} style={{ margin: 0 }}>
        Login
      </Title>
      <Text className='text-gray-500 mt-2 block'>
        See your growth and get consulting support!
      </Text>
      <Form
        layout="vertical"
        name="login_form"
        onFinish={onSubmit}
        requiredMark={false}
      >
        <Row gutter={[16, 4]} className="mt-8">
          <Col span={24}>
            <Form.Item
              label='Email, ID or Phone Number'
              name="username"
              rules={[{ required: true }]}
            >
              <Input size='large' />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item
              label='Password'
              name="password"
              rules={[{ required: true }]}
            >
              <Input.Password size='large' />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Link to={"/reset-password"}>
              <Text className='text-primary font-semibold text-end block'>Forgot Password?</Text>
            </Link>
          </Col>
          <Col span={24}>
            <Form.Item
              name="rememberMe"
              valuePropName="checked"
              initialValue={false}
            >
              <Checkbox>
                <Text>Keep me logged in</Text>
              </Checkbox>
            </Form.Item>
          </Col>
          <Col span={24}>
            <AppButton htmlType="submit" block type="primary" size='large'>Login</AppButton>
          </Col>
        </Row>
      </Form>
    </Card >
  )
}
