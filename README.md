Explanations of the technologies used.
A couple of paragraphs about the general approach you took.
Descriptions of any unsolved problems or major hurdles you had to overcome.
A link to your planning documentation for how you broke down this project with deliverables and timelines.
Installation instructions for any dependencies.
A link to your user stories — who your users are

# Approaches Taken:

## 1. Create Mock Drafts of pages to meet business requirements
    -- Developers outlined basic design of an MVP with paper/pencil
    -- Used User Stories as a guide for an MVP
    -- Developers made a preliminary list of Javasript functions and HTML elements necessary to achieve desired UI design
    -- Made Wireframe designs for desired UI
## 2. Pair-Programming, Agile methodlogies, and Extreme Programming Approaches
    -- Constant, daily meetings between developers in person and over Slack
    -- In person, pair programming achieved during User Story creation, app structure design, implementing API calls
    -- Pair programming also achieved when developers had questions about partner code and explanation was required
    -- Extreme Programming achieved with daily stand-ups, basic UI acceptance tests, pair programming, and pair negotiation
    -- Agile methodlogies achieved with over 80 commits on Github and development of multiple, small aspects of MVP daily
    -- Developers worked independently on certain aspects of seperate pages to acheive loose dependancy between files
# 3. 


# S1-Project-1

Contributors: Benjamin Karasik & Qiming Chen

Post-It functions as a Reddit-like front-end application. It is expected to serve as a forum for users to create accounts, login to their accounts, and create and manage posts, comments, and their profile.

The application structure is defined to be multi-paged. Each Html, CSS, and Javascript file is divided to serve only one page at a time. 

Below is an outline of the project with links to our User Stories created in Pivotal Tracker, Requirements Outline, Feature List, and a preliminary sketch of our UI.


# User Stories and Features 
### User Stories

[Pivotal Tracker link](https://www.pivotaltracker.com/n/projects/2400279)

Main Application Components:

- Sign up / Log in (account management)
- Create / View posts (posts)
- Create / View / Delete comments (comments)
- Create / View / Update profile (profile)

### Function List



###### Home page

- login text area for login function / signup link directing to signup form
- display all posts from server. Users can view and comment on the posts.

###### Post page

- login text area for login function / signup link directing to signup form
- ** if user is not logged in, the page will show error message and hide other contents
- two buttons serve as a switcher to view own posts, or create a new post
- view all posts mode: list all posts sorted by post id, each post has an click listener connected to single view mode
- view one post mode: show one post, comments if any, a comment input area, submit button, and a delete post button
- create a post mode: enter title, post content, and submit

###### Profile page

- login text area for login function / signup link directing to signup form
- ** if user is not logged in, the page will show error message and hide other contents
- If profile is empty and not accessible from the server, the form will be editable
- After entering info, create profile with API call
- If profile is created, display in the page, email and address boxes are grey and read-only, mobile is white and editable for updating profile
- After entering info, update profile with API call

### Wireframe

Therefore, we defined the UI as

##### home page

![alt text][home_page]

##### post page

- post page - view all posts owned by user

![alt text][post_view_all]

- post page - view a single post

![alt text][post_view]

- post page - create a post

![alt text][post_create]

##### profile page

![alt text][profile_page]


# Tech Stack, Methodologies and Principles

### Tech Stack

- HTML for markdown

- CSS for styling and layout

- Javascript for Listners for event handling, DOM manipulation, Communication with backend API, Ajax fetch

### Methodology

Agile Development and Extreme Programming

- pair programming

- fast iterations

- continuous integration

- early deliverable

### Principles

- KISS (keep it simple, stupid)

- DRY (don't repeat yourself) (modularity)

### Application Structure
![alt text][app_structure]

### Hosted app

[OPEN THE APP](https://qimingchen.github.io/S1-Project-1.io/src/html/index.html)
[to enable loading javascript in chrome and avoid mix content warning, please temporarily enable an unsafe script on your browser]

# Timeline:

### requirement analysis and design

- break down features and write user stories (2019/09/24 Tue)

### code

- define application structure (2019/09/24 Tue)

- define HTML markdown (2019/09/24 Tue ~ 2019/09/25 Wed)

- implement consumer for api request and response (2019/09/24 Tue ~ 2019/09/27 Fri)

- implement javascript for each page (2019/09/24 Tue ~ 2019/09/27 Fri)

- css styling (2019/09/26 Thr)

- code cleaning up & documentation (2019/09/28 Sat ~ 2019/09/29 Sun)

### test

- test features (2019/09/29 Sun)

### deploy

- deploy on github host

- presentation (2019/09/30 Mon)

# TODO

- unit test

# Test Cases

According to user stories, we can demo in this order:

- Sign up / Log in (account management)

- Create / View / Delete post (post)

- Create / View / Delete comment (comment)

- Create / View / Update profile (profile)


A README.md file with:

... Explanations of the technologies used.

... A couple of paragraphs about the general approach you took.




[home_page]: https://github.com/BenjaminKarasik28/S1-Project-1/blob/qc/image/home_page.png "home page 1"
[post_view]: https://github.com/BenjaminKarasik28/S1-Project-1/blob/qc/image/post_view_a_post.png "post page - view a post"
[post_view_all]: https://github.com/BenjaminKarasik28/S1-Project-1/blob/qc/image/post_view_posts.png "post page - view all posts"
[post_create]: https://github.com/BenjaminKarasik28/S1-Project-1/blob/qc/image/post_create_a_post.png "post page - create a post"
[post_view]: https://github.com/BenjaminKarasik28/S1-Project-1/blob/qc/image/post_view_a_post.png "post page - view a post"
[profile_page]: https://github.com/BenjaminKarasik28/S1-Project-1/blob/qc/image/profile_page.png "profile page"
[app_structure]: https://github.com/BenjaminKarasik28/S1-Project-1/blob/qc/image/app_structure.png "app structure"
