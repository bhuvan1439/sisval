# How to Deploy to GitHub Pages

Since the GitHub CLI (`gh`) is not installed on your system, you need to create the repository and push the code manually. Follow these steps:

1.  **Create Repository on GitHub**:
    *   Go to [github.com/new](https://github.com/new).
    *   Name the repository **`sisval`**.
    *   Make it **Public**.
    *   Do **NOT** initialize with README, .gitignore, or license (we already have them).
    *   Click **Create repository**.

2.  **Push the Code**:
    *   Copy the commands from the section **"…or push an existing repository from the command line"**.
    *   They will look like this (replace `<YOUR_USERNAME>` with your actual GitHub username):
        ```bash
        git remote add origin https://github.com/bhuvan1439/sisval.git
        git branch -M main
        git push -u origin main
        ```
    *   Run these commands in your terminal inside the `sisval` folder.

3.  **Deploy**:
    *   Once the code is pushed, run this command in your terminal:
        ```bash
        npm run deploy
        ```
    *   This will build the app and push it to the `gh-pages` branch.

4.  **Enable GitHub Pages**:
    *   Go to your repository settings on GitHub -> **Pages**.
    *   Ensure the source is set to **Deploy from a branch**.
    *   Select the **`gh-pages`** branch.
    *   Save.

Your site will be live at: `https://bhuvan1439.github.io/sisval/`
