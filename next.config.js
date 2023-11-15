/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['res.cloudinary.com', 'api.cloudinary.com',"avatars.githubusercontent.com"],
    },
    typescript: {
        ignoreBuildErrors: true,
     },
}

module.exports = nextConfig
