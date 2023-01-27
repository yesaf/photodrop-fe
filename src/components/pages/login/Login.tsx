import React, { memo, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import authService from '../../../api/services/auth';
import { isLoggedIn } from '../../../utils/checkLoggedIn';


function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [clicked, setClicked] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (isLoggedIn()) {
            authService.checkToken().then((valid) => {
                if (valid) {
                    navigate('/albums');
                }
            });
        }
    }, []);

    const checkUsername = () => {
        const usernameRegex = /^[a-zA-Z_]+$/;
        return usernameRegex.test(username);
    };

    const handleLogin = () => {
        setClicked(true);
        if (username && password && checkUsername()) {
            authService.login(username, password)
                .then(() => {
                    navigate('/albums');
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    };

    const focusIdOnEnter = (id: string) => {
        return (e: React.KeyboardEvent<HTMLInputElement>) => {
            if (e.key === 'Enter') {
                document.getElementById(id)?.focus();
            }
        }
    };

    return (
        <LoginContainer>
            <input type="text" placeholder="Username"
                   id="username"
                   value={username}
                   onKeyPress={focusIdOnEnter('password')}
                   onChange={(e) => setUsername(e.target.value)}/>

            {
                !checkUsername() && username &&
                <p className="invalid-username error">Username must contain only letters and underscores</p>
            }

            <input type="password" placeholder="Password"
                   id="password"
                   value={password}
                   onKeyPress={focusIdOnEnter('login-button')}
                   onChange={(e) => setPassword(e.target.value)}/>

            <button onClick={handleLogin} id="login-button">
                Sign In
            </button>
            {
                (!username || !password) && clicked &&
                <p className="error">Both username and password are required</p>
            }
        </LoginContainer>
    );
}

const LoginContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 15vh;

  input {
    width: 20rem;
    font-size: 1.25rem;
    padding: 0.5rem 1rem;
    border-width: 1px;
    border-style: solid;
    border-color: #e0e0e0;
    border-radius: 0.5rem;
    margin-bottom: 1.5rem;

    &:focus {
      border-color: #2196f3;
    }
  }

  input[type="password"]:not(:placeholder-shown) {
    letter-spacing: 0.5rem;
  }

  .invalid-username {
    position: absolute;
    top: 2.25rem;
  }

  .error {
    font-size: 0.9rem;
    color: #f44336;
    margin-top: 0.5rem;
    margin-bottom: 0;
  }

  button {
    width: 22rem;
    font-size: 1.25rem;
    padding: 0.5rem;
    border-width: 1px;
    border-style: solid;
    border-color: #e0e0e0;
    border-radius: 1rem;
    background-color: #1e88e5;
    color: #fff;
    cursor: pointer;

    &:hover {
      background-color: #1565c0;
    }

    &:active {
      background-color: #0d47a1;
    }
  }
`;

export default memo(Login);
