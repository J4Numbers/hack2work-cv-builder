# Hack2Work CV builder

As part of team 3 (football), this app looks to iterate on the experience which currently exists
for claimants who are asked to submit a CV to Universal Credit.

> Making a CV is a key part of finding a job. Why not make it a part of the UC experience?

## What are the key points this focuses on?

1. As a claimant, I want a CV to fulfil my UC tasks
    1. I do not want to write and re-write the same thing constantly
    1. I want a free way to create a professional CV
    1. I want a single process to make a professional CV
    1. I would like targeted feedback on areas that I am lacking
1. As a claimant, I want advice on what jobs to aim for
    1. I do not want to care about job sectors
    1. I want to know which job areas are available locally/nationally
    1. I want to know which roles I am fit for right now
    1. I want to know which roles I could be fit for in 6 months
1. As a work coach, I want to reduce barriers to entry for creating a CV
    1. I want all of my claimants to be able to create a CV
    1. I want claimants to know why they are creating a CV
    1. I want claimants to know what is important when creating a CV
    1. I want give claimants a direction for where to create their CV
    1. I want to help claimants help themselves with looking for a role
1. As a work coach, I want to focus on the most important issues when contact hours are used
    1. I want to not focus on tedious fixes and revisions
    1. I want to provide the most valuable insights to a claimant
    1. I want a claimant to know how to improve their CV before coming to me
1. As a work coach, I want to give clear and targeted feedback to claimants CVs
    1. I want a claimant to know which areas need improvement
    1. I want to know when a claimant has revised weaker areas

## What does it look like now?

A work coach uses UC Full Service to give a claimant several tasks to do along their journey for
looking for work. One of these tasks includes creating and maintaining the claimant's CV for use
in further job searching.

As part of this process, the work coach uses UC to generate a 'to-do' item to the claimant for them
to submit their current CV for review. This is in the form of a simple file upload that a claimant
posts back to their work coach to await further review and comments from that work coach.

The work coach may only have a 30-minute appointment to go through this CV and discuss any changes
and or improvements with the claimant. Given that a work coach has several claimants to their name,
there is not a lot of space to stretch that time for CVs that need extra help.

In the current COVID climate, any feedback is given over the phone for most cases, which compounds
misunderstandings and confusion in its own way. While this may change in the future as COVID
restrictions are wound down, it still remains as a one-time conversation where items can be lost
or forgotten before improvements are made.

Once the CV is created for that claimant, it is then used in further job applications as required,
but there is a lack of targeted advice on tailoring a CV to where an applicant would like to aim
for in the job market - something which is a result of a single file-upload field.

A work coach follows some general ABC's of job searching for a claimant:
* A: Any job - Anything is better than nothing
* B: Better job - A job that the claimant enjoys or has interest in is better for retention and
further development
* C: Career (?) - A career is where the claimant is satisfied with their job and has room for
growth
  
While the _any job_ aspect of this is important for moving a claimant out of long-term unemployment,
the other area that is important is ensuring that they are able to remain in that job. This can be
seen as the _better job_ stage, but there are still very few resources to help a claimant decide
what they'd like that _better job_ to be.

From the point of view of a work coach, the first time they see a claimant's CV is after the initial
draft. Because a CV (by its nature) is an abridged overview of a person, there is very little which
tells a work coach why a given detail is important enough to be included. A CV may only state that
a claimant left academia in 2020 with no further job experience, compared to the reality of there
being no jobs to take.

## What could it look like?

The option that this team is looking to explore examines the idea of integrating a CV builder into
the UC journey.

It looks to iterate on the current process by looking to alleviate several pain points that have
come about from both the COVID pandemic. The two key areas of the problem statement that this looks
to focus on are as follows:
* Optimise the limited time spent with work coaches for claimants
* Improve the experience for job seekers who have recently joined the market

Using interest and experience-driven questions, a potential CV builder would look to nudge a
claimant towards tailoring their CV towards fields that they have interest in, or that they would
like to work towards.

Once a claimant recognises the areas they would like to work towards, the service can recommend
targeted areas for improvement. These may include a lack of skills, or experience. In addition,
the service would look to automate some issues away, such as spelling errors or jargon recognition.

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
