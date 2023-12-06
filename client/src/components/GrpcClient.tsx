import React from 'react';
import { Hello } from '../../generated/hello';

interface MyComponentProps {
  helloMessage: string;
}

const MyComponent: React.FC<MyComponentProps> = ({ helloMessage }) => {
  const helloData: Hello = {
    message: helloMessage,
  };

  const encodedHello: Uint8Array = Hello.encode(helloData).finish();

  const decodedHello: Hello = Hello.decode(encodedHello);

  console.log('Decoded Hello Message:', decodedHello);

  return (
    <div>
      <p>{helloMessage}</p>
    </div>
  );
};

export default MyComponent;
