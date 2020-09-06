module.exports = ({ env }) => ({
    // ...
    email: {
      provider: 'sendgrid',
      providerOptions: {
        apiKey: env('EMAIL'),
      },
      settings: {
        defaultFrom: '8svskhd@gmail.com',
        defaultReplyTo: 'myemail@protonmail.com',
      },
    },
    // ...
  });