import React, { useState, useCallback, useMemo } from 'react';
import {
  countCharactersWithSpaces,
  countCharactersWithoutSpaces,
  countWords,
  countSentences,
  countLines,
  calculateReadingTime,
  calculateSpeakingTime,
  getTopKeywords
} from '../utils/StringMath';

const MetricDisplay: React.FC<{ label: string; value: number | string }> = ({ label, value }) => (
  <div className="flex flex-col items-center justify-center bg-white/5 border border-white/10 p-4 rounded-xl shadow-lg backdrop-blur-md transition-transform hover:scale-105 duration-300">
    <span className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300 tracking-wider">
      {typeof value === 'number' ? value.toLocaleString() : value}
    </span>
    <span className="text-xs md:text-sm font-semibold text-indigo-200 uppercase mt-2 tracking-widest opacity-80">{label}</span>
  </div>
);

const ActionButton: React.FC<{ onClick: () => void; label: string; colorClass?: string }> = ({ onClick, label, colorClass = "bg-indigo-600 hover:bg-indigo-700" }) => (
  <button
    onClick={onClick}
    className={`px-3 py-1.5 md:px-4 md:py-2 ${colorClass} text-white text-xs md:text-sm rounded-lg transition-all duration-200 shadow-md font-medium`}
  >
    {label}
  </button>
);

const TextCounterTool: React.FC = () => {
  const [text, setText] = useState<string>('');
  const [copyNotification, setCopyNotification] = useState<boolean>(false);

  const handleTextChange = useCallback((event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  }, []);

  const handleClearText = useCallback(() => setText(''), []);

  const handleCopyText = useCallback(() => {
    if (text) {
      navigator.clipboard.writeText(text);
      setCopyNotification(true);
      setTimeout(() => setCopyNotification(false), 2000);
    }
  }, [text]);

  // Case Converters
  const transformText = (type: 'upper' | 'lower' | 'title' | 'sentence') => {
    let newText = text;
    if (type === 'upper') newText = text.toUpperCase();
    if (type === 'lower') newText = text.toLowerCase();
    if (type === 'title') {
      newText = text.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    }
    if (type === 'sentence') {
      newText = text.toLowerCase().replace(/(^\s*\w|[\.\!\?]\s*\w)/g, c => c.toUpperCase());
    }
    setText(newText);
  };

  const metrics = useMemo(() => {
    const wordCount = countWords(text);
    return {
      charactersWithSpaces: countCharactersWithSpaces(text),
      charactersWithoutSpaces: countCharactersWithoutSpaces(text),
      words: wordCount,
      sentences: countSentences(text),
      lines: countLines(text),
      readingTime: calculateReadingTime(wordCount),
      speakingTime: calculateSpeakingTime(wordCount),
      topKeywords: getTopKeywords(text),
    };
  }, [text]);

  return (
    <section id="counter-tool" className="relative mb-16 w-full max-w-6xl mx-auto">
      <div className="relative bg-gray-900/60 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl p-6 md:p-10 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-purple-600/20 rounded-full blur-3xl pointer-events-none animate-pulse-slow"></div>
        <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl pointer-events-none animate-pulse-slow"></div>

        <div className="text-center mb-8 relative z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-3 tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
              Doodax
            </span>
          </h1>
          <p className="text-lg text-indigo-200 max-w-2xl mx-auto">
            The ultimate real-time text analysis tool. Count words, characters, and optimize your content with powerful precision.
          </p>
        </div>
        
        {/* Main Input Area */}
        <div className="relative group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-30 group-hover:opacity-60 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative">
            <div className="flex flex-wrap gap-2 mb-2 justify-end px-2">
               <span className="text-xs text-indigo-300 mr-auto flex items-center">
                 {metrics.readingTime} • {metrics.speakingTime}
               </span>
               <ActionButton onClick={() => transformText('upper')} label="UPPERCASE" colorClass="bg-gray-700 hover:bg-gray-600" />
               <ActionButton onClick={() => transformText('lower')} label="lowercase" colorClass="bg-gray-700 hover:bg-gray-600" />
               <ActionButton onClick={() => transformText('title')} label="Title Case" colorClass="bg-gray-700 hover:bg-gray-600" />
               <ActionButton onClick={() => transformText('sentence')} label="Sentence case" colorClass="bg-gray-700 hover:bg-gray-600" />
            </div>
            <textarea
              value={text}
              onChange={handleTextChange}
              className="w-full h-80 p-6 bg-gray-900/80 text-gray-100 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 placeholder-gray-500 resize-y text-lg leading-relaxed shadow-inner"
              placeholder="Start typing or paste your text here to begin analysis..."
            />
            <div className="absolute bottom-4 right-4 flex space-x-3">
              <button
                onClick={handleCopyText}
                className="px-5 py-2 bg-green-600 hover:bg-green-700 text-white rounded-full shadow-lg transition-all duration-200 font-bold flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={!text}
              >
                <span>Copy</span>
              </button>
              <button
                onClick={handleClearText}
                className="px-5 py-2 bg-red-600 hover:bg-red-700 text-white rounded-full shadow-lg transition-all duration-200 font-bold disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={!text}
              >
                Clear
              </button>
            </div>
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 relative z-10">
          <MetricDisplay label="Characters" value={metrics.charactersWithSpaces} />
          <MetricDisplay label="No Spaces" value={metrics.charactersWithoutSpaces} />
          <MetricDisplay label="Words" value={metrics.words} />
          <MetricDisplay label="Sentences" value={metrics.sentences} />
          <MetricDisplay label="Lines" value={metrics.lines} />
        </div>

        {/* Keyword Density (Show only if text exists) */}
        {metrics.topKeywords.length > 0 && (
          <div className="mt-8 pt-6 border-t border-white/10">
            <h3 className="text-indigo-200 text-sm font-semibold uppercase mb-4 tracking-wider">Top Keywords</h3>
            <div className="flex flex-wrap gap-3">
              {metrics.topKeywords.map((kw, idx) => (
                <div key={idx} className="bg-indigo-900/40 border border-indigo-500/30 px-3 py-1 rounded-full text-sm text-indigo-100">
                  <span className="font-bold text-white">{kw.word}</span> <span className="opacity-70 text-xs">({kw.count})</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      
      {/* Toast Notification */}
      <div className={`fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 bg-green-500 text-white py-3 px-6 rounded-full shadow-2xl transition-all duration-300 ${copyNotification ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <span className="flex items-center gap-2 font-bold">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
          Text copied successfully!
        </span>
      </div>
    </section>
  );
};

export default TextCounterTool;