# Giggle - A Freelance Marketplace with Lower Fees

Giggle is a modern freelance marketplace platform with a unique approach to connecting talented freelancers with clients. With significantly lower fees than traditional platforms, Giggle provides a more profitable environment for freelancers and better value for clients.

## 🚀 Features

- **Lower Service Fees**: Only 10% fee compared to industry standards of 20%+
- **Unique, Modern UI**: Fresh design with intuitive user experience
- **Secure Payments**: Integrated with Stripe for safe and reliable transactions
- **Real-time Communication**: Chat with clients and freelancers instantly
- **Comprehensive Search**: Find the perfect service with advanced filtering
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile
- **User Authentication**: Secure login and account management
- **Service Management**: Create, edit, and manage service listings
- **Order Tracking**: Monitor the progress of your orders
- **Review System**: Build reputation through client feedback

## 🛠️ Tech Stack

- **Frontend**: Next.js 15 with App Router
- **Styling**: Tailwind CSS 4 with custom theme
- **Backend**: Supabase (PostgreSQL, Authentication, Storage)
- **Payments**: Stripe Integration
- **UI Components**: shadcn/ui
- **Fonts**: Geist Sans and Geist Mono
- **Deployment**: Vercel (planned)

## 🏗️ Project Structure

- `/app`: Next.js application routes and pages
- `/components`: Reusable UI components
- `/lib`: Utility functions and shared code
- `/public`: Static assets
- `/hooks`: Custom React hooks
- `/providers`: Context providers for state management

## 🚦 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- Supabase account
- Stripe account (for payment processing)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/raheesahmed/giggle.git
   cd giggle
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Set up environment variables:
   Create a `.env.local` file in the root directory with the following variables:

   ```
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   STRIPE_SECRET_KEY=your_stripe_secret_key
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
   ```

4. Run the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🎨 Theme

Giggle features a unique and modern design language with a distinctive color palette:

- **Primary Color**: #6c63ff (Giggle Purple) - A vibrant purple that conveys creativity and innovation
- **Accent Color**: #ff6b6b (Giggle Coral) - A warm coral that adds energy and approachability
- **Background**: #f8f9fc - A soft, light background that's easy on the eyes
- **Foreground**: #2d3142 - A deep blue-gray for text that provides excellent readability
- **Rounded Elements**: Slightly more rounded corners (0.75rem) for a friendly, modern feel
- **Consistent Components**: Professional, cohesive design system with careful attention to spacing

Visit `/theme-test` to see the theme components in action.

## 📝 Development Roadmap

- [x] Project setup and configuration
- [x] Theme implementation
- [ ] Authentication system
- [ ] User profiles
- [ ] Service creation and management
- [ ] Search and discovery
- [ ] Messaging system
- [ ] Order management
- [ ] Payment processing
- [ ] Reviews and ratings
- [ ] Admin dashboard

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
