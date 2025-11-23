# MediaPulse

MediaPulse is a modern media analytics dashboard, built with Next.js, React, Material UI, and Laravel. It provides beautiful charts, statistics, and tables to help you visualize and understand your performance across platforms (YouTube and more).

## Features

- Channel analytics overview (subscribers, views, videos)
- Interactive bar charts with image labels
- Time range selection for analytics (3 days, week, month)
- Responsive layout for all devices
- Beautiful media table with thumbnails, views, comments, and published year
- Uses Material UI and Tailwind CSS for styling
- Laravel backend for API and data management

## Getting Started

### Frontend (Next.js)

1. **Install dependencies**
   ```bash
   cd frontend
   npm install
   ```
2. **Run the development server**
   ```bash
   npm run dev
   ```
3. **Open your browser**
   Visit [http://localhost:3000](http://localhost:3000)

### Backend (Laravel)

1. **Install dependencies**
   ```bash
   cd backend
   composer install
   ```
2. **Set up environment**
   - Copy `.env.example` to `.env` and configure your database and other settings.
3. **Run migrations**
   ```bash
   php artisan migrate
   ```
4. **Start the server**
   ```bash
   php artisan serve
   ```

## Folder Structure

- `frontend/` — Next.js app (UI, charts, tables)
- `backend/` — Laravel API (data, authentication, business logic)

## Tech Stack

- Next.js
- React
- Material UI
- Tailwind CSS
- Recharts
- Laravel

## License

MIT
