# Bolt for JavaScript Blank Template

This is a blank [Bolt for JavaScript](https://docs.slack.dev/tools/bolt-js/) template app used to start building new Slack apps.

## Setup

Before getting started, make sure you have a development workspace where you have permissions to install apps. If you don't have one setup, go ahead and [create one](https://slack.com/create).

### Developer Program

Join the [Slack Developer Program](https://api.slack.com/developer-program) for exclusive access to sandbox environments for building and testing your apps, tooling, and resources created to help you build and grow.

## Installation

<details><summary><strong>Using Slack CLI</strong></summary>

Install the latest version of the Slack CLI for your operating system:

- [Slack CLI for macOS & Linux](https://docs.slack.dev/tools/slack-cli/guides/installing-the-slack-cli-for-mac-and-linux/)
- [Slack CLI for Windows](https://docs.slack.dev/tools/slack-cli/guides/installing-the-slack-cli-for-windows/)

You'll also need to log in if this is your first time using the Slack CLI.

```sh
slack login
```

#### Initializing the project

```sh
slack create my-bolt-js-app --template slack-samples/bolt-js-blank-template
cd my-bolt-js-app
```

#### Creating the Slack app

Use the following command to add your new Slack app to your development workspace. Choose a "local" app environment for upcoming development:

```sh
slack install
```

After the Slack app has been created you're all set to start developing!

</details>

<details><summary><strong>Using Terminal</strong></summary>

#### Create Your Slack App

1. Open [https://api.slack.com/apps/new](https://api.slack.com/apps/new) and choose "From an app manifest"
2. Choose the workspace you want to install the application to
3. Copy the contents of [manifest.json](./manifest.json) into the text box that says `*Paste your manifest code here*` (within the JSON tab) and click _Next_
4. Review the configuration and click _Create_
5. You'll be redirected to the app settings page for your app. Click _Install App_ in the left hand menu then _Install to Workspace_ and _Allow_ on the screen that follows.

#### Environment Variables

Before you can run the app, you'll need to gather some environment variables.

1. **Bot token**: Open your [app settings](https://api.slack.com/apps) page, click _OAuth & Permissions_ in the left hand menu, then copy the _Bot User OAuth Token_.
2. **App token**: Click _Basic Information_ from the left hand menu and follow the steps in the _App-Level Tokens_ section to create an app-level token with the `connections:write` scope.

Once you have these, export both in a shell for following processes:

```sh
export SLACK_BOT_TOKEN=xoxb-example
export SLACK_APP_TOKEN=xapp-1-example
```

#### Initializing the project

```sh
git clone https://github.com/slack-samples/bolt-js-blank-template.git my-bolt-js-app
cd my-bolt-js-app
```

#### Install dependencies

```sh
npm install
```

</details>

## Development

### Starting the app

#### Slack CLI

```sh
slack run
```

#### Terminal

```sh
npm start
```

At this point a message should appear in the terminal that notes the Bolt app is running! It doesn't do much else at the moment.

### Linting

```sh
# Run lint for code formatting and linting
npm run lint
```

## Resources

To learn more about developing Slack apps, visit the following pages:

- [API docs](https://docs.slack.dev)
- [Bolt for JavaScript docs](https://docs.slack.dev/tools/bolt-js/)
