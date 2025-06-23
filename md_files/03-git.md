# Git

## Using Git

Before we start working with GitHub, let's take a quick look at a how Git works, and some of the words we'll be using to describe what we're doing.  
Git is used for keeping track of changes made to files inside a specified folder - this set of files makes up what we'll be calling a **respository** (or a **repo**). It does that with a list of "snapshots" - these are called **commits**.

Let's do a little exercise to get some practice with Git, and using the terminal in general:

### Creating a new repository

Choose a location wher you will store your repositories and move to it using `cd` command (if you're not sure where you are, or what is inside the folder you're currently in, remmeber you can always youse `pwd` and `ls` to get your bearings!), and use `mkdir foler_name` to create a new folder - doesn't matter how you name it, as long as you're going that's where your repos are:) Then, use `cd` to move to that directory, create another directory and name it something like "experiment" and `cd` into that one.

Once you're there, use this command to create a new Git repository:

```bash
git init
```

Congratulations, you just made your first repository! If you open this folder the same way you usually navigate the files and folders on your computer, it will probably look like it's still empty. In fact, a new, hidden folder has just been created - you can either enable showing hidden files in your files explorer, or use `ls -a` console command to see all files, including the hidden ones: you should see a `.git` folder there. For now, all you need to know is that that's where all the information about your commits will be stored.  

You can make sure that Git is working with this command:

```bash
git status
```

Currently, the response should look like this:

```bash
On branch main

No commits yet

nothing to commit (create/copy files and use git add to track)
```

So, Git *does* indeed work, but it doesn't have any files to track yet. Let's change that.

### First commit

### Staging

Create a new text file. It doesn't really matter how you do it - you can use `touch` command, VSCode, or create it in any way you're used to. Now, use the `git status` command again. This time, the response should look like this (hello_git.txt is just what I decided to name my file):

```bash
On branch main

No commits yet

Untracked files:
  (use "git add <file>..." to include in what will be commited)
      hello_git.txt

nothing added to commit but untracked files present (use "git add" to track)
```

Looks like Git already knows there's a file in the repository, but it's not one it's currently keeping track of. To make Git track changes to our file, we can use either of these commands:

```bash
git add hello_git.txt
git add .
```

The second command tells git to add *all* of the files that's been created since the last commit to the tracked list. Also, if you want only a couple of files to the list but no all of them, you can put multiple file names after `git add` separating them with spaces.  
If we use `git status` now, it should look like this:

```bash
on branch main

No commits yet

Changes to be commited:
  (use "git rm --cached <file>..." to unstage)
        new file:   hello_git.txt
```

Looks like Git is ready to start keeping track of our file! This process you just went through is called **staging**. It also told us how to remove a file from the list in case we've added one by mistake (it's that stuff in parentheses: `git rm --cached <file>`, where `<file>` is the name of one or more files we want to remove).

Now that you have made a repository and staged something for Git to track, it's finally time to create your fist commit:

```bash
git commit -m "Initial commit"
```

What you put in parentheses will be a comment you (and, when you'll be making commits to the hackathon's project, your teammates) will see in the the commit history. It should be short and desciptive, so try to briefly summarize what changes you made to the repository since the last commit.

If you use use `git status` again, you should see a message like this one:

```bash
On branch main
nothing to commit, working tree clean
```

This means Git saved our changes and is ready for our a commit. You can view the commit history by using this command:

```bash
git log --graph --oneline
```

The `--oneline` argument (also called a flag) will hide the author and date of the commit, and `--graph` will display lines representing branches. You only have one commit and one branch (main) for now, so the graph will not be very interesting, but since you will probably be using it rather often, it's good to get used to using it.

That's probably enough commands for now. You can try adding new files and folders to the repository, changing their contents, making new commits and using `git log` without `--oneline` and `--graph` flags to what difference they make as some more practice:)
