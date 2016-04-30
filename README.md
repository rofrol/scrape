# Scrape

Showcase what can be done in vanilla.js. Inspired by:
- https://medium.com/@pistacchio/i-m-a-web-developer-and-i-ve-been-stuck-with-the-simplest-app-for-the-last-10-days-fb5c50917df
- https://medium.com/@wob/the-sad-state-of-web-development-1603a861d29f
- https://medium.com/vanilla-javascript/choosing-vanilla-javascript-in-2016-6f38a8302ee5
- http://www.pocketjavascript.com/blog/2015/11/23/introducing-pokedex-org
- dotJS 2015 - Henrik Joreteg - Pocket-sized JS https://www.youtube.com/watch?v=okk0BGV9oY0
- http://nolanlawson.github.io/brooklyn-js-html5-mobile-apps

## Install

Install npm packages:

```
npm i
```

Install postgresql then create role and database:

```
$ psql -U postgres
postgres=# CREATE ROLE myuser LOGIN password 'mypassword';
postgres=# CREATE DATABASE mydatabase ENCODING 'UTF8' OWNER myuser;
```

Create table:

```
sh init.sh
```

Populate database with data:

```
npm run populate
```

Run server and see result:

```
npm run server
```

## APIs

- https://github.com/Glavin001/node-kickass/issues/3#issuecomment-66647959
- https://github.com/isdampe/kat-api
- https://github.com/gusnips/node-kickass-torrent
- http://stackoverflow.com/questions/27499916/error-on-getting-data-from-json-api
- http://code.runnable.com/U8e1fH7rdUJLwXNO/kickass-api-for-node-js-and-hello-world
- https://github.com/N44PS/kickass-simple-search
- https://github.com/Belphemur/node-kickass-json
- https://github.com/fm4d/KickassAPI
- https://github.com/stephan-mclean/KickassTorrentsAPI
- http://stackoverflow.com/questions/35114336/cant-upload-torrent-with-kat-api
- http://stackoverflow.com/questions/33262548/request-details-about-a-specific-torrent-using-kickass-json-api
- https://github.com/karan/TPB
- https://github.com/t3chnoboy/thepiratebay

## node.js

- http://stackoverflow.com/questions/5892569/responding-with-a-json-object-in-nodejs-converting-object-array-to-json-string
- http://stackoverflow.com/questions/4253367/how-to-escape-a-json-string-containing-newline-characters-using-javascript
- JSON does not allow real line-breaks. You need to replace all the line breaks into \n. http://stackoverflow.com/questions/2392766/multiline-strings-in-json
- https://nodejs.org/docs/v4.2.2/api/http.html
- installing pg on windows: ok, pg-native: error https://github.com/brianc/node-postgres

## postgresql

Add database in pgadmin.
Launch psql from windows menu.

```sql
--- semicolon is needed to run
insert into scrape values('1231fawer32', 1, 1);
select * from scrape;
```
