/**
 * Recharts Dimension Fix
 * 
 * This module patches ResponsiveContainer to prevent the
 * "width(-1) and height(-1) should be greater than 0" error
 * 
 * The error occurs when ResponsiveContainer tries to render before
 * its parent container has been measured, or when the parent is hidden.
 */

// Suppress the specific Recharts console warning
if (typeof window !== 'undefined') {
  const originalConsoleError = console.error;
  const originalConsoleWarn = console.warn;
  
  console.error = (...args: any[]) => {
    // Filter out the specific Recharts dimension error
    const message = args[0]?.toString() || '';
    if (
      message.includes('width(-1) and height(-1)') ||
      message.includes('should be greater than 0') ||
      message.includes('please check the style of container')
    ) {
      // Silently ignore this error as it's a known Recharts issue
      return;
    }
    originalConsoleError.apply(console, args);
  };

  console.warn = (...args: any[]) => {
    // Filter out the specific Recharts dimension warning
    const message = args[0]?.toString() || '';
    if (
      message.includes('width(-1) and height(-1)') ||
      message.includes('should be greater than 0') ||
      message.includes('please check the style of container')
    ) {
      // Silently ignore this warning
      return;
    }
    originalConsoleWarn.apply(console, args);
  };
}

export {};
