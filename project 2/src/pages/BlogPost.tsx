import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, Clock, User, Tag, ArrowLeft, Share2 } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find(p => p.slug === slug);

  React.useEffect(() => {
    if (post) {
      document.title = `${post.title} | LumiMaid Blog`;
      
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', post.metaDescription);
      }

      // Add article schema markup
      const articleSchema = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": post.title,
        "description": post.excerpt,
        "image": post.featuredImage,
        "author": {
          "@type": "Organization",
          "name": post.author
        },
        "publisher": {
          "@type": "Organization",
          "name": "LumiMaid Cleaning Services",
          "logo": {
            "@type": "ImageObject",
            "url": "https://lumimaid.com/logo.jpg"
          }
        },
        "datePublished": post.publishDate,
        "dateModified": post.publishDate,
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": `https://lumimaid.com/blog/${post.slug}`
        },
        "keywords": post.keywords.join(", "),
        "articleSection": post.category,
        "wordCount": post.content.split(' ').length
      };

      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(articleSchema);
      document.head.appendChild(script);

      return () => {
        const existingScript = document.querySelector('script[type="application/ld+json"]');
        if (existingScript) {
          document.head.removeChild(existingScript);
        }
      };
    }
  }, [post]);

  if (!post) {
    return (
      <div className="min-h-screen bg-white pt-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center py-16">
            <h1 className="text-4xl font-bold text-slate-800 mb-4">Article Not Found</h1>
            <p className="text-slate-600 mb-8">The article you're looking for doesn't exist.</p>
            <Link
              to="/blog"
              className="bg-teal-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-primary/90 transition-colors"
            >
              Back to Blog
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: post.title,
          text: post.excerpt,
          url: window.location.href,
        });
      } catch (err) {
        console.log('Error sharing:', err);
      }
    } else {
      // Fallback to copying URL
      navigator.clipboard.writeText(window.location.href);
      alert('Article URL copied to clipboard!');
    }
  };

  // Convert markdown-style content to HTML
  const formatContent = (content: string) => {
    return content
      .replace(/^# (.*$)/gm, '<h1 class="text-3xl font-bold text-slate-800 mb-6 mt-8">$1</h1>')
      .replace(/^## (.*$)/gm, '<h2 class="text-2xl font-bold text-slate-800 mb-4 mt-8">$1</h2>')
      .replace(/^### (.*$)/gm, '<h3 class="text-xl font-semibold text-slate-800 mb-3 mt-6">$1</h3>')
      .replace(/^#### (.*$)/gm, '<h4 class="text-lg font-semibold text-slate-800 mb-2 mt-4">$1</h4>')
      .replace(/^\*\*(.*?)\*\*/gm, '<strong class="font-semibold text-slate-800">$1</strong>')
      .replace(/^\*(.*?)\*/gm, '<em class="italic">$1</em>')
      .replace(/^- \[ \] (.*$)/gm, '<div class="flex items-start space-x-2 mb-2"><input type="checkbox" class="mt-1" disabled><span class="text-slate-700">$1</span></div>')
      .replace(/^- (.*$)/gm, '<li class="text-slate-700 mb-2">$1</li>')
      .replace(/^(\d+)\. (.*$)/gm, '<li class="text-slate-700 mb-2">$2</li>')
      .replace(/\n\n/g, '</p><p class="text-slate-700 leading-relaxed mb-4">')
      .replace(/^\*Ready.*?\*$/gm, '<div class="bg-teal-primary/10 border-l-4 border-teal-primary p-6 my-8 rounded-r-lg"><p class="text-teal-primary font-medium italic">$&</p></div>');
  };

  const relatedPosts = blogPosts
    .filter(p => p.id !== post.id && (
      p.category === post.category || 
      p.tags.some(tag => post.tags.includes(tag))
    ))
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-24 pb-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link
              to="/blog"
              className="inline-flex items-center space-x-2 text-teal-primary hover:text-teal-primary/80 mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Blog</span>
            </Link>
            
            <div className="mb-6">
              <span className="inline-block bg-teal-primary/10 text-teal-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
                {post.category}
              </span>
              
              <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6 leading-tight">
                {post.title}
              </h1>
              
              <p className="text-xl text-slate-600 mb-6 leading-relaxed">
                {post.excerpt}
              </p>
              
              <div className="flex flex-wrap items-center gap-6 text-sm text-slate-500">
                <div className="flex items-center space-x-2">
                  <User className="w-4 h-4" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4" />
                  <span>{new Date(post.publishDate).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4" />
                  <span>{post.readTime} min read</span>
                </div>
                <button
                  onClick={handleShare}
                  className="flex items-center space-x-2 text-teal-primary hover:text-teal-primary/80"
                >
                  <Share2 className="w-4 h-4" />
                  <span>Share</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="pb-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="aspect-video rounded-2xl overflow-hidden shadow-xl">
              <img
                src={post.featuredImage}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <div 
                className="article-content"
                dangerouslySetInnerHTML={{ 
                  __html: `<p class="text-slate-700 leading-relaxed mb-4">${formatContent(post.content)}</p>` 
                }}
              />
            </div>
            
            {/* Tags */}
            <div className="mt-12 pt-8 border-t border-slate-200">
              <div className="flex items-center space-x-2 mb-4">
                <Tag className="w-5 h-5 text-slate-600" />
                <span className="font-medium text-slate-700">Tags:</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <Link
                    key={tag}
                    to={`/blog?tag=${encodeURIComponent(tag)}`}
                    className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-sm hover:bg-teal-primary/10 hover:text-teal-primary transition-colors"
                  >
                    #{tag}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-slate-800 mb-12 text-center">
                Related Articles
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {relatedPosts.map((relatedPost) => (
                  <article key={relatedPost.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={relatedPost.featuredImage}
                        alt={relatedPost.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    
                    <div className="p-6">
                      <div className="mb-3">
                        <span className="inline-block bg-teal-primary/10 text-teal-primary px-3 py-1 rounded-full text-xs font-medium">
                          {relatedPost.category}
                        </span>
                      </div>
                      
                      <h3 className="text-lg font-bold text-slate-800 mb-3 line-clamp-2">
                        {relatedPost.title}
                      </h3>
                      
                      <p className="text-slate-600 mb-4 line-clamp-2 text-sm">
                        {relatedPost.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2 text-xs text-slate-500">
                          <Clock className="w-3 h-3" />
                          <span>{relatedPost.readTime} min</span>
                        </div>
                        
                        <Link
                          to={`/blog/${relatedPost.slug}`}
                          className="text-teal-primary hover:text-teal-primary/80 font-medium text-sm"
                        >
                          Read More →
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 bg-teal-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready for Professional Cleaning?
            </h2>
            <p className="text-teal-100 mb-8 text-lg">
              Put these tips into action or let our professional team handle the cleaning 
              while you focus on what matters most to you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/book"
                className="bg-white text-teal-primary px-8 py-4 rounded-lg text-lg font-semibold hover:bg-teal-primary/10 transition-colors"
              >
                Book Cleaning Service
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-teal-primary transition-colors"
              >
                Get Free Quote
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPost;