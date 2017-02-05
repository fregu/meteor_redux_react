# Boilerplate TODO example for a Meteor + Redux + React setup

By using Redux as a subscriber to database publications. React doesn't need to know anything about the server nor the database. But all changes in the database are automatically synced to all connected clients.

* The server manages all changes to the database and publishes them for the client to see.
* Redux subscribes to publications and inserts them via Reducers to the client Store.
* The client is rendered in React by syncing parameters for the store, along with actions as parameters.
