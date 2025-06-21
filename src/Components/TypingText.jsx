import { Typewriter } from 'react-simple-typewriter';
import 'react-simple-typewriter/dist/index.js';

const TypingText = () => {
    return (
        <span className="text-cyan-400">
      <Typewriter
          words={['Cybersecurity Analyst', 'Full Stack Developer']}
          loop={true}
          cursor
          cursorStyle="|"
          typeSpeed={80}
          deleteSpeed={50}
          delaySpeed={2000}
      />
    </span>
    );
};

export default TypingText;
