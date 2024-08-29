const yaml = require("js-yaml");
const { format } = require('date-fns');
const eleventySitemap = require("@quasibit/eleventy-plugin-sitemap");
require('dotenv').config();

module.exports = function(eleventyConfig) {
    eleventyConfig.addCollection('blog', function(collectionApi) {
        return collectionApi.getFilteredByGlob('src/blog/**/*.md');
    });
    // Add filter date
    eleventyConfig.addFilter('dateFormat', function(date, formatStr) {
        return format(date, formatStr);
    });
    // Support YAML for global data files
    eleventyConfig.addDataExtension("yml", contents => yaml.load(contents));

    eleventyConfig.addPlugin(eleventySitemap, {
        sitemap: {
          hostname: process.env.SITE_URL || "https://your-domain.com",
        },
      });

    eleventyConfig.addPassthroughCopy("assets/css");
    eleventyConfig.addPassthroughCopy("src/assets/js");
    eleventyConfig.addPassthroughCopy("src/assets/icons");

    return {
        passthroughFileCopy: true,
        dir: {
          input: "src",
          includes: "_includes",
          data: "_data",
          output: "_site",
        },
    }
};
