// Performance utilities for optimizing loading and runtime performance

// Lazy load images with intersection observer
export function lazyLoadImage(
  img: HTMLImageElement,
  src: string,
  placeholder?: string
) {
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const image = entry.target as HTMLImageElement;
          image.src = src;
          observer.unobserve(image);
        }
      });
    });
    
    if (placeholder) {
      img.src = placeholder;
    }
    observer.observe(img);
  } else {
    // Fallback for browsers without IntersectionObserver
    img.src = src;
  }
}

// Debounce function for expensive operations
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout;
  return function executedFunction(...args: Parameters<T>) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Throttle function for scroll/resize handlers
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean;
  return function executedFunction(...args: Parameters<T>) {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

// Preload critical resources
export function preloadResource(href: string, as: string, type?: string) {
  const link = document.createElement('link');
  link.rel = 'preload';
  link.href = href;
  link.as = as;
  if (type) {
    link.type = type;
  }
  document.head.appendChild(link);
}

// Prefetch low-priority resources
export function prefetchResource(href: string) {
  const link = document.createElement('link');
  link.rel = 'prefetch';
  link.href = href;
  document.head.appendChild(link);
}

// Check if user prefers reduced motion
export function prefersReducedMotion(): boolean {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

// Get device performance tier (low, medium, high)
export function getDevicePerformanceTier(): 'low' | 'medium' | 'high' {
  // Check hardware concurrency (CPU cores)
  const cores = navigator.hardwareConcurrency || 1;
  
  // Check memory (if available)
  const memory = (navigator as any).deviceMemory || 4;
  
  // Check connection speed
  const connection = (navigator as any).connection;
  const effectiveType = connection?.effectiveType || '4g';
  
  if (cores <= 2 || memory <= 2 || effectiveType === 'slow-2g' || effectiveType === '2g') {
    return 'low';
  } else if (cores <= 4 || memory <= 4 || effectiveType === '3g') {
    return 'medium';
  }
  
  return 'high';
}

// Measure and report web vitals
export function reportWebVitals(metric: any) {
  if (import.meta.env.DEV) {
    console.log(`[Web Vital] ${metric.name}:`, metric.value);
  }
  // In production, you would send this to an analytics service
}

// Create a promise that resolves when the DOM is loaded
export function waitForDOMReady(): Promise<void> {
  return new Promise((resolve) => {
    if (document.readyState === 'complete' || document.readyState === 'interactive') {
      resolve();
    } else {
      document.addEventListener('DOMContentLoaded', () => resolve());
    }
  });
}

// Idle callback wrapper for low-priority tasks
export function runWhenIdle(callback: () => void, timeout = 2000) {
  if ('requestIdleCallback' in window) {
    (window as any).requestIdleCallback(callback, { timeout });
  } else {
    setTimeout(callback, 1);
  }
}

// Cache manager for localStorage with size limits
export class CacheManager {
  private maxSize: number;
  private prefix: string;

  constructor(prefix = 'cache_', maxSizeMB = 5) {
    this.prefix = prefix;
    this.maxSize = maxSizeMB * 1024 * 1024; // Convert to bytes
  }

  set(key: string, value: any, ttl?: number): boolean {
    try {
      const item = {
        value,
        timestamp: Date.now(),
        ttl,
      };
      const serialized = JSON.stringify(item);
      
      // Check size
      if (serialized.length > this.maxSize) {
        console.warn(`Cache item too large: ${key}`);
        return false;
      }
      
      localStorage.setItem(this.prefix + key, serialized);
      return true;
    } catch (error) {
      console.error('Cache set error:', error);
      return false;
    }
  }

  get(key: string): any {
    try {
      const item = localStorage.getItem(this.prefix + key);
      if (!item) return null;
      
      const parsed = JSON.parse(item);
      
      // Check TTL
      if (parsed.ttl && Date.now() - parsed.timestamp > parsed.ttl) {
        this.remove(key);
        return null;
      }
      
      return parsed.value;
    } catch (error) {
      console.error('Cache get error:', error);
      return null;
    }
  }

  remove(key: string): void {
    localStorage.removeItem(this.prefix + key);
  }

  clear(): void {
    const keys = Object.keys(localStorage);
    keys.forEach((key) => {
      if (key.startsWith(this.prefix)) {
        localStorage.removeItem(key);
      }
    });
  }
}

// Image loader with progressive enhancement
export function createImageLoader(
  lowQualitySrc: string,
  highQualitySrc: string,
  onLoad?: () => void
): void {
  const img = new Image();
  
  // First load low quality
  img.src = lowQualitySrc;
  
  // Then load high quality
  const highQualityImg = new Image();
  highQualityImg.onload = () => {
    if (onLoad) onLoad();
  };
  highQualityImg.src = highQualitySrc;
}

// Batch DOM updates
export function batchDOMUpdates(updates: Array<() => void>): void {
  requestAnimationFrame(() => {
    updates.forEach((update) => update());
  });
}