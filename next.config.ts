/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export', // Novo jeito de exportar estático
  basePath: '/next-wifi-ufmt',
  trailingSlash: true,
  assetPrefix: isProd ? '/next-wifi-ufmt/' : '',
  images: {
    unoptimized: true, // GitHub Pages não suporta o image loader padrão
  },
};

module.exports = nextConfig;
