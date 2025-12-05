/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                primary: "#2563EB",
                "background-light": "#F3F4F6",
                "background-dark": "#0D1117",
            },
            fontFamily: {
                display: ["Sora", "sans-serif"],
            },
            borderRadius: {
                DEFAULT: "0.5rem",
            },
        },
    },
    plugins: [],
}
