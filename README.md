[![MIT license](http://img.shields.io/badge/license-MIT-brightgreen.svg)](http://opensource.org/licenses/MIT)
[![Dummy Build](https://img.shields.io/badge/build-passing-green.svg)]()
[![Stars](https://img.shields.io/badge/Stars-7-orange.svg)]()
[![PRs](https://img.shields.io/badge/PRs-soon-brightgreen.svg)]()

### EXPENSIFY 
Expensify is an expense tracker tool to manage and track your daily expenses.

## Required Features

* Users can create account and sign in 
* Users can get all their expense entries
* Users can get details of a  particular expense
* Users can add a new expense
* Users can update their expenses

## Optional Features
* Users can set and get notifications to add their daily expenses

## Technologies 
* ReactJS
* Redux
* Jest, Enzyme, Babel, eslint
* Firebase

## API Endpoints
Endpoints | Functionality
------------ | -------------
POST /auth/signup | Register a new user
POST /auth/login | Sign in a user
GET / | Fetch all user expenses
GET /expense/`<expenseId>`| Fetch individual expense
PUT /expense/`<expenseId>` | Modify an expense entry
DELETE /expense/`<expenseId>` | Delete an expense entry

