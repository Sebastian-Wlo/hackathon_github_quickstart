**Full Disclosure: This page is essentially just a rewrite of TheOdinProject's "Setting up Git" lesson from their Foundations Course, and the only thing I've written from scratch is a short instruction on how to install Git For Windows. If you'd prefer to read something more coherent than my ramblings, you can find it here: [Link](https://www.theodinproject.com/lessons/foundations-setting-up-git).**

# Introduction to Git and GitHub

[Git](https://git-scm.com/) is a popular _version control system_ - it is widely used to keep track of changes to files*, and it's an essential tool used in software development. If you're really interested in its history and uses, you would most likely be better off reading more about it on Wikipedia than whatever I can put together on a short notice;)  

What you probably _should_ know going into the Hackathon though, is how to install it on your system, and how to use it along with GitHub to make your contributions to the project a little bit easier.  

GitHub is an online service that allows for uploading your code to their server and collaboration on projects. If you're planning on contributing to open source, then you will probably end up using both Git and GitHub a lot.  

## Installing Git

> Note: If you don't have a preferred code editor yet, go ahead and ask your teammates what they are using, and then install that before moving forward. Having a common editor should make it slightly easier if you'd need help with anything during the development process.
> I'm going to write most of these instructions with Visual Studio Code in mind.

Sorry Apple users! I don't have any way to verify the installation on MacOS. Best I can do is point you to the instructions on theOdinProject: [Link to TOP](https://www.theodinproject.com/lessons/foundations-setting-up-git#step-10-install-homebrew). I hope that will help!  

### Windows

You can use either WSL (Linux Subsystem for Windows), or download Git For Windows from here: [Link go download page](https://git-scm.com/download/win) (it's actually the same link you find in the Visual Studio Code when you open the "Source Control" menu, so use whichever one you prefer).  

WSL is fantastic, but setting it up is a bit beyond the scope of this little intro - if you want to use it, you can follow the guide on [contribute.freecodecamp.org/](https://contribute.freecodecamp.org/how-to-setup-wsl/), up to, and including, "Installing a Code Editor". If that's what you did - congratulations! You can move to the "Create a GitHub account" part:) If not, here's a quick description how to install "Git for Windows":

During the installation, you can leave the most of the installation options as they are, but I'd recommend choosing your code editor of choice as Git's default editor, changing the default behavior or "git pull" to "Rebase", and Overriding the default branch name for new repositories to `main`, since that's what GitHub uses. There will be a description how to set up the default branch name later in these instructions, but since we have the option now, we might as well use it.

### Linux

Open the terminal and run these commands to update your system:

``` bash
sudo apt update
sudo apt upgrade
```

You probably already have git installed - you can make sure by checking the installed version with this command:

``` bash
git --version
```

If you see "git: command not found", you can install the newest version by running these commands, and then checking the installed version again:

``` bash
sudo add-apt-repository ppa:git-core/ppa
sudo apt update
sudo apt install git
```

## Creating a GitHub account

Head on to [GitHub.com](https://github.com/signup) and create a new account.

... I don't really have anything to add here.

## Setting up Git

> Note: all commands given in the code blocks are supposed to be typed in the terminal. You can use the system one, or, if you're using Visual Studio Code, you can open the built-in terminal with Ctrl + \` or from the drop-down menu in the top left of the window.
> If you're using Git on Windows, make sure you're running the "git bash" terminal! It uses the same commands as the Linux vesions.

There are a bunch of things you can change here, like colors used to highlight certain information, or create "shortcuts" for some iften used commands, but a minimal required setup to use Git is this:

``` bash
git config --global user.name "Your Name Goes Here"
git config --global user.email youremail@goes.here
git config --global pull.rebase true
git config --global init.defaultBranch main
```

The first two lines tell Git who is making the changes, the next one how to handle downloading new version of the project's files if you already have an older version on your computer, and the last one sets the default name of the branch to `main` - it makes sure that Git on our computer and GitHub are using a common name for the default branch (more about what's a branch and a repository later).

The `--global` "flag" is there to set these settings as default for all projects (you can always change them later, or enter a different ruleset for a specific project using a `--local` flag).  

## Connecting to GitHub: Creating and testing the SSH key

You've already told Git who's making changes to the files, which is enough to use it locally - if you're working on a project you won't intend to upload anywhere but still want to have some "savepoints" of your code, that was it. However, to be able to work with GitHub, you still need a way to tell Github who you are, and that you have an account there.

That's a long (and probably inaccurate) way to say the SSH key is a way to authenticate you're the one sending the requests. You can find instructions on how to generate a SSH key on your system and how to add it to your GitHub account in the GitHub Docks: [Link: Add a new SSH key](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account) [Link: Connecting to GitHub with SHH](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent), and then check if you're authenticated using these instructions [Link: Testing SSH connection](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/testing-your-ssh-connection).

Apologies for sending you to a bunch of different tutorials, but I don't want to a bunch of specific instructions just to make a typo somewhere. If you're having some problems with this steps, please contact me on Discord and I'll try to do my best to help you out!
