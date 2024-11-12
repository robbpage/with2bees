/** @type {import('tailwindcss').Config} */

export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                amatic:     [ "Amatic SC", "sans-serif" ],
                ubuntu:     [ "Ubuntu", "sans-serif" ],
                passion:    [ "Passion One", "sans-serif" ],
                saira:      [ "Saira Condensed", "sans-serif" ],
                khand:      [ "Khand", "sans-serif" ],
            },
            animation: {
              beeBounce1: "bee_bounce 1s ease-in-out infinite",
              beeBounce2: "bee_bounce 1.2s ease-in-out infinite",
              beeShadow1: "shadow_shrink 1s ease-in-out infinite",
              beeShadow2: "shadow_shrink 1.2s ease-in-out infinite",
            },
            aspectRatio: {
                '16/9': '16 / 9',
            }
        },
    },
    plugins: [],
}