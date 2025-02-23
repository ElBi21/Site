module.exports = {
    content: [
        // "./hugo_stats.json",
        "./content/**/*.{html,md}",
        "./layouts/**/*.html",
    ],
    plugins: [
        require("@tailwindcss/typography")
    ],
    darkMode: [
        'class',
        'html[class~="dark"]'
    ]
}