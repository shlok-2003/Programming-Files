## This class is regarding the variables in bash scripting

- Variables are used to store data, and they are used to store data in a memory location. 

There are two types of variables in bash scripting:
1. System Variables
2. User Defined Variables

### System Variables:

System variables are the variables that are already defined in the system. These variables are used to store the system information. 
Some of the system variables are:
1. `HOME`
2. `PATH`
3. `USER`
4. `SHELL`
`.....`

### User Defined Variables:

User-defined variables are the variables that are defined by the user.

#### Syntax to define a variable:
```bash
variable_name=value
```

**Note**: `Don't use spaces around the equal sign`.

Now we can print this variable using the following syntax:
```bash
echo $variable_name
```

**Note**: `The variables expires after the session ends`. Also, `use double quotes(" ") to print the value of the variable`.