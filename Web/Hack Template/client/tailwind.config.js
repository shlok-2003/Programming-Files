import tailwindAnimate from "tailwindcss-animate";
import defaultTheme from "tailwindcss/defaultTheme";

import * as normal from "./src/styles/colors";
import * as alpha from "./src/styles/colors";

/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: ["./src/**/*.{ts,tsx}"],
    prefix: "",
    theme: {
        container: {
            center: true,
            padding: "2rem",
            screens: {
                "2xl": "1400px",
            },
        },
        fontFamily: {
            sans: ["Inter", ...defaultTheme.fontFamily.sans],
            playfair: ["Edu SA Beginner", ...defaultTheme.fontFamily.sans],
            mono: ["Roboto Mono", ...defaultTheme.fontFamily.mono],
        },

        extend: {
            screens: {
                xs: "400px",
            },
            colors: {
                rt: {
                    normal: {
                        amber: normal.normalAmber,
                        blue: normal.normalBlue,
                        bronze: normal.normalBronze,
                        brown: normal.normalBrown,
                        crimson: normal.normalCrimson,
                        cyan: normal.normalCyan,
                        gold: normal.normalGold,
                        grass: normal.normalGrass,
                        green: normal.normalGreen,
                        iris: normal.normalIris,
                        indigo: normal.normalIndigo,
                        jade: normal.normalJade,
                        lime: normal.normalLime,
                        mint: normal.normalMint,
                        olive: normal.normalOlive,
                        orange: normal.normalOrange,
                        pink: normal.normalPink,
                        plum: normal.normalPlum,
                        purple: normal.normalPurple,
                        red: normal.normalRed,
                        ruby: normal.normalRuby,
                        sage: normal.normalSage,
                        sand: normal.normalSand,
                        slate: normal.normalSlate,
                        sky: normal.normalSky,
                        teal: normal.normalTeal,
                        tomato: normal.normalTomato,
                        violet: normal.normalViolet,
                        yellow: normal.normalYellow,
                    },
                    alpha: {
                        amber: alpha.alphaAmber,
                        blue: alpha.alphaBlue,
                        bronze: alpha.alphaBronze,
                        brown: alpha.alphaBrown,
                        crimson: alpha.alphaCrimson,
                        cyan: alpha.alphaCyan,
                        gold: alpha.alphaGold,
                        grass: alpha.alphaGrass,
                        green: alpha.alphaGreen,
                        iris: alpha.alphaIris,
                        indigo: alpha.alphaIndigo,
                        jade: alpha.alphaJade,
                        lime: alpha.alphaLime,
                        mint: alpha.alphaMint,
                        olive: alpha.alphaOlive,
                        orange: alpha.alphaOrange,
                        pink: alpha.alphaPink,
                        plum: alpha.alphaPlum,
                        purple: alpha.alphaPurple,
                        red: alpha.alphaRed,
                        ruby: alpha.alphaRuby,
                        sage: alpha.alphaSage,
                        sand: alpha.alphaSand,
                        slate: alpha.alphaSlate,
                        sky: alpha.alphaSky,
                        teal: alpha.alphaTeal,
                        tomato: alpha.alphaTomato,
                        violet: alpha.alphaViolet,
                        yellow: alpha.alphaYellow,
                    },
                },
                rich: {
                    black: {
                        5: "#F1F2FF",
                        25: "#DBDDEA",
                        50: "#C5C7D4",
                        100: "#AFB2BF",
                        200: "#999DAA",
                        300: "#838894",
                        400: "#6E727F",
                        500: "#585D69",
                        600: "#424854",
                        700: "#2C333F",
                        800: "#161D29",
                        900: "#000814",
                    },
                    blue: {
                        5: "#ECF5FF",
                        25: "#C6D6E1",
                        50: "#A0B7C3",
                        100: "#7A98A6",
                        200: "#537988",
                        300: "#2D5A6A",
                        400: "#073B4C",
                        500: "#063544",
                        600: "#042E3B",
                        700: "#032833",
                        800: "#01212A",
                        900: "#001B22",
                    },
                    brown: {
                        5: "#FFF4C4",
                        25: "#FFE395",
                        50: "#FFD166",
                        100: "#E7BC5B",
                        200: "#CFA64F",
                        300: "#B89144",
                        400: "#A07C39",
                        500: "#88662D",
                        600: "#705122",
                        700: "#593C17",
                        800: "#41260B",
                        900: "#291100",
                    },
                    pink: {
                        5: "#FFF1F1",
                        25: "#FBC7D1",
                        50: "#F79CB0",
                        100: "#F37290",
                        200: "#EF476F",
                        300: "#D43D63",
                        400: "#BA3356",
                        500: "#9F294A",
                        600: "#841E3E",
                        700: "#691432",
                        800: "#4F0A25",
                        900: "#340019",
                    },
                    yellow: {
                        5: "#FFF970",
                        25: "#FFE83D",
                        50: "#FFD60A",
                        100: "#E7C009",
                        200: "#CFAB08",
                        300: "#B69507",
                        400: "#9E8006",
                        500: "#866A04",
                        600: "#6E5503",
                        700: "#553F02",
                        800: "#3D2A01",
                        900: "#251400",
                    },
                },
                caribbean: {
                    green: {
                        5: "#C1FFFD",
                        25: "#83F1DE",
                        50: "#44E4BF",
                        100: "#06D6A0",
                        200: "#05BF8E",
                        300: "#05A77B",
                        400: "#049069",
                        500: "#037957",
                        600: "#026144",
                        700: "#014A32",
                        800: "#01321F",
                        900: "#001B0D",
                    },
                },
                pure: {
                    blue: {
                        5: "#EAF5FF",
                        25: "#B4DAEC",
                        50: "#7EC0D9",
                        100: "#47A5C5",
                        200: "#118AB2",
                        300: "#0F7A9D",
                        400: "#0C6A87",
                        500: "#0A5A72",
                        600: "#074B5D",
                        700: "#053B48",
                        800: "#022B32",
                        900: "#001B1D",
                    },
                    gray: {
                        5: "#F9F9F9",
                        25: "#E2E2E2",
                        50: "#CCCCCC",
                        100: "#B5B5B5",
                        200: "#9E9E9E",
                        300: "#888888",
                        400: "#717171",
                        500: "#5B5B5B",
                        600: "#444444",
                        700: "#2D2D2D",
                        800: "#171717",
                        900: "#141414",
                    },
                },
                custom: {
                    sun: "#FF512F",
                    yellow: "#F09819",
                    orange: "#E65C00",
                    "light-yellow": "#F9D423",
                    color: normal.normalPink[700],
                    border: normal.normalPink[1100],
                    light: normal.normalPink[400],
                    hover: normal.normalPink[500],
                },
                //? below code is not working || not useable
                gradient: {
                    blue: "bg-gradient-to-br from-sky-200 via-blue-500 to-indigo-600 bg-clip-text text-transparent",
                    green: "bg-gradient-to-r from-emerald-500 to-emerald-900 bg-clip-text text-transparent",
                    powder: "bg-gradient-to-r from-violet-200 to-pink-200 bg-clip-text text-transparent",
                    sunset: "bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent",
                    mood: "bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent",
                },
            },
            keyframes: {
                "accordion-down": {
                    from: { height: "0" },
                    to: { height: "var(--radix-accordion-content-height)" },
                },
                "accordion-up": {
                    from: { height: "var(--radix-accordion-content-height)" },
                    to: { height: "0" },
                },
            },
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
            },
        },
    },
    plugins: [tailwindAnimate],
};
