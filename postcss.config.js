const purgecss = require('@fullhuman/postcss-purgecss')({
    content: [
        './components/**/*.{j,t}{s,sx}',
        './pages/**/*.{j,t}{s,sx}',
        './**/*.html'
    ],
    defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
});

module.exports = {
    plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
        ...process.env.NODE_ENV === 'production'
        ? [
            purgecss,
            require('postcss-discard-comments')()
          ]
        : []
    ]
}