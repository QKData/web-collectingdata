# Collecting Information Form

A simple front-end web form that collects account information and validates user input before submission.

## Features

- Collects an email address, country, postal code, password, and password confirmation
- Validates the email format
- Checks that the country field is not empty
- Validates the postal code using a US ZIP code pattern
- Enforces a strong password rule with uppercase, lowercase, and numeric characters
- Confirms that the password and confirmation fields match
- Displays a visual invalid state for fields that fail validation

## Project Structure

- index.html — the form markup
- style.css — the page styling and invalid-field appearance
- script.js — the validation logic for form submission

## How to Run

Open index.html in your browser, or use a simple local server such as Live Server if you prefer.

## Notes

This project is a lightweight example of client-side form validation using plain HTML, CSS, and JavaScript.