import { motion } from "framer-motion";

const draw = {
  hidden: { pathLength: 0, fill: 'rgba(0,0,0,0)' },
  visible: (i: number) => {
    return {
      pathLength: 1,
      fill: 'rgba(255,255,255,1)',
      transition: {
        pathLength: { type: 'spring', duration: 3, bounce: 0, ease: 'easeIn' },
        fill: { delay: 1.5, duration: 1 }
      }
    };
  }
};

export const Logo: React.FC<{ className?: string }> = ({ className }) => (
  <motion.svg
    initial="hidden"
    animate="visible"
    className={className}
    viewBox="0 0 158.40019 22.496029"
    width="158.40019"
    height="22.496029"
  >
    <defs>
      <linearGradient id="grad" x1="0%" y1="100%" x2="0%" y2="0%">
        <stop offset="0%" style={{ stopColor: 'rgb(79,79,79)', stopOpacity:1 }} />
        <stop offset="38.2%" style={{ stopColor: 'rgb(255,255,255)', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: 'rgb(255,255,255)', stopOpacity: 1 }} />
      </linearGradient>
    </defs>
    <g transform="matrix(2.66667,0,0,2.66667,-1103.29,-924.552)" stroke="#fff" stroke-width="0.05">
      <g>
        <motion.path variants={draw} d="M420.333,346.719L420.333,355.143L419.073,355.143L418.401,355.143L418.401,348.279C418.401,348.231 418.383,348.193 418.347,348.165C418.311,348.137 418.269,348.123 418.221,348.123C418.133,348.123 418.077,348.167 418.053,348.255L416.145,355.143L416.061,355.143L414.153,348.255C414.129,348.167 414.073,348.123 413.985,348.123C413.937,348.123 413.895,348.141 413.859,348.177C413.823,348.213 413.805,348.255 413.805,348.303L413.805,355.143L413.733,355.143L413.733,346.719L415.725,346.719L417.069,351.531L418.401,346.719L420.333,346.719Z" />
        <motion.path variants={draw} d="M423.021,353.463L421.353,353.463C421.241,353.871 421.141,354.231 421.053,354.543C420.965,354.855 420.909,355.055 420.885,355.143L420.813,355.143L423.153,346.707L425.493,355.143L423.489,355.143L423.021,353.463ZM422.997,353.391L422.193,350.451C422.169,350.531 422.129,350.673 422.073,350.877C422.017,351.081 421.951,351.319 421.875,351.591C421.799,351.863 421.717,352.157 421.629,352.473C421.541,352.789 421.457,353.095 421.377,353.391L422.997,353.391Z" />
        <motion.path variants={draw} d="M427.785,346.707L427.785,354.879C427.785,354.999 427.845,355.059 427.965,355.059L427.977,355.059C428.209,355.035 428.427,354.971 428.631,354.867C428.835,354.763 429.011,354.627 429.159,354.459C429.307,354.291 429.423,354.101 429.507,353.889C429.591,353.677 429.633,353.451 429.633,353.211L429.633,346.707L429.705,346.707L429.705,353.211C429.705,353.475 429.655,353.725 429.555,353.961C429.455,354.197 429.317,354.403 429.141,354.579C428.965,354.755 428.761,354.893 428.529,354.993C428.297,355.093 428.049,355.143 427.785,355.143C427.521,355.143 427.271,355.093 427.035,354.993C426.799,354.893 426.593,354.755 426.417,354.579C426.241,354.403 426.103,354.197 426.003,353.961C425.903,353.725 425.853,353.475 425.853,353.211L425.853,346.707L427.785,346.707Z" />
        <motion.path variants={draw} d="M433.281,355.143L432.237,352.863L432.237,355.143L430.305,355.143L430.305,354.135L430.305,346.719L432.789,346.719C433.117,346.719 433.425,346.781 433.713,346.905C434.001,347.029 434.253,347.197 434.469,347.409C434.685,347.621 434.855,347.871 434.979,348.159C435.103,348.447 435.165,348.755 435.165,349.083C435.165,349.595 435.023,350.049 434.739,350.445C434.455,350.841 434.089,351.127 433.641,351.303C433.665,351.359 433.719,351.479 433.803,351.663C433.887,351.847 433.987,352.067 434.103,352.323C434.219,352.579 434.345,352.851 434.481,353.139C434.617,353.427 434.745,353.705 434.865,353.973C434.985,354.241 435.093,354.479 435.189,354.687C435.285,354.895 435.357,355.047 435.405,355.143L433.281,355.143ZM432.237,351.387L432.789,351.387C433.109,351.387 433.409,351.327 433.689,351.207C433.969,351.087 434.213,350.923 434.421,350.715C434.629,350.507 434.793,350.263 434.913,349.983C435.033,349.703 435.093,349.403 435.093,349.083C435.093,348.771 435.033,348.475 434.913,348.195C434.793,347.915 434.629,347.671 434.421,347.463C434.213,347.255 433.969,347.091 433.689,346.971C433.409,346.851 433.109,346.791 432.789,346.791L432.417,346.791C432.361,346.791 432.317,346.809 432.285,346.845C432.253,346.881 432.237,346.923 432.237,346.971L432.237,351.387Z" />
        <motion.path variants={draw} d="M437.577,346.707C437.841,346.707 438.089,346.757 438.321,346.857C438.553,346.957 438.757,347.095 438.933,347.271C439.109,347.447 439.247,347.653 439.347,347.889C439.447,348.125 439.497,348.375 439.497,348.639L439.497,353.211C439.497,353.475 439.447,353.725 439.347,353.961C439.247,354.197 439.109,354.403 438.933,354.579C438.757,354.755 438.553,354.893 438.321,354.993C438.089,355.093 437.841,355.143 437.577,355.143C437.313,355.143 437.063,355.093 436.827,354.993C436.591,354.893 436.385,354.755 436.209,354.579C436.033,354.403 435.895,354.197 435.795,353.961C435.695,353.725 435.645,353.475 435.645,353.211L435.645,348.639C435.645,348.375 435.695,348.125 435.795,347.889C435.895,347.653 436.033,347.447 436.209,347.271C436.385,347.095 436.591,346.957 436.827,346.857C437.063,346.757 437.313,346.707 437.577,346.707ZM439.425,348.639C439.425,348.383 439.377,348.141 439.281,347.913C439.185,347.685 439.053,347.487 438.885,347.319C438.717,347.151 438.521,347.019 438.297,346.923C438.073,346.827 437.833,346.779 437.577,346.779C437.321,346.779 437.079,346.827 436.851,346.923C436.623,347.019 436.425,347.151 436.257,347.319C436.089,347.487 435.957,347.685 435.861,347.913C435.765,348.141 435.717,348.383 435.717,348.639L435.717,353.211C435.717,353.467 435.765,353.709 435.861,353.937C435.957,354.165 436.089,354.363 436.257,354.531C436.425,354.699 436.623,354.831 436.851,354.927C437.079,355.023 437.321,355.071 437.577,355.071C437.833,355.071 438.073,355.023 438.297,354.927C438.521,354.831 438.717,354.699 438.885,354.531C439.053,354.363 439.185,354.165 439.281,353.937C439.377,353.709 439.425,353.467 439.425,353.211L439.425,348.639Z" />
        <motion.path variants={draw} d="M444.609,346.791C444.553,346.791 444.509,346.809 444.477,346.845C444.445,346.881 444.429,346.923 444.429,346.971L444.429,354.879C444.429,354.927 444.445,354.969 444.477,355.005C444.509,355.041 444.553,355.059 444.609,355.059L444.621,355.059C444.941,355.019 445.233,354.907 445.497,354.723C445.761,354.539 445.965,354.299 446.109,354.003L446.169,354.027C446.009,354.363 445.771,354.633 445.455,354.837C445.139,355.041 444.797,355.143 444.429,355.143C444.165,355.143 443.915,355.093 443.679,354.993C443.443,354.893 443.237,354.755 443.061,354.579C442.885,354.403 442.747,354.197 442.647,353.961C442.547,353.725 442.497,353.475 442.497,353.211L442.497,348.639C442.497,348.375 442.547,348.125 442.647,347.889C442.747,347.653 442.885,347.447 443.061,347.271C443.237,347.095 443.443,346.957 443.679,346.857C443.915,346.757 444.165,346.707 444.429,346.707C444.797,346.707 445.139,346.807 445.455,347.007C445.771,347.207 446.009,347.475 446.169,347.811L446.109,347.847C445.965,347.551 445.761,347.311 445.497,347.127C445.233,346.943 444.941,346.831 444.621,346.791L444.609,346.791Z" />
        <motion.path variants={draw} d="M448.701,346.707C448.965,346.707 449.213,346.757 449.445,346.857C449.677,346.957 449.881,347.095 450.057,347.271C450.233,347.447 450.371,347.653 450.471,347.889C450.571,348.125 450.621,348.375 450.621,348.639L450.621,353.211C450.621,353.475 450.571,353.725 450.471,353.961C450.371,354.197 450.233,354.403 450.057,354.579C449.881,354.755 449.677,354.893 449.445,354.993C449.213,355.093 448.965,355.143 448.701,355.143C448.437,355.143 448.187,355.093 447.951,354.993C447.715,354.893 447.509,354.755 447.333,354.579C447.157,354.403 447.019,354.197 446.919,353.961C446.819,353.725 446.769,353.475 446.769,353.211L446.769,348.639C446.769,348.375 446.819,348.125 446.919,347.889C447.019,347.653 447.157,347.447 447.333,347.271C447.509,347.095 447.715,346.957 447.951,346.857C448.187,346.757 448.437,346.707 448.701,346.707ZM450.549,348.639C450.549,348.383 450.501,348.141 450.405,347.913C450.309,347.685 450.177,347.487 450.009,347.319C449.841,347.151 449.645,347.019 449.421,346.923C449.197,346.827 448.957,346.779 448.701,346.779C448.445,346.779 448.203,346.827 447.975,346.923C447.747,347.019 447.549,347.151 447.381,347.319C447.213,347.487 447.081,347.685 446.985,347.913C446.889,348.141 446.841,348.383 446.841,348.639L446.841,353.211C446.841,353.467 446.889,353.709 446.985,353.937C447.081,354.165 447.213,354.363 447.381,354.531C447.549,354.699 447.747,354.831 447.975,354.927C448.203,355.023 448.445,355.071 448.701,355.071C448.957,355.071 449.197,355.023 449.421,354.927C449.645,354.831 449.841,354.699 450.009,354.531C450.177,354.363 450.309,354.165 450.405,353.937C450.501,353.709 450.549,353.467 450.549,353.211L450.549,348.639Z" />
        <motion.path variants={draw} d="M454.929,355.071L454.929,355.143L451.221,355.143L451.221,346.719L453.153,346.719L453.153,354.891C453.153,355.011 453.213,355.071 453.333,355.071L454.929,355.071Z" />
        <motion.path variants={draw} d="M457.461,346.791L457.461,350.895L459.237,350.895L459.237,350.967L457.461,350.967L457.461,355.071L459.237,355.071L459.237,355.143L455.529,355.143L455.529,346.719L459.237,346.719L459.237,346.791L457.461,346.791Z" />
        <motion.path variants={draw} d="M463.545,355.071L463.545,355.143L459.837,355.143L459.837,346.719L461.769,346.719L461.769,354.891C461.769,355.011 461.829,355.071 461.949,355.071L463.545,355.071Z" />
        <motion.path variants={draw} d="M467.853,355.071L467.853,355.143L464.145,355.143L464.145,346.719L466.077,346.719L466.077,354.891C466.077,355.011 466.137,355.071 466.257,355.071L467.853,355.071Z" />
        <motion.path variants={draw} d="M470.661,353.463L468.993,353.463C468.881,353.871 468.781,354.231 468.693,354.543C468.605,354.855 468.549,355.055 468.525,355.143L468.453,355.143L470.793,346.707L473.133,355.143L471.129,355.143L470.661,353.463ZM470.637,353.391L469.833,350.451C469.809,350.531 469.769,350.673 469.713,350.877C469.657,351.081 469.591,351.319 469.515,351.591C469.439,351.863 469.357,352.157 469.269,352.473C469.181,352.789 469.097,353.095 469.017,353.391L470.637,353.391Z" />
      </g>
    </g>
  </motion.svg>
)

//  fill="url(#grad)">
