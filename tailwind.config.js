/** @type {import('tailwindcss').Config} */
export default {
  content: ['./dist/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        MarineBlue: 'hsl(213, 96%, 18%)',
        purplishBlue: 'hsl(243, 100%, 62%)',
        pastelBlue: 'hsl(228, 100%, 84%)',
        lightBlue: ' hsl(206, 94%, 87%)',
        strawberryRed: 'hsl(354, 84%, 57%)',
        coolGray: ' hsl(231, 11%, 63%)',
        lightGray: 'hsl(229, 24%, 87%)',
        Magnolia: 'hsl(217, 100%, 97%)',
        Alabaster: 'hsl(231, 100%, 99%)',
        White: ' hsl(0, 0%, 100%)',
      },
      backgroundImage: {
        desktop: "url('../src/assets/images/bg-sidebar-desktop.svg')",
        mobile: "url('../src/assets/images/bg-sidebar-mobile.svg')",
      },
    },
  },
  plugins: [],
}
