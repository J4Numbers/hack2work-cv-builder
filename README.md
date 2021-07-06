# Hack2Work template

## Description

The project is written in Node.js, and uses the following frameworks and technologies:

|**Framework/Tech**|**Info**|**Purpose**|
|---|---|---|
|Node.js|https://nodejs.org/|Asynchronous event-driven JavaScript runtime|
|Restify|http://restify.com/|Framework for building RESTful web services|
|Bunyan Logger|https://www.npmjs.com/package/bunyan|JSON logging library for node.js services|
|MongoDB|https://www.mongodb.com/|MongoDB is a document-based distributed database|
|Mongoose|https://mongoosejs.com/|MongoDB object modeling for Node.js|
|Nunjucks|https://www.npmjs.com/package/nunjucks|View templating engine for javascript|

Test Frameworks:

|**Framework**|**Info**|**Purpose**|
|---|---|---|
|Chai|https://www.chaijs.com/|BDD / TDD assertion library|
|Sinon|https://sinonjs.org/|Standalone test spies, stubs and mocks for JavaScript|
|Mock-require|https://www.npmjs.com/package/mock-require|Simple, intuitive mocking of Node.js modules.
|Import-fresh|https://www.npmjs.com/package/import-fresh|Import a module while bypassing the cache
|Zombie|http://zombie.js.org/|Full-stack, headless browser testing|

## Project Structure
### `src/router`

|**Module**|**Purpose**|
|---|---|
|`middleware`|'pre' and 'on' handler chain for request/response handling |
|`routes`|controllers to register url listeners and provide model and page routing |

### `src/ts`

Typescript Classes for the project.

|**Module**|**Purpose**|
|---|---|
|`objects`|Typescript objects for the project|
|`renderer`|nunjucks renderer initialisation|
|`logging`| Logging engine initialisation |
|`session-management`|Session handling|

### `src/views`

Contains nunjucks templates for the project

|**Folder**|**Purpose**|
|---|---|
|`layouts`|Root layout and extensions|
|`pages`|Nunjucks templates for each page in the site, based on a particular layout template|

### `test/spec`

Unit tests for the project.

|**Folder**|**Purpose**|
|---|---|
|`app`|Javascript unit tests|
|`browser`|Browser-based user journey testing, using the Zombie headless browser|
|`ts`|Typescript unit tests|

## Local Configuration
To run the project locally, the following configuration will be required.

### certificates
Generate a self-signed certificate using `npm run regenerate-certs`, which creates the following two files:

* `certs/localhost-cert.pem`
* `certs/localhost-privkey.pem`

### local.js
Create a new file `config/local.js` with the following contents:

```module.exports = {
  app: {
    http2: {
      enabled: true,
      key: 'certs/localhost-privkey.pem',
      cert: 'certs/localhost-cert.pem',
    },
    name: 'template',
    hostname: 'localhost',
    port: 8000,
  },
  nunjucks: {
    options: {},
  },
  logger: {
    level: 'info',
  },
};
```

## Docker Configuration

The project contains Docker configuration files that allows the service
to be easily and quickly started in Docker containers.

The site Dockerfile - `service.Dockerfile` - will use npm to build and package 
the Node project to run the website in a Docker container.

There is also a 'docker-compose.yml' which should be used to coordinate building 
the 2 docker containers which comprise the local project infrastructure.

Issue the command:

`docker-compose up -d --build`

to build the following containers:

|**Container**|**Details**|
|---|---|
|`service`|The Template website, accessible via `https://localhost:8000`|
|`mongodb`|MongoDB instance, seeded with some basic test data, mocked as a replica set | 
 
### Mongo Transactions

Before the template site can be accessed locally, the MongoDB instance needs to
be running as a Replica set (albeit with a size of 1). This is to enable transactions within 
the application, to ensure atomic persisting of changes across the Mongo collections.

This is handled by the additional container `rs-starter`, which should be
started alongside `mongodb` and will poll the `mongodb` service until it has
started. At which point, it will enable the replica set of the database and
close down.

## Accessing the Website
The template can be accessed locally via: `https://localhost:8000`
