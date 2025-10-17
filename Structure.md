## Lillehammer Taxi Website - Complete Structure Plan

### **1. Main Pages & Navigation Structure**

#### **Primary Pages:**
- **Homepage** (`/`) - Main landing page
- **Booking** (`/bestill`) - Online booking system
- **Price Calculator** (`/pris`) - Interactive pricing tool
- **Services** (`/tjenester`) - Service offerings
- **About Us** (`/om-oss`) - Company information
- **Contact** (`/kontakt`) - Contact information and locations
- **News/Blog** (`/nyheter`) - Blog and news section
- **Fleet** (`/bilpark`) - Vehicle information

#### **Secondary Pages:**
- **Individual Blog Posts** (`/nyheter/[slug]`)
- **Service Details** (`/tjenester/[service-slug]`)
- **Terms & Conditions** (`/vilkar`)
- **Privacy Policy** (`/personvern`)
- **Accessibility** (`/tilgjengelighet`)

---

### **2. Homepage Layout Structure**

```
┌─────────────────────────────────────────────────────────┐
│                    Header/Navigation                     │
├─────────────────────────────────────────────────────────┤
│                    Hero Section                         │
│  - Main headline with Lillehammer Taxi branding               │
│  - Quick booking form (pickup/destination)             │
│  - Call-to-action buttons                              │
├─────────────────────────────────────────────────────────┤
│                    Services Overview                    │
│  - Airport transfers                                   │
│  - City rides                                          │
│  - Corporate services                                  │
│  - Special events                                      │
├─────────────────────────────────────────────────────────┤
│                    Why Choose Us                       │
│  - 24/7 availability                                  │
│  - Professional drivers                               │
│  - Modern fleet                                       │
│  - Fixed pricing                                      │
├─────────────────────────────────────────────────────────┤
│                    Quick Stats                         │
│  - Years in business                                  │
│  - Rides completed                                    │
│  - Customer satisfaction                              │
├─────────────────────────────────────────────────────────┤
│                    Recent News                         │
│  - Latest blog posts preview                          │
├─────────────────────────────────────────────────────────┤
│                    Footer                              │
│  - Contact info                                       │
│  - Quick links                                        │
│  - Social media                                       │
└─────────────────────────────────────────────────────────┘
```

---

### **3. Booking Page Structure**

```
┌─────────────────────────────────────────────────────────┐
│                    Header/Navigation                     │
├─────────────────────────────────────────────────────────┤
│                    Booking Form                         │
│  ┌─────────────────┐  ┌─────────────────┐              │
│  │   Step 1:       │  │   Step 2:       │              │
│  │   Pickup        │  │   Destination   │              │
│  │   Location      │  │   Location      │              │
│  └─────────────────┘  └─────────────────┘              │
│  ┌─────────────────┐  ┌─────────────────┐              │
│  │   Step 3:       │  │   Step 4:       │              │
│  │   Date & Time   │  │   Vehicle Type  │              │
│  │   Selection     │  │   & Extras      │              │
│  └─────────────────┘  └─────────────────┘              │
│  ┌─────────────────┐  ┌─────────────────┐              │
│  │   Step 5:       │  │   Step 6:       │              │
│  │   Contact Info  │  │   Confirmation  │              │
│  │   & Special     │  │   & Payment     │              │
│  │   Requests      │  │   Details       │              │
│  └─────────────────┘  └─────────────────┘              │
├─────────────────────────────────────────────────────────┤
│                    Interactive Map                      │
│  - Google Maps integration                             │
│  - Route visualization                                 │
│  - Distance/time estimates                             │
├─────────────────────────────────────────────────────────┤
│                    Footer                              │
└─────────────────────────────────────────────────────────┘
```

---

### **4. Price Calculator Page Structure**

```
┌─────────────────────────────────────────────────────────┐
│                    Header/Navigation                     │
├─────────────────────────────────────────────────────────┤
│                    Calculator Form                      │
│  ┌─────────────────┐  ┌─────────────────┐              │
│  │   From:        │  │   To:           │              │
│  │   [Address]     │  │   [Address]     │              │
│  └─────────────────┘  └─────────────────┘              │
│  ┌─────────────────┐  ┌─────────────────┐              │
│  │   Date:        │  │   Time:         │              │
│  │   [Calendar]    │  │   [Time Picker] │              │
│  └─────────────────┘  └─────────────────┘              │
│  ┌─────────────────┐  ┌─────────────────┐              │
│  │   Vehicle:     │  │   Extras:       │              │
│  │   [Dropdown]    │  │   [Checkboxes]  │              │
│  └─────────────────┘  └─────────────────┘              │
├─────────────────────────────────────────────────────────┤
│                    Price Estimate                       │
│  ┌─────────────────────────────────────────────────────┐│
│  │                Estimated Price                      ││
│  │                NOK 450 - 550                        ││
│  │                (Based on current traffic)           ││
│  └─────────────────────────────────────────────────────┘│
├─────────────────────────────────────────────────────────┤
│                    Route Map                            │
│  - Interactive map with route                          │
│  - Distance and time estimates                         │
│  - Alternative routes                                  │
├─────────────────────────────────────────────────────────┤
│                    Footer                              │
└─────────────────────────────────────────────────────────┘
```

