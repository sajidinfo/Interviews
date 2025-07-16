
---

## **Next.js Interview Questions**  

### **1. Next.js Basics**  
#### **Q14: What is Next.js?**  
**A:** Next.js is a **React framework** for building server-rendered (SSR), static (SSG), and hybrid web apps with features like:  
- File-based routing (`/pages/about.js` → `/about`).  
- API routes (`/pages/api/hello.js`).  
- Built-in CSS/Sass support.  

#### **Q15: What are the benefits of Next.js over plain React?**  
**A:**  
- **Server-Side Rendering (SSR):** Better SEO & performance.  
- **Static Site Generation (SSG):** Pre-rendered pages at build time.  
- **API Routes:** Backend logic in the same project.  
- **Image Optimization:** Automatic `next/image` optimizations.  

---

### **2. Rendering Methods**  
#### **Q16: What’s the difference between SSR, SSG, and CSR in Next.js?**  
**A:**  
| **SSR (Server-Side Rendering)** | **SSG (Static Site Generation)** | **CSR (Client-Side Rendering)** |  
|--------------------------------|--------------------------------|--------------------------------|  
| Rendered on each request | Rendered at build time | Rendered in the browser (React default) |  
| Good for dynamic content (e.g., dashboards) | Good for blogs, marketing sites | Good for highly interactive apps |  

#### **Q17: How do you implement SSR in Next.js?**  
**A:** Use `getServerSideProps`:  
```js
export async function getServerSideProps(context) {
  const res = await fetch('https://api.example.com/data');
  const data = await res.json();
  return { props: { data } };
}
```

#### **Q18: How do you implement SSG in Next.js?**  
**A:** Use `getStaticProps` (and `getStaticPaths` for dynamic routes):  
```js
export async function getStaticProps() {
  return { props: { data: [] } };
}
```

---

### **3. Routing & API Routes**  
#### **Q19: How does file-based routing work in Next.js?**  
**A:** Files in `/pages` automatically become routes:  
- `/pages/index.js` → `/`  
- `/pages/about.js` → `/about`  
- `/pages/blog/[slug].js` → `/blog/1` (dynamic route)  

#### **Q20: How do you create an API route in Next.js?**  
**A:** Add a file in `/pages/api`:  
```js
// pages/api/hello.js
export default (req, res) => res.status(200).json({ message: 'Hello' });
```
Access via `/api/hello`.  

---

### **4. Performance & Optimization**  
#### **Q21: How does Next.js optimize images?**  
**A:** Using the `next/image` component:  
```jsx
<Image src="/logo.png" width={500} height={300} alt="Logo" />
```
- Automatic format optimization (WebP).  
- Lazy loading.  

#### **Q22: What is Incremental Static Regeneration (ISR)?**  
**A:** A hybrid of SSG and SSR where pages are regenerated in the background after a timeout.  
```js
export async function getStaticProps() {
  return { props: {}, revalidate: 60 }; // Rebuild every 60s
}
```

---

## **Summary Table**  
| Topic | Key Points |  
|-------|-----------|  
| **React** | Components, JSX, Hooks, Virtual DOM |  
| **Next.js** | SSR, SSG, API Routes, File-based Routing |  
| **Performance** | `next/image`, ISR, Lazy Loading |  

---
