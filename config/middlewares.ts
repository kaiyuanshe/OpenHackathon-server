export default ({ env }) => [
  'strapi::logger',
  'strapi::cors',
  'strapi::body',
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", 'https:'],
          'img-src': ["'self'", 'data:', 'blob:', env('AZURE_BLOB_BASE_URL')],
          'media-src': ["'self'", 'data:', 'blob:', env('AZURE_BLOB_BASE_URL')],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  'strapi::poweredBy',
  'strapi::query',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
