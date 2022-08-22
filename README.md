# Sportify

The aim of Sportify is to help increase inclusivity in sport.  The platform lets users find and book onto local sporting events.  It also allows users to view information about the event host, including a rating of the host.  The user can also host their own events.  

The application uses Firebase for a number of services.  Specifically, Firebase Authentication, Cloud Firestore and Cloud Storage for Firebase.  

## Getting started

To run this application on your local machine, you'll need [Git](https://git-scm.com/) and [Node.js](https://nodejs.org/en/download/) installed. Then take the following steps:

1. Clone the repository to your local machine

```
$ git clone https://github.com/Paul-Ramshaw/sportify.git
```

2. Go into the repository

```
$ cd sportify
```

3. Install all the required dependencies

```
$ npm install
```

4. Start the application on localhost

```
$ npm start
```

## Firebase Configuration

To run this project locally you'll also need to create a firebase project and add firebase authentication, a firestore database and storage.  For more information, follow the firebase getting started guide: https://firebase.google.com/.  

Once your firebase project is setup add the firebase project configuration details to a .env file in the root of your sportify project. Make sure that the environment variables match those used in the sportify src/config/firebase.js file.

## Seeding the test database

The Sportify-Firebase-admin can be used to seed the database with sample data.  More information can be found here: 
[Sportify-Firebase-admin](https://github.com/Paul-Ramshaw/Sportify-Firebase-Admin).

## Dependencies

- [firebase](https://www.npmjs.com/package/firebase)
- [react](https://reactjs.org/)
- [react-router-dom](https://v5.reactrouter.com/web/guides/quick-start)
- [react-bootstrap](https://react-bootstrap.github.io/)
- [bootstrap](https://getbootstrap.com/)
- [react-bootstrap-range-slider](https://www.npmjs.com/package/react-bootstrap-range-slider)
- [react-icons](https://fontawesome.com/)
- [react-google-maps/api](https://www.npmjs.com/package/@react-google-maps/api)
- [react-geocode](https://www.npmjs.com/package/react-geocode)
- [dotenv](https://www.npmjs.com/package/dotenv)


## System Requirements

Node.js v18 or above<br>

