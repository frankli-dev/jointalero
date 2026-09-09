/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // The native SWC binary overflows the default 8MB stack on this host, crashing the build at
  // random. The npm scripts raise the stack limit to 64MB; these limits keep peak memory in
  // range on a 2-CPU machine. Both can go once the host runs Node 20+.
  experimental: {
    workerThreads: false,
    cpus: 1,
  },
}

module.exports = nextConfig
