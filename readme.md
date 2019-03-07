# Trigger a Now Serverless Lambda with SendGrid Inbound Parse & send a SMS with Twilio

1. White label a domain.
2. Add MX record to DNS – `parse.mydomain.com` --> `mx.sendgrid.net`
3. Add webhook to SendGrid inbound parse UI per doc above. host in this case == `parse.mydomain`. Webhook url would be `https://some-domain.com/parse-sendgrid.js`
4. Configure `now.json` -->
```
{
  "version": 2,
  "name": "sendgrid-now-lambda",
  "alias": "my-option-domain.com", // Optionally alias a domain
  "builds": [
    { "src": "parse-sendgrid.js", "use": "@now/node" }, // lambda endpoint
    { "src": "index.html", "use": "@now/static" } // simply serve the static html file
  ]
}
```