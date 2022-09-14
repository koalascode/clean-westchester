/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}


module.exports = {
  images: {
      domains: ['lh3.googleusercontent.com', 'lh4.googleusercontent.com', 'lh5.googleusercontent.com', 'lh6.googleusercontent.com', 's3.us-west-2.amazonaws.com', 'cleanwestchester.s3.amazonaws.com'],
  },
  experimental: { images: { allowFutureImage: true } }
}

