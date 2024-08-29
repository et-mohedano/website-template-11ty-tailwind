# Template Eleventy + Tailwind

This repository is a template for creating websites using Eleventy and Tailwind CSS. The idea is to clone this repository and customize it according to your needs, allowing you to add content such as blog posts, projects, and dynamic collections, simulating a CMS.

## Features

- **Eleventy**: A static site generator that allows you to create web pages from Markdown, HTML, and more.
- **Tailwind CSS**: A utility-first CSS framework that makes it easy to create modern, responsive user interfaces.
- **Blog Posts**: Add blog posts in Markdown format, organized into collections.
- **Projects**: Add projects to the site to showcase your portfolio.
- **Dynamic Collections**: Create collections that can be used to build dynamic components, simulating CMS functionality.
- **Sitemap**: Automatically generate an XML sitemap for SEO.
- **YAML Support**: Support for data files in YAML format.
- **Customizable Configuration**: The entire site can be easily customized from the configuration and style files.

## Preview

Check out the live preview of the site here:  
https://website-template-11ty-tailwind.pages.dev/

## Requirements

- Node.js (version 14 or higher)
- npm (version 6 or higher)

## Installation

1. Clone the repository:

   git clone https://github.com/et-mohedano/website-template-11ty-tailwind.git

2. Navigate to the project directory:

   cd template-11ty-tailwind

3. Install dependencies:

   npm install

## Usage

### Development

To start working on the site in a development environment, run:

```console
npm run dev
```

This will start a development server that watches for changes to the CSS files and regenerates the site automatically.

### Build

To build the site ready for production, run:

```console
npm run build
```

This command will generate the static files in the _site directory.

### Comandos del `package.json`

- **build:css**: `postcss src/assets/css/styles.css -o _site/assets/css/styles.css`  
  This command processes the main CSS file using PostCSS and outputs it to the `_site/assets/css/styles.css` directory.

- **build**: `npm run build:css && eleventy`  
  This command first runs `build:css` to process the CSS styles, then runs Eleventy to generate the full static site.

- **start**: `eleventy --serve`  
  This command starts a development server that watches for changes and regenerates the site automatically. Ideal for local development.

- **watch:css**: `postcss src/assets/css/styles.css -o _site/assets/css/styles.css --watch`  
  This command watches for changes in the main CSS file and processes it automatically each time a change is detected.

- **dev**: `npm run watch:css & npm run start`  
  This is a composite command that runs `watch:css` and `start` in parallel. It is used to start local development with both CSS and Eleventy file watching.

### Customization

- **Blog Posts**: Add your posts in the `src/blog` folder. You can use Markdown files (.md).
- **Projects**: Projects can be added in the `src/projects` folder.
- **Styles**: Custom styles can be added in `src/assets/css/global.css`.

### Sitemap Configuration

The sitemap domain is read from an environment variable. Be sure to create a `.env` file at the root of the project with the following content:

SITE_URL=https://your-domain.com

### Passthrough Files

Static files like CSS, JS, and icons located in `assets/` and `src/assets/` will be directly copied to the output directory `_site` during the build process.

## Project Structure

- `src/`: Main folder where the site's source files are located.
  - `blog/`: Folder for blog posts.
  - `projects/`: Folder for projects.
  - `assets/`: Static files like CSS, JS, and icons.
  - `_data/`: Data files in YAML or JSON format.
  - `_includes/`: Reusable parts like headers, footers, etc.
- `.eleventy.js`: Eleventy configuration file.
- `tailwind.config.js`: Tailwind CSS configuration file.
- `.env`: File for environment variables.
- `_site/`: Folder where the static site will be generated.

## Contribution

If you'd like to contribute to the project, you're welcome! If you find any issues or have improvements, feel free to open an issue or submit a pull request.

## License

This project is licensed under the ISC license.
