/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html','./*.{html,js}', './projects.html'],
  theme: {
    extend: {
      colors:{
        'saratoga-700': '#6c7f0c',
        'saratoga-800': '#576510',
        'saratoga-900': '#485512',
        'saratoga-950': '#262f04',
        'gordons-green-700': '#5a6e0e',
        'gordons-green-800': '#47570e',
        'gordons-green-900': '#3b480c',
        'thatch-green-700': '#666425',
        'thatch-green-800': '#525122',
        'thatch-green-900': '#3f3f1d',
        'waiouru-600': '#889020',
        'waiouru-700': '#676e1d',
        'waiouru-800': '#52581c',
        'waiouru-900': '#3e4319',
        'chelsea-cucumber-600': '#537b35',
        'sushi-600': '#6f7b35',
        'sushi-900': '#3c4225',
        'sushi-950': '#1f2310',
        'finch-900': '#393e29',
        'finch-950': '#1d2013',
        'kelp-950': '#1f2013'
      },
      // gradientColorStopPositions: {
      //   33: '33%'
      // } 
    },
  plugins: [],
  }
}
