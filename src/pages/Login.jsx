import { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import app from '../services/firebase.js';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setErrorMsg('');
    const auth = getAuth(app);

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/home');
    } catch (error) {
      if (error.code === 'auth/invalid-credential') {
        setErrorMsg('Please check your email and password.');
      } else {
        setErrorMsg('Something went wrong. Try again later.');
      }
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setEmail('');
    setPassword('');
    setErrorMsg('');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-96 px-6 py-6 text-left bg-white shadow-md rounded-lg">
        <h3 className="text-xl font-semibold text-center">Login</h3>
        <form onSubmit={handleSubmit}>
          <div className="mt-4">
            <label className="block text-sm font-medium" htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 mt-1 border rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
              required
            />
          </div>
          <div className="mt-4">
            <label className="block text-sm font-medium" htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 mt-1 border rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
              required
            />
          </div>

          {errorMsg && (
            <p className="mt-3 text-sm text-red-600 text-center">{errorMsg}</p>
          )}

          <div className="flex gap-3 mt-5">
            <button
              type="submit"
              disabled={loading}
              className={`flex-1 px-4 py-2 text-sm font-medium text-white rounded-md ${
                loading
                  ? 'bg-blue-400 cursor-not-allowed'
                  : 'bg-blue-600 hover:bg-blue-700'
              }`}
            >
              {loading ? 'Logging in...' : 'Login'}
            </button>
            <button
              type="button"
              onClick={handleReset}
              className="flex-1 px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300"
            >
              Reset
            </button>
          </div>
        </form>

        <p className="text-xs text-gray-500 mt-4 text-center">
          Test credentials → Email: <span className="font-medium">demo@gmail.com</span>, 
          Password: <span className="font-medium">Demo@1234</span>
        </p>
      </div>
    </div>
  );
};

export default Login;
