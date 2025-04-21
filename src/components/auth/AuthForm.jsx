import React, { useState } from 'react';
import { Button, Form, Input, InputNumber } from 'antd';

const layout = {
  labelCol: { span: 24 },
  wrapperCol: { span: 24 },
};

const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};

const onFinish = (values) => {
  console.log(values);
};

const AuthForm = () => {
  const [authMode, setAuthMode] = useState('login')
  return (
   
      <div className="bg-white p-8 rounded-2xl  shadow-lg w-full max-w-xl">
    <Form
    {...layout}
    name="auth"
    onFinish={onFinish}
    style={{ maxWidth: 600 }}
    layout='vertical'
    validateMessages={validateMessages}
  >
    {<h1 className='text-5xl font-bold text-center mb-5'>{authMode=='signup'?'Create Account':'Login'}</h1>}
    {authMode=='signup'?<Form.Item name={['user', 'name']} label="Username" rules={[{ required: true }]}>
      <Input className="border-2 border-gray-300 !py-2 px-4 text-lg rounded-md"/>
    </Form.Item>:""}
    <Form.Item name={['user', 'email']} label="Email" rules={[{ type: 'email',required: true }]}>
      <Input className="border-2 border-gray-300 !py-2 px-4 text-lg rounded-md"/>
    </Form.Item>
    <Form.Item name={['user', 'password']} label="Password" rules={[{ type: 'password',required: true }]}>
      <Input.Password className="border-2 border-gray-300 !py-2 px-4 text-lg rounded-md" />
    </Form.Item>
    <Form.Item label={null}>
      <Button type="primary" htmlType="submit" size='large' className='w-full rounded-md'>
      {authMode === 'signup' ? 'Sign Up' : 'Login'}
      </Button>
    </Form.Item>
    <div>
  {authMode === 'signup' ? (
    <p className='text-center'>
      Already have an account?{' '}
      <span className='text-blue-400 cursor-pointer' onClick={() => setAuthMode('login')}>
        Login
      </span>
    </p>
  ) : (
    <p className='text-center'>
      Don't have an account?{' '}
      <span className='text-blue-400 cursor-pointer' onClick={() => setAuthMode('signup')}>
        Signup
      </span>
    </p>
  )}
</div>
  </Form>
</div>

  )
}

export default AuthForm