---
sidebar_position: 1
---

# Local Installation

Go Ahaed and Fork the repository to your account.
```shell
git clone https://github.com/<username>/CircuitVerse.git
cd CircuitVerse
```
### You must have the following Dependencies -  

1. Ruby on Rails   **(  ruby-2.6.5 & Rails 6.0.1  )**<br/>
    * Keep in mind the version number while installing.<br/>
    * Some Helpful Links for Installation.<br/>
    [For Windows](https://www.youtube.com/watch?v=LaUDbDUBB-4 "ROR").<br/>
    [For Ubuntu](https://www.youtube.com/watch?v=dB6Xwjxct8Q "ROR")<br/>
2. PostgreSQL  **(   (9.5) - Database  )**<br/>
    * Follow the following link for installing and setting up PostgresSQL <br/>
    [For Windows](https://www.youtube.com/watch?v=RAFZleZYxsc "Postgres")<br/>
    [For Ubuntu](https://www.youtube.com/watch?v=-LwI4HMR_Eg&t=725s "Postgres")<br/>
3. Yarn 
    * Follow the following link for installing Yarn <br/>
    [For Windows](https://www.youtube.com/watch?v=YMy_yrbsU8w "Yarn")<br/>
    [For Ubuntu](https://www.youtube.com/watch?v=B7T5vabyeis "Yarn")<br/>
3. Redis - Data structure store
    * Follow the following link for installing Redis <br/>
    [For Windows](https://www.youtube.com/watch?v=188Fy-oCw4w&t=111s "Redis")<br/>
    [For Ubuntu](https://www.youtube.com/watch?v=gNPgaBugCWk&t=616s "Redis")
    

### Hurray !!! Hope you finally got to this point

Now Open terminal or cmd on the local repository &
copy paste these lines of code

```shell
gem install bundler
bundle install
yarn install
open ~/config/database.example.yml
```

Now open the `database.example.yml` file <br/>
Update the database setup as done while configuring PostgreSQL<br/>
My suggestion will be to make a copy of that file and rename to `database.yml` and then update the changes.
No need to worry about this file on pushing code to repo as it will be ignored ( included in .gitignore) .

```shell
rails db:create
rails db:migrate
bundle exec sidekiq -e development -q default -q mailers -d -L tmp/sidekiq.log
```
### Now Lets start the Local Development
```shell
rails s -b 127.0.0.1 -p 8080
```
Navigate to [127.0.0.1:8080](127.0.0.1:8080 "Dev")


## For Development in Gitpod
### Or More Detailed Instructions -
[CircuitVerse Official Setup.md](https://github.com/CircuitVerse/CircuitVerse/blob/master/SETUP.md "Setup")



## That's it!

Congratulations! You've successfully set up the project Locally.<br/>
__Let dive in and explore the world of CircuitVerse.__
