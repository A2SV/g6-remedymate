## 1️⃣ Branching Strategy

### Main Branch

-   **`main`** is the source of truth.
-   Always in a **working, stable state**.
-   **No direct commits** to `main`.

### Feature Branch Workflow

1. **Create branch** from the latest `main`:
    ```bash
    git checkout main
    git pull origin main
    git checkout -b feat/your-feature-name
    ```

## 2️⃣ Naming Conventions

### Branch Naming

**Format**: `type_short-description`

**Types**:

-   **`feat`** – New feature (e.g., `feat/user-login-form`)
-   **`fix`** – Bug fix (e.g., `fix/navbar-responsiveness`)
-   **`docs`** – Documentation changes (e.g., `docs/update-readme`)
-   **`style`** – Formatting only, no logic changes (e.g., `style/format-css`)
-   **`refactor`** – Code changes without altering behavior (e.g., `refactor/simplify-auth`)
-   **`test`** – Adding/fixing tests (e.g., `test/add-user-tests`)

### Commit Messages

Follow Conventional Commits format:

```bash
<type>: <short description>
```

**Example Messages**:

```
feat: add password reset functionality
fix: prevent form submission on invalid email
docs: update README with setup steps
refactor: simplify authentication logic
style: format code with Prettier
```

## 3️⃣ Pull Requests (PRs)

### Creating a PR

1. **Push your branch** to GitHub:

    ```bash
    git push -u origin feat/your-branch-name
    ```

2. **Open a PR** from your branch into `main`.

3. **Fill in the PR description** using this template:

    ```markdown
    ### Description

    Explain the changes and why they are needed.

    ### Related Issue

    Closes #<issue-number>
    ```

### Review Process

-   Request at least **1–2 teammate reviews**.
-   Be open to feedback.
-   Approve only if the PR meets requirements and passes tests.

### Merging

-   Merge only after approvals and passing checks.
-   Delete the branch after merging.

## 4️⃣ Handling Merge Conflicts

### Steps:

1. **Update local main**:

    ```bash
    git checkout main
    git pull origin main
    ```

2. **Switch to your branch**:

    ```bash
    git checkout feat/your-branch-name
    git merge main
    ```

3. **Fix conflicts** in files:

    ```markdown
    <<<<<<< HEAD
    // Your branch code
    =======
    // main branch code

    > > > > > > > main
    ```

    Remove conflict markers and decide the final code.

4. **Commit and push**:
    ```bash
     git add .
     git commit -m "chore: resolve merge conflicts with main"
     git push
    ```
