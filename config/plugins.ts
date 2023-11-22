export default ({ env }) => {
  const serviceBaseURL = env('AZURE_BLOB_BASE_URL');
  const [_, account] = serviceBaseURL.split(/\W+/);

  return {
    transformer: {
      enabled: true,
      responseTransforms: {
        removeDataKey: true,
        removeAttributesKey: true,
      },
    },
    'react-icons': true,
    upload: {
      config: {
        provider: 'strapi-provider-upload-azure-storage',
        providerOptions: {
          serviceBaseURL,
          account,
          accountKey: env('AZURE_BLOB_ACCOUNT_KEY'),
          containerName: 'file',
          defaultPath: 'assets',
        },
      },
    },
  };
};
