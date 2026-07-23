# My Next.js App

This is a Next.js application scaffolded with TypeScript and styled using Tailwind CSS. The app includes several pages and components, structured to provide a responsive and interactive user experience.

## Project Structure

```
my-nextjs-app
├── app
│   ├── components
│   │   └── navigation.tsx
│   ├── about
│   │   └── page.tsx
│   ├── contact
│   │   └── page.tsx
│   ├── health
│   │   └── page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── lib
│   └── data.ts
├── public
├── .env.example
├── next-env.d.ts
├── package.json
├── postcss.config.js
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

## Features

- **Responsive Design**: The application is designed to be responsive at both 375px and 1280px screen widths.
- **Routing**: Each page is accessible via its own route, with placeholders for the About, Contact, and Health pages.
- **Health Check**: The health-check page fetches and displays data to confirm the app's operational status.

## Setup Instructions

1. Clone the repository:
   ```
   git clone <repository-url>
   cd my-nextjs-app
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Set up environment variables:
   - Copy `.env.example` to `.env` and fill in the necessary values.

4. Run the development server:
   ```
   npm run dev
   ```

5. Open your browser and navigate to `http://localhost:3000` to view the application.

## Deployment

This application is connected to Vercel (or Netlify) for continuous deployment. Every commit will trigger a build and deploy to a live preview URL.

## Contributing

Feel free to submit issues or pull requests for any improvements or bug fixes.

## License

This project is licensed under the MIT License.