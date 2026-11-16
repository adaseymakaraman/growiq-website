/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // GitHub Pages yalnızca statik dosya yayınlar: site "out" klasörüne dışa aktarılır
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
};
export default nextConfig;
