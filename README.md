# CreditCardValidation

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.4.

## WHat is this about?

Finding or Verifying Credit Card Numbers
With a few simple regular expressions, you can easily verify whether your customer entered a valid credit card number on your order form. You can even determine the type of credit card being used. Each card issuer has its own range of card numbers, identified by the first 4 digits.

## How?

The first digit in the number indicates what type of card you’re dealing with. This number is always a 3, 4, 5, or 6, and can be interpreted as follows:
3 = Travel or entertainment card (e.g., Amex or Diner’s Club)
4 = Visa Card
5 = MasterCard
6 = Discover Card

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## validation criteria

•	All inputs, except Name on card and ZIP code, must contain numbers only (i.e. no letters or special characters)
•	Card number: Length must be 16 numbers (15 for American Express), must begin with one of the four known card codes
•	Expiry date: Length must be 2 numbers for month, and 2 for the year (i.e. MMYY). Month can only be 01 to 12, year must be minimum 15.
•	Security code: Length must be 4 numbers if American Express, or 3 numbers for other card brands

## Implementation of Luhn algorithm

The Luhn algorithm or Luhn formula, also known as the "modulus 10" or "mod 10" algorithm, is a simple checksum formula used to validate a variety of identification numbers, such as credit card numbers, IMEI numbers, National Provider Identifier numbers in the United States, Canadian Social Insurance Numbers, Israel ID Numbers and Greek Social Security Numbers (ΑΜΚΑ). It was created by IBM scientist Hans Peter Luhn and described in U.S. Patent No. 2,950,048, filed on January 6, 1954, and granted on August 23, 1960

The formula verifies a number against its included check digit, which is usually appended to a partial account number to generate the full account number. This number must pass the following test:

From the rightmost digit, which is the check digit, and moving left, double the value of every second digit. The check digit is not doubled; the first digit doubled is immediately to the left of the check digit. If the result of this doubling operation is greater than 9 (e.g., 8 × 2 = 16), then add the digits of the product (e.g., 16: 1 + 6 = 7, 18: 1 + 8 = 9) or, alternatively, the same result can be found by subtracting 9 from the product (e.g., 16: 16 − 9 = 7, 18: 18 − 9 = 9).
Take the sum of all the digits.
If the total modulo 10 is equal to 0 (if the total ends in zero) then the number is valid according to the Luhn formula; else it is not valid.
