'use client'

import { motion } from 'framer-motion'

export default function HeroAnimation() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Large organic blob top left */}
      <motion.div
        className="absolute -top-32 -left-40 w-96 h-96"
        animate={{
          x: [0, 60, 0],
          y: [0, 80, 0],
          rotate: [0, 45, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <svg viewBox="0 0 200 200" className="w-full h-full opacity-20">
          <defs>
            <linearGradient id="blob1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3B82F6" />
              <stop offset="100%" stopColor="#1E40AF" />
            </linearGradient>
          </defs>
          <path
            d="M50,100 Q25,25 100,50 T150,100 T100,150 T50,100"
            fill="url(#blob1)"
          />
        </svg>
      </motion.div>

      {/* Medium blob right side */}
      <motion.div
        className="absolute top-20 -right-32 w-80 h-80"
        animate={{
          x: [-40, 40, -40],
          y: [0, 60, 0],
          rotate: [0, -45, 0],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2,
        }}
      >
        <svg viewBox="0 0 200 200" className="w-full h-full opacity-25">
          <defs>
            <linearGradient id="blob2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#60A5FA" />
              <stop offset="100%" stopColor="#93C5FD" />
            </linearGradient>
          </defs>
          <path
            d="M80,40 Q140,50 150,110 Q140,160 80,150 Q30,140 20,100 Q30,50 80,40"
            fill="url(#blob2)"
          />
        </svg>
      </motion.div>

      {/* Small accent blob bottom left */}
      <motion.div
        className="absolute -bottom-20 -left-20 w-64 h-64"
        animate={{
          x: [0, 50, 0],
          y: [0, -40, 0],
          rotate: [0, 90, 0],
        }}
        transition={{
          duration: 13,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 4,
        }}
      >
        <svg viewBox="0 0 200 200" className="w-full h-full opacity-20">
          <defs>
            <linearGradient id="blob3" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1E40AF" />
              <stop offset="100%" stopColor="#3B82F6" />
            </linearGradient>
          </defs>
          <path
            d="M100,30 Q150,60 160,110 Q130,160 100,150 Q50,160 40,110 Q50,60 100,30"
            fill="url(#blob3)"
          />
        </svg>
      </motion.div>

      {/* Bottom right flowing blob */}
      <motion.div
        className="absolute bottom-0 -right-40 w-96 h-96"
        animate={{
          x: [-30, 50, -30],
          y: [20, -40, 20],
          rotate: [0, -60, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 6,
        }}
      >
        <svg viewBox="0 0 200 200" className="w-full h-full opacity-15">
          <defs>
            <linearGradient id="blob4" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#60A5FA" />
              <stop offset="100%" stopColor="#1E40AF" />
            </linearGradient>
          </defs>
          <path
            d="M60,50 Q120,30 150,80 Q160,130 120,160 Q60,170 30,130 Q20,80 60,50"
            fill="url(#blob4)"
          />
        </svg>
      </motion.div>

      {/* Extra subtle floating element */}
      <motion.div
        className="absolute top-1/3 right-1/4 w-48 h-48"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.25, 0.15],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,
        }}
      >
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <defs>
            <linearGradient id="blob5" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#93C5FD" />
              <stop offset="100%" stopColor="#60A5FA" />
            </linearGradient>
          </defs>
          <path
            d="M100,40 Q150,60 150,110 Q120,160 100,160 Q50,160 50,110 Q50,60 100,40"
            fill="url(#blob5)"
          />
        </svg>
      </motion.div>
    </div>
  )
}
