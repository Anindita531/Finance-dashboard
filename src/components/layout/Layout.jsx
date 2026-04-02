import { useState, useEffect } from "react";

const Layout = ({ children }) => {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    // Tailwind setup-e 'darkMode: class' thakle eta html tag-e class add korbe
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  return (
    /* 1. 'w-full' ar 'min-h-screen' ensure  no background gap  .
      2. 'transition-colors' add for   No  'blink' while  white  -> dark  .
    */
    <div className="min-h-screen w-full bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300">
      
      {/* Mobile view- padding adjust  (p-4 sm:p-8) */}
      <div className="max-w-7xl mx-auto p-4 sm:p-8">
        
        <div className="flex justify-center mb-6">
          <button 
            onClick={() => setDark(!dark)} 
            className="px-6 py-2 rounded-full font-bold text-sm uppercase tracking-widest shadow-lg transition-all
              bg-slate-900 text-white dark:bg-white dark:text-slate-900 hover:opacity-90 active:scale-95"
          >
            {dark ? "☀️ Light Mode" : "🌙 Dark Mode"}
          </button>
        </div>

        {/* Children components   container */}
        <div className="w-full">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
