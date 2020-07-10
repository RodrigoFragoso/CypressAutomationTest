# Cypress Automation Test RCI

#### Install with npm:
```javascript
npm install mochawesome-merge --save-dev</code>
```

#### Generating HTML
```javascript
rm "cypress/results-report/output.json"
```
```javascript
npx mochawesome-merge cypress/results-report/*.json > cypress/results-report/output.json
```
```javascript
npx marge ./cypress/results-report/output.json --reportDir ./cypress/results-report/ --inline
```