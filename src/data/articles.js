export const articlesData = {
  fashion: {
    heroImage: 'https://via.placeholder.com/1200x300?text=Fashion+Category',
    featured: [
      { image: 'https://via.placeholder.com/800x400?text=Fashion+Featured+1', title: 'Spring Collection 2025', teaser: 'Discover the latest trends in fashion this spring', slug: 'spring-collection-2025' },
      { image: 'https://via.placeholder.com/800x400?text=Fashion+Featured+2', title: 'Sustainable Fashion Brands', teaser: 'Learn about eco-friendly fashion choices', slug: 'sustainable-fashion-brands' },
    ],
    latest: [
      { image: 'https://via.placeholder.com/400x250?text=Fashion+Latest+1', title: 'Vintage Styles Revival', teaser: 'How retro fashion is making a comeback', slug: 'vintage-styles-revival' },
      { image: 'https://via.placeholder.com/400x250?text=Fashion+Latest+2', title: 'Accessorizing Like a Pro', teaser: 'Tips to elevate your look with accessories', slug: 'accessorizing-like-a-pro' },
    ],
    trendingTags: ['Runway', 'Designers', 'Sustainability', 'Streetwear'],
  },
  food: {
    heroImage: 'https://via.placeholder.com/1200x300?text=Food+Category',
    featured: [
      { image: 'https://via.placeholder.com/800x400?text=Food+Featured+1', title: 'Easy Summer Recipes', teaser: 'Quick and delicious meals for hot days', slug: 'easy-summer-recipes' },
      { image: 'https://via.placeholder.com/800x400?text=Food+Featured+2', title: 'Vegan Baking Tips', teaser: 'How to make your desserts vegan-friendly', slug: 'vegan-baking-tips' },
    ],
    latest: [
      { image: 'https://via.placeholder.com/400x250?text=Food+Latest+1', title: 'Homemade Pasta', teaser: 'Step-by-step guide to fresh pasta', slug: 'homemade-pasta' },
      { image: 'https://via.placeholder.com/400x250?text=Food+Latest+2', title: 'Exotic Spices', teaser: 'Add new flavors to your cooking', slug: 'exotic-spices' },
    ],
    trendingTags: ['Recipes', 'Vegan', 'Quick Meals', 'Desserts'],
  },
  entertainment: {
    heroImage: 'https://via.placeholder.com/1200x300?text=Entertainment+Category',
    featured: [
      { image: 'https://via.placeholder.com/800x400?text=Entertainment+Featured+1', title: 'Top Movies This Month', teaser: 'Must-watch films in theaters now', slug: 'top-movies-this-month' },
      { image: 'https://via.placeholder.com/800x400?text=Entertainment+Featured+2', title: 'Celebrity Interviews', teaser: 'Exclusive talks with your favorite stars', slug: 'celebrity-interviews' },
    ],
    latest: [
      { image: 'https://via.placeholder.com/400x250?text=Entertainment+Latest+1', title: 'Award Show Highlights', teaser: 'Best moments from the latest awards', slug: 'award-show-highlights' },
      { image: 'https://via.placeholder.com/400x250?text=Entertainment+Latest+2', title: 'Upcoming Concerts', teaser: 'Don’t miss these live performances', slug: 'upcoming-concerts' },
    ],
    trendingTags: ['Movies', 'Music', 'Celebrities', 'TV Shows'],
  },
  sports: {
    heroImage: 'https://via.placeholder.com/1200x300?text=Sports+Category',
    featured: [
      { image: 'https://via.placeholder.com/800x400?text=Sports+Featured+1', title: 'Championship Recap', teaser: 'Highlights from the latest games', slug: 'championship-recap' },
      { image: 'https://via.placeholder.com/800x400?text=Sports+Featured+2', title: 'Athlete Profiles', teaser: 'Get to know the top players', slug: 'athlete-profiles' },
    ],
    latest: [
      { image: 'https://via.placeholder.com/400x250?text=Sports+Latest+1', title: 'Training Tips', teaser: 'Improve your skills with these exercises', slug: 'training-tips' },
      { image: 'https://via.placeholder.com/400x250?text=Sports+Latest+2', title: 'Upcoming Matches', teaser: 'Mark your calendar for big events', slug: 'upcoming-matches' },
    ],
    trendingTags: ['Football', 'Basketball', 'Olympics', 'Fitness'],
  },
  tech: {
    heroImage: 'https://via.placeholder.com/1200x300?text=Tech+Category',
    featured: [
      { image: 'https://via.placeholder.com/800x400?text=Tech+Featured+1', title: 'Latest Gadgets 2025', teaser: 'New tech releases you should know about', slug: 'latest-gadgets-2025' },
      { image: 'https://via.placeholder.com/800x400?text=Tech+Featured+2', title: 'AI Innovations', teaser: 'How AI is changing the world', slug: 'ai-innovations' },
    ],
    latest: [
      { image: 'https://via.placeholder.com/400x250?text=Tech+Latest+1', title: 'Smart Home Tips', teaser: 'Make your house smarter easily', slug: 'smart-home-tips' },
      { image: 'https://via.placeholder.com/400x250?text=Tech+Latest+2', title: 'Programming Trends', teaser: 'What’s hot in coding this year', slug: 'programming-trends' },
    ],
    trendingTags: ['Gadgets', 'AI', 'Software', 'Reviews'],
  },
  fiction: {
    heroImage: 'https://via.placeholder.com/1200x300?text=Fiction+Category',
    featured: [
      { image: 'https://via.placeholder.com/800x400?text=Fiction+Featured+1', title: 'Mystery Short Story', teaser: 'A thrilling tale to keep you guessing', slug: 'mystery-short-story' },
      { image: 'https://via.placeholder.com/800x400?text=Fiction+Featured+2', title: 'Romantic Novella', teaser: 'A love story that touches the heart', slug: 'romantic-novella' },
    ],
    latest: [
      { image: 'https://via.placeholder.com/400x250?text=Fiction+Latest+1', title: 'Fantasy Excerpt', teaser: 'Dive into a magical world', slug: 'fantasy-excerpt' },
      { image: 'https://via.placeholder.com/400x250?text=Fiction+Latest+2', title: 'Sci-Fi Chapter', teaser: 'Explore the future of humanity', slug: 'sci-fi-chapter' },
    ],
    trendingTags: ['Mystery', 'Romance', 'Fantasy', 'Sci-Fi'],
  },
};

// Flatten all articles for Article page lookup
export const allArticles = Object.entries(articlesData).flatMap(([category, catData]) =>
  [...catData.featured, ...catData.latest].map(a => ({
    slug: a.slug,
    title: a.title,
    content: a.teaser,
    category: category.charAt(0).toUpperCase() + category.slice(1),
  }))
);
