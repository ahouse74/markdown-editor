This is a simple markdown editor designed for creating, editing, and formatting documents. 

Run locally: copy path from index.html and paste into web browser

Features:
    - Live preview
    - Character counter
    - Light and dark themes

Quiz Answers:

What is the purpose of git commit?
Taking a snapshot of the changes you've made to your code.

What happens when you push to Github?
Your snapshotted changes are saved in the remote repo.

Why should we commit multiple times instead of once at the end?
Because the whole point of Github is to keep track of the changes you've made to your code so that if something breaks you can go back to when it worked.

What is the difference between local repository and remote repository?
Local repos are only on your machine. Remote repositories are available from anywhere, so you can download and work on your code from any machine.

What does display: flex do?
Let's you size things in the container based on the width or height of it.

What is a media query?
A query that lets you adjust your CSS to a device's size

Why should responsive design be handled in CSS, not JS?
It's best to keep design and event handling separate. Plus, it's just easier.

What happens if media query is placed before base styles?
It'll immediately get overriden by the base styles.

What is the difference between data and computed in Vue?
data is for the base state of the application, whereas computed is for calculating values from said staate.

Why should we not manipulate DOM manually in Vue?
It conflicts with Vue and it's easier to let Vue handle it

What does v-html do?
Let's the user put html tags in the message

Why must we strip HTML before counting characters?
Because we're letting the user use html formatting tags, which don't count as characters

What is localStorage?
Storage of your current web browser session so that everything you type doesn't get erased if you accidentally refresh or close the tab

When does mounted() run?
Every time a component is added

What is a Vue watcher?
What it sounds like. Watches to see if a property will change and changes other things based on that.

Why should theme state also be persisted?
It's just more user-friendly. Imagine it's 1AM and light mode gets turns out because you bumped the refresh button. I'd be mad.

How did you utilise AI to help you code the app?
I used Copilot's autofill function, and Claude AI. See specific below.

What part of the build was most challenging?
Definitely the CSS. I'm just not used to frontend coding logic quite yet.

What is the benefit of using a framework such as Vue for frontend development?
It's like using Python to program - hides all the annoying stuff for you so it's as easy as possible to make what you want.

AI Prompts I Used:
How do I connect to a Github repo?
How do I position an element in top-right corner using CSS?
How can I remove HTML tags from a string in JavaScript?
How do I dynamically change Bootstrap theme?