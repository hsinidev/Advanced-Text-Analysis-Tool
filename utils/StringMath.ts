
export const countCharactersWithSpaces = (text: string): number => {
  return text.length;
};

export const countCharactersWithoutSpaces = (text: string): number => {
  return text.replace(/\s/g, '').length;
};

export const countWords = (text: string): number => {
  if (text.trim() === '') {
    return 0;
  }
  return text.trim().split(/\s+/).length;
};

export const countSentences = (text: string): number => {
  if (text.trim() === '') {
    return 0;
  }
  const sentences = text.match(/[^\.!\?]+[\.!\?]+/g);
  return sentences ? sentences.length : 0;
};

export const countLines = (text: string): number => {
  if (text === '') {
    return 0;
  }
  return text.split(/\r\n|\r|\n/).length;
};

export const calculateReadingTime = (wordCount: number): string => {
  const wordsPerMinute = 200;
  const minutes = Math.ceil(wordCount / wordsPerMinute);
  return `${minutes} min read`;
};

export const calculateSpeakingTime = (wordCount: number): string => {
  const wordsPerMinute = 130;
  const minutes = Math.ceil(wordCount / wordsPerMinute);
  return `${minutes} min speech`;
};

export const getTopKeywords = (text: string): { word: string; count: number }[] => {
  if (!text.trim()) return [];
  
  const words = text.toLowerCase().match(/\b\w+\b/g);
  if (!words) return [];

  const frequency: Record<string, number> = {};
  const stopWords = new Set(['the', 'and', 'to', 'of', 'a', 'in', 'is', 'that', 'for', 'it', 'as', 'was', 'with', 'on', 'at', 'by', 'an', 'be', 'this', 'which', 'or', 'but', 'not', 'are', 'from', 'they']);

  words.forEach(word => {
    if (!stopWords.has(word) && word.length > 2) {
      frequency[word] = (frequency[word] || 0) + 1;
    }
  });

  return Object.entries(frequency)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 5)
    .map(([word, count]) => ({ word, count }));
};
