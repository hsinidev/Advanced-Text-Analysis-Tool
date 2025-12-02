import React, { useState, ReactNode, useEffect, useMemo } from 'react';

interface ModalProps {
  title: string;
  onClose: () => void;
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ title, onClose, children }) => {
  // Prevent body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = 'unset'; };
  }, []);

  return (
    <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-[100] backdrop-blur-md p-4 animate-fadeIn">
      <div className="bg-gray-900 text-white border border-indigo-500/50 rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col relative overflow-hidden ring-1 ring-white/10">
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-gray-700 bg-gray-900/95 z-10">
          <h2 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">{title}</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors p-2 rounded-full hover:bg-gray-800">
             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
          </button>
        </div>
        {/* Content */}
        <div className="p-6 md:p-10 overflow-y-auto prose prose-invert prose-indigo max-w-none custom-scrollbar">
          {children}
        </div>
      </div>
    </div>
  );
};


const ThemeLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const openModal = (modalName: string) => setActiveModal(modalName);
  const closeModal = () => setActiveModal(null);

  const modalLinks = ["About", "Contact", "Guide", "Privacy Policy", "Terms of Service", "DMCA"];

  // Generate stars for background
  const stars = useMemo(() => {
    return Array.from({ length: 50 }).map((_, i) => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: `${Math.random() * 3 + 1}px`,
      duration: `${Math.random() * 3 + 2}s`,
      opacity: Math.random()
    }));
  }, []);

  const getModalContent = (modalName: string) => {
    switch (modalName) {
      case "About":
        return (
          <div className="space-y-4">
            <p className="lead text-lg"><strong>Doodax</strong> is a state-of-the-art, real-time text analysis platform designed to help writers, students, SEO professionals, and developers optimize their content efficiency.</p>
            <p>Our mission is to provide a distraction-free, privacy-focused environment where you can analyze your text without sending a single byte of data to a server. We believe in the power of pure, client-side processing to ensure speed and security.</p>
            <h3>Why Doodax?</h3>
            <ul className="list-disc pl-5 space-y-2">
                <li><strong>Instant Analysis:</strong> No loading times, no server lag.</li>
                <li><strong>Privacy First:</strong> Your text never leaves your browser.</li>
                <li><strong>Aesthetically Pleasing:</strong> A unique cosmic theme to inspire creativity.</li>
                <li><strong>Feature Rich:</strong> Character, word, sentence, and line counts, plus reading time and keyword density.</li>
            </ul>
            <p className="mt-4 pt-4 border-t border-gray-700">Developed with ❤️ by <a href="https://github.com/hsinidev" target="_blank" rel="noopener noreferrer" className="text-pink-400 hover:underline">HSINI MOHAMED</a>.</p>
          </div>
        );
      case "Contact":
        return (
          <div className="space-y-4">
            <p>We value your feedback and are here to assist with any inquiries regarding Doodax.</p>
            
            <div className="bg-indigo-900/20 p-6 rounded-lg border border-indigo-500/30 my-6">
                <h3 className="text-xl font-bold text-white mb-4">Contact Information</h3>
                <div className="space-y-3">
                    <p className="flex items-center">
                        <span className="font-semibold w-24 text-indigo-300">Email:</span>
                        <a href="mailto:hsini.web@gmail.com" className="text-white hover:text-pink-400 transition-colors">hsini.web@gmail.com</a>
                    </p>
                    <p className="flex items-center">
                        <span className="font-semibold w-24 text-indigo-300">Website:</span>
                        <a href="https://doodax.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-pink-400 transition-colors">doodax.com</a>
                    </p>
                </div>
            </div>
            
            <p>For support, bug reports, or feature requests, please email us directly. We aim to respond to all inquiries within 24-48 hours.</p>
          </div>
        );
      case "Guide":
        return (
            <div className="space-y-4">
                <h3>User Manual</h3>
                <p>Welcome to Doodax. Here is how to get the most out of this tool:</p>
                <ol className="list-decimal pl-5 space-y-2">
                    <li><strong>Input Text:</strong> Simply type or paste your content into the main text area.</li>
                    <li><strong>Live Metrics:</strong> Watch as the dashboard instantly updates to show Character, Word, Sentence, and Line counts.</li>
                    <li><strong>Advanced Analysis:</strong> View estimated Reading and Speaking times at the top of the input box.</li>
                    <li><strong>Text Transformation:</strong> Use the buttons (UPPER, lower, Title Case) to instantly format your text.</li>
                    <li><strong>Keyword Density:</strong> Scroll down to see the top 5 most frequently used words in your text.</li>
                    <li><strong>Copy/Clear:</strong> Use the floating action buttons to copy your text to clipboard or clear the field instantly.</li>
                </ol>
            </div>
        );
      case "Privacy Policy":
        return (
          <div className="space-y-4 text-sm md:text-base">
            <p className="text-gray-400"><strong>Last Updated: October 27, 2023</strong></p>
            <p>At Doodax, accessible from doodax.com, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Doodax and how we use it.</p>
            
            <h4>1. Information Collection and Use</h4>
            <p>Doodax operates as a <strong>client-side application</strong>. This means that when you use our word counter tool:</p>
            <ul>
                <li><strong>No Data Transmission:</strong> The text you type or paste is processed entirely within your web browser's memory (RAM). It is NEVER sent to our servers or any third-party servers.</li>
                <li><strong>No Storage:</strong> We do not store your text in any database. Once you close your browser tab or refresh the page, your input is permanently cleared.</li>
            </ul>
            
            <h4>2. Log Files</h4>
            <p>Like any other website, Doodax uses standard log files. These files log visitors when they visit websites. The information collected includes internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users' movement on the website, and gathering demographic information.</p>
            
            <h4>3. Cookies and Web Beacons</h4>
            <p>Doodax does not use cookies for tracking or advertising purposes. We may use local storage (a modern alternative to cookies) solely to remember user interface preferences (such as light/dark mode if applicable), which remains strictly on your device.</p>
            
            <h4>4. Third Party Privacy Policies</h4>
            <p>Our Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options.</p>
            
            <h4>5. GDPR Data Protection Rights</h4>
            <p>We would like to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following:</p>
            <ul className="list-disc pl-5">
                <li>The right to access – You have the right to request copies of your personal data.</li>
                <li>The right to rectification – You have the right to request that we correct any information you believe is inaccurate.</li>
                <li>The right to erasure – You have the right to request that we erase your personal data, under certain conditions.</li>
            </ul>
            <p>Since we do not collect personal data, these rights are automatically satisfied by our design.</p>

             <h4>6. CCPA Privacy Rights (Do Not Sell My Personal Information)</h4>
            <p>Under the CCPA, among other rights, California consumers have the right to request that a business that collects a consumer's personal data disclose the categories and specific pieces of personal data that a business has collected about consumers. Doodax does not sell, trade, or otherwise transfer to outside parties your Personally Identifiable Information.</p>

            <h4>7. Children's Information</h4>
            <p>Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity. Doodax does not knowingly collect any Personal Identifiable Information from children under the age of 13.</p>

            <h4>8. Consent</h4>
            <p>By using our website, you hereby consent to our Privacy Policy and agree to its terms.</p>
          </div>
        );
      case "Terms of Service":
        return (
          <div className="space-y-4 text-sm md:text-base">
            <p className="text-gray-400"><strong>Terms and Conditions</strong></p>
            <p>Welcome to Doodax!</p>
            
            <h4>1. Acceptance of Terms</h4>
            <p>By accessing this website we assume you accept these terms and conditions. Do not continue to use Doodax if you do not agree to take all of the terms and conditions stated on this page.</p>
            
            <h4>2. License</h4>
            <p>Unless otherwise stated, Doodax and/or its licensors own the intellectual property rights for all material on Doodax. All intellectual property rights are reserved. You may access this from Doodax for your own personal use subjected to restrictions set in these terms and conditions.</p>
            <p>You must not:</p>
            <ul className="list-disc pl-5">
                <li>Republish material from Doodax</li>
                <li>Sell, rent or sub-license material from Doodax</li>
                <li>Reproduce, duplicate or copy material from Doodax</li>
                <li>Redistribute content from Doodax</li>
            </ul>

            <h4>3. User Content & Liability</h4>
            <p>Doodax is a tool. We are not responsible for the content you process using our tool. You retain full ownership and responsibility for any text you analyze. We do not monitor, store, or claim rights to your input.</p>
            
            <h4>4. Disclaimer</h4>
            <p>The materials on Doodax's website are provided on an 'as is' basis. Doodax makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>
            
            <h4>5. Limitations</h4>
            <p>In no event shall Doodax or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Doodax's website, even if Doodax or a Doodax authorized representative has been notified orally or in writing of the possibility of such damage.</p>
            
             <h4>6. Governing Law</h4>
            <p>These terms and conditions are governed by and construed in accordance with the laws and you irrevocably submit to the exclusive jurisdiction of the courts in that location.</p>
          </div>
        );
      case "DMCA":
        return (
          <div className="space-y-4">
            <p><strong>Digital Millennium Copyright Act Notice</strong></p>
            <p>Doodax respects the intellectual property rights of others. Per the DMCA, Doodax will respond expeditiously to claims of copyright infringement on the Site if submitted to Doodax's Copyright Agent as described below.</p>
            <p>Because Doodax is a text analysis tool that does not store user data, it is highly unlikely to host infringing content. However, if you believe that your intellectual property rights have been violated by Doodax or by a third party who has uploaded materials to our website, please provide the following information:</p>
            <ul className="list-disc pl-5">
                <li>A description of the copyrighted work or other intellectual property that you claim has been infringed;</li>
                <li>A description of where the material that you claim is infringing is located on the Site;</li>
                <li>An address, telephone number, and email address where we can contact you;</li>
                <li>A statement that you have a good-faith belief that the use is not authorized by the copyright owner or other intellectual property rights owner, by its agent, or by law.</li>
                <li>A statement by you, made under penalty of perjury, that the above information in your notice is accurate and that you are the copyright or intellectual property owner or authorized to act on the copyright or intellectual property owner's behalf.</li>
            </ul>
            <p className="mt-4">Please contact our designated agent at: <a href="mailto:hsini.web@gmail.com" className="text-indigo-400">hsini.web@gmail.com</a></p>
          </div>
        );
      default:
        return null;
    }
  };


  return (
    <div className="relative min-h-screen text-gray-200 font-sans flex flex-col">
      {/* Enhanced Animated Background */}
      <div className="fixed inset-0 -z-10 bg-[#050505] overflow-hidden">
        {/* Static Noise */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 brightness-100 contrast-150"></div>
        
        {/* Starfield */}
        <div className="stars-container">
          {stars.map((star, i) => (
             <div 
               key={i} 
               className="star" 
               style={{
                 left: star.left,
                 top: star.top,
                 width: star.size,
                 height: star.size,
                 '--duration': star.duration,
                 '--opacity': star.opacity
               } as React.CSSProperties}
             ></div>
          ))}
        </div>

        {/* Nebula Orbs */}
        <div className="absolute top-0 -left-4 w-[800px] h-[800px] bg-purple-600/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full mix-blend-screen filter blur-[120px] animate-pulse-slow"></div>
        <div className="absolute -bottom-8 right-0 w-[800px] h-[800px] bg-pink-600/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-4000"></div>
      </div>
      
      {/* Header */}
      <header className="sticky top-0 bg-gray-900/60 backdrop-blur-md border-b border-white/5 z-40 transition-all duration-300">
        <nav className="container mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center">
          <div className="text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 mb-4 md:mb-0 cursor-pointer tracking-tighter" onClick={() => window.location.reload()}>
            DOODAX
          </div>
          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {modalLinks.map(link => (
              <li key={link}>
                <button 
                  onClick={() => openModal(link)} 
                  className="text-sm font-medium text-gray-400 hover:text-white transition-colors hover:scale-105 transform duration-200 relative group"
                >
                  {link}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-500 transition-all group-hover:w-full"></span>
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-center p-4">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-black/80 backdrop-blur-lg border-t border-white/5 py-10 mt-12 relative z-10">
        <div className="container mx-auto px-4 text-center">
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8 text-sm text-gray-500">
            <p>
              &copy; {new Date().getFullYear()} Doodax. All rights reserved.
            </p>
            <div className="flex items-center space-x-2">
              <span>Powered by</span>
              <a 
                href="https://github.com/hsinidev" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-pink-400 hover:opacity-80 transition-opacity"
              >
                HSINI MOHAMED
              </a>
            </div>
            <div className="flex space-x-4">
               <a href="https://doodax.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">doodax.com</a>
            </div>
          </div>
        </div>
      </footer>
      
      {/* Modal Render */}
      {activeModal && (
        <Modal title={activeModal} onClose={closeModal}>
          {getModalContent(activeModal)}
        </Modal>
      )}
    </div>
  );
};

export default ThemeLayout;