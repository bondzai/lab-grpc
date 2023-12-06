import React from 'react';
import MyComponent from './components/GrpcClient';

const App: React.FC = () => {
  return (
    <div>
      <h1>grpc</h1>
      <MyComponent helloMessage="Hello, World!" />
    </div>
  );
};

export default App;
