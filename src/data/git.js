export const gitQuestions = [
  {
    "id": "git_e1",
    "category": "Git & GitHub",
    "difficulty": "Easy",
    "question": "What is Git?",
    "options": [
      "A hosting website for software projects",
      "A distributed version control system designed to track changes in source code",
      "A programming language used in backend servers",
      "A framework for writing CSS styles"
    ],
    "answerIndex": 1,
    "explanation": "Git is a distributed version control system. It records changes made to files over time, allowing you to recall specific versions later."
  },
  {
    "id": "git_e2",
    "category": "Git & GitHub",
    "difficulty": "Easy",
    "question": "Which command initializes a new, empty Git repository in your current directory?",
    "options": [
      "git create",
      "git init",
      "git start",
      "git setup"
    ],
    "answerIndex": 1,
    "explanation": "Running 'git init' creates a new local Git repository (initializing the hidden '.git' folder in the current directory)."
  },
  {
    "id": "git_e3",
    "category": "Git & GitHub",
    "difficulty": "Easy",
    "question": "What is the purpose of the 'git status' command?",
    "options": [
      "To check the network connection speed of GitHub servers",
      "To show the state of the working directory and the staging area (tracked/untracked changes)",
      "To show the list of all registered commit authors",
      "To upload files to a remote repository"
    ],
    "answerIndex": 1,
    "explanation": "'git status' displays the state of the working directory and staging area, showing which files are modified, staged, or untracked."
  },
  {
    "id": "git_e4",
    "category": "Git & GitHub",
    "difficulty": "Easy",
    "question": "How do you stage all modified and new files for the next commit?",
    "options": [
      "git stage all",
      "git add .",
      "git commit -a",
      "git save"
    ],
    "answerIndex": 1,
    "explanation": "'git add .' adds all changes in the current directory and its subdirectories to the staging area, preparing them to be committed."
  },
  {
    "id": "git_e5",
    "category": "Git & GitHub",
    "difficulty": "Easy",
    "question": "What is the difference between Git and GitHub?",
    "options": [
      "Git is a cloud platform; GitHub is a terminal command",
      "Git is the local version control tool; GitHub is a cloud-based hosting service for Git repositories",
      "They are the same thing developed by different companies",
      "Git is for writing JavaScript; GitHub is for HTML styling"
    ],
    "answerIndex": 1,
    "explanation": "Git is the version control tool that runs locally on your machine. GitHub is an online service that hosts Git repositories, enabling collaboration, code reviews, and remote backups."
  },
  {
    "id": "git_e6",
    "category": "Git & GitHub",
    "difficulty": "Easy",
    "question": "Which Git command is used to create a new branch named 'feature-auth'?",
    "options": [
      "git branch feature-auth",
      "git create branch feature-auth",
      "git checkout branch feature-auth",
      "git new branch-auth"
    ],
    "answerIndex": 0,
    "explanation": "'git branch feature-auth' creates a new branch with that name. You must then run 'git checkout feature-auth' (or use switch) to move to it."
  },
  {
    "id": "git_e7",
    "category": "Git & GitHub",
    "difficulty": "Easy",
    "question": "What command retrieves changes from a remote repository and merges them into your current branch?",
    "options": [
      "git fetch",
      "git pull",
      "git download",
      "git merge-remote"
    ],
    "answerIndex": 1,
    "explanation": "'git pull' fetches changes from the remote tracking branch and merges them into your current local branch instantly."
  },
  {
    "id": "git_e8",
    "category": "Git & GitHub",
    "difficulty": "Easy",
    "question": "What does the '.gitignore' file do?",
    "options": [
      "It lists files that should be encrypted during push",
      "It specifies intentionally untracked files that Git should ignore (e.g. node_modules, build outputs)",
      "It deletes temporary files from the repository automatically",
      "It hides repository branches from other developers"
    ],
    "answerIndex": 1,
    "explanation": "A '.gitignore' file specifies pattern-matched files or directories that Git should ignore and not track (e.g. build directories, local config, secret keys, or dependency folders)."
  },
  {
    "id": "git_m1",
    "category": "Git & GitHub",
    "difficulty": "Medium",
    "question": "What is the difference between git merge and git rebase?",
    "options": [
      "Merge creates a new commit combining histories; rebase reapplies commits on top of another base, creating a linear history",
      "Rebase is faster but deletes local commits; merge preserves branches",
      "Merge is only for remote repositories; rebase is for local ones",
      "They are identical commands with different names"
    ],
    "answerIndex": 0,
    "explanation": "Merge ties two branch histories together with a 'merge commit', preserving the branch structure. Rebase moves or combines a sequence of commits to a new base commit, rewriting history to be linear."
  },
  {
    "id": "git_m2",
    "category": "Git & GitHub",
    "difficulty": "Medium",
    "question": "What is the purpose of 'git stash' and when would you use it?",
    "options": [
      "To permanently delete modified files",
      "To temporarily save (stash) your local modifications to a clean stack, allowing you to switch branches without committing",
      "To lock branches on GitHub servers to prevent edits",
      "To compress git commit logs for deployment"
    ],
    "answerIndex": 1,
    "explanation": "'git stash' saves your current uncommitted changes (both staged and unstaged) and resets your working directory to match the HEAD. This is useful when you need to switch branches quickly without committing incomplete work."
  },
  {
    "id": "git_m3",
    "category": "Git & GitHub",
    "difficulty": "Medium",
    "question": "How do git checkout, git switch, and git restore differ in modern Git?",
    "options": [
      "checkout is deprecated; restore and switch are server-side actions",
      "checkout does everything; switch is specifically for branches, and restore is specifically for restoring working tree files",
      "switch is for cloning; restore is for resolving conflicts",
      "They are identical commands"
    ],
    "answerIndex": 1,
    "explanation": "In Git 2.23+, checkout was split to clarify operations. 'git switch' switches branches, and 'git restore' discards changes or restores files to a specific version. Checkout remains for backward compatibility."
  },
  {
    "id": "git_m4",
    "category": "Git & GitHub",
    "difficulty": "Medium",
    "question": "What does the command 'git cherry-pick <commit-hash>' do?",
    "options": [
      "It deletes a commit from the commit history",
      "It applies the changes introduced by a specific existing commit to your current working branch",
      "It checks if a commit is safe from virus scripts",
      "It displays a graph of commit histories visually"
    ],
    "answerIndex": 1,
    "explanation": "'git cherry-pick' allows you to grab a specific commit from one branch and apply it to another without merging the entire branch."
  },
  {
    "id": "git_m5",
    "category": "Git & GitHub",
    "difficulty": "Medium",
    "question": "What is the difference between git reset --soft, --mixed, and --hard?",
    "options": [
      "--soft reset deletes files; --hard keeps them",
      "--soft keeps staged changes; --mixed keeps modifications unstaged; --hard discards all changes in staging and working directory",
      "--soft is for GitHub; --hard is local only",
      "They are identical in their impact on file directories"
    ],
    "answerIndex": 1,
    "explanation": "--soft moves HEAD to commit, keeping files changed and staged. --mixed (default) moves HEAD and unstages changes, keeping modifications in working directory. --hard moves HEAD and discards all changes, overwriting files."
  },
  {
    "id": "git_m6",
    "category": "Git & GitHub",
    "difficulty": "Medium",
    "question": "What is a Pull Request (PR) on GitHub?",
    "options": [
      "A command that forces changes to download to your computer",
      "A proposal to merge changes from one branch into another, allowing for code review, discussion, and testing",
      "A notification sent when remote commits fail",
      "A Git hook script validating commit names"
    ],
    "answerIndex": 1,
    "explanation": "A Pull Request is a GitHub feature (not a core Git feature) that lets developers notify team members about a feature branch they want to merge, facilitating review before integration."
  },
  {
    "id": "git_m7",
    "category": "Git & GitHub",
    "difficulty": "Medium",
    "question": "How do you resolve a merge conflict in Git?",
    "options": [
      "By deleting the repository and cloning it again",
      "By editing the conflict markers (<<<<<<<, =======, >>>>>>>) in the affected files, selecting the correct code, staging, and committing",
      "By running 'git force-merge' to overwrite the conflicts",
      "By emailing GitHub support to merge it server-side"
    ],
    "answerIndex": 1,
    "explanation": "When Git cannot merge changes automatically, it inserts conflict markers. Developers must open the conflicted files, choose which changes to keep, delete the markers, stage the files, and run git commit."
  },
  {
    "id": "git_m8",
    "category": "Git & GitHub",
    "difficulty": "Medium",
    "question": "What is a remote tracking branch in Git (e.g. origin/main)?",
    "options": [
      "A local reference to the state of a branch on a remote repository",
      "A backup branch hosted in browser cookies",
      "A branch created by junior developers on remote servers",
      "A script running on GitHub validating branch names"
    ],
    "answerIndex": 0,
    "explanation": "Remote tracking branches are read-only branches that reflect the state of branches in your remote repository (like origin/main) as of the last 'git fetch' or 'git pull'."
  },
  {
    "id": "git_h1",
    "category": "Git & GitHub",
    "difficulty": "Hard",
    "question": "What is the Git 'reflog' and how is it used to recover lost commits?",
    "options": [
      "A security log verifying password hashes",
      "A log that records every single update to references (HEAD, branches) locally, allowing recovery of deleted commits or branches",
      "A cloud backup log hosted on GitHub servers",
      "A formatting script optimizing Git commit graphs"
    ],
    "answerIndex": 1,
    "explanation": "Git reflog (reference log) tracks updates to heads of local branches and references. If you accidentally delete a branch or hard-reset away commits, reflog shows the hashes of those previous states, allowing you to checkout and recover them."
  },
  {
    "id": "git_h2",
    "category": "Git & GitHub",
    "difficulty": "Hard",
    "question": "How does the 'git bisect' command assist in debugging?",
    "options": [
      "It splits the code file in half to identify syntax errors",
      "It uses a binary search algorithm to find the exact commit that introduced a bug or regression in your history",
      "It runs integration tests on remote servers concurrently",
      "It divides the git staging area into secure sub-compartments"
    ],
    "answerIndex": 1,
    "explanation": "git bisect performs a binary search between a known 'bad' commit (with the bug) and a known 'good' commit. It checks out commits in the middle, asking you to mark them good or bad until it pinpoints the offending commit."
  },
  {
    "id": "git_h3",
    "category": "Git & GitHub",
    "difficulty": "Hard",
    "question": "What is the difference between squashing commits during a merge and using standard merge commits?",
    "options": [
      "Squash deletes the branch code completely; standard merge keeps it",
      "Squash combines all branch commits into a single commit on the target branch; standard merge preserves all individual commits and adds a merge commit",
      "Squash is only supported on local branches; merge is for servers",
      "They have identical commit graph representation"
    ],
    "answerIndex": 1,
    "explanation": "Squashing combines all commits from the feature branch into one single commit, keeping the history of the main branch clean and linear. Standard merge commits preserve the entire granular commit history of the branch, along with a merge node."
  },
  {
    "id": "git_h4",
    "category": "Git & GitHub",
    "difficulty": "Hard",
    "question": "What are Git Hooks, and where are they located in a repository?",
    "options": [
      "Custom APIs in package.json; located in src/hooks",
      "Scripts Git executes before or after actions (commit, push, etc.), located inside the hidden .git/hooks directory",
      "Remote webhooks sent by GitHub to trigger CI/CD pipelines",
      "HTML attributes controlling anchor tag clicks"
    ],
    "answerIndex": 1,
    "explanation": "Git Hooks are scripts that run locally when key events occur (e.g. pre-commit, pre-push). They are stored in '.git/hooks' (untracked by default) and can be used to run linters, tests, or check commit messages."
  },
  {
    "id": "git_h5",
    "category": "Git & GitHub",
    "difficulty": "Hard",
    "question": "What is a Git Submodule, and how does it differ from a standard directory?",
    "options": [
      "A submodule is encrypted; a directory is open-source",
      "A submodule is a separate Git repository embedded inside a parent repository, tracking a specific commit hash",
      "A submodule is compiled on the server side only",
      "They are identical folder structures"
    ],
    "answerIndex": 1,
    "explanation": "A submodule allows you to keep a separate Git repository as a subdirectory of another Git repository. It tracks a specific commit hash rather than tracking files, keeping the parent repository clean."
  },
  {
    "id": "git_h6",
    "category": "Git & GitHub",
    "difficulty": "Hard",
    "question": "What is the difference between fast-forward merges and three-way merges?",
    "options": [
      "Fast-forward merges delete the target branch; three-way merges do not",
      "Fast-forward occurs when the target branch has no new commits, simply moving the pointer; three-way creates a merge commit because histories have diverged",
      "Three-way merges require three branches to merge simultaneously",
      "Fast-forward merges run on server background processes"
    ],
    "answerIndex": 1,
    "explanation": "If the target branch has no new commits since branching, Git does a fast-forward merge (moving the branch pointer forward). If the target branch has new commits, Git performs a three-way merge, creating a merge commit."
  },
  {
    "id": "git_h7",
    "category": "Git & GitHub",
    "difficulty": "Hard",
    "question": "How does the 'git merge-base' command function during branch operations?",
    "options": [
      "It deletes remote branches that have been merged",
      "It finds the best common ancestor commit between two branches, which Git uses to perform three-way merges",
      "It checks if commits meet signing key rules",
      "It resets the repository base to the initial commit"
    ],
    "answerIndex": 1,
    "explanation": "'git merge-base' finds the best common ancestor commit between two commits or branches. This common ancestor is the base commit Git uses during a three-way merge to calculate diffs."
  },
  {
    "id": "git_h8",
    "category": "Git & GitHub",
    "difficulty": "Hard",
    "question": "What is the purpose of signing Git commits with GPG keys?",
    "options": [
      "To compress the size of commit files",
      "To cryptographically verify the identity of the commit author, preventing commit spoofing",
      "To bypass GitHub branch protection rules",
      "To compile the code before pushing it to remote servers"
    ],
    "answerIndex": 1,
    "explanation": "GPG (GNU Privacy Guard) signing cryptographically verifies that a commit was actually written by the person claimed. GitHub displays a 'Verified' badge for commits signed with GPG keys."
  }
];
