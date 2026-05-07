/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}', '../03-开发组件/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#0067D1',
          hover: '#2E86DE',
          active: '#004EA8',
        },
        text: {
          primary: '#191919',
          strong: '#101828',
          secondary: '#777777',
          tertiary: '#364153',
          disabled: '#BFBFBF',
        },
        border: {
          default: '#E5E7EB',
          input: '#C9C9C9',
        },
        surface: {
          page: '#FFFFFF',
          selected: '#EFF6FF',
          avatar: '#D1D5DC',
        },
        status: {
          success: '#52C41A',
          'success-bg': '#F6FFED',
          warning: '#FAAD14',
          error: '#FF4D4F',
        },
      },
      fontFamily: {
        sans: ['"HarmonyOS Sans"', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      borderRadius: {
        sm: '4px',
        md: '6px',
        lg: '8px',
      },
      boxShadow: {
        sm: '0 1px 2px rgba(0,0,0,0.06), 0 1px 3px rgba(0,0,0,0.1)',
        md: '0 4px 6px rgba(0,0,0,0.07), 0 2px 4px rgba(0,0,0,0.06)',
        card: '0 10px 15px rgba(0,0,0,0.1), 0 4px 6px rgba(0,0,0,0.05)',
      },
    },
  },
  plugins: [],
}
