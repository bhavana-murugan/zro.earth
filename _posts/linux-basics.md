---
title: 'Linux cheatsheet & basics'
publishedAt: 'Feb 22, 2023'
category: dev
summary: 'Know about basic commands, bash scripting, cron jobs etc...'
author: Rithik
---

# Basic commands
```bash
| Purpose                            | Command                                  |
| ---------------------------------- | ---------------------------------------- |
| print in terminal                  | echo "Hello"                             |
| print current working directory    | pwd                                      |
| create a file                      | touch abc.md                             |
| create a hidden file               | touch .defs                              |
| create a directory                 | mkdir abc                                |
| goto a directory                   | cd /var/tmp                              |
| goto root directory                | cd ~                                     |
| list files                         | ls                                       |
| list files - with permissions      | ls -ltr                                  |
| list files - including hidden ones | ls -lart                                 |
| copy a file to a dir               | cp /var/tmp/abc.md /home/dev/            |
| copy of a file for backups         | cp /var/tmp/abc.md /var/tmp/abc.md_bkp   |
| display current date and time      | date                                     |
| display hostname                   | hostname                                 |
| display userid & details           | id                                       |
| terminal calculator                | bc  `[+ - * / * ** % ]` `quit - to quit` |
```
 
 
# Medium level commands
```bash
| Purpose                              | Command                                                |
| :----------------------------------- | :----------------------------------------------------- |
| to display bash location             | which bash                                             |
| convert windows file to unix         | dos2unix abc.md                                        |
| allow permission to all              | chmod 777 abc.md                                       |
| allow execute permission to user - u | chmod u+x abc.md                                       |
| run a script                         | ./invoke.sh                                            |
| run a script - by passing params     | ./invoke.sh param1 param2                              |
| view a file                          | less abc.md `q - to quit`                              |
| view a file - last 100 lines         | tail -100 abc.md                                       |
| view a file - in vim                 | vi abc.md                                              |
| secure copy between host             | scp /var/tmp/abc.md user@.host.com:path/to/destination |
```

# Basics of bashing
refer this link from freecodecamp - [Bash scripting basics](https://www.freecodecamp.org/news/shell-scripting-crash-course-how-to-write-bash-scripts-in-linux/)

```bash
[root@host ~]#
``` 

If terminal has `#` it means we are logged in as `root/super user`. If terminal has `$` it means we are logged in as `normal user`.

```bash
[root@host ~]$
```

# Gists
```bash
| purpose                                               | cmd                                 |
| :---------------------------------------------------- | :---------------------------------- |
| single line comment                                   | #string to be commented             |
| multi line comment                                    | : ' string to be commented '        |
| echo into a file - replace content                    | echo "string" > test.txt            |
| echo into a file - append string                      | echo "string" >> test.txt           |
| open a file and let ur enter string - replace content | cat > test.txt `ctrl + d - to quit` |
| open a file and let ur enter string - append string   | cat >> test.txt                     |
```

# Bash file starts with
```bash
#! usr/bin/bash
```

# Export
```bash
#! usr/bin/bash
msg = "string"
export msg
./second_script.sh
```

# Heredoc delimeter - this will display content inside the anyText in the terminal 
```bash
cat << anyText
this is a text
multi line
anyText
```

# Fetching value from parameter
```bash
terminal: ./run.sh param1 param2 param3

#! usr/bin/bash
echo $1 $2 $3
```

# Fetching value from parameter into array
`$@` will fetch unlimited params passed
```bash
terminal: ./run.sh param1 param2 param3

#! usr/bin/bash
args=("$@")
echo $@ - will print the array
echo $# - will print the array length
#echo ${args[0]} ${args[1]} ${args[2]} - alternate way to print
#echo $1 $2 $3 - alternate way to print
```

# Declaring variable and accessing them
```bash
#! usr/bin/bash
USER = abc
AGE = 30

echo "`$USER` is of age `$AGE`"
```

# Conditional statements
## If
```bash
#! usr/bin/bash
if [ $AGE -gt 18 ]
then
    echo "age greater than 18"
fi
```

## If, else
```bash
#! usr/bin/bash
if [ "$AGE" -gt 18 ]
then
    echo "age greater than 18"
else
    echo "age less than 18"
fi
```

## If, else if, else
```bash
#! usr/bin/bash
if [ "$AGE" > 18 ] && [ "$AGE" -lt 25 ]
then
    echo "age greater than 18 and less than 25"
elif (( $AGE > 25 ))
    echo "age greater than 25"
 else
    echo "age less"
fi
```

### Another example
```bash
#! usr/bin/bash
if [ "$AGE" > 18 -a "$AGE" -lt 25 ]
then
    echo "age greater than 18 and less than 25"
elif (( $AGE > 25 ))
    echo "age greater than 25"
 else
    echo "age less"
fi
```

## Conditional operators
```bash
| condition | cmd |
| --------- | --- |
| and &&    | -a  |
| or        | -o  |
```

## Logical operators
```bash
| condition               | cmd |
| ----------------------- | --- |
| equal >                 | -eq |
| not equal >             | -ne |
| greater than >          | -gt |
| less than >             | -lt |
| greater than or equal > | -ge |
| less than or equal >    | -le |
```

# Looping statements
## While
```bash
#! usr/bin/bash
number = 1
while [ $number -le 10 ]
do
    echo "$number"
    number = $(( number+1 ))
done
```

## Until
until runs until the condition becomes true and breaks out if condition is true.
```bash
#! usr/bin/bash
number = 1
until [ $number -ge 10 ]
do
    echo "$number"
    number = $(( number+1 ))
done
```

## For
```bash
#! usr/bin/bash
for i in 1 2 3 4 5
do
    echo $i
done
```

### Another example
```bash
#! usr/bin/bash
for i in {0..10}
do
    echo $i
done
```

### Another example
```bash
#! usr/bin/bash
for ((i = 0; i<10; i++))
do
    echo $i
done
```

## Read file line by line
```bash
#! usr/bin/bash
while read line
do
    echo "$line"
done < "file_name.txt"
```

# cron job scheduling
```bash
5 0 * 8 *  => At 00:05 in August                                       
5 4 * * 6 => At 04:05 on Sunday                                       
0 22 * * 1-5 => At 22:00 on every day-of-week from Monday through Friday 
```