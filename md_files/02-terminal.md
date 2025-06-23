# Terminal

## Using terminal to navigate through the file system

We will be using a terminal to move between different folders and to work on files, so here's a small cheat sheet with some useful commands:

> - `pwd` - print a path of the current working directory,
> - `ls` - print a list of files and subdirectories in the current directory,
> - `ls -a` - print a list of all files and subdirectories in the current directory, **including the hidden ones**,
> - `cd` - change working directory to the "home" directory
> - `cd subdirectory_name` - change the current working directory to the one after the command,
> - `cd ../` - "back out" from the current working directory to its parent directory,
> - `mkdir directory_name` - create a new directory,
> - `rmdir directory_name -r` - remove a targeted directory and its contents
> - `mv file_name destination_location_path` - move a file to the target location (or changes the file's name, if we include a new one instead, or at the end of the destination location
> - `cp file_name destination_location_path` - create a copy of a file (we can add a nafe for the copy instead of the location path if we want the copy to be in the same folder),
> - `touch file_name.extension` - create a new file,
> - `nano file_name.extension` - open the file in a simple text editor called nano
> - `code file_name.extension` - open the file in Visual Studio Code (if you have it installed) - if the file doesn't exist yet, it will be created when you save it,
> - `rm file_name.extension` - delete the targeted file.

You can use either absolute or relative paths to the files/folders.  
The **absolute path** is a full location of the file starting from the root folder: it would look something like this: `/home/username/repos/some_folder/file.md` on Linux, or `/c/repos/some_folder/file.md` on Windows.  
The **relative path** starts from thee current working folder, so it can look like this: `some_folder/file.md`.

Keep in mind that if the name of a file or folder includes a space, you might need to either add a `\` before the space, or put the whole name in quotation marks. Otherwise, text before and after the space would be treated as two separate arguments!

You can read find a more extensive list of commands and in-depth explainations of them in freeCodeCamp's [Learn Linux for Beginners](https://www.freecodecamp.org/news/learn-linux-for-beginners-book-basic-to-advanced#heading-42-navigating-the-linux-file-system) book - the list above is just a few basic ones (if you're on Windows, don't worry - these commands work in the Git Bash console as well, and WSL is literally a whole Linux system running inside Windows).