---

### **5. Component Architecture**

#### **Core Components:**
```
src/
├── components/
│   ├── ui/                    # Radix UI components
│   │   ├── Button.tsx
│   │   ├── Input.tsx
│   │   ├── Select.tsx
│   │   ├── Calendar.tsx
│   │   └── Dialog.tsx
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── Navigation.tsx
│   │   └── MobileMenu.tsx
│   ├── forms/
│   │   ├── BookingForm.tsx
│   │   ├── PriceCalculator.tsx
│   │   ├── ContactForm.tsx
│   │   └── NewsletterForm.tsx
│   ├── maps/
│   │   ├── GoogleMap.tsx
│   │   ├── AddressAutocomplete.tsx
│   │   └── RouteVisualization.tsx
│   ├── content/
│   │   ├── BlogCard.tsx
│   │   ├── ServiceCard.tsx
│   │   ├── TestimonialCard.tsx
│   │   └── StatsCard.tsx
│   └── sections/
│       ├── HeroSection.tsx
│       ├── ServicesSection.tsx
│       ├── AboutSection.tsx
│       └── NewsSection.tsx
```

---

### **6. API Structure**

#### **Backend-for-Frontend (BFF) Endpoints:**
```
/api/
├── booking/
│   ├── create/               # POST - Create new booking
│   ├── status/[id]/          # GET - Check booking status
│   └── cancel/[id]/          # DELETE - Cancel booking
├── pricing/
│   ├── calculate/            # POST - Calculate fare estimate
│   └── rates/                # GET - Get current rates
├── maps/
│   ├── geocode/              # POST - Address to coordinates
│   ├── reverse-geocode/      # POST - Coordinates to address
│   └── directions/           # POST - Get route directions
├── content/
│   ├── blog/                 # GET - Blog posts
│   ├── blog/[slug]/          # GET - Individual post
│   └── services/             # GET - Service listings
└── contact/
    └── submit/               # POST - Contact form submission
```

---

### **7. State Management Structure**

#### **Zustand Stores:**
```
stores/
├── bookingStore.ts           # Booking form state
├── pricingStore.ts          # Price calculator state
├── mapStore.ts              # Map interactions
├── uiStore.ts               # UI state (modals, loading)
└── contentStore.ts          # CMS content cache
```

---

### **8. Development Phases**

#### **Phase 1: Foundation (Weeks 1-2)**
- Project setup with Next.js 14 + TypeScript
- Tailwind CSS + Radix UI configuration
- Basic layout components (Header, Footer, Navigation)
- Homepage static content
- Basic routing structure

#### **Phase 2: Core Pages (Weeks 3-4)**
- Services page with static content
- About Us page
- Contact page with basic form
- Blog/news listing page
- Individual blog post pages

#### **Phase 3: Interactive Features (Weeks 5-6)**
- Google Maps integration
- Address autocomplete components
- Basic booking form (UI only)
- Price calculator form (UI only)
- Form validation with Zod

#### **Phase 4: API Integration (Weeks 7-8)**
- BFF API routes setup
- Google Maps API integration
- Booking API integration (when available)
- Pricing API integration (when available)
- Error handling and loading states

#### **Phase 5: Content Management (Weeks 9-10)**
- Sanity.io CMS setup
- Blog content schema
- Webhook integration for content updates
- ISR implementation for blog posts

#### **Phase 6: Optimization & Deployment (Weeks 11-12)**
- Performance optimization
- SEO implementation
- Docker containerization
- CI/CD pipeline setup
- Production deployment

---

### **9. Color Palette Implementation**

The color palette from your README will be implemented as Tailwind CSS custom colors:

```css
:root {
  --color-primary-1: #522a5b;
  --color-primary-2: #923d67;
  --color-primary-3: #c95b66;
  --color-accent-1: #ef875e;
  --color-accent-2: #ffbd5b;
  --color-accent-3: #f9f871;
}
```

---

### **10. Responsive Design Strategy**

- **Mobile-first approach** with Tailwind CSS
- **Breakpoints**: sm (640px), md (768px), lg (1024px), xl (1280px), 2xl (1536px)
- **Navigation**: Hamburger menu on mobile, full navigation on desktop
- **Forms**: Stacked layout on mobile, side-by-side on desktop
- **Maps**: Full-width on mobile, sidebar layout on desktop
