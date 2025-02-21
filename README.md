# QR Watch

A modern Next.js-based e-commerce website for QR Watch, featuring a sleek product showcase, pre-order system, and comprehensive customer support.

## Features

- 🎯 Modern and responsive design using Next.js 14+
- 🛍️ Product showcase with detailed specifications
- 🖼️ Interactive product gallery
- 💳 Integrated payment system
- 📱 Mobile-first approach
- 🔍 SEO optimized
- 💬 Customer support system
- ❓ FAQ section
- 📦 Shipping and returns information
- 🛡️ Warranty details

## Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── about/             # About page
│   ├── contact/           # Contact information
│   ├── payment/           # Payment processing
│   ├── returns/           # Returns policy
│   ├── shipping/          # Shipping information
│   ├── warranty/          # Warranty details
│   └── page.tsx           # Home page
├── components/            # Reusable components
    ├── FAQ.tsx           # FAQ section
    ├── Features.tsx      # Product features
    ├── Footer.tsx        # Site footer
    ├── Gallery.tsx       # Product gallery
    ├── Header.tsx        # Site header
    ├── Hero.tsx          # Hero section
    ├── PreorderSection   # Pre-order functionality
    ├── ProductShowcase   # Product display
    ├── Specifications    # Product specifications
    └── Support.tsx       # Support section
```

## Getting Started

### Prerequisites

- Node.js (version 16.x.x or higher)
- npm (version 8.x.x or higher)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/gathlabs/qr-watch.git
```

2. Install dependencies:

```bash
cd qr-watch
npm install
```

3. Set up environment variables:

```bash
cp .env.example .env
```

4. Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
NEXT_PUBLIC_API_URL=your_api_url
NEXT_PUBLIC_PAYMENT_KEY=your_payment_key
# Add other environment variables as needed
```

## Key Components

- **Hero Section**: Showcases the main product with a compelling call-to-action
- **Product Showcase**: Displays detailed product information and features
- **Gallery**: Interactive product images and demonstrations
- **Specifications**: Detailed technical specifications of the watch
- **Pre-order Section**: Handles pre-order functionality
- **FAQ**: Comprehensive frequently asked questions
- **Support**: Customer support information and contact forms

## Development

- Built with Next.js 13+ for optimal performance and SEO
- Utilizes modern React patterns and best practices
- Implements responsive design principles
- Features client-side and server-side rendering where appropriate
- Includes comprehensive error handling

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

For support, please visit our [support page](https://qr-watch.com/support) or contact us at support@qr-watch.com.
