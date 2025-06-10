// Get references to the HTML elements we'll be interacting with
const quoteText = document.getElementById("quote-text");
const quoteAuthor = document.getElementById("quote-author");
const newQuoteBtn = document.getElementById("new-quote-btn");
const quoteContentContainer = document.querySelector(".quote-content"); // Get the quote content wrapper

// An array of example quotes. Add many more if you like!
const quotes = [
  {
    quote: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
  },
  {
    quote: "Innovation distinguishes between a leader and a follower.",
    author: "Steve Jobs",
  },
  {
    quote: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt",
  },
  {
    quote:
      "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt",
  },
  {
    quote: "Strive not to be a success, but rather to be of value.",
    author: "Albert Einstein",
  },
  {
    quote: "The only true wisdom is in knowing you know nothing.",
    author: "Socrates",
  },
  {
    quote: "Life is what happens when you're busy making other plans.",
    author: "John Lennon",
  },
  {
    quote: "Get busy living or get busy dying.",
    author: "Stephen King",
  },
  {
    quote:
      "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author: "Nelson Mandela",
  },
];

/**
 * Selects a random quote from the 'quotes' array.
 * @returns {object} An object containing the quote text and author.
 */
function getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
}

/**
 * Displays a random quote on the page and reveals the content container.
 */
function displayQuote() {
  const { quote, author } = getRandomQuote(); // Destructures the returned quote object

  // Update the text content of the quote and author elements
  quoteText.textContent = `"${quote}"`;
  quoteAuthor.textContent = `- ${author || "Unknown"}`; // Display 'Unknown' if author is not provided

  // Add the 'show' class to make the content visible with a smooth transition
  quoteContentContainer.classList.add("show");
}

// --- Event Listeners ---

// When the "New Quote" button is clicked, display a new quote
newQuoteBtn.addEventListener("click", displayQuote);

// Removed: document.addEventListener('DOMContentLoaded', displayQuote);
// The quotes will now only appear after the "New Quote" button is clicked.
