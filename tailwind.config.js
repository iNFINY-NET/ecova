module.exports = {
  content: ["*.{html,js}"],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage:{
        'volunteer': "url('/assets/images/bg-images/factsbg.jpg')",
        'volunteerBorder':"url('/assets/images/bg-images/border.png')",
        'footerTexture':"url('/assets/images/bg-images/fpat.jpg')",
      }
    },
    fontFamily: {
      'sans': ['Poppins', 'ui-sans-serif', 'system-ui'],
      'serif': ['ui-serif', 'Georgia'],
      'mono': ['ui-monospace', 'SFMono-Regular'],
      'roboto': ['Roboto', 'ui-sans-serif', 'system-ui'],
      'robotoSlab':['Roboto Slab', 'serif'],
    },
    screens: {
      'xs': '380px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
  },
  plugins: [],
}
