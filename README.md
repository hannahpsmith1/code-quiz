# password-generator

Homework 4 - Creating a Code Quiz for a user


## Deployed Link
[Live Link](https://hannahpsmith1.github.io/code-quiz/)


## Cool Code! 

```
var promptLength = Number (prompt ("Password Length between 8-128 characters"));
  while (isNaN(promptLength) || promptLength < 8 || promptLength > 128) promptLength = Number(prompt("Length must be 8-128 characters. How many characters would you like your password to be?"));
```
<p> Both the above and below code snippets are part of the same function, but I wanted to pull them out seperately to highlight the conditions necessary for these to be validators.  In the above example, the identifier <b>Number</b> checks that the prompt entered is a valid number otherwise the code won't run. 

```
  while (!confirmUpper && !confirmLower && !confirmNum && !confirmSpecial) {
    alert("You must select at least one character type!");
```

<p> This condition (part of the same function as above) states that if the user does not select the bool true (okay in the alert) then the password generator cannot run.



---

## Prerequisites

*Access to the Internet

*Supported Web Browser

*Github Account

*Terminal (or gitbash)

*Local Disk Storage Capacity 

*VSCode, Sublime Text, or other IDE

---

## Installation
<p>Execute the following commands in  (Or Gitbash): 

1. ls 
2. mkdir code-quiz
3. cd code-quiz
4. git clone https://github.com/hannahpsmith1/code-quiz.git 



### Helpful Hints
Within terminal there are several shortcuts you can take to auto-fill values which makes it easier and faster to go between directories:
*when changing directories (cd) you can tab over if you have the first few letters of the directory and it will auto-complete the directory you are trying to go into
*if you hit the up arrow it will bring back the last command you executed (this is helpful if you messed up the command and need to tweek it or if you want to execute the command again)

---

### Installation GIF for visual reference
<b> Important to note, this is a generic example, not specific to this repository (originally referenced in homework 1)<b>

![Install_Repo](https://user-images.githubusercontent.com/59800839/84457296-2bf62b80-ac17-11ea-9da2-f61f7d13522f.gif)


---

## Built With
[HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)

[CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)

[JavaScript](https://www.javascript.com/)

---

## Author
**Hannah Smith**  

*[Portfolio](https://github.com/hannahpsmith1)
*[Github](https://github.com/hannahpsmith1/password-generator)
*[LinkedIn](https://www.linkedin.com/in/hannah-patience-smith/)

---
## Licenses
*None



## Sources:
1. My Tutor Christopher Sanner was very helpful in explaining adding to an empty array. 
2. [w3 schools](https://www.w3schools.com/) This site was my go to when poking around the internet to find things like semantic HTML
3. Classmates Colin, 

