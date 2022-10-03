/** @type {import('next').NextConfig} */
 const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["api.lorem.space", 
    "s3-us-west-2.amazonaws.com", 
    "upload.wikimedia.org",
    "placeimg.com",
    "paceimg.com",
    "firebasestorage.googleapis.com",
    "images.pexels.com"
  
  
  ],
    
  }
  
  //env: {
  //  customKey: "customValue",
  //},
  //compress: true,
  //async redirects() {
   // return [
   //   {
   //     source: "/hola",
   //     destination: "comotos.co",
  //      permanent: true
 //     }
//    ]
//  }
//  
}

module.exports = nextConfig
