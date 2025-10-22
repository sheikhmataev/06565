# ✅ News Content Now Synchronized

## What Changed

The "Siste Nytt" section on your homepage now displays the exact same 3 posts shown in your "Nyhetsarkiv" (news archive) page. They both pull from a single source of truth.

---

## Implementation

### 1. Created Shared Data Source
**File**: `src/data/news.ts`
- Centralized location for all news posts
- Includes TypeScript interface `NewsPost` for type safety
- Easy to add more posts in the future

### 2. Updated Homepage
**File**: `src/components/sections/NewsSection.tsx`
- Now imports from `@/data/news`
- Uses `.slice(0, 3)` to show only the 3 most recent posts
- Displays same content as Nyhetsarkiv

### 3. Updated News Archive
**File**: `src/app/nyheter/page.tsx`
- Now imports from `@/data/news`
- Shows all posts (currently 3, but can be expanded)

---

## Current News Posts

1. **Nyeste taxisjåfør i Øyer** (18. oktober 2025)
   - Image: news-1.jpeg
   - About Malik R. Dagijev

2. **Ansatt på drosjesentralen holdte på å miste det** (15. oktober 2025)
   - Image: samad.png
   - Night shift incident

3. **Ansatt tiltalt for korrupsjon** (12. oktober 2025)
   - Image: bilal.jpeg
   - About Bilal R. Mataev

---

## How to Add More News Posts

Simply edit `src/data/news.ts` and add new posts to the array:

```typescript
export const newsPosts: NewsPost[] = [
  {
    image: "/assets/your-new-image.jpg",
    category: "Nyheter", // or "Lokalt", "Teknologi", etc.
    date: "25. oktober 2025",
    title: "Your News Title",
    excerpt: "Your news excerpt...",
  },
  // ... existing posts
];
```

**Note**: The homepage will automatically show the first 3 posts, while the Nyhetsarkiv page shows all posts.

---

## ✅ Verified Working

- ✅ Homepage shows same 3 posts as Nyhetsarkiv
- ✅ All images have correct paths with `/06565/` basePath for GitHub Pages
- ✅ TypeScript types ensure data consistency
- ✅ Single source of truth - update once, reflects everywhere

---

## Benefits

1. **Consistency**: Homepage and news page always show the same content
2. **Easy Maintenance**: Add news in one place, appears in both locations
3. **Type Safety**: TypeScript ensures all posts have required fields
4. **Scalability**: Easy to add more posts or even connect to a CMS later

