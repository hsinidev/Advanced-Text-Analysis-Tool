import React from 'react';
import ThemeLayout from './components/ThemeLayout';
import TextCounterTool from './components/TextCounterTool';
import SeoArticle from './utils/SeoArticle';

const App: React.FC = () => {
  return (
    <ThemeLayout>
      <div className="container mx-auto px-4 py-8 md:py-12 max-w-5xl">
        <TextCounterTool />
        <SeoArticle />
      </div>
    </ThemeLayout>
  );
};

export default App;
