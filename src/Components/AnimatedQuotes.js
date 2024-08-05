import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './AnimatedQuotes.css';
//array of quotes
const quotes = [
  "We are what we repeatedly do. Excellence, then, is not an act, but a habit. - Aristotle",
  "The chains of habit are too weak to be felt until they are too strong to be broken. - Samuel Johnson",
  "Your habits will determine your future. - Jack Canfield",
  "Motivation is what gets you started. Habit is what keeps you going. - Jim Ryun",
  "Successful people are simply those with successful habits. - Brian Tracy",
  "The secret of your future is hidden in your daily routine. - Mike Murdock",
  "It's not what we do once in a while that shapes our lives. It's what we do consistently. - Tony Robbins",
  "The key to forming good habits is to make them easy to do. - James Clear",
  "Habit is a cable; we weave a thread of it each day, and at last we cannot break it. - Horace Mann",
  "First we make our habits, then our habits make us. - Charles C. Noble",
  "You do not rise to the level of your goals. You fall to the level of your systems. - James Clear",
  "Change might not be fast and it isn't always easy. But with time and effort, almost any habit can be reshaped. - Charles Duhigg",
  "Small disciplines repeated with consistency every day lead to great achievements gained slowly over time. - John C. Maxwell",
  "The most powerful control we can ever attain is to be in control of ourselves. - Chris Page",
  "Your net worth to the world is usually determined by what remains after your bad habits are subtracted from your good ones. - Benjamin Franklin"
];
//to display the quote in transition
function AnimatedQuotes() {
  const [currentQuote, setCurrentQuote] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote(prev => (prev + 1) % quotes.length);
    }, 5000); // Change quote every 20 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="quote-container">
      <TransitionGroup>
        <CSSTransition
          key={quotes[currentQuote]}
          timeout={4000}
          classNames="fade"
        >
          <div className="quote">{quotes[currentQuote]}</div>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
}

export default AnimatedQuotes;
