import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import logoBlack from 'figma:asset/c8674b0949c3b6b246a24c6f9bb55c3309645efb.png';
import logoWhite from 'figma:asset/6f9929cd0c6e31dab7fd3a2d29b3cf57e77e7bd4.png';
import ThemeToggle from './ThemeToggle';

export default function Contact() {
  return (
    <main className="min-h-screen bg-background flex flex-col px-4 py-8 sm:px-8 sm:py-12 lg:px-12 lg:py-16">
      <div className="max-w-6xl mx-auto w-full flex flex-col min-h-[calc(100vh-4rem)] sm:min-h-[calc(100vh-6rem)] lg:min-h-[calc(100vh-8rem)]">
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
        <div className="flex-1 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="w-full"
          >
          {/* Page Title */}
          <div className="mb-12 sm:mb-16 lg:mb-20">
            <h1 className="text-[15vw] sm:text-[12vw] md:text-[10vw] lg:text-[8vw] leading-[0.9] tracking-[-0.04em] font-black uppercase">
              CONTACT
            </h1>
            <div className="w-12 sm:w-16 lg:w-20 h-[2px] bg-foreground mt-4 sm:mt-6"></div>
          </div>

          {/* Email - Large Display */}
          <motion.a
            href="mailto:hello@bonsaitsl.com"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="block group"
          >
            <div className="relative bg-foreground text-background p-6 sm:p-8 lg:p-12 transition-all duration-500 group-hover:bg-foreground/90">
              <div className="text-xs sm:text-sm uppercase tracking-widest opacity-60 mb-3 sm:mb-4">
                Email
              </div>
              <div className="text-[5.2vw] sm:text-[5vw] md:text-[4vw] lg:text-[3vw] xl:text-[2.5vw] leading-[1.1] tracking-[-0.02em] font-black uppercase">
                hello@bonsaitsl.com
              </div>
            </div>
          </motion.a>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-8 sm:mt-12 text-sm sm:text-base opacity-40 leading-relaxed"
          >
            For all inquiries, partnerships, or questions about our products and services.
          </motion.p>
        </motion.div>
      </div>
      </div>
    </main>
  );
}
