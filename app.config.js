import 'expo-env';

export default ({ config }) => ({
  ...config,
  extra: {
    BASE_URL: process.env.BASE_URL,
    API_USERNAME: process.env.API_USERNAME,
    API_PASSWORD: process.env.API_PASSWORD,
  },
});
