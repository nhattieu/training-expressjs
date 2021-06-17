npm init


git init 



express
express-handlebars

nodemon
node-sass
morgan

structures


Project
|-- node_modules // Libraries installed
|-- src // The sources of the app
|   |-- public // Assets static
|   |   |-- css // CSS has been compiled
|   |   |   |-- app.css
|   |   |   |-- ...
|   |   |
|   |   |-- img // Images
|   |   |   |-- logo.png
|   |   |   |-- ...
|   |
|   |-- resources // Code here
|   |   |-- scss // SCSS instead of CSS
|   |   |   |-- app.scss
|   |   |   |-- _variables.scss
|   |   |   |-- _mixins.scss
|   |   |   |-- ...
|   |   |
|   |   |-- views // Use template engine to auto rendering
|   |   |   |-- layouts // Contains layouts
|   |   |   |   |-- admin.hbs
|   |   |   |   |-- global.hbs
|   |   |   |   |-- ...
|   |   |   |   
|   |   |   |-- partials // Contains partials
|   |   |   |   |-- header.hbs
|   |   |   |   |-- footer.hbs
|   |   |   |   |-- ...
|   |   |   |   
|   |   |   |-- home.hbs
|   |   |   |-- news.hbs
|   |   |   |-- ...
|   |   
|   |-- index.js
|   |-- ...
|
|-- .gitignore
|-- nodemon.json
|-- package-lock.json
|-- package.json
|-- README.md





prettier - làm đẹp code
lint-staged - chạy script sau khi git add
husky - lắng nghe hành động git và thực thi các script