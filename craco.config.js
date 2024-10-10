const path = require('path');

module.exports = {
    webpack: {
        alias: {
            '@assets': path.resolve(__dirname, 'src/assets/'),
            '@components': path.resolve(__dirname, 'src/components/'),
            '@hooks': path.resolve(__dirname, 'src/hooks/'),
            '@views': path.resolve(__dirname, 'src/views/'),
            '@svg': path.resolve(__dirname, 'src/assets/images/svg/'),
            '@icons': path.resolve(__dirname, 'src/assets/images/svg/icons'),
        },
    },
};
