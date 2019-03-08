# Trigger a Now Serverless Lambda with SendGrid Inbound Parse & send a SMS with Twilio

1. [Setup Sender Authentication](https://sendgrid.com/docs/ui/account-and-settings/how-to-set-up-domain-authentication/) with Twilio SendGrid.
2. [Setup Inbound Parse](https://sendgrid.com/docs/for-developers/parsing-email/setting-up-the-inbound-parse-webhook/)
    * Add MX record to DNS – `parse.yourdomain.com` --> `mx.sendgrid.net`
    * Add webhook to SendGrid inbound parse UI per doc above. host in this case == `parse.yourdomain`. Webhook url would be something like `https://yourdomain.com/parse-sendgrid.js`
3. Buy a number on the [Twilio phone numbers page](https://www.twilio.com/console/phone-numbers/search)
4. Clone this repo
5. Rename `example.config.js` to `config.js`
6. Add your account sid & auth token to `config.js`. These are in your [Twilio Console](https://www.twilio.com/console/).
7. `yarn` or `npm install`
8. [Install Now CLI](https://github.com/zeit/now-cli) if you don't have it installed.
9. Optionally [alias a domain or subdomain to now](https://zeit.co/docs/v2/domains-and-aliases/aliasing-a-deployment/). Every deployment to Now, generates a new domain so aliasing a domain provides a static domain and thus a static URL for your SendGrid webhook to post to.
9. `now`

## now.json
```
{
  "version": 2,
  "name": "sendgrid-now-lambda",
  "alias": "yourdomain.com", // Optionally alias a domain - otherwise remove.
  "builds": [
    { "src": "parse-sendgrid.js", "use": "@now/node" }, // lambda endpoint. The code that runs when a email is parsed by SendGrid.
    { "src": "index.html", "use": "@now/static" } // simply serve the static html file. For demonstration only. Does nothing.
  ]
}
```