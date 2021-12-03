const withPWA = require('next-pwa')

module.exports = withPWA({
  pwa: {
    disable: process.env.NODE_ENV === 'development',
    dest: 'public'
  },
  images: {
    domains: ['www.norma.dev', 'upload.wikimedia.org', 'res.cloudinary.com', 'www.google.com']
  }
})