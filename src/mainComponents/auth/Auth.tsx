import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaLock, FaUnlock } from 'react-icons/fa';
import axios from 'axios';
// @ts-ignore: Importing from a JavaScript file
import { BASE_URL } from '../../BASE_URL/BASE_URL';

const AuthForm = () => {
  const [authMode, setAuthMode] = useState('login');
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    const { email, password, username } = formData;
    setIsLoading(true);

    try {
      const response = await axios.post(`${BASE_URL}/auth/register`, {
        email,
        password,
        display_name: username,
      });
      alert(`Signup successful! Welcome, ${response.data.display_name}, please login to continue.`);
      setFormData({ username: '', email: '', password: '' });
      navigate('/');
    } catch (error) {
      const err = error as { response?: { data?: { detail?: { msg: string }[] } } };
      if (err.response && err.response.data && err.response.data.detail) {
        alert(`Error: ${err.response.data.detail[0].msg}`);
      } else {
        alert('An unexpected error occurred. Please try again.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const { email, password } = formData;
    setIsLoading(true);

    try {
      const response = await axios.post(
        `${BASE_URL}/auth/login`,
        {
          username: email,
          password: password,
        },
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        }
      );

      const { access_token, user } = response.data;
      localStorage.setItem('token', access_token);
      alert(`Welcome back, ${user.display_name}!`);
      navigate('/homepage');
    } catch (error) {
      const err = error as { response?: { data?: { detail?: { msg: string }[] } } };
      if (err.response && err.response.data && err.response.data.detail) {
        alert(`Error: ${err.response.data.detail[0].msg}`);
      } else {
        alert('Invalid credentials. Please try again.');
      }
    } finally {
      setIsLoading(false);
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
        <form onSubmit={authMode === 'signup' ? handleSignup : handleLogin} style={{ display: 'flex', flexDirection: 'column' }}>
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
            {isLoading ? (authMode === 'signup' ? 'Signing Up...' : 'Logging In...') : authMode === 'signup' ? 'Sign Up' : 'Login'}
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