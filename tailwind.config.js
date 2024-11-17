/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'hov-button': 'rgba(0, 63, 173, 1)',
        'breadcrumbs-grey': 'rgba(149, 159, 176, 1)',
        'aside-border-color': 'rgba(231, 234, 238, 1)',
        'aside-color': ' rgba(255, 255, 255, 1)',
        'camera': 'rgba(240, 240, 240, 1)',
        'name-in-card': ' rgba(5, 29, 73, 1)',
        'info-type-bgcolor': ' rgba(244, 248, 254, 1)',
        'info-type-color': 'rgba(15, 108, 189, 1)',
        'edit-button': 'rgba(15, 108, 189, 1)',
        'document-btn': ' rgba(236, 236, 236, 1)'


      },
    },
  },
  plugins: [],
}

