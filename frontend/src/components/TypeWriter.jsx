 make import { TypeAnimation } from 'react-type-animation';

export default function TypeWriter({ text, speed = 50 }) {
  return (
    <TypeAnimation
      sequence={[text, 500]}
      wrapper="span"
      speed={speed}
      style={{ fontSize: 'inherit', fontWeight: 'inherit' }}
      repeat={0}
    />
  );
}
