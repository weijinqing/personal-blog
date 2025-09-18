<template>
  <div class="blog-container">
    <header class="navbar">
      <div class="container">
        <nav>
          <ul>
            <li><a href="#home">首页</a></li>
            <li><a href="#articles">文章</a></li>
            <li><a href="#about">关于我</a></li>
            <li><a href="#contact">联系我</a></li>
          </ul>
        </nav>
      </div>
    </header>
    
    <main class="main-content">
      <section class="hero" id="home">
        <div class="container">
          <h1>我的博客</h1>
          <p>欢迎来到我的个人博客网站</p>
        </div>
      </section>
      
      <section class="latest-articles" id="articles">
        <div class="container">
          <h2>最新文章</h2>
          <div class="article-list">
            <article v-for="article in articles" :key="article.id" class="article-card">
              <h3>{{ article.title }}</h3>
              <p class="article-meta">{{ article.date }} · {{ article.category }}</p>
              <p class="article-excerpt">{{ article.excerpt }}</p>
              <a href="#" class="read-more">阅读更多</a>
            </article>
          </div>
        </div>
      </section>
      
      <section class="about-section" id="about">
        <div class="container">
          <h2>关于我</h2>
          <div class="about-content">
            <img src="/vite.svg" alt="Profile Picture" class="profile-pic">
            <div class="bio">
              <p>你好，我是一名热爱编程和写作的开发者。这个博客是我分享技术知识、生活感悟和学习心得的地方。</p>
              <p>我主要关注前端开发、Vue框架、TypeScript等技术领域，希望通过这个平台与大家交流学习。</p>
            </div>
          </div>
        </div>
      </section>
      
      <section class="contact-section" id="contact">
        <div class="container">
          <h2>联系我</h2>
          <form class="contact-form">
            <div class="form-group">
              <label for="name">姓名</label>
              <input type="text" id="name" required>
            </div>
            <div class="form-group">
              <label for="email">邮箱</label>
              <input type="email" id="email" required>
            </div>
            <div class="form-group">
              <label for="message">留言</label>
              <textarea id="message" rows="5" required></textarea>
            </div>
            <button type="submit" class="submit-btn">发送</button>
          </form>
          <div class="social-links">
            <a href="#" class="social-link">GitHub</a>
            <a href="#" class="social-link">Twitter</a>
            <a href="#" class="social-link">LinkedIn</a>
          </div>
        </div>
      </section>
    </main>
    
    <footer class="footer">
      <div class="container">
        <p>&copy; 2024 我的个人博客. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
// 定义文章数据类型
interface Article {
  id: number;
  title: string;
  date: string;
  category: string;
  excerpt: string;
}

// 模拟文章数据
const articles: Article[] = [
  {
    id: 1,
    title: "Vue 3 Composition API 入门教程",
    date: "2024-09-15",
    category: "前端开发",
    excerpt: "本文将介绍 Vue 3 Composition API 的基本用法，包括 setup 函数、响应式数据、生命周期钩子等内容。"
  },
  {
    id: 2,
    title: "TypeScript 高级类型系统详解",
    date: "2024-09-10",
    category: "编程语言",
    excerpt: "深入探讨 TypeScript 的高级类型特性，如泛型、条件类型、映射类型等，提升代码类型安全性。"
  },
  {
    id: 3,
    title: "Vite 构建工具性能优化实践",
    date: "2024-09-05",
    category: "工程化",
    excerpt: "分享 Vite 构建工具的性能优化技巧，包括代码分割、按需加载、缓存策略等方面的实践经验。"
  }
];
</script>

<style scoped>
/* 容器样式 */
.blog-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

/* 导航栏样式 */
.navbar {
  background-color: #1e90ff;
  color: white;
  padding: 1rem 0;
  position: sticky;
  top: 0;
  z-index: 1000;
}

.navbar .container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.navbar nav ul {
  list-style: none;
  display: flex;
  gap: 2rem;
}

.navbar nav a {
  color: white;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
}

.navbar nav a:hover {
  color: #f0f0f0;
}

/* 主内容区样式 */
.main-content {
  flex: 1;
}

.main-content .container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

/* Hero 区域样式 */
.hero {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 6rem 0;
  text-align: center;
}

.hero h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.hero p {
  font-size: 1.25rem;
  opacity: 0.9;
}

/* 文章列表样式 */
.latest-articles {
  padding: 4rem 0;
}

.latest-articles h2 {
  font-size: 2rem;
  margin-bottom: 2rem;
  text-align: center;
}

.article-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
}

.article-card {
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.article-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.article-card h3 {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  padding: 1.5rem 1.5rem 0;
}

.article-meta {
  font-size: 0.875rem;
  color: #666;
  margin-bottom: 1rem;
  padding: 0 1.5rem;
}

.article-excerpt {
  padding: 0 1.5rem 1.5rem;
  color: #333;
  line-height: 1.6;
}

.read-more {
  display: inline-block;
  margin: 0 1.5rem 1.5rem;
  color: #667eea;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
}

.read-more:hover {
  color: #764ba2;
}

/* 关于我部分样式 */
.about-section {
  padding: 4rem 0;
  background-color: #f8f9fa;
}

.about-section h2 {
  font-size: 2rem;
  margin-bottom: 2rem;
  text-align: center;
}

.about-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
}

.profile-pic {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  border: 5px solid white;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.bio p {
  text-align: center;
  line-height: 1.8;
  max-width: 800px;
  margin-bottom: 1rem;
}

/* 联系我部分样式 */
.contact-section {
  padding: 4rem 0;
}

.contact-section h2 {
  font-size: 2rem;
  margin-bottom: 2rem;
  text-align: center;
}

.contact-form {
  max-width: 600px;
  margin: 0 auto 3rem;
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: #333;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  transition: border-color 0.3s ease;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #667eea;
}

.submit-btn {
  background-color: #667eea;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.submit-btn:hover {
  background-color: #764ba2;
}

.social-links {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
}

.social-link {
  color: #666;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
}

.social-link:hover {
  color: #667eea;
}

/* 页脚样式 */
.footer {
  background-color: #333;
  color: white;
  padding: 2rem 0;
  text-align: center;
}

.footer .container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.footer p {
  margin: 0;
  opacity: 0.8;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .navbar .container {
    flex-direction: column;
    padding: 0 1rem;
  }
  
  .navbar nav ul {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    margin-top: 1rem;
  }
  
  .hero {
    padding: 4rem 0;
  }
  
  .hero h1 {
    font-size: 2.5rem;
  }
  
  .main-content .container {
    padding: 0 1rem;
  }
  
  .article-list {
    grid-template-columns: 1fr;
  }
}
</style>