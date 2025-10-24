import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

export default function Legal() {
  return (
    <main className="min-h-screen bg-background px-4 py-8 sm:px-8 sm:py-12 lg:px-12 lg:py-16">
      <div className="max-w-6xl mx-auto">
        {/* Top Bar: Back Link and Theme Toggle */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="mb-12 sm:mb-16 flex items-center justify-between"
        >
          <Link 
            to="/"
            className="inline-flex items-center gap-2 opacity-40 hover:opacity-100 transition-all duration-300 text-xs sm:text-sm uppercase tracking-widest"
          >
            <ArrowLeft className="w-4 h-4" />
            Home
          </Link>
          <ThemeToggle />
        </motion.div>
        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Page Title */}
          <div className="mb-12 sm:mb-16 lg:mb-20">
            <h1 className="text-[15vw] sm:text-[12vw] md:text-[10vw] lg:text-[8vw] leading-[0.9] tracking-[-0.04em] font-black uppercase">
              LEGAL
            </h1>
            <div className="w-12 sm:w-16 lg:w-20 h-[2px] bg-foreground mt-4 sm:mt-6 mb-6 sm:mb-8"></div>
            
            <p className="text-base sm:text-lg md:text-xl leading-relaxed opacity-60 max-w-xl">
              The following documents apply to all products we develop.
            </p>
          </div>

          {/* Legal Documents Grid */}
          <div className="grid gap-4">
            <Link 
              to="/privacy"
              className="group bg-foreground text-background hover:bg-foreground/90 transition-all duration-500 p-6 sm:p-8 lg:p-10"
            >
              <div className="flex items-start justify-between gap-4 sm:gap-6">
                <div className="flex-1">
                  <div className="text-xs sm:text-sm uppercase tracking-widest opacity-60 mb-2 sm:mb-3">
                    Document 01
                  </div>
                  <h2 className="text-[8vw] sm:text-[6vw] md:text-[5vw] lg:text-[3.5vw] leading-[0.95] tracking-[-0.03em] font-black uppercase">
                    PRIVACY POLICY
                  </h2>
                  <p className="text-sm sm:text-base opacity-70 group-hover:opacity-90 transition-opacity mt-2 sm:mt-3">
                    How we handle your data
                  </p>
                </div>
                <ArrowRight className="w-6 h-6 sm:w-8 sm:h-8 opacity-60 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-500 flex-shrink-0" />
              </div>
            </Link>

            <Link 
              to="/terms"
              className="group bg-background hover:bg-foreground/5 border border-foreground/10 transition-all duration-500 p-6 sm:p-8 lg:p-10"
            >
              <div className="flex items-start justify-between gap-4 sm:gap-6">
                <div className="flex-1">
                  <div className="text-xs sm:text-sm uppercase tracking-widest opacity-40 mb-2 sm:mb-3">
                    Document 02
                  </div>
                  <h2 className="text-[8vw] sm:text-[6vw] md:text-[5vw] lg:text-[3.5vw] leading-[0.95] tracking-[-0.03em] font-black uppercase">
                    TERMS OF SERVICE
                  </h2>
                  <p className="text-sm sm:text-base opacity-50 group-hover:opacity-70 transition-opacity mt-2 sm:mt-3">
                    Our service agreement
                  </p>
                </div>
                <ArrowRight className="w-6 h-6 sm:w-8 sm:h-8 opacity-30 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-500 flex-shrink-0" />
              </div>
            </Link>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
