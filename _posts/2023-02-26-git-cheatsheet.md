---
title: "Git Cheatsheet for Everyday Development"
date: 2023-02-26
categories: [Git, Development]
tags: [Git, Cheatsheet, Version Control]
excerpt: "A quick reference guide to the most common Git commands for setting up repositories, making changes, and collaborating with others."
author: "Saswat Saubhagya"
---

# Git Cheatsheet for Everyday Development

Git is an essential tool for modern software development. This cheatsheet provides a quick reference for the most common commands you'll use every day. Whether you're new to Git or just need a refresher, this guide has you covered.

---

## 1. Setup and Initialization

Configure your Git installation and initialize a new repository.

- **Configure user name:**
  ```bash
  git config --global user.name "Your Name"
  ```

- **Configure user email:**
  ```bash
  git config --global user.email "youremail@example.com"
  ```

- **Initialize a new repository:**
  ```bash
  git init
  ```

- **Clone an existing repository:**
  ```bash
  git clone <repository_url>
  ```

---

## 2. Staging and Committing

Save your changes to the repository.

- **Check the status of your files:**
  ```bash
  git status
  ```

- **Add a file to the staging area:**
  ```bash
  git add <file_name>
  ```

- **Add all changes to the staging area:**
  ```bash
  git add .
  ```

- **Commit your staged changes:**
  ```bash
  git commit -m "Your commit message"
  ```

---

## 3. Branching and Merging

Work on different features in parallel.

- **List all branches:**
  ```bash
  git branch
  ```

- **Create a new branch:**
  ```bash
  git branch <branch_name>
  ```

- **Switch to a branch:**
  ```bash
  git checkout <branch_name>
  ```

- **Create and switch to a new branch:**
  ```bash
  git checkout -b <branch_name>
  ```

- **Merge a branch into your current branch:**
  ```bash
  git merge <branch_name>
  ```

- **Delete a branch:**
  ```bash
  git branch -d <branch_name>
  ```

---

## 4. Remote Repositories

Collaborate with others.

- **List remote repositories:**
  ```bash
  git remote -v
  ```

- **Add a remote repository:**
  ```bash
  git remote add <remote_name> <repository_url>
  ```

- **Fetch changes from a remote repository:**
  ```bash
  git fetch <remote_name>
  ```

- **Pull changes from a remote repository:**
  ```bash
  git pull <remote_name> <branch_name>
  ```

- **Push changes to a remote repository:**
  ```bash
  git push <remote_name> <branch_name>
  ```

---

## 5. Viewing History

Inspect the history of your repository.

- **View commit history:**
  ```bash
  git log
  ```

- **View commit history with more detail:**
  ```bash
  git log --oneline --graph --decorate
  ```

- **View the changes made in a commit:**
  ```bash
  git show <commit_hash>
  ```

## Conclusion

This cheatsheet covers the basic Git commands to get you started. Git is a powerful tool with many more features to explore. For more in-depth information, check out the official [Git documentation](https://git-scm.com/doc).

Happy coding! 🚀