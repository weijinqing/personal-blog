<template>
  <div class="blog-container">
    <!-- 顶部导航栏 -->
    <header class="navbar">
      <div class="container">
        <h1 class="logo">我的博客</h1>
        <nav>
          <ul class="nav-links">
            <li><a href="#home">首页</a></li>
            <li><a href="#articles">文章</a></li>
            <li><a href="#about">关于</a></li>
            <li><a href="#contact">联系</a></li>
          </ul>
        </nav>
      </div>
    </header>

    <!-- 主要内容区域 -->
    <main class="main-content">
      <div class="container">
        <!-- 博客横幅 -->
        <section class="hero" id="home">
          <h2>欢迎来到我的个人博客</h2>
          <p>分享技术、生活和思考的地方</p>
        </section>

        <!-- 最新文章 -->
        <section class="latest-articles" id="articles">
          <h3>最新文章</h3>
          <div class="articles-grid">
            <article v-for="article in articles" :key="article.id" class="article-card">
              <img :src="article.imageUrl" :alt="article.title" class="article-image">
              <h4>{{ article.title }}</h4>
              <p class="article-date">{{ article.date }}</p>
              <p class="article-excerpt">{{ article.excerpt }}</p>
              <a href="#" class="read-more">阅读全文</a>
            </article>
          </div>
        </section>

        <!-- 关于我 -->
        <section class="about-section" id="about">
          <h3>关于我</h3>
          <div class="about-content">
            <img src="/vite.svg" alt="个人头像" class="about-image">
            <div class="about-text">
              <p>你好，我是一名热爱编程的开发者。</p>
              <p>我喜欢分享我的技术经验、学习心得和生活感悟。</p>
              <p>希望通过这个博客，能够与更多志同道合的朋友交流。</p>
            </div>
          </div>
        </section>

        <!-- 联系方式 -->
        <section class="contact-section" id="contact">
          <h3>联系我</h3>
          <div class="contact-form">
            <input type="text" placeholder="您的姓名" class="form-input">
            <input type="email" placeholder="您的邮箱" class="form-input">
            <textarea placeholder="请输入留言内容" class="form-textarea"></textarea>
            <button class="form-button">发送留言</button>
          </div>
        </section>
      </div>
    </main>

    <!-- 页脚 -->
    <footer class="footer">
      <div class="container">
        <p>&copy; 2024 我的个人博客. All rights reserved.</p>
        <div class="social-links">
          <a href="#" class="social-link">Github</a>
          <a href="#" class="social-link">掘金</a>
          <a href="#" class="social-link">知乎</a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

/**
 * 文章数据类型定义
 */
interface Article {
  id: number;
  title: string;
  date: string;
  excerpt: string;
  imageUrl: string;
}

/**
 * 博客文章数据
 */
const articles = ref<Article[]>([
  {
    id: 1,
    title: "Vue 3 Composition API 入门指南",
    date: "2024-09-15",
    excerpt: "本文介绍Vue 3 Composition API的基本用法和最佳实践，帮助你更好地理解和使用这个强大的特性。",
    imageUrl: "/vite.svg"
  },
  {
    id: 2,
    title: "TypeScript 高级类型详解",
    date: "2024-09-10",
    excerpt: "深入探讨TypeScript中的高级类型特性，包括泛型、条件类型、映射类型等，提升你的TypeScript编程能力。",
    imageUrl: "/vite.svg"
  },
  {
    id: 3,
    title: "前端性能优化实战技巧",
    date: "2024-09-05",
    excerpt: "分享一些实用的前端性能优化技巧，从代码层面到构建配置，全面提升你的网站加载速度和用户体验。",
    imageUrl: "/vite.svg"
  }
]);
</script>

<style scoped>
/* 全局容器样式 */
.blog-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

/* 导航栏样式 */
.navbar {
  background-color: #333;
  color: white;
  padding: 1rem 0;
}

.navbar .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.logo {
  font-size: 1.5rem;
  margin: 0;
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 1.5rem;
  margin: 0;
  padding: 0;
}

.nav-links a {
  color: white;
  text-decoration: none;
  transition: color 0.3s;
}

.nav-links a:hover {
  color: #42b983;
}

/* 主要内容样式 */
.main-content {
  flex: 1;
  padding: 2rem 0;
}

.main-content .container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* 横幅样式 */
.hero {
  text-align: center;
  padding: 4rem 0;
  background-color: #f5f5f5;
  margin-bottom: 2rem;
  border-radius: 8px;
}

.hero h2 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.hero p {
  font-size: 1.2rem;
  color: #666;
}

/* 文章列表样式 */
.latest-articles {
  margin-bottom: 3rem;
}

.latest-articles h3 {
  font-size: 2rem;
  margin-bottom: 1.5rem;
  text-align: center;
}

.articles-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
}

.article-card {
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
}

.article-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.article-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.article-card h4 {
  padding: 1rem;
  margin: 0;
  font-size: 1.3rem;
}

.article-date {
  padding: 0 1rem;
  color: #666;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
}

.article-excerpt {
  padding: 0 1rem 1rem;
  color: #333;
  line-height: 1.6;
}

.read-more {
  display: block;
  text-align: center;
  padding: 0.8rem;
  background-color: #42b983;
  color: white;
  text-decoration: none;
  font-weight: bold;
  transition: background-color 0.3s;
}

.read-more:hover {
  background-color: #35495e;
}

/* 关于我样式 */
.about-section {
  margin-bottom: 3rem;
}

.about-section h3 {
  font-size: 2rem;
  margin-bottom: 1.5rem;
  text-align: center;
}

.about-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
}

.about-image {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid #42b983;
}

.about-text {
  text-align: center;
  max-width: 800px;
}

.about-text p {
  margin-bottom: 1rem;
  line-height: 1.6;
}

/* 联系方式样式 */
.contact-section {
  margin-bottom: 3rem;
}

.contact-section h3 {
  font-size: 2rem;
  margin-bottom: 1.5rem;
  text-align: center;
}

.contact-form {
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.form-input,
.form-textarea {
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
}

.form-textarea {
  resize: vertical;
  min-height: 150px;
}

.form-button {
  padding: 0.8rem;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s;
}

.form-button:hover {
  background-color: #35495e;
}

/* 页脚样式 */
.footer {
  background-color: #333;
  color: white;
  padding: 2rem 0;
}

.footer .container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.social-links {
  display: flex;
  gap: 1.5rem;
}

.social-link {
  color: white;
  text-decoration: none;
  transition: color 0.3s;
}

.social-link:hover {
  color: #42b983;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .navbar .container {
    flex-direction: column;
    gap: 1rem;
  }
  
  .nav-links {
    flex-wrap: wrap;
    justify-content: center;
  }
  
  .hero h2 {
    font-size: 2rem;
  }
  
  .articles-grid {
    grid-template-columns: 1fr;
  }
}
</style>