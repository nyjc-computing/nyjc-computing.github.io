# NYJC Computing Website

The public website for NYJC's Computing programme. Built with [Jekyll](https://jekyllrb.com/) using the [Monophase](https://github.com/m3ng/monophase) theme.

## Getting Started

### Prerequisites

- Ruby 3.2 or higher (check with `ruby --version`)
- Bundler (install with `gem install bundler` if needed)

### Installation

1. Clone the repository and navigate to it:
   ```bash
   git clone https://github.com/nycomp/nyjc-computing.github.io.git
   cd nyjc-computing.github.io
   ```

2. Install dependencies:
   ```bash
   bundle install
   ```

### Building the Site

- **Serve locally (with live reload):**
  ```bash
  bundle exec jekyll serve
  ```
  Then visit `http://localhost:4000`

- **Build for production:**
  ```bash
  bundle exec jekyll build
  ```
  The built site will be in the `_site/` directory.

## Project Structure

```
├── _config.yml          # Jekyll configuration
├── _data/               # Data files for site-wide variables
├── _includes/           # Reusable template components
├── _layouts/            # Page layout templates
├── _posts/              # Blog/news posts
├── _site/               # Generated site (don't edit)
├── assets/              # CSS, JS, and other assets
├── images/              # Site images
├── pages/               # Static pages (About, FAQ, etc.)
├── Gemfile              # Ruby dependencies
└── index.md             # Homepage
```

## Contributing Content

### Branch Workflow

This repository uses a two-branch workflow:

- **`content`** - Branch for content contributions and editing
- **`main`** - Production branch that deploys the site

When `main` is updated, it automatically syncs changes back to `content` via GitHub Actions.

### How to Contribute

1. **Checkout the `content` branch:**
   ```bash
   git checkout content
   ```

2. **Create your feature branch:**
   ```bash
   git checkout -b my-new-page-or-fix
   ```

3. **Make your changes** (see content types below)

4. **Commit and push:**
   ```bash
   git add .
   git commit -m "Describe your changes"
   git push origin my-new-page-or-fix
   ```

5. **Open a pull request** targeting the `content` branch

## Adding Content

### Adding a New Page

1. Create a new markdown file in the `pages/` directory, e.g., `pages/my-page.md`
2. Add front matter at the top:

   ```yaml
   ---
   title: My Page Title
   permalink: "/my-page"
   layout: page
   ---
   ```

3. Write your content in Markdown below the front matter

### Adding a Blog Post

1. Create a new file in `_posts/` with the naming format: `YYYY-MM-DD-title.md`
2. Add front matter:

   ```yaml
   ---
   title: Post Title
   date: YYYY-MM-DD HH:MM:SS Z
   categories:
   - update
   layout: post
   ---
   ```

3. Write your post content in Markdown

### Editing Existing Content

- **Pages** are in the `pages/` directory
- **Posts** are in the `_posts/` directory
- **Homepage** is `index.md`

Simply edit the corresponding Markdown file.

## Site Configuration

Site-wide settings are in [`_config.yml`](_config.yml):
- Site title, description, and contact email
- Navigation structure
- Google Analytics tracking ID
- Plugin settings

After modifying `_config.yml`, restart `jekyll serve` to see changes.

## Need Help?

For questions or issues, please contact the NYJC Computing team at [nyjc.computing@nyjc.edu.sg](mailto:nyjc.computing@nyjc.edu.sg)
