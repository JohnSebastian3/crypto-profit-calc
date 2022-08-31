# Cryptospect
This site lets you input how much you invested in a certain coin at a specific date. Then, it shows you how much you would have today. Currently, it only supports USD.
I built this using HTML, CSS, and JavaScript. For the market information, I used Coin Gecko's Crypto API, which can be found here: https://www.coingecko.com/en/api/documentation

**Link to project:** https://cryptospect.netlify.app/

<!-- ![alt tag](http://placecorgi.com/1200/650) -->

## How It's Made:

**Tech used:** HTML, CSS, and JavaScript

The first thing I did was find and learn how to use the CoinGecko API. CoinGecko is a website that has current prices of hundreds of cryptocurrencies.
I used the coin price history property to create a way to determine what the price of the coin was at a valid date. Then, there is the ability to enter how much you have invested into which coin exactly at what date. The app will then get the price of the coin at that time and spit out your return. Currently in progress is working on the CSS.

## Optimizations

Optimizations planned are refactoring code, validating date to avoid NaN values, and allowing for various other currencies.

## Lessons Learned:

During this project, I learned how to work with API's, especially those with less robust documentation. I learned how to fetch and then how to parse the response for 
the information I was hoping to glean. 



