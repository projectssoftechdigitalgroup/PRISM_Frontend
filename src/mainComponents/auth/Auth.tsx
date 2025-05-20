import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaLock, FaUnlock } from 'react-icons/fa';

const AuthForm = () => {
  const [authMode, setAuthMode] = useState('login');
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { email, password } = formData;

    if (email === 'user@prism.com' && password === 'User@123') {
      alert('Login successful');
      navigate('/homepage');
    } else {
      alert('Invalid email or password');
    }
  };

  useEffect(() => {
    setFormData({ username: '', email: '', password: '' });
  }, [authMode]);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        background: '#f7f7f7', // Gradient background
        padding: '20px',
      }}
    >
      <div
        style={{
          backgroundColor: '#ffffff',
          padding: '30px',
          borderRadius: '16px',
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
          maxWidth: '400px',
          width: '100%',
        }}
      >
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
          <h1
            style={{
              fontSize: '28px',
              fontWeight: 'bold',
              textAlign: 'center',
              marginBottom: '20px',
              color: '#E041B1', // Theme color for the title
            }}
          >
            {authMode === 'signup' ? 'Create Account' : 'Login'}
          </h1>

          {authMode === 'signup' && (
            <div style={{ marginBottom: '20px' }}>
              <label htmlFor="username" style={{ display: 'block', marginBottom: '8px', color: '#333' }}>
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="Enter your username"
                style={{
                  width: '100%',
                  padding: '12px',
                  fontSize: '16px',
                  borderRadius: '8px',
                  border: '2px solid #E041B1', // Theme color for input border
                  backgroundColor: '#FCE4F7', // Light pink background for input
                  color: 'black', // Black text color while typing
                  outline: 'none',
                  transition: 'border-color 0.3s ease',
                }}
                onFocus={(e) => (e.target.style.borderColor = '#B5BCFF')}
                onBlur={(e) => (e.target.style.borderColor = '#E041B1')}
                required
              />
            </div>
          )}

          <div style={{ marginBottom: '20px' }}>
            <label htmlFor="email" style={{ display: 'block', marginBottom: '8px', color: '#333' }}>
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              style={{
                width: '100%',
                padding: '12px',
                fontSize: '16px',
                borderRadius: '8px',
                border: '2px solid #E041B1',
                backgroundColor: '#FCE4F7',
                color: 'black', // Black text color while typing
                outline: 'none',
                transition: 'border-color 0.3s ease',
              }}
              onFocus={(e) => (e.target.style.borderColor = '#B5BCFF')}
              onBlur={(e) => (e.target.style.borderColor = '#E041B1')}
              required
            />
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label htmlFor="password" style={{ display: 'block', marginBottom: '8px', color: '#333' }}>
              Password
            </label>
            <div style={{ position: 'relative' }}>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                style={{
                  width: '100%',
                  padding: '12px',
                  fontSize: '16px',
                  borderRadius: '8px',
                  border: '2px solid #E041B1',
                  backgroundColor: '#FCE4F7',
                  color: 'black', // Black text color while typing
                  outline: 'none',
                  transition: 'border-color 0.3s ease',
                }}
                onFocus={(e) => (e.target.style.borderColor = '#B5BCFF')}
                onBlur={(e) => (e.target.style.borderColor = '#E041B1')}
                required
              />
              <span
                style={{
                  position: 'absolute',
                  top: '50%',
                  right: '10px',
                  transform: 'translateY(-50%)',
                }}
              >
                {formData.password ? <FaUnlock color="#E041B1" /> : <FaLock color="#E041B1" />}
              </span>
            </div>
          </div>

          <button
            type="submit"
            style={{
              background: 'linear-gradient(135deg, #B5BCFF, #E041B1)', // Gradient button
              color: 'white',
              border: 'none',
              padding: '12px 20px',
              borderRadius: '8px',
              fontSize: '16px',
              cursor: 'pointer',
              transition: 'opacity 0.3s ease',
              width: '100%',
            }}
            onMouseOver={(e) => (e.currentTarget.style.opacity = '0.9')}
            onMouseOut={(e) => (e.currentTarget.style.opacity = '1')}
          >
            {authMode === 'signup' ? 'Sign Up' : 'Login'}
          </button>

          <div style={{ textAlign: 'center', marginTop: '10px', fontSize: '14px', color: '#333' }}>
            {authMode === 'signup' ? (
              <p>
                Already have an account?{' '}
                <span
                  style={{ color: '#E041B1', cursor: 'pointer', fontWeight: 'bold' }}
                  onClick={() => setAuthMode('login')}
                >
                  Login
                </span>
              </p>
            ) : (
              <p>
                Don't have an account?{' '}
                <span
                  style={{ color: '#E041B1', cursor: 'pointer', fontWeight: 'bold' }}
                  onClick={() => setAuthMode('signup')}
                >
                  Signup
                </span>
              </p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default AuthForm;