import React, { useEffect, useRef, useState } from 'react';
import interviewQuestions from '../data/questions'
import Progress from './Progress';
import { PulseLoader } from 'react-spinners';

const Interview = () => {
  const [text, setText] = useState('');
  const [qaPairs, setQaPairs] = useState([]); 
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showLoader, setShowLoader] = useState(false);
  const [progress, setProgress] = useState(0);
  const textareaRef = useRef(null);

  const questions = interviewQuestions;

  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = 'auto';
      textarea.style.height = textarea.scrollHeight + 'px';
    }
  }, [text]);

  useEffect(() => {
    if (questions.length && currentIndex === 0 && qaPairs.length === 0) {
      setQaPairs([{ type: 'question', content: questions[0].question }]);
    }
  }, [questions]);

  const handleSend = () => {
    if (!text.trim() || showLoader) return;

    const answer = text.trim();
    const nextIndex = currentIndex + 1;
    setQaPairs(prev => [...prev, { type: 'answer', content: answer }]);
    setText('');
    setShowLoader(true);

    setTimeout(() => {
      setShowLoader(false);
      if (nextIndex < questions.length) {
        setQaPairs(prev => [...prev, { type: 'question', content: questions[nextIndex].question }]);
        setCurrentIndex(nextIndex);
        setProgress(((nextIndex) / questions.length) * 100);
      } else {
        setProgress(100);
      }
    }, 3500);  
  }

  return (
    <div className="relative min-h-screen pb-24 px-4 sm:px-8 overflow-x-hidden">
      {/* <p className="text-2xl font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent mb-6">
        Interview For Category: {title}
      </p> */}

      <Progress progress={progress} />

      <div className="mt-6 space-y-4 w-full max-w-4xl px-2 sm:px-0">
  {qaPairs.map((item, index) => (
    <div
      key={index}
      className={`flex ${item.type === 'question' ? 'justify-start' : 'justify-end'}`}
    >
      <div
        className={`px-4 py-3 rounded-lg break-words whitespace-pre-wrap ${
          item.type === 'question'
            ? 'bg-gray-100 text-black'
            : 'bg-purple-100 text-black'
        } w-fit max-w-[90%] sm:max-w-[80%]`}
      >
     {item.content}
      </div>
    </div>
  ))}
   {showLoader && (
          <div className="flex items-center gap-2 px-4 py-3 bg-gray-100 rounded-lg w-fit">
            <PulseLoader size={8} color="#7e22ce" />
          </div>
        )}
</div>

      <div className="fixed bottom-4 right-0 w-[70%] flex items-end gap-2 z-50">
        <textarea
          ref={textareaRef}
          rows={1}
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type your response..."
          className="flex-grow px-4 py-3 rounded-xl border border-gray-600 bg-gradient-to-br from-gray-800 to-gray-900 text-white resize-none focus:outline-none focus:ring-2 focus:ring-purple-500 text-lg"
        />
        <button
          onClick={handleSend}
          className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-3 rounded-xl shadow transition duration-300"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Interview;
