const { App } = require('@slack/bolt');

// Initializes your app with your app and bot token
const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  socketMode: true,
  appToken: process.env.SLACK_APP_TOKEN,
});

(async () => {
  // Start your app
  await app.start();

  app.logger.info('⚡️ Bolt app is running!');
})();
