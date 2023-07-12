# Ark Nova Card List

This is an open-source online website of the board game Ark Nova. It is not affiliated with Capstone Games in any way.
This project is an reimplementation of [ssimeonoff.github.io](https://github.com/ssimeonoff/ssimeonoff.github.io) and for players to easily search for cards and their effects. This repository highly recommends [purchasing](https://capstone-games.com/board-games/ark-nova/) a copy for personal use.

See a [demo](https://ark-nova.ender-wiggin.com/).

![screenshot](https://ender-picgo.oss-cn-shenzhen.aliyuncs.com/img/CleanShot%202023-07-12%20at%2000.06.02%402x.png)

## Updates

This project will be updated over time.
Expect frequent improvements.

Next up:

- [ ] Conservation Project cards and EndGame Scoring cards.
- [ ] Action cards
- [ ] maps

## Running Locally

**1. Clone Repo**

```bash
git clone git@github.com:Ender-Wiggin2019/Next-Ark-Nova-Cards.git
```

**2. Install Dependencies**

```bash
npm i
```

**3. Run App**

```bash
npm run dev
```

## Help to Translate

If you want to provide an additional translation, you can go to the [locales](https://github.com/Ender-Wiggin2019/Next-Ark-Nova-Cards/tree/main/public/locales) folder and follow these steps:

1. Copy all `.json` files in `en` folder, and paste them in a new folder with the name of your language (e.g. `fr` for French).
2. Translate all the strings in the new files. Please note that you only need to translate the strings on the right side of the `:` character. Also, please do not change anything wrapped in `{}` and `<>`. i.e. `{Money-3}` and `<br>` should remain the same in your translation.
3. You can send a pull request with the new files, or send them to me by email (see my [GitHub profile](https://github.com/Ender-Wiggin2019).
