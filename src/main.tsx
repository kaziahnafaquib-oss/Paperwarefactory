import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app/App.tsx'
import './styles/index.css'
import { PerformanceMonitor } from './app/components/PerformanceMonitor.tsx'

// Report web vitals
if (import.meta.env.DEV) {
  // Dynamic import for development only
  import('./app/lib/performance').then(({ reportWebVitals }) => {
    // Measure Core Web Vitals
    if ('PerformanceObserver' in window) {
      // Largest Contentful Paint
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1] as any;
        reportWebVitals({ name: 'LCP', value: lastEntry.renderTime || lastEntry.loadTime });
      });
      
      try {
        lcpObserver.observe({ type: 'largest-contentful-paint', buffered: true });
      } catch (e) {
        console.log('LCP not supported');
      }
    }
  });
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
    {import.meta.env.DEV && <PerformanceMonitor />}
  </React.StrictMode>,
)