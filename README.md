# Cypress Automation Test Mochawesome

#### Install with npm:
```javascript
npm install mochawesome-merge --save-dev</code>
```

#### Generating HTML
```javascript
rm "cypress/results-report/reportResult.json"
```
```javascript
npx mochawesome-merge cypress/results-report/*.json > cypress/results-report/reportResult.json
```
```javascript
npx marge ./cypress/results-report/reportResult.json --reportDir ./cypress/results-report/ --inline
```