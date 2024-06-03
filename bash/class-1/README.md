### Shell Scripting

Shell scripting is a way to automate tasks and execute commands in a Unix-like operating system using a shell interpreter. It involves writing a series of commands in a plain text file, which can be executed as a script. Shell scripts are commonly used for system administration, automation, and repetitive tasks.

*In simple words*, Shell scripting is a series of commands that we can write in `shell (bash)` which reduces our tedious work.

### We use Shell for Shell scripting

**Note:** To know, which bash is being used:
```bash
echo $SHELL
```

But first, you have to make the script executable by using the following command:
```bash
chmod +x script.sh
```

There are many ways to write a bash script, but the most common way is to use the `#!/bin/bash` shebang at the beginning of the script. This tells the system to use the bash interpreter to execute the script. It is also a good practice to add comments to the script to explain what each part of the script does.