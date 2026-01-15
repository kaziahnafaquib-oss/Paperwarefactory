# Paperware Performance - Quick Start Guide

## 🚀 Immediate Actions (5 minutes)

### 1. Check Current Performance
```bash
# Start development server
npm run dev

# Open browser and press Ctrl+Shift+P to see Performance Monitor
# Note down the metrics: FCP, LCP, CLS, TTI
```

### 2. Build Production Bundle
```bash
# Create optimized production build
npm run build

# Check bundle sizes in dist folder
# Initial bundle should be < 500KB
```

### 3. Test Production Build Locally
```bash
# Serve production build (you'll need a static server)
npx serve dist

# Open in browser and test performance
# Run Lighthouse audit (DevTools → Lighthouse)
```

## ✅ Verification Checklist

Run through this checklist to ensure all optimizations are working:

### Performance Monitor Active?
- [ ] Press `Ctrl+Shift+P` in dev mode
- [ ] See performance overlay with FCP, LCP, CLS, TTI
- [ ] Metrics are updating in real-time

### Service Worker Running?
- [ ] Open DevTools → Application → Service Workers
- [ ] See "paperware-v1.0.0" service worker active
- [ ] Check Cache Storage for cached resources

### Images Loading Lazily?
- [ ] Open DevTools → Network → Img filter
- [ ] Scroll page slowly
- [ ] Images should load only when approaching viewport

### Code Splitting Working?
- [ ] Open DevTools → Network → JS filter
- [ ] Look for separate chunks: react-vendor, motion-vendor, ui-vendor
- [ ] Each chunk should be < 200KB

### CSS Optimizations Applied?
- [ ] Check for critical inline CSS in `<head>`
- [ ] Loading screen appears instantly
- [ ] No layout shifts during page load

## 🎯 Performance Targets Quick Reference

| Metric | Target | How to Check |
|--------|--------|--------------|
| **FCP** | < 1.8s | Performance Monitor or Lighthouse |
| **LCP** | < 2.5s | Performance Monitor or Lighthouse |
| **CLS** | < 0.1 | Performance Monitor or Lighthouse |
| **TTI** | < 3.8s | Performance Monitor or Lighthouse |
| **Bundle Size** | < 500KB | Check dist folder after build |

## 🔧 Common Usage Patterns

### 1. Optimized Image Component
```tsx
import { OptimizedImage } from '@/app/lib/imageOptimization';

// Above-fold image (loads immediately)
<OptimizedImage
  src="/hero-image.jpg"
  alt="Hero"
  priority={true}
  width={1920}
  height={1080}
/>

// Below-fold image (lazy loads)
<OptimizedImage
  src="/product-image.jpg"
  alt="Product"
  width={800}
  height={600}
/>
```

### 2. Lazy Load Component
```tsx
import { useLazyLoad } from '@/app/hooks/useOptimization';

function ProductSection() {
  const [ref, shouldLoad] = useLazyLoad();
  
  return (
    <section ref={ref} className="below-fold">
      {shouldLoad ? (
        <HeavyProductGrid />
      ) : (
        <div className="h-64 skeleton" />
      )}
    </section>
  );
}
```

### 3. Debounced Search
```tsx
import { useDebounce } from '@/app/hooks/useOptimization';

function SearchInput() {
  const [query, setQuery] = useState('');
  const debouncedQuery = useDebounce(query, 300);
  
  useEffect(() => {
    // This only runs 300ms after user stops typing
    if (debouncedQuery) {
      performSearch(debouncedQuery);
    }
  }, [debouncedQuery]);
  
  return <input value={query} onChange={e => setQuery(e.target.value)} />;
}
```

### 4. Throttled Scroll Handler
```tsx
import { useThrottle } from '@/app/hooks/useOptimization';

function ScrollAnimation() {
  const handleScroll = useThrottle(() => {
    // Expensive scroll logic
    updateAnimationState();
  }, 100); // Runs max once per 100ms
  
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
}
```

### 5. Device-Adaptive Rendering
```tsx
import { useDevicePerformance } from '@/app/hooks/useOptimization';

function AdaptiveFeature() {
  const tier = useDevicePerformance();
  
  if (tier === 'low') {
    return <SimplifiedVersion />;
  }
  
  if (tier === 'medium') {
    return <BalancedVersion />;
  }
  
  return <FullFeaturedVersion />;
}
```

## 🐛 Quick Troubleshooting

### Problem: Performance Monitor not showing
**Solution**: 
- Ensure you're in development mode (`npm run dev`)
- Press `Ctrl+Shift+P` (case sensitive)
- Check browser console for errors

### Problem: Images not lazy loading
**Solution**:
- Check if `OptimizedImage` component is being used
- Verify `priority={false}` or omitted
- Check browser supports IntersectionObserver

### Problem: Bundle size too large
**Solution**:
```bash
# Analyze bundle
npm run build
# Check dist/assets folder
# Look for large JS files (> 300KB)
# Consider lazy loading those features
```

### Problem: Service Worker not registering
**Solution**:
- Check browser console for SW errors
- Verify `/sw.js` exists in public folder
- Must be served over HTTPS (or localhost)
- Clear site data and reload

### Problem: Poor mobile performance
**Solution**:
- Test on real device, not emulator
- Check device tier with Performance Monitor
- Verify mobile-specific optimizations active
- Reduce animations if tier === 'low'

