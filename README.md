# IDC Electronics (ELTD) — University of Calcutta

> **Comprehensive Academic Web Portal for Interdisciplinary Course (IDC) in Electronics (ELTD)**  
> University of Calcutta · Curriculum and Credit Framework (CCF-2022) / NEP  
> Common Syllabus for **Semesters I, II, & III**

---

## 🌐 Live Website & Official Resources

- 🚀 **Live Web Portal**: `https://<your-github-username>.github.io/<repository-name>/`
- 📂 **Question Bank (PDF 80)**: [**Official Calcutta University Google Drive Repository**](https://drive.google.com/drive/folders/1_m_CV0M40fPCF1aPwq3eL92Y0xalO6BG)
- 📋 **Syllabus & Question Paper Pattern**: End-Semester Theory (50 Marks, 2 Hours) + Tutorial Evaluation (25 Marks) = **Total 75 Marks** (3 Credits).

---

## 📌 How to Make the Site URL Visible on GitHub (GitHub Pages Setup)

If you have pushed this repository to GitHub and want the live site URL to appear on your repository:

### Step 1: Enable GitHub Pages in Repository Settings
1. Go to your repository page on GitHub: `https://github.com/<your-username>/<repo-name>`
2. Click the **Settings** tab (gear icon at the top of the repository).
3. In the left sidebar navigation, click **Pages** (under the "Code and automation" section).
4. Under **Build and deployment** > **Source**:
   - Select **GitHub Actions**.
   - *(This repository already includes `.github/workflows/deploy.yml` configured with automatic build and deployment).*
   - Alternatively, if you deployed using `npm run deploy`, select **Deploy from a branch** and choose the `gh-pages` branch and `/ (root)` folder, then click **Save**.

### Step 2: Make the URL Visible on Your GitHub Main Page
1. Go to the main **Code** tab of your repository.
2. In the right-hand sidebar, find the **About** section and click the ⚙️ **Settings gear icon**.
3. Under the **Website** field:
   - Check the checkbox **"Use your GitHub Pages website"** (or type `https://<your-username>.github.io/<repo-name>/`).
4. Click **Save changes**.
5. Your live site URL is now prominently visible at the very top of your GitHub repository!

---

## 🚀 One-Command Deployment from Terminal

If you are running the project locally or via command line:

```bash
# 1. Install dependencies
npm install

# 2. Build and publish directly to GitHub Pages
npm run deploy
```

---

## 📚 Curriculum Structure & Examination Modalities

### Marks Distribution (Total: 75 Marks · 3 Credits)
| Component | Marks | Evaluation Details |
|---|---|---|
| **End-Semester Theory** | **50 Marks** | 2 Hours written university examination |
| **Tutorial Assessment** | **25 Marks** | 5 Marks (Term Paper / Project) + 20 Marks (Written short-type exam) |
| **Practical / Viva** | **0 Marks** | **No practical exam, no viva-voce** |
| **Total** | **75 Marks** | 3 Academic Credits (2 Theory + 1 Tutorial) |

### Theory Question Paper Pattern (50 Marks · 2 Hours) — Strictly Two Groups
- **Group A (Short Questions)**: Answer **10 out of 12** questions of **2 marks each** = **20 Marks**
- **Group B (Broad / Analytical / Numerical Questions)**: Answer **3 out of 5** questions of **10 marks each** {part-marking strictly $\le$ 5 marks} = **30 Marks**
- **Total**: $20 + 30 = \mathbf{50\text{ Marks}}$

---

## 🛠️ Local Development

```bash
# Install dependencies
npm install

# Start local development server
npm run dev

# Build production bundle
npm run build

# Preview production build locally
npm run preview
```

---

## 👨‍🏫 Author & Credits
- **Course**: Interdisciplinary Course in Electronics (IDC - ELTD)
- **Institution**: University of Calcutta
- **Curriculum**: CCF-2022 / National Education Policy (NEP)
- **Question Bank PDF**: [Google Drive Folder](https://drive.google.com/drive/folders/1_m_CV0M40fPCF1aPwq3eL92Y0xalO6BG)
