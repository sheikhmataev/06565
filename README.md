# 06565
Best taxi website in Norway


Color Pallette:
#522a5b
#923d67
#c95b66
#ef875e x
#ffbd5b
#f9f871

Greit, her er et teknisk utkast til en `README.md` for det nye prosjektet for 06565 Taxi. Denne versjonen er strippet for grunnleggende forklaringer og fokuserer på arkitektur, implementeringsstrategi og en avansert CI/CD-pipeline uten Vercel.

-----

# README: 06565 Taxi - Next Generation Web Platform

## 1\. Architectural Overview

This project implements a decoupled web application for 06565 Taxi, built on a modern JAMstack and serverless architecture. The primary goals are sub-second performance, high scalability, and a superior developer experience (DX).

The architecture utilizes Next.js as a hybrid framework, leveraging Static Site Generation (SSG) for content-heavy pages (blog, info pages) and Server-Side Rendering (SSR) or client-side rendering (CSR) for dynamic, interactive features like booking and price calculation. Next.js API Routes function as a Backend-for-Frontend (BFF), abstracting and securing communication with third-party services like the booking system and the headless CMS.

-----

## 2\. Core Technology Stack

  * **Framework**: Next.js 14+ (App Router)
  * **Language**: TypeScript
  * **Styling**: Tailwind CSS with Radix UI for unstyled, accessible components.
  * **State Management**: Zustand for minimal, hook-based client-side state management.
  * **Content Management**: Sanity.io (Headless CMS)
  * **Database**: PostgreSQL (via Supabase/Neon) for potential future features requiring persistent data beyond the CMS.
  * **ORM**: Prisma
  * **Validation**: Zod for end-to-end type-safe data validation (client form -\> BFF -\> external services).
  * **Deployment**: Docker container deployed on Google Cloud Run (or AWS Fargate).
  * **CI/CD**: GitHub Actions.

-----

## 3\. Feature Implementation Strategy

### a. Online Booking & Map Integration

The booking module is a critical, interactive component requiring robust state management and external API communication.

  * **Frontend Component**:

      * A multi-step form built as a single React Server Component (RSC) containing multiple Client Components.
      * State is managed by **Zustand**, handling form steps, user input, and API responses (loading/error states).
      * Form validation is handled client-side using **React Hook Form** with a **Zod** schema.
      * Map integration uses **`@vis.gl/react-google-maps`**. Address inputs will leverage the Google Maps Autocomplete service. A `debounce` function will be used to prevent excessive API calls during user input. Reverse geocoding will populate address fields when a user clicks directly on the map.

  * **Backend-for-Frontend (BFF)**:

      * A Next.js Route Handler (`/api/booking/create`) will serve as the endpoint.
      * The handler will re-validate the incoming payload against the same Zod schema used on the client for full-stack validation.
      * It will securely call the external `06565 Booking System API` using a server-only API key stored in environment variables. This abstracts the third-party API from the client, enhancing security.
      * Responses from the booking API will be formatted and returned to the client.

### b. Interactive Price Calculator

This feature provides an estimated fare based on route, time, and vehicle type.

  * **Frontend Component**:

      * Reuses the same map and address input components from the booking module.
      * Additional inputs for time of day (affects pricing tiers) and vehicle type (standard, maxi, etc.).

  * **BFF Endpoint**:

      * An API route (`/api/pricing/calculate`) will receive start/end coordinates, timestamp, and vehicle type.
      * It will first call the **Google Maps Distance Matrix API** to get the optimal route distance and estimated travel time.
      * The fare calculation logic will then be executed server-side based on predefined business rules (start fee, price per km, time-based tariffs, etc.). This logic resides solely on the server to protect business-sensitive pricing models.
      * The calculated estimate is returned to the client for display.

### c. Blog/News Module

This section will be highly optimized for SEO and performance using Static Site Generation.

  * **CMS (Sanity.io)**:

      * Schema definitions for `post`, `author`, and `category`.
      * Leverages Portable Text for rich content editing.
      * Webhooks will be configured to trigger on-demand revalidation in Next.js upon content changes.

  * **Frontend Implementation**:

      * The main blog page (`/nyheter`) will be statically generated (SSG) at build time using `generateStaticParams`.
      * Individual blog posts will use dynamic routes (`/nyheter/[slug]`). Each page will be statically generated.
      * **Incremental Static Revalidation (ISR)** will be enabled. Pages will be re-generated automatically in the background after a certain time (`revalidate` tag) or when a Sanity webhook is triggered, ensuring content is always fresh without requiring a full site rebuild.

-----

## 4\. Infrastructure & CI/CD Pipeline (Non-Vercel)

Deployment is managed through a containerized workflow using Docker and GitHub Actions, targeting a serverless container platform.

### a. Containerization (Dockerfile)

A multi-stage `Dockerfile` is used to create an optimized, production-ready image.

```dockerfile
# Stage 1: Dependencies
FROM node:18-alpine AS deps
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

# Stage 2: Builder
FROM node:18-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN yarn build

# Stage 3: Runner
FROM node:18-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

EXPOSE 3000
CMD ["yarn", "start"]
```

### b. CI/CD with GitHub Actions

The workflow file `.github/workflows/deploy.yml` automates the entire deployment process.

  * **Trigger**: Pushes to the `main` branch.
  * **Jobs**:
    1.  **Lint & Test**: Runs ESLint, Prettier, and Jest/Vitest tests.
    2.  **Build & Push**:
          * Authenticates with Google Cloud (or AWS).
          * Builds the Docker image using the `Dockerfile`.
          * Tags the image with the commit SHA.
          * Pushes the image to a container registry (e.g., Google Artifact Registry).
    3.  **Deploy**:
          * Uses the `gcloud` CLI to deploy the newly pushed image to **Cloud Run**.
          * Manages environment variables using Google Secret Manager.
          * Ensures zero-downtime deployments by gradually shifting traffic to the new revision.

**Example `deploy.yml` snippet:**

```yaml
name: Deploy to Cloud Run

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v3

      # ... (steps for auth, build, push to Artifact Registry) ...

      - name: Deploy to Cloud Run
        uses: google-github-actions/deploy-cloudrun@v1
        with:
          service: 'taxi-06565-web'
          region: 'europe-north1'
          image: 'europe-north1-docker.pkg.dev/PROJECT_ID/REPO/IMAGE:${{ github.sha }}'
          # env_vars from Google Secret Manager
```

-----

## 5\. Local Development

1.  **Clone the repository.**
2.  **Install dependencies**:
    ```bash
    yarn install
    ```
3.  **Set up environment variables**:
      * Copy `.env.example` to `.env.local`.
      * Populate with necessary keys (Google Maps API, Sanity project ID, Booking API endpoint/key).
4.  **Run the development server**:
    ```bash
    yarn dev
    ```
5.  **Access the application** at `http://localhost:3000`.
