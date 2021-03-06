module.exports = {
    // webpack folder’s entry js — excluded from jekll’s build process.
    entry: './src/javascripts/entry.js',
    output: {
        // we’re going to put the generated file in the assets folder so jekyll will grab it.
        path: './assets/javascripts/',
        filename: 'bundle.js'
    }
};
