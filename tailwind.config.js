/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-base":
                    "linear-gradient(90deg, #2DAA6E 0%, #2DAAAA 33.33%, #856CCF 66.67%, #D658B3 100%)",
            },
            colors: {
                principal: {
                    pink: "#D658B3",
                    green: "#45B442",
                },
                base: {
                    gray: {
                        100: "#F4F1F2",
                        200: "#E9E7E9",
                        300: "#DFDCDF",
                        400: "#D3CFD2",
                        500: "#756C71",
                        600: "#4A4448",
                        700: "#332B31",
                    },
                    white: "#FFFFFF",
                },
            },
            fontFamily: {
                oxygen: ["Oxygen", "sans-serif"],
            },
        },
    },
    plugins: [],
};
