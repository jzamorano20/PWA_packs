# PWA_packs

## User Story

```md
AS A developer
I WANT to create notes or code snippets with or without an internet connection
SO THAT I can reliably retrieve them for later use
```

## Acceptance Criteria

```md
GIVEN a text editor web application
WHEN I open my application in my editor
THEN I should see a client server folder structure
WHEN I run `npm run start` from the root directory
THEN I find that my application should start up the backend and serve the client
WHEN I run the text editor application from my terminal
THEN I find that my JavaScript files have been bundled using webpack
WHEN I run my webpack plugins
THEN I find that I have a generated HTML file, service worker, and a manifest file
WHEN I use next-gen JavaScript in my application
THEN I find that the text editor still functions in the browser without errors
WHEN I open the text editor
THEN I find that IndexedDB has immediately created a database storage
WHEN I enter content and subsequently click off of the DOM window
THEN I find that the content in the text editor has been saved with IndexedDB
WHEN I reopen the text editor after closing it
THEN I find that the content in the text editor has been retrieved from our IndexedDB
WHEN I click on the Install button
THEN I download my web application as an icon on my desktop
WHEN I load my web application
THEN I should have a registered service worker using workbox
WHEN I register a service worker
THEN I should have my static assets pre cached upon loading along with subsequent pages and static assets
WHEN I deploy to Heroku
THEN I should have proper build scripts for a webpack application
```


## Usage 
Users are able to use the Progressive Web Application or PWA text editor in the browser and offline. If you click on the install button it will download on your computer. Just like in the browser youll be able to type and save it and offline as well just refresh when you type somehting in the installed JEST editor and it should show on the web browser.


## Screen shot
Online JEST
![web](./Develop/assets/Web.png)

Installed JEST
![installed jest](./Develop/assets/Downloaded.png)


## Video DEMO

https://drive.google.com/file/d/1cWz25XCA4XnbgM4dI4fwbMY8fdCc9hBv/view


## Deployed site
https://pwa-packs.herokuapp.com/