import { motion } from 'framer-motion';

export default function Logo({ className = '' }) {
  return (
    <motion.div
      className={`logo ${className}`}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Left arrow pointing up-right (career growth) */}
        <path
          d="M8 28L22 8M22 8H12M22 8V18"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        {/* Right flowing lines (flow concept) */}
        <path
          d="M28 12C31 12 32 13 32 16C32 19 31 20 28 20"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <path
          d="M28 24C31 24 32 25 32 28C32 31 31 32 28 32"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
      <span>CareerFlow</span>
    </motion.div>
  );
}
