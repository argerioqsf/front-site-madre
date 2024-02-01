/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'www.grupomadretereza.com.br',
            port: '',
          },
        ],
      }
}

module.exports = nextConfig
