# Fanfic Arena

Fanfic Arena is an online platform for fanfic enthusiasts who love to read, write and explore fan fictions. A good range of categories are available for them to explore.

[Live Demo](https://fanfic-arena.herokuapp.com/)

![fanfic arena preview](./preview.png)



My main inspiration for this project was fanfiction.com. I felt that I should try to create a better platform with better UI/UX for fanfiction users.

Also, I decided to bring together all my learnings into one place and analyze how I have improved and how I need to continue further in my journey.



### Technologies Used

**Frontend**

- React.js
- Redux
- Redux-Thunk
- Styled-Components
- Axios

**Backend**

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Auth

Other related and helpful libraries are used in the project for smooth development.



### Requirements

- Node.js 12+ & NPM 6
- MongoDB
- Cloudinary account
- Gmail account (for sending emails)



### Environment Variables

There are some environment variables that you need to define inside `.env` file in the project.

```
MONGO_USERNAME=mongouser
MONGO_PASSWORD=mongopassword
GMAIL_ADDRESS=yourgmailaddress
GMAIL_PASS=yourgmailpass
CLOUDINARY_CLOUD_NAME=cloudinarycloudname
CLOUDINARY_API_KEY=cloudinaryapikey
CLOUDINARY_SECRET=cloudinarysecret
```

You can configure the database connection in `db.config.js` file in `config` folder.



### Commands

```bash
# install dependencies for frontend
$ cd client && npm install

# install dependencies for backend
$ npm install

# run frontend
$ cd client && npm start

# run backend 
$ npm run dev
```



