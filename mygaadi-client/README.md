# 🚗 MyGaadi

**MyGaadi** is an online **car reselling platform** designed for **buyers and sellers** to connect seamlessly.  
It provides a simple, secure, and efficient way to buy and sell used cars.

---

## 🧾 Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Run / Build / Test](#run--build--test)
- [Project Structure](#project-structure)
- [Branching & Workflow](#branching--workflow)
- [Keeping Feature Branches Up To Date](#keeping-feature-branches-up-to-date)
- [Merge Request / Pull Request Process](#merge-request--pull-request-process)
- [Commit Message Guidelines](#commit-message-guidelines)
- [Code Review & Required Reviewers](#code-review--required-reviewers)
- [Best Practices](#best-practices)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)
- [Contact](#contact)

---

## 🧩 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (Recommended version: `v22.19.0`)
- **npm** (Recommended version: `11.6.2`)
- **Git**

Check versions:

```bash
node -v
npm -v
```

---

## ⚙️ Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/0825-PGKDAC-PROJECT/frontEndApp.git
cd mygaadi-client
npm install
```

---

## 🚀 Run / Build / Test

Start the development server:

```bash
npm run dev
```

Build the project for production:

```bash
npm run build
```

(Optional) Run tests:

```bash
npm test
```

---

## 📂 Project Structure

```
mygaadi-client/
├─ src/
│  ├─ assets/        # Images, icons, and static files
│  ├─ components/    # Reusable UI components
│  ├─ services/      # API calls and external services
│  └─ providers/     # Context providers or app-level state
├─ package.json
└─ README.md
```

---

## 🌱 Branching & Workflow

- **Primary development branch:** `dev`
- **Production branch:** `main`

All work **must** be done on **feature branches** created from `dev`.

### 🏷️ Feature Branch Naming Convention

```
feature/<feature_name>_<dev_name>
```

**Examples:**

```
feature/login-flow_ganesh
feature/add-payment-opts_raj
```

### Creating a Feature Branch (CLI)

```bash
# Ensure dev is up to date
git checkout dev
git pull origin dev

# Create feature branch
git checkout -b feature/<feature_name>_<dev_name>
```

> 💡 You can also create feature branches directly from GitHub’s UI.

---

## 🔄 Keeping Feature Branches Up To Date

Before opening a Merge Request (MR) or Pull Request (PR), sync your branch with the latest `dev`.

```bash
# Update local dev
git checkout dev
git pull origin dev

# Merge latest dev into your feature branch
git checkout feature/<feature-name>_<dev_name>
git merge dev

# Resolve conflicts if any
git add <resolved-files>
git commit
```

> 💡 Using VSCode’s Git UI can simplify this process.

---

## 🧩 Merge Request / Pull Request Process

1. Open an **MR/PR** from your feature branch → `dev`.

2. Include the following in your MR/PR:

   **Title:**

   ```
   feat(auth): add JWT refresh
   ```

   **Description Template:**

   - Summary of changes
   - Steps to test locally
   - Any migration or DB changes

3. Assign required reviewers (see below).

4. After approval, merge into `dev` using the repo’s preferred strategy.

5. Delete your feature branch after merging (recommended).

---

## ✍️ Commit Message Guidelines

Follow this clear, scoped format:

```
<type>(<scope>): <short description>

<body — optional longer explanation>
```

**Example:**

```
feat(auth): add JWT refresh token support

Added refresh token endpoint and updated token service.
```

**Common types:**

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `refactor`: Code refactoring
- `style`: Formatting or style changes
- `test`: Adding or updating tests

---

## 👀 Code Review & Required Reviewers

Every MR/PR must be reviewed by **at least one** of the following:

- **Ganesh (@kirwalepatil)**
- **Raj (@rajpakhurde)**

### How to Set Mandatory Reviewers

- **GitHub:** Add in the _Reviewers_ section or configure _branch protection rules_.
- **GitLab:** Add them as _Approvers_ or use the _Approvers_ feature.

Address review comments within the same branch.
After updates, push commits and **request re-review**.

---

## 🧠 Best Practices

✅ Pull `dev` frequently to reduce merge conflicts
✅ Keep PRs small and focused
✅ Write **unit/integration tests** for new functionality
✅ Run **linters** and **formatters** locally before pushing
✅ Document APIs and important internal behavior
🚫 Avoid committing secrets — use environment variables or secret stores

---

## 🧩 Troubleshooting

- **Build errors?**
  Delete `node_modules` and reinstall dependencies:

  ```bash
  rm -rf node_modules
  npm install
  ```

- **Merge conflicts?**
  Use `git mergetool` or VSCode’s merge conflict resolver.

---

## 🤝 Contributing

1. Create a feature branch from `dev`.
2. Implement your changes.
3. Follow commit message guidelines.
4. Push your branch and open an MR/PR to `dev`.
5. Assign **Ganesh** or **Raj** for review.
6. Fix feedback and merge after approval.

---

## 📧 Contact

| Topic                           | Contact                                                                                                                          |
| ------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| **Branching & Merge Questions** | Ganesh, Raj                                                                                                                      |
| **CI / Build Issues**           | [g.b.kirwalepatil@gmail.com](mailto:g.b.kirwalepatil@gmail.com), [rajpakhurde.work@gmail.com](mailto:rajpakhurde.work@gmail.com) |

---

### 💬 Thank you for contributing to **MyGaadi**!

> _Drive innovation, one commit at a time._ 🚘
