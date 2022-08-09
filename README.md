> [nbundle for Developers][nbundle-powered] is in early access and requires an invite code to use.
>
> ⤷ [Sign up for early access](https://developers.nbundle.com/early-access).

---

**⚠️ All `1.0.x` releases are `alpha` releases, are not stable, and may have breaking changes.**

---

# Get started

This is an [nbundle-powered] Notion app bootstrapped with [create-notion-app].

## Develop your project

Open your terminal, go to your project directory, and run the following command:

```shell
yarn develop --target chrome
```

The nbundle CLI will automatically start a development server to build & serve your app, it will also open the browser with your app automatically loaded for development with hot-reloading and sourcemaps support.

Change the `--target` parameter to `edge` or `firefox` if you want to use Microsoft Edge or Firefox instead of Chrome.

You can edit the app by modifying [`app/index.jsx`](app/index.jsx). The app auto-updates as you edit the file.

## Ship your project

```shell
yarn ship
```

This will ask you to log into your [nbundle Developer account][nbundle-powered] if you haven't already, then build & publish your project to the platforms you've configured. Depending on the target platform, your project may be pending for review & approval.

# Learn more

To learn more about [nbundle], take a look at the following resources:

- [nbundle App Store](https://nbundle.com) - get the App Store to see how Notion users discover and use apps.

- [nbundle Documentation](https://developers.nbundle.com) - learn about nbundle features, architecture, and APIs.

- [nbundle API Reference](https://developers.nbundle.com/docs/api) - see a complete reference of the nbundle APIs.

<!-- Links -->

[nbundle]: https://www.nbundle.com
[nbundle-powered]: https://developers.nbundle.com
[create-notion-app]: https://www.github.com/nbundle/create-notion-app
