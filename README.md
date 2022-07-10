# node-graphql-service

There is a convenient service to manage and retrieve data for different entities
Microservices repository [here](https://github.com/YuliyaMinsk/node-graphql-microservices-to-task)

# 🚀 How to run?

1. Clone repository to local
2. Run `npm install`
3. Rename `.env.example` to `.env`
4. Run MongoDB by Cloud Atlas (`https://cloud.mongodb.com/ need VPN`), or install docker `https://docs.docker.com/desktop/#download-and-install`
5. Change the variable MONGO_URL in .env in **node-graphql-service repo** to the link of MongoDB
6. Run microservices in **node-graphql-service** repo by `npm run run:all:dev` command
7. Run application by `npm run start`

# 🔍 How to test?

- Use http://localhost:4000/ to work with GraphQL
- Use Mutation `registerUser` to add new user to database. You can use the following body:

```js
{
  "firstName": "My First Name",
  "lastName": "My Last Name",
  "email": "firstname@gmail.com",
  "password": "12345678",
}
```

- Use Query `loginUser` to receive JWT token. It will work 24 hours

```js
{
  "email": "firstname@gmail.com",
  "password": "12345678",
}
```

- Set JWT token to Headers:

![image](https://user-images.githubusercontent.com/79609660/178154867-0196ea35-211a-465e-a96d-f4b922383560.png)

- Now you can use all other Mutations and Queries

# If you have any questions send me message by telegram :)

my contact: @YuliyaRollini
