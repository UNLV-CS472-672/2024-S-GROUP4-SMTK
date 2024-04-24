# Checklist to follow when merging a PR into the main repository
## Merge into Testing Branch
- [ ] Testing branch and forked repository are updated to the latest version of the main branch
- [ ] Pass the build workflow successfully (ignoring Test Coverage)
  - npm run test - Successful
  - npm run lint - Successful
  - npm run build - Successful
- [ ] Vercel deployment status is Ready and not Failed
- [ ] Squash any merge conflicts into the branch
- [ ] Have at least 2 or more people that were not actively involved in development approve pull request
## Merging into Main Branch
- [ ] Must have met all requirements in **Merge into Testing Branch**
- [ ] Must have at least 90% test coverage