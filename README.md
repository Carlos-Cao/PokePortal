# PokePortal

PokePortal is a portal for all things Pokémon built with Next.js and React.

## Features

- Carousel showcasing different Pokémon projects
- Responsive design for mobile and desktop

## How to Use the Application

### Home Page

1. **Header**: The header displays the title of the application. Click on the title to return to the home page.

   - [src/components/Header.tsx](/pokeportal/src/components/Header.tsx)

2. **Main Section**: The main section includes a carousel showcasing different Pokémon projects.

   - [src/components/Carousel.tsx](/pokeportal/src/components/Carousel.tsx)

3. **Footer**: The footer includes a link to the GitHub repository and a button to scroll back to the top.

   - [src/components/Footer.tsx](/pokeportal/src/components/Footer.tsx)

### Carousel

1. The carousel displays different Pokémon projects with images and descriptions.

   - [src/components/Carousel.tsx](/pokeportal/src/components/Carousel.tsx)

2. Each slide includes a title, image, description, and a link to view the project.

![PokePortal](/pokeportal/public/images/PokePortal.png)

### Styling

- The project uses Tailwind CSS for styling.
  - [tailwind.config.ts](/pokeportal/tailwind.config.ts)
  - [src/app/globals.css](/pokeportal/src/app/globals.css)

## License

Distributed under the MIT License. See `LICENSE` for more information.
