/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      mainClr: '#05011c',
      mainTxtClr: '#ff7f50',
      secondary: '#ea4819',
    },
    extend: {
      animation: {
        blinkWinCherryAnim: 'blinkWinCherryAnim .6s infinite',
        blinkWinGrapeAnim: 'blinkWinGrapeAnim .6s infinite',
        blinkWinLemonAnim: 'blinkWinLemonAnim .6s infinite',
        blinkWinAppleAnim: 'blinkWinAppleAnim .6s infinite',
        blinkWinBagAnim: 'blinkWinBagAnim .6s infinite',
      },
      keyframes: {
        blinkWinCherryAnim: {
          '0%, 100%': { textShadow: '1px 1px 20px #cb0b19' },
          '50%': { textShadow: '1px 1px 10px #cb0b19' },
        },
        blinkWinGrapeAnim: {
          '0%, 100%': { textShadow: '1px 1px 20px #6629ad' },
          '50%': { textShadow: '1px 1px 10px #6629ad' },
        },
        blinkWinLemonAnim: {
          '0%, 100%': { textShadow: '1px 1px 20px #fce100' },
          '50%': { textShadow: '1px 1px 10px #fce100' },
        },
        blinkWinAppleAnim: {
          '0%, 100%': { textShadow: '1px 1px 20px #cced0c' },
          '50%': { textShadow: '1px 1px 10px #cced0c' },
        },
        blinkWinBagAnim: {
          '0%, 100%': { textShadow: '1px 1px 20px #ffb900' },
          '50%': { textShadow: '1px 1px 10px #ffb900' },
        }
      }
    },
  },
  plugins: [],
}

