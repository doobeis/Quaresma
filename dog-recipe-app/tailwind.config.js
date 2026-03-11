/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Fredoka', 'sans-serif'],
            },
            colors: {
                nature: {
                    50: '#f4f7f1',
                    100: '#e5eedf',
                    200: '#cbdcc0',
                    300: '#a7c398',
                    400: '#81a56e',
                    500: '#61884e',
                    600: '#476C2F', // Verde da Pata/Cão
                    700: '#3a542f',
                    800: '#314429',
                    900: '#293923',
                    950: '#141e10',
                },
                warm: {
                    50: '#fef8f1',
                    100: '#fdefdf',
                    200: '#faddc0',
                    300: '#f6c398',
                    400: '#f1a16e',
                    500: '#E88619', // Laranja do Linaria
                    600: '#dd6831',
                    700: '#b84e27',
                    800: '#934026',
                    900: '#763622',
                    950: '#40190f',
                }
            }
        },
    },
    plugins: [],
}
