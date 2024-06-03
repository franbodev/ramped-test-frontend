module.exports = {
    apps: [
        {
            name: 'ramped_front',
            script: 'dist/index.js',
            instances: 1,
            max_memory_restart: '2G',
            env: {
                NODE_ENV: 'development',
            },
        },
    ],
};
