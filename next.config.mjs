/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["i.postimg.cc", "mdbcdn.b-cdn.net"],
    },
    webpack: (config) => {
        config.resolve.alias = {
            ...(config.resolve.alias || {}),
            "@loadable/component": "next/dynamic",
        };
        return config;
    },
    experimental: {
        missingSuspenseWithCSRBailout: false,
    },
};

export default nextConfig;