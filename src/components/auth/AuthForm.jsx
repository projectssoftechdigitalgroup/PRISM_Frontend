import React, { useEffect, useState } from 'react';
import { Button, Form, Input, InputNumber } from 'antd';
import { useContext } from 'react'
import AuthContext from '../../context/AuthContext'
import { useNavigate } from 'react-router-dom';
import { FaLock, FaUnlock } from 'react-icons/fa';
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

const AuthForm = () => {
  const [authMode, setAuthMode] = useState('login')
  const { setIsLogin } = useContext(AuthContext)
   const navigate = useNavigate();
   const [form] = Form.useForm()
  const onFinish = (values) => {
    const { email, password } = values.user
  
    if (email === 'user@prism.com' && password === 'User@123') {
      alert('Login successful')
      setIsLogin(true)
      navigate('/dashboard')
    } else {
      alert('Invalid email or password')
    }
  }
  useEffect(() => {
    form.resetFields()
  }, [authMode])
  return (
   
      <div className="bg-white p-8 rounded-2xl  shadow-lg w-full max-w-xl">
    <Form
    {...layout}
    form={form}
    name="auth"
    onFinish={onFinish}
    style={{ maxWidth: 600 }}
    layout='vertical'
    validateMessages={validateMessages}
  >
    {<h1 className='text-4xl md:text-5xl font-bold text-center mb-5'>{authMode=='signup'?'Create Account':'Login'}</h1>}
    {authMode=='signup'?<Form.Item name={['user', 'name']} label="Username" rules={[{ required: true }]}>
      <Input className="border-2 border-gray-300 focus:!border-purple-600 hover:!border-purple-600 !py-2 px-4 text-lg rounded-md"/>
    </Form.Item>:""}
    <Form.Item name={['user', 'email']} label="Email" rules={[{ type: 'email',required: true }]}>
      <Input className="focus:!border-purple-600 hover:!border-purple-600 border-2 border-gray-300 !py-2 px-4 text-lg rounded-md"/>
    </Form.Item>
    <Form.Item name={['user', 'password']} label="Password" rules={[
            {
              required: true,
              pattern: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?#&])[A-Za-z\d@$!%*?#&]{8,}$/,
              message:
                'Password must be at least 8 characters, include upper and lower case, number, and special character.',
            },
          ]}>
      <Input.Password iconRender={(visible) => (visible ? <FaUnlock color='gray'/> : <FaLock color='gray'/>)} className="  border-2 border-gray-300 !py-2 px-4 text-lg rounded-md active:!border-purple-600 focus:!border-purple-600 hover:!border-purple-600" />
    </Form.Item>
    <Form.Item label={null}>
      <Button className="!bg-purple-600 hover:!bg-purple-700 !text-white w-full rounded-md  hover:!border-purple-800" htmlType="submit" size='large' >
      {authMode === 'signup' ? 'Sign Up' : 'Login'}
      </Button>
    </Form.Item>
    <div>
  {authMode === 'signup' ? (
    <p className='text-center'>
      Already have an account?{' '}
      <span className='text-purple-600 cursor-pointer' onClick={() => setAuthMode('login')}>
        Login
      </span>
    </p>
  ) : (
    <p className='text-center'>
      Don't have an account?{' '}
      <span className='text-purple-600 cursor-pointer' onClick={() => setAuthMode('signup')}>
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