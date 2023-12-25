1. In package json only two dependencies are there react and react dom but we need more depencdencies like redux, appwrite, tine mce etc and install them.  "npm install @reduxjs/toolkit react-redux react-router-dom appwrite @tinymce/tinymce-react html-react-parser react-hook-form " using this link 
2. Need environment variables to store login ids or client details to deploy them secretely to maintain it in database. 
3. If we creating environment variables it should be in project routes. It measn readme.md and packaje json are in route system.
You must create custom environment variables beginning with REACT_APP_. Any other variables except NODE_ENV will be ignored to avoid accidentally exposing a private key on the machine that could have the same name. Changing any environment variables will require you to restart the development server if it is running.

These environment variables will be defined for you on process.env. For example, having an environment variable named REACT_APP_NOT_SECRET_CODE will be exposed in your JS as process.env.REACT_APP_NOT_SECRET_CODE.

4. Create environment file by .env and write react appwrite in it and it should not be trasnfered into production or gtihub so move it into gitignore
5. But we need to use that file for that create one more environment variable like .env.sample
6. How to get access to the .env file - it is different in frontend , backend , react, redux and vite for this 
7. During getting access to .env file instead of using REACT_APP use VITE and instead of process use import.meta because we are using in vite-react app not in react app
8. Go to appwrite and create project name and api last point will be given and store it in appwrite url of .env page

9. Use conf and conf.js to export all ids from environment variables here.

