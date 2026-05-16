# Square and Cube - Construction Consultancy & Project Management Website

![Square and Cube](https://via.placeholder.com/1200x630?text=Square+and+Cube)

## 🏢 Overview

Square and Cube is a world-class, professional construction consultancy and project management company website built with modern web technologies. The site showcases the company's 15+ years of experience, 50+ delivered projects, and commitment to excellence in the construction industry.

## ✨ Features

### 🎨 Design & UI
- **Responsive Design** - Mobile-first approach, works seamlessly on all devices
- **Modern Aesthetics** - Professional gradient backgrounds and smooth animations
- **Smooth Animations** - Framer Motion for engaging user interactions
- **Professional Color Scheme** - Carefully chosen colors representing trust and professionalism
- **Accessible** - WCAG compliant, keyboard navigation friendly

### 📱 Pages & Sections
1. **Hero Section** - Eye-catching landing with compelling headline and CTAs
2. **About Section** - Company overview and core values
3. **Statistics Dashboard** - Highlight key metrics (15+ years, 50+ projects, 100+ clients)
4. **Services** - 6 comprehensive service offerings with icons and descriptions
5. **Project Portfolio** - Gallery of completed projects across different categories
6. **Client Testimonials** - Success stories with 5-star ratings
7. **Contact Section** - Contact form and multiple contact methods
8. **Navigation** - Fixed header with responsive mobile menu
9. **Footer** - Comprehensive footer with links, contact info, and social media

### 🛠️ Services Offered
- Project Management
- Consultancy Services
- Interior Design
- Site Supervision
- 3D Visualization
- Quality Assurance

### 🎯 Services Categories
- Residential Projects
- Commercial Projects
- Mixed-Use Developments

## 🚀 Tech Stack

### Frontend Framework
- **Next.js 14** - React framework with server-side rendering
- **TypeScript** - Type-safe development
- **React 18** - UI library with hooks

### Styling & Animation
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **PostCSS & Autoprefixer** - CSS processing

### UI Components
- **React Icons** - Icon library (FiIcons, BsIcons)
- **React Intersection Observer** - Lazy loading and scroll animations

### Developer Tools
- **ESLint** - Code quality
- **TypeScript Compiler** - Type checking

## 📦 Installation & Setup

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Step 1: Clone the Repository
```bash
git clone https://github.com/rupeshhcs-oss/Square-Cube-UI.git
cd Square-Cube-UI
```

### Step 2: Install Dependencies
```bash
npm install
# or
yarn install
```

### Step 3: Create Environment Variables
```bash
cp .env.example .env.local
```

Edit `.env.local` and add your configuration:
```env
NEXT_PUBLIC_API_URL=http://localhost:3000
NEXT_PUBLIC_CONTACT_EMAIL=info@squareandcube.in
NEXT_PUBLIC_PHONE=+91 9999 999999
```

### Step 4: Run Development Server
```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Project Structure

```
Square-Cube-UI/
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Home page (main content)
├── components/
│   ├── Navigation.tsx       # Header navigation
│   └── Footer.tsx           # Footer component
├── public/                  # Static assets
├── package.json             # Dependencies
├── tsconfig.json            # TypeScript config
├── tailwind.config.ts       # Tailwind configuration
├── next.config.js           # Next.js configuration
├── postcss.config.js        # PostCSS configuration
├── .env.example             # Example environment variables
├── .gitignore               # Git ignore rules
└── README.md                # This file
```

## 🎨 Customization

### Update Company Information

Edit `app/page.tsx` and `components/Footer.tsx`:

```typescript
// Update contact information
const phone = '+91 9999 999999'
const email = 'info@squareandcube.in'
const address = 'Noida, Delhi NCR, India'
```

### Change Brand Colors

Edit `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    50: '#f0f9fb',
    // ... customize colors
  },
  secondary: {
    // ... customize colors
  },
}
```

### Update Services

Edit the `services` array in `app/page.tsx`:

```typescript
const services = [
  {
    icon: IconComponent,
    title: 'Service Name',
    description: 'Service description',
    color: 'from-color-start to-color-end',
  },
  // ... add more services
]
```

### Update Projects

Edit the `projects` array in `app/page.tsx`:

```typescript
const projects = [
  {
    title: 'Project Name',
    category: 'Category',
    image: 'image-url',
    description: 'Project description',
  },
  // ... add more projects
]
```

### Update Testimonials

Edit the `testimonials` array in `app/page.tsx`:

```typescript
const testimonials = [
  {
    name: 'Client Name',
    role: 'Client Role',
    image: 'image-url',
    content: 'Testimonial text',
    rating: 5,
  },
  // ... add more testimonials
]
```

## 🚀 Build & Deployment

### Build for Production
```bash
npm run build
# or
yarn build
```

### Start Production Server
```bash
npm start
# or
yarn start
```

### Deploy to Vercel

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your repository
4. Configure environment variables
5. Deploy!

### Deploy to Other Platforms

- **Netlify** - Supports Next.js out of the box
- **AWS Amplify** - Full AWS integration
- **GitHub Pages** - For static export
- **Docker** - Containerized deployment

## 📊 Performance Optimization

- **Image Optimization** - Next.js automatic image optimization
- **Code Splitting** - Automatic with Next.js
- **CSS Optimization** - Tailwind CSS tree-shaking
- **Animation Performance** - GPU-accelerated with Framer Motion
- **Lazy Loading** - Scroll-triggered animations

## 🔒 Security

- **Environment Variables** - Sensitive data in `.env.local`
- **HTTPS** - Use HTTPS in production
- **CSP Headers** - Content Security Policy headers
- **Input Validation** - Form validation on frontend
- **Dependencies** - Regular security audits

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## ⚡ Performance Metrics

- **Lighthouse Score** - 90+
- **First Contentful Paint** - <2s
- **Time to Interactive** - <3s
- **Cumulative Layout Shift** - <0.1

## 🔧 Available Scripts

```bash
# Development
npm run dev          # Start development server

# Production
npm run build        # Build for production
npm start            # Start production server

# Quality
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript compiler
```

## 📝 License

This project is proprietary and confidential. All rights reserved by Square and Cube.

## 👥 Contributing

For internal team members, please follow the contribution guidelines in `CONTRIBUTING.md`.

## 📞 Support

For support and inquiries:
- **Email:** info@squareandcube.in
- **Phone:** +91 9999 999999
- **Website:** https://squareandcube.in

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Animated with [Framer Motion](https://www.framer.com/motion/)
- Icons from [React Icons](https://react-icons.github.io/react-icons/)

---

**Square and Cube** - Premium Construction Consultancy & Project Management ✨
