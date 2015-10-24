# PrivacyBender
A PoC tracker that uses cookie keys instead of values.

## Setup
To simulate multiple domains, edit your hosts (`C:/Windows/System32/drivers/etc/hosts` or `/etc/hosts`) file (with admin/root) to include the following domains
```
127.0.0.1	a.test
127.0.0.1	b.test
127.0.0.1	c.test
```
You'll need to restart your browser in order to have those resolve.
Run `npm install` and then `node index.js`.
In one browser, visit `https://a.test:3000/a` and `https://b.test:3000/b`. Open those in another browser as well. Visit `https://a.test:3000/history` to view the tracked history.
