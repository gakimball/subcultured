# Subcultured

This is the backend that powers <http://subcultured.show>. (Or will eventually, rather.)

## Setup

Requires Node.js and MongoDB.

```bash
git clone https://github.com/gakimball/subcultured
cd subcultured
npm install
```

Run your database with `mongod`, then run the server with `node keystone`. Use `localhost:3000` to view the site, and `localhost:3000/keystone` to open the admin panel. A default admin user is created with the username `geoff@geoffkimball.com` and the password `admin`.
