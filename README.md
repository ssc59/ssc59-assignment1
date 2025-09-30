# Overview 
I have created a personalized cricket portfolio website to showcase my journey as a player, leader and founder of Pittsburgh's first women's cricket team. The purpose of this website is to highlight my accomplishments, statistics, the timeline of when I started it till now, and personal background along with allowing viewers to connect with me through the contact page. 

I have added 5 pages:
1. Home(index.html)- It includes introduction, my personal journey, and an "About Me" section
2. Timeline(timeline.html) - It highlights my journey year by year
3. Statistics(stats.html) - Showcases my batting and bowling performance
4. Highlights(highlights.html)- Shows the match reports for two matches were I scored the most and provides a detailed breakdown
5. Contact(contact.html)- It is a contact form where viewers can leave a message

# What each page does 
1. Home page includes a hero banner with my name, a theme toggle button and links to other sections. It also contains my personal cricket journey and an "About Me" section with my hobbies and interests
2. Timeline includes an ordered list detailing my progression from 2021 to 2025, including team formation, championships, natioal team members exposure, and recognition
3. Statistics page include tables for batting and bowling statistics such as matches, runs, wickets, average and strike rate
4. Highlights page includes a brief description in bullet-pointed format of my top two matches presented in styled cards.
5. The contact page is a form with fields for name, email, and message. Submissions trigger a friendly JavaScript alert.

# HTML Elements I used
- <header>, <main>, <footer> for page structure 
- <section>, <article>, <ol>,<ul> to group related content like the timeline events, highlights and stats
- <table> for structured cricket stats 
- <form> for message from the viewers
- <nav> for navigation purposes, with both a top nav bar and a responsive off-canvas sidebar

# CSS styles 
- I used theming where I allowed the users to play with dark and light dark themese using variables :root and .theme-dark
- I added custom styles for headings, subtitles and card-titles
- I also added a top nav for desktop and an off-canvas sliding menu for mobile
- Reusable .card-style class with shadows, rounded corners, and padding
- For the buttons, I made them primary, outline and small with hover states
- The tables have alternating row colors and dark mode adjustments made to them
- Styled the input fields, textareas, and submit buttons with hover/focus states in the contact page.

# Javascript
- In the navigation, I made sure it toggles the off-canvas sidebar menu on mobile devices and supports mouse click and keyboard accessibility like the "Enter or Space" button on laptops
- For the dark/light theme, I made sure it perfectly switches between the two, saves the preference using the sessionStorage and ensures the stat numbers are visible in both themes
- Lastly for the contact form, I made sure to prevent page reload on submission and show a confirmation alert with the message is submitted 







