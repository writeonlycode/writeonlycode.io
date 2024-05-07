![](https://github.com/writeonlycode/bold-motion/blob/main/screenshots/bold-motion-thumbnail.png?raw=true)

Bold Motion is a sleek Next.JS portfolio website designed to showcase
creativity with elegance and efficiency. Featuring discrete animations that
infuse movement throughout the site, Bold Motion offers a seamless user
experience for visitors to explore and engage with the creator's portfolio.

## Getting Started

These instructions will get you a copy of the project up and running on your
local machine for development and testing purposes.

### Prerequisites

Before you begin, ensure you have the following installed on your machine:

- Node.js
- npm (Node Package Manager)

### Installation

1. Clone the repository to your local machine:

```
git clone https://github.com/writeonlycode/bold-motion.git
```

2. Navigate into the project directory:

```
cd bold-motion
```

3. Install dependencies:

```
npm install
```

### Editing Content

To make changes to the content of the website, navigate to the `content` folder. YAML files inside this folder contain the content for different sections of the website (e.g., `hero.yaml`, `about.yaml`, `selectedWorks.yaml`, `contact.yaml`). Edit these markdown files to update the content of the corresponding sections.

### Running the Development Server

To run the development server and view your changes locally, use the following command:

```
npm run dev
```

This will start a development server at `http://localhost:3000`. Open this URL in your web browser to view the website.

### Deployment

To deploy the Bold Motion website, you can use any hosting provider that supports static site hosting. 

1. Build the project:

```
npm run build
```

2. Upload the contents of the `out` directory (generated by the build command) to your hosting provider.

Alternatively, you can integrate your repository with a CI/CD pipeline for automated deployments.

## Built With

- [Next.JS](https://nextjs.org/) - The React framework used for building the website.
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework for building custom designs quickly.
- [Framer Motion](https://www.framer.com/motion/) - A library for creating animations in React applications.
- [Velite](https://velite.js.org/) - A tool for transforming Markdown / MDX, YAML, JSON, or other files into a JS data layer.

## License

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