## 📱 Mobile Testing Quick Guide

### Chrome DevTools Device Emulation
```
1. Open DevTools (F12)
2. Toggle device toolbar (Ctrl+Shift+M)
3. Select device (e.g., "iPhone 12 Pro")
4. Throttle network (Fast 3G or Slow 3G)
5. Run Lighthouse mobile audit
```

### Real Device Testing
```
1. Connect Android device via USB
2. Enable USB debugging on device
3. Chrome → chrome://inspect
4. Select your device
5. Test actual performance
```

## 🎨 CSS Performance Classes

Quick reference for performance-optimized CSS classes:

```tsx
// Critical content (visible immediately)
<div className="above-fold critical-render">
  {heroContent}
</div>

// Below-fold content (lazy rendered)
<div className="below-fold contain-paint">
  {products}
</div>

// Hardware accelerated animations
<div className="hw-accelerate">
  {animatedElement}
</div>

// Loading placeholder
<div className="lazy-placeholder skeleton">
  Loading...
</div>

// Optimized fixed navbar
<nav className="fixed-optimized">
  {navigation}
</nav>
```

## 📊 Performance Metrics Interpretation

### FCP (First Contentful Paint)
- **Good**: < 1.8s - Users see content quickly
- **Needs Improvement**: 1.8s - 3.0s - Acceptable but could be better
- **Poor**: > 3.0s - Users may abandon page

### LCP (Largest Contentful Paint)
- **Good**: < 2.5s - Main content loads fast
- **Needs Improvement**: 2.5s - 4.0s - Main content slightly slow
- **Poor**: > 4.0s - Main content too slow

### CLS (Cumulative Layout Shift)
- **Good**: < 0.1 - Very stable layout
- **Needs Improvement**: 0.1 - 0.25 - Some shifting
- **Poor**: > 0.25 - Unstable layout

### TTI (Time to Interactive)
- **Good**: < 3.8s - Page responds quickly
- **Needs Improvement**: 3.8s - 7.3s - Some delay
- **Poor**: > 7.3s - Significant delay

## 🔍 Quick Performance Checks

### 1. Initial Load Speed
```bash
# Open DevTools → Network tab
# Clear cache (Ctrl+Shift+R)
# Reload and check:
# - Total transfer size < 1MB
# - Total resources < 50
# - DOMContentLoaded < 2s
```

### 2. Scroll Performance
```bash
# Open DevTools → Performance tab
# Start recording
# Scroll page up and down
# Stop recording
# Check for:
# - No long tasks (> 50ms)
# - Smooth 60fps timeline
# - No forced reflows
```

### 3. Animation Performance
```bash
# Open DevTools → Performance → Rendering
# Enable "Frame Rendering Stats"
# Interact with animations
# Should maintain 60fps
# Green = good, Red = dropped frames
```

## 📚 Documentation Links

- **Full Guide**: [PERFORMANCE_GUIDE.md](./PERFORMANCE_GUIDE.md)
- **Summary**: [ENHANCEMENT_SUMMARY.md](./ENHANCEMENT_SUMMARY.md)
- **Vite Config**: [vite.config.ts](./vite.config.ts)
- **Optimization Hooks**: [useOptimization.tsx](./src/app/hooks/useOptimization.tsx)

## 🎓 Learning Resources

### Understanding Core Web Vitals
- FCP: First pixels rendered
- LCP: Main content loaded
- CLS: Visual stability
- FID/INP: Input responsiveness
- TTFB: Server response time

### Performance Best Practices
1. Minimize main thread work
2. Reduce JavaScript execution time
3. Serve images in next-gen formats
4. Eliminate render-blocking resources
5. Use passive listeners for touch/scroll
6. Implement lazy loading everywhere
7. Optimize CSS delivery
8. Minimize layout shifts

## ⚡ Performance Shortcuts

| Action | Shortcut | What It Does |
|--------|----------|--------------|
| Toggle Monitor | `Ctrl+Shift+P` | Show/hide performance overlay |
| Hard Reload | `Ctrl+Shift+R` | Clear cache and reload |
| DevTools | `F12` | Open Chrome DevTools |
| Device Mode | `Ctrl+Shift+M` | Mobile emulation |
| Performance Tab | DevTools → Performance | Record performance |
| Network Tab | DevTools → Network | Network waterfall |

## 🎯 Quick Wins

These changes give immediate performance improvements:

1. ✅ **Use OptimizedImage**: Replace `<img>` with `<OptimizedImage>`
2. ✅ **Add loading="lazy"**: For any remaining `<img>` tags
3. ✅ **Lazy load routes**: Use `React.lazy()` for pages
4. ✅ **Add Suspense**: Wrap lazy components
5. ✅ **Use CSS classes**: Apply `.hw-accelerate`, `.contain-paint`
6. ✅ **Debounce inputs**: Use `useDebounce` for search
7. ✅ **Throttle scroll**: Use `useThrottle` for scroll handlers

## 📞 Need Help?

1. Check browser console for errors
2. Review Performance Monitor metrics
3. Run Lighthouse audit
4. Check this quick start guide
5. Review full documentation
6. Contact development team

---

**Remember**: Measure before optimizing! Use the Performance Monitor and Lighthouse to identify actual bottlenecks.

**Version**: 2.0
**Last Updated**: January 2026
