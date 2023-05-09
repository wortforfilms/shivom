/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    domains:["cloudflare-ipfs.com"]
  },

  env: {
    NEXT_PUBLIC_SUPABASE_ANON_KEY:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im94cmF4a2hvbmtzdmxydnB3c25jIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODMwODU3OTgsImV4cCI6MTk5ODY2MTc5OH0.B1pDbnkhyJVPt3WwIvkAdLr1YUVgM9QhmvAX65r4Lfo",
    NEXT_PUBLIC_SUPABASE_URL: "https://oxraxkhonksvlrvpwsnc.supabase.co",
  },
}




module.exports = nextConfig


// https://oxraxkhonksvlrvpwsnc.supabase.co
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im94cmF4a2hvbmtzdmxydnB3c25jIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODMwODU3OTgsImV4cCI6MTk5ODY2MTc5OH0.B1pDbnkhyJVPt3WwIvkAdLr1YUVgM9QhmvAX65r4Lfo
// secrert: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im94cmF4a2hvbmtzdmxydnB3c25jIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY4MzA4NTc5OCwiZXhwIjoxOTk4NjYxNzk4fQ.vak8bfB6-nb7eo6YSX4cdbYgUhgJyVdCRxUVMvAneCY