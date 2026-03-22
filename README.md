
# 🌍 Airbnb Guidebook Template

A reusable, developer-friendly template for creating digital Airbnb guidebooks. This project helps hosts organize and share local recommendations, activities, and essential information with their guests.

## Installation
Pre-requisite: nodejs

#### Install Dependencies
``` npm install
```

#### Running the project
``` npm run dev
```

## Technologies Used
- React: For building the user interface.
- Tailwind CSS: For the "Luxury" styling and layout.
- Framer Motion (motion/react): For the smooth fades, carousel transitions, and FAQ animations.
- Lucide React: For the high-quality icons.
- TypeScript: To ensure the code is bug-free and easy to read.

## Structure

```text
casa-brisas-guide/
├── public/                 # Static assets (not processed by the code)
│   └── assets/             # High-quality videos and house photos
├── src/                    # Main source code
│   ├── components.tsx      # UI library (Navbar, Hero, Cards)
│   ├── constants.ts        # Data layer (all text and content)
│   ├── MapView.tsx         # Interactive map logic
│   ├── App.tsx             # Routing and page layouts
│   ├── index.css           # Global styles and Tailwind config
│   └── lib/                # Utility functions
│       └── utils.ts        # Helper for merging CSS classes (cn)
├── package.json            # Project dependencies (Framer Motion, Lucide, etc.)
└── tsconfig.json           # TypeScript configuration

## Detailed File Breakdown

### 1. `src/constants.ts` (The Data)

**Purpose:**  
Acts as your content management system. Stores all hard-coded text, image URLs, coordinates, and lists.

**What to change here:**
- Add or remove recommendations (restaurants, beaches)
- Update house instructions (WiFi, AC rules)
- Modify the amenities list (kitchen, bathroom features)
- Add new FAQs

---

### 2. `src/App.tsx` (The Pages)

**Purpose:**  
Handles navigation (routing) and layout of the different pages.

**Key parts:**
- **HomePage** – Video hero and image carousel
- **GuidePage** – House instructions, amenities grid, and FAQ accordion
- **RecommendationsPage** – Filtering (e.g. beaches only) + list/map toggle
- **ScrollToTop** – Ensures page scrolls to top on navigation

---

### 3. `src/components.tsx` (The Design)

**Purpose:**  
Contains reusable UI building blocks.

**Components:**
- **Navbar** – Fixed top navigation
- **Hero** – Video background with welcome text
- **Cards** – Standardized layouts for instructions and recommendations
- **Icons** – Uses `lucide-react` for modern icons

---

### 4. `src/MapView.tsx` (The Interactive Map)

**Purpose:**  
Handles map integration (e.g. Leaflet or Mapbox).

**Functionality:**
- Uses `lat` and `lng` from `constants.ts`
- Displays markers for locations
- Helps guests navigate the area (e.g. Hacienda Pinilla)

---

## 🛠 How to Customize Your Guide

### Change a Photo or Video

1. Add your file to: src/assets

2. Update the path in:
- `App.tsx` (carousel)
- `components.tsx` (hero video)

```html
src="/assets/your-new-video.mp4" 
```

### Add a New Restaurant
1. Open src/constants.ts
2. Find the RECOMMENDATIONS array
3. Copy an existing item and update:
- name
- description 
- lat
- lng

Step 1: Find the Coordinates (Lat/Lng)
Go to Google Maps.
Right-click on the exact spot you want to add.
The first numbers you see (e.g., 10.2314, -85.8352) are the Latitude and Longitude.
Click them to copy them.