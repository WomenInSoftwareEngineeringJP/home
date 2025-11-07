# ✨ Welcome ✨


## MVP Phase 🌱 

- We are only accepting changes from core team members at this phase. Thanks for your understanding
- Priorities are
   - SEO
   - Clear communication with our bilingual community (EN/JA)
   - a11y to ensure inclusion
   - leveraging automation to ensure quality and developer experience (e.g. gitHub actions is our friend)
   - Responsive design
   - keeping it simple

## Tech Stack ⭐
I've set us up with a modern frontend tech stack so that we can practice together. This includes TypeScript, which has a bit of a learning curve. 

## Best Practices
- Use Editorconfig to match expected style: https://editorconfig.org/ (If you are a VSCode user this means installing an extention)
- This project is set up with eslint for both style and code checking 🧹
- Please disable Prettier plugins in your editor ([VSCode instructions](https://stackoverflow.com/a/75471109/1860768))

## Working on an Issue ☑️
- Please assign yourself to any ticket you are working on. Please unassign yourself if you aren't able to move it forward. Feel free to ask for help if you get stuck.
- Branch name should start with the ticket number, e.g. `11-dns-setup`
- Please write unit and E2E tests for new enhancements 🧪
- If there is no progress on an issue for two weeks, we may reassign it to someone else.

## PR Guidelines
- Draft PRs are welcome, and a good way to get help from the team 🤠☑️
- No force pushing to branches ❌
- Avoid adding arbitrary whitespace ❌
- Separate logical changes from style changes ✂️
- Try to keep PRs under 500 lines of code 🤏 
- Making multiple PRs to solve a single issue is okay! 🙆🏻‍♀️

## Testing Guidelines
- Unit tests have coverage metrics. 60 - 80% coverage is good ⭐
- Try to approach writing tests the way a real user would interact with the site. [See Guiding Principles from Testing Library](https://testing-library.com/docs/guiding-principles/)
- Rather than adding test ids, we prefer semantic selectors like `getByRole`, `getByLabel`, or `getByText`
- Playwright is great for testing complex interactions across components or pages.


## Merging
- All GH Actions should pass before merging
- Merging to main triggers a deploy to production. Please check that the site deploys correctly

## Praise 👏
- We use [All Contributors](https://allcontributors.org/) to recognize efforts towards this project
- You can learn more about the bot [here](https://allcontributors.org/docs/en/bot/usage)
