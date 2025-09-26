import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, User, Tag, Search, Filter } from 'lucide-react';
import { blogPosts, categories, tags } from '../data/blogPosts';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedTag, setSelectedTag] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  React.useEffect(() => {
    document.title = 'Cleaning Tips & Guides Blog | LumiMaid Minneapolis';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Expert cleaning tips, guides, and advice from LumiMaid. Learn professional cleaning techniques, seasonal tips, and home maintenance advice for Minneapolis homes.');
    }

    // Add blog schema markup
    const blogSchema = {
      "@context": "https://schema.org",
      "@type": "Blog",
      "name": "LumiMaid Cleaning Blog",
      "description": "Professional cleaning tips and guides for Minneapolis homeowners",
      "url": "https://lumimaid.com/blog",
      "publisher": {
        "@type": "Organization",
        "name": "LumiMaid Cleaning Services",
        "logo": {
          "@type": "ImageObject",
          "url": "https://lumimaid.com/logo.jpg"
        }
      },
      "blogPost": blogPosts.map(post => ({
        "@type": "BlogPosting",
        "headline": post.title,
        "description": post.excerpt,
        "url": `https://lumimaid.com/blog/${post.slug}`,
        "datePublished": post.publishDate,
        "author": {
          "@type": "Organization",
          "name": post.author
        },
        "image": post.featuredImage,
        "keywords": post.keywords.join(", ")
      }))
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(blogSchema);
    document.head.appendChild(script);

    return () => {
      const existingScript = document.querySelector('script[type="application/ld+json"]');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesTag = !selectedTag || post.tags.includes(selectedTag);
    const matchesSearch = !searchTerm || 
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    return matchesCategory && matchesTag && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 via-white to-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              Cleaning Tips & Expert Guides
            </h1>
            <p className="text-xl text-slate-600 mb-8">
              Professional cleaning advice, seasonal tips, and home maintenance guides 
              from Minneapolis's trusted cleaning experts.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-md mx-auto relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-primary focus:border-transparent"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-slate-50 border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Categories */}
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-3">
                  <Filter className="w-4 h-4 text-slate-600" />
                  <span className="text-sm font-medium text-slate-700">Categories</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                        selectedCategory === category
                          ? 'bg-teal-primary text-white'
                          : 'bg-white text-slate-600 hover:bg-teal-primary/10 hover:text-teal-primary'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              {/* Tags */}
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-3">
                  <Tag className="w-4 h-4 text-slate-600" />
                  <span className="text-sm font-medium text-slate-700">Popular Tags</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => setSelectedTag('')}
                    className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                      !selectedTag
                        ? 'bg-slate-200 text-slate-700'
                        : 'bg-white text-slate-500 hover:bg-slate-100'
                    }`}
                  >
                    All Tags
                  </button>
                  {tags.slice(0, 8).map((tag) => (
                    <button
                      key={tag}
                      onClick={() => setSelectedTag(tag)}
                      className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                        selectedTag === tag
                          ? 'bg-teal-primary text-white'
                          : 'bg-white text-slate-500 hover:bg-teal-primary/10 hover:text-teal-primary'
                      }`}
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {filteredPosts.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-slate-600 text-lg">No articles found matching your criteria.</p>
                <button
                  onClick={() => {
                    setSelectedCategory('All');
                    setSelectedTag('');
                    setSearchTerm('');
                  }}
                  className="mt-4 text-teal-primary hover:text-teal-primary/80 font-medium"
                >
                  Clear all filters
                </button>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post) => (
                  <article key={post.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={post.featuredImage}
                        alt={post.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center space-x-4 text-sm text-slate-500 mb-3">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{new Date(post.publishDate).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{post.readTime} min read</span>
                        </div>
                      </div>
                      
                      <div className="mb-3">
                        <span className="inline-block bg-teal-primary/10 text-teal-primary px-3 py-1 rounded-full text-xs font-medium">
                          {post.category}
                        </span>
                      </div>
                      
                      <h2 className="text-xl font-bold text-slate-800 mb-3 line-clamp-2">
                        {post.title}
                      </h2>
                      
                      <p className="text-slate-600 mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <User className="w-4 h-4 text-slate-400" />
                          <span className="text-sm text-slate-500">{post.author}</span>
                        </div>
                        
                        <Link
                          to={`/blog/${post.slug}`}
                          className="text-teal-primary hover:text-teal-primary/80 font-medium text-sm"
                        >
                          Read More →
                        </Link>
                      </div>
                      
                      <div className="mt-4 pt-4 border-t border-slate-100">
                        <div className="flex flex-wrap gap-2">
                          {post.tags.slice(0, 3).map((tag) => (
                            <button
                              key={tag}
                              onClick={() => setSelectedTag(tag)}
                              className="text-xs text-slate-500 hover:text-teal-primary transition-colors"
                            >
                              #{tag}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              Stay Updated with Cleaning Tips
            </h2>
            <p className="text-slate-600 mb-8">
              Get the latest cleaning tips, seasonal guides, and exclusive offers 
              delivered to your inbox monthly.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-primary focus:border-transparent"
              />
              <button className="bg-teal-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-primary/90 transition-colors">
                Subscribe
              </button>
            </div>
            
            <p className="text-xs text-slate-500 mt-4">
              No spam, unsubscribe anytime. We respect your privacy.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;