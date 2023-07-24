// Define reportWebVitals function
const reportWebVitals = onPerfEntry => {
  // Check if a function is provided
  if (onPerfEntry && onPerfEntry instanceof Function) {
    // Dynamically import 'web-vitals' library only when the function is called
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      // These are all performance metrics:
      // getCLS: Cumulative Layout Shift
      // getFID: First Input Delay
      // getFCP: First Contentful Paint
      // getLCP: Largest Contentful Paint
      // getTTFB: Time to First Byte
      // They are called with 'onPerfEntry' as an argument
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

// Export the function so it can be used in other parts of your application
export default reportWebVitals;
