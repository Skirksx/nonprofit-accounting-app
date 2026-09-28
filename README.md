# Malta McConnelsville Rotary Club Budget

Static budget overview for the Malta McConnelsville Rotary Club. The current
budget year is **2026-2027**, covering July 1, 2026 through June 30, 2027.

## Local preview

```sh
npm test
npm start
```

Open <http://localhost:4173> after starting the server.

## Deploy with GitHub Pages

The repository includes a GitHub Actions workflow that tests, builds, and
deploys the site whenever a commit reaches `main` or `work`. To publish it:

1. Create an empty GitHub repository, if the production repository does not
   already exist.
2. Add that repository as this checkout's `origin`, then push the current
   branch:

   ```sh
   git remote add origin https://github.com/ORGANIZATION/REPOSITORY.git
   git push -u origin work
   ```

3. On GitHub, open **Settings → Pages**. Under **Build and deployment**, set
   **Source** to **GitHub Actions**.
4. Open the repository's **Actions** tab and select **Deploy budget site to
   GitHub Pages**. The push normally starts it automatically; otherwise choose
   **Run workflow**.
5. After the deploy job succeeds, use the URL shown in that job's
   `github-pages` environment. For a project site it will normally be
   `https://ORGANIZATION.github.io/REPOSITORY/`.

No deployment secrets are required for GitHub Pages because the workflow uses
GitHub's short-lived identity token. Repository administrators still need to
enable Pages and authorize Actions for the repository.
