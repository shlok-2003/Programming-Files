## This class is regarding basic maths in bash scripting

Bash cannot perform arithmetic operations directly, like we do in other programming languages like python `10 + 30`. For evaluating the arithmetic expressions, we need to use the `expr` command.

### Syntax to perform arithmetic operations:

```bash
expr 10 + 30
```

**Note**: `You might be thinking that you can similarly evaluate multiplication, but the * command in bash is like a wild card. It means all the files in the current directory`. `You need to escape the * character using the backslash (\)`. 

```bash
expr 10 \* 30
```