import React, { useState } from 'react';
import logo from './assets/logo.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>Hello Vart!</p>
        <p>
          <button type='button' onClick={() => setCount((ctn) => ctn + 1)}>
            count is:
            {' '}
            {count}
          </button>
        </p>
        <p>
          Edit
          {' '}
          <code>App.tsx</code>
          {' '}
          and save to test HMR updates.
        </p>
        <p>
          <a
            className='App-link'
            href='https://vitejs.dev/guide/features.html'
            target='_blank'
            rel='noopener noreferrer'
          >
            Vite
          </a>
          {' | '}
          <a
            className='App-link'
            href='https://github.com/iamturns/eslint-config-airbnb-typescript'
            target='_blank'
            rel='noopener noreferrer'
          >
            Airbnb eslint
          </a>
          {' | '}
          <a
            className='App-link'
            href='https://reactjs.org'
            target='_blank'
            rel='noopener noreferrer'
          >
            React
          </a>
          {' | '}
          <a
            className='App-link'
            href='https://www.typescriptlang.org/docs/handbook/'
            target='_blank'
            rel='noopener noreferrer'
          >
            Typescript
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
