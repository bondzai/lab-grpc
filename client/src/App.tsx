import React from 'react';
import GrpcClient from './components/GrpcClient';

const App: React.FC = () => {
  return (
    <div>
      <h1>React gRPC Client</h1>
      <GrpcClient />
    </div>
  );
};

export default App;
