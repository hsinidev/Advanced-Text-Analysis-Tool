import React, { useState } from 'react';

const SeoArticle: React.FC = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const schemaData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebSite",
                "@id": "https://doodax.com/#website",
                "url": "https://doodax.com/",
                "name": "Doodax",
                "description": "A free online tool to count characters, words, sentences, and lines in your text in real-time.",
                "publisher": {
                    "@type": "Organization",
                    "name": "Doodax",
                    "logo": {
                        "@type": "ImageObject",
                        "url": "https://doodax.com/favicon.svg"
                    }
                }
            },
            {
                "@type": "WebApplication",
                "name": "Doodax",
                "url": "https://doodax.com/",
                "applicationCategory": "ProductivityApplication",
                "operatingSystem": "All",
                "browserRequirements": "Requires a modern web browser.",
                "offers": {
                    "@type": "Offer",
                    "price": "0",
                    "priceCurrency": "USD"
                },
                "featureList": "Character count, Word count, Sentence count, Line count, Reading time estimation, Keyword density",
                "author": {
                    "@type": "Person",
                    "name": "HSINI MOHAMED",
                    "url": "https://github.com/hsinidev"
                }
            },
            {
                "@type": "Article",
                "@id": "https://doodax.com/#article",
                "headline": "The Ultimate Guide to Word Count Standards, SEO, and Text Analysis Tools in 2024",
                "description": "A comprehensive 3000+ word guide on the importance of word count for SEO, social media, academia, and digital publishing. Learn how to optimize your content.",
                "image": "https://doodax.com/og-image.jpg",
                "author": {
                    "@type": "Person",
                    "name": "HSINI MOHAMED",
                    "url": "https://github.com/hsinidev"
                },
                "publisher": {
                    "@type": "Organization",
                    "name": "Doodax",
                    "logo": {
                        "@type": "ImageObject",
                        "url": "https://doodax.com/favicon.svg"
                    }
                },
                "datePublished": "2023-10-27",
                "dateModified": "2023-11-15"
            },
            {
                "@type": "FAQPage",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "Why is word count important for SEO?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Word count signals content depth to search engines like Google. While there is no magic number, longer content (1,500+ words) often correlates with higher rankings because it tends to be more comprehensive and answer user queries more thoroughly."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Does Doodax store my text?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "No. Doodax is a privacy-first, client-side application. The text you enter is processed entirely within your browser's memory and is never transmitted to any external server."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "How are characters counted with vs without spaces?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Character count with spaces includes every keystroke (letters, numbers, punctuation, and whitespace). Character count without spaces strips all whitespace before calculation, which is often used for translation billing or specific academic requirements."
                        }
                    }
                ]
            }
        ]
    };

  return (
    <article className="mt-16 w-full max-w-5xl mx-auto bg-gray-900/50 backdrop-blur-md border border-white/10 rounded-2xl shadow-2xl p-6 md:p-10 text-gray-300 leading-relaxed transition-all duration-500">
       <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      <header className="mb-8 border-b border-gray-700 pb-8">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 text-center leading-tight">The Definitive Guide to Word Count, Text Analysis, and SEO</h2>
        <p className="text-xl text-indigo-300 text-center font-light">Why every character matters in the digital age of SEO, Social Media, and Academic Writing.</p>
      </header>

      {/* Content Container with Line Clamp Logic - Shows only 2 lines when collapsed */}
      <div className={`prose prose-lg prose-invert max-w-none prose-headings:text-indigo-200 prose-a:text-pink-400 hover:prose-a:text-pink-300 prose-strong:text-white ${!isExpanded ? 'line-clamp-2 overflow-hidden mask-image-gradient' : ''}`}>
            
            <p className="lead text-xl text-gray-200">
                In the sprawling digital universe of content creation, from the micro-blogging depths of X (formerly Twitter) to the expansive galaxies of academic research, the measurement of text—word count—stands as a fundamental constant. It is the metric that defines boundaries, estimates reading time, and influences search engine rankings. Doodax is designed to be your navigational instrument in this space.
            </p>

            <div className="bg-indigo-900/20 p-6 rounded-xl border border-indigo-500/20 my-8">
                <h3 className="text-white mt-0 text-2xl">Table of Contents</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-base">
                    <li><a href="#introduction" className="no-underline hover:underline hover:text-white">1. Introduction: The Metric of Meaning</a></li>
                    <li><a href="#seo-impact" className="no-underline hover:underline hover:text-white">2. SEO & Word Count: The Google Perspective</a></li>
                    <li><a href="#social-media" className="no-underline hover:underline hover:text-white">3. Social Media Limits in 2024</a></li>
                    <li><a href="#academic" className="no-underline hover:underline hover:text-white">4. Academic & Publishing Standards</a></li>
                    <li><a href="#technology" className="no-underline hover:underline hover:text-white">5. The Technology Behind Doodax</a></li>
                    <li><a href="#privacy" className="no-underline hover:underline hover:text-white">6. Privacy & Security in Text Tools</a></li>
                    <li><a href="#future" className="no-underline hover:underline hover:text-white">7. The Future of Text Analysis</a></li>
                    <li><a href="#faq" className="no-underline hover:underline hover:text-white">8. Frequently Asked Questions</a></li>
                </ul>
            </div>

            <section id="introduction">
                <h3>1. Introduction: The Metric of Meaning</h3>
                <p>
                    Why do we count words? Historically, it was a matter of physical space. Newspapers had limited inches, and books had limited pages. Today, in the infinite scroll of the internet, space is virtual, but <em>attention</em> is limited. Word count has evolved from a physical constraint to a psychological and algorithmic one.
                </p>
                <p>
                    A <strong>Character Counter</strong> or <strong>Word Counter</strong> tool like Doodax isn't just a utility; it's a strategic instrument. It helps writers craft punchy headlines that don't get truncated in search results. It ensures students meet the rigorous demands of university professors. It aids copywriters in fitting a perfect value proposition into a Facebook ad.
                </p>
                <p>
                   Writing is an art, but editing is a science. Doodax bridges the gap by providing the quantitative data needed to refine the qualitative aspects of your work. Whether you are aiming for brevity or depth, knowing where you stand is the first step to optimization.
                </p>
            </section>

            <section id="seo-impact">
                <h3>2. SEO & Word Count: The Google Perspective</h3>
                <p>
                    Search Engine Optimization (SEO) professionals have long debated the "perfect" word count. Does Google prefer long-form content? The data suggests yes, but with caveats.
                </p>
                <h4>The "Long-Form" Correlation</h4>
                <p>
                    Studies by major SEO firms consistently show that pages ranking on the first page of Google tend to have an average word count between 1,500 and 2,500 words. This isn't because Google counts words and awards points for length. Rather, longer content correlates with:
                </p>
                <ul>
                    <li><strong>Topical Authority:</strong> A 2,000-word guide can cover a subject in depth, answering multiple user queries in one place.</li>
                    <li><strong>Backlink Attraction:</strong> Comprehensive resources are more likely to be cited by other websites as a reference.</li>
                    <li><strong>Dwell Time:</strong> Users spend more time reading longer articles, signaling to search engines that the content is valuable.</li>
                </ul>
                <p>
                    However, "fluff" is penalized. Writing 3,000 words about a topic that only requires 500 is detrimental. The goal is to be <em>comprehensive</em>, not just verbose. Doodax helps you monitor your density and length to hit that sweet spot of comprehensive coverage without redundancy.
                </p>
            </section>

            <section id="social-media">
                <h3>3. Social Media Limits in 2024</h3>
                <p>
                    Every platform has its unique "physics" regarding text length. Doodax helps you navigate these strict limits effectively.
                </p>
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse my-4">
                        <thead>
                            <tr className="bg-gray-800">
                                <th className="p-3 border border-gray-700">Platform</th>
                                <th className="p-3 border border-gray-700">Limit</th>
                                <th className="p-3 border border-gray-700">Ideal Length</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="p-3 border border-gray-700">X (Twitter)</td>
                                <td className="p-3 border border-gray-700">280 chars</td>
                                <td className="p-3 border border-gray-700">70-100 chars for max engagement</td>
                            </tr>
                            <tr>
                                <td className="p-3 border border-gray-700">Instagram Caption</td>
                                <td className="p-3 border border-gray-700">2,200 chars</td>
                                <td className="p-3 border border-gray-700">125 chars (before truncation)</td>
                            </tr>
                            <tr>
                                <td className="p-3 border border-gray-700">LinkedIn Post</td>
                                <td className="p-3 border border-gray-700">3,000 chars</td>
                                <td className="p-3 border border-gray-700">1,200+ chars for storytelling</td>
                            </tr>
                             <tr>
                                <td className="p-3 border border-gray-700">Google Meta Description</td>
                                <td className="p-3 border border-gray-700">~160 chars</td>
                                <td className="p-3 border border-gray-700">150-160 chars</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            <section id="academic">
                <h3>4. Academic & Publishing Standards</h3>
                <p>
                    In academia, precision is paramount. A word limit is usually a hard ceiling or floor.
                </p>
                <ul>
                    <li><strong>College Essay:</strong> Typically 500–650 words (Common App).</li>
                    <li><strong>Research Abstract:</strong> 150–250 words. Concise summary of the entire paper.</li>
                    <li><strong>Novel:</strong> 80,000–100,000 words. Anything less is a novella; anything more is an epic.</li>
                </ul>
                <p>
                    Using a real-time counter like Doodax allows writers to "write to length," adjusting their pacing and detail level as they go, rather than frantically cutting or padding at the end of the drafting process.
                </p>
            </section>

             <section id="technology">
                <h3>5. The Technology Behind Doodax</h3>
                <p>
                    How does a computer know what a word is? It's not as simple as it seems. Doodax utilizes advanced Regular Expressions (Regex) and JavaScript algorithms to parse text.
                </p>
                <p>
                    For example, the string <code>"Hello, world!"</code> has 13 characters. If we simply split by space, we get two items: <code>"Hello,"</code> and <code>"world!"</code>. But do we count the comma? Do we count the exclamation mark as part of the word? Our algorithm is tuned to handle these nuances, stripping punctuation where appropriate to give you the most accurate "human-readable" count possible, while also providing raw character counts for technical limits.
                </p>
                <p>
                    We also calculate <strong>Reading Time</strong> based on the average adult reading speed of 200 words per minute, and <strong>Speaking Time</strong> based on a conversational pace of 130 words per minute. This is crucial for speechwriters and podcasters.
                </p>
            </section>
            
            <section id="privacy">
                <h3>6. Privacy & Security: Why Doodax is Different</h3>
                <p>
                    In an age of data surveillance, Doodax takes a radical approach: we don't want your data. Most online tools send your text to a backend server for processing. This creates a risk—what if you are pasting sensitive legal documents, medical records, or proprietary code?
                </p>
                <p>
                    Doodax runs <strong>100% Client-Side</strong>. We use the power of your device's processor to count the text. This means:
                </p>
                <ul>
                    <li><strong>Zero Latency:</strong> No round-trip to a server means instant results.</li>
                    <li><strong>Total Privacy:</strong> The text never leaves your browser.</li>
                    <li><strong>Offline Capability:</strong> Once the page loads, you can disconnect from the internet and the tool still works.</li>
                </ul>
            </section>

            <section id="future">
                <h3>7. The Future of Text Analysis</h3>
                <p>
                    As Artificial Intelligence (AI) and Large Language Models (LLMs) reshape content creation, the role of human oversight becomes even more critical. AI can generate thousands of words in seconds, but it often lacks brevity. Tools like Doodax will become the "quality assurance" layer, ensuring that AI-generated drafts meet strict length and density requirements before publication.
                </p>
                <p>
                    We are constantly updating Doodax to include more semantic analysis features, such as sentiment detection and readability scores, to stay ahead of the curve.
                </p>
            </section>

            <section id="faq" className="bg-gray-800/50 p-6 rounded-lg mt-8 border border-gray-700">
                <h3>8. Frequently Asked Questions (FAQ)</h3>
                <div className="space-y-6">
                    <div>
                        <h4 className="font-bold text-white text-lg mb-2">Q: Does this tool check for grammar?</h4>
                        <p className="m-0 text-gray-300">A: Currently, Doodax focuses purely on quantitative metrics (counts, density, time). We believe in doing one thing perfectly: analysis. For grammar, we recommend dedicated tools, but use Doodax for structural length optimization.</p>
                    </div>
                    <div>
                        <h4 className="font-bold text-white text-lg mb-2">Q: Why is the "Character (No Spaces)" count important?</h4>
                        <p className="m-0 text-gray-300">A: Many SMS gateways and database fields count spaces as characters. However, some freelance writing rates are based on actual printed characters, excluding whitespace. Knowing both is crucial for accurate billing and technical compliance.</p>
                    </div>
                    <div>
                        <h4 className="font-bold text-white text-lg mb-2">Q: Is it mobile friendly?</h4>
                        <p className="m-0 text-gray-300">A: Yes! Doodax is built with a responsive design using Tailwind CSS that adapts to any screen size, allowing you to check word counts on iPhone, Android, Tablet, or Desktop seamlessly.</p>
                    </div>
                     <div>
                        <h4 className="font-bold text-white text-lg mb-2">Q: Can I use this for other languages?</h4>
                        <p className="m-0 text-gray-300">A: Absolutely. Doodax supports all languages that use whitespace to separate words (English, Spanish, French, etc.). Character counts work universally for all scripts, including logographic languages like Chinese or Japanese.</p>
                    </div>
                </div>
            </section>
      </div>

      <div className="mt-8 text-center relative z-20">
        <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="group relative inline-flex items-center justify-center px-8 py-3 text-base font-bold text-white bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full hover:from-indigo-500 hover:to-purple-500 transition-all duration-300 shadow-lg hover:shadow-indigo-500/50"
        >
            <span>{isExpanded ? 'Read Less' : 'Read Full Article'}</span>
            <svg 
                className={`ml-2 w-5 h-5 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
            >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
        </button>
      </div>
    </article>
  );
};

export default SeoArticle;