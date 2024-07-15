import React from 'react';
import Accordion from './Components/Accordion';
import './App.css';
import classes from '../src/Components/Accordion.module.css';

const faqs = [
  {
    id: 1,
    header: 'What is React?',
    text: `React is a framework that employs Webpack to automatically compile React, JSX, and ES6 code while handling CSS file prefixes. React is a JavaScript-based UI development library. Although React is a library rather than a language, it is widely used in web development. The library first appeared in May 2013 and is now one of the most commonly used frontend libraries for web development.React offers various extensions for entire application architectural support, such as Flux and React Native, beyond mere UI.`,
  },
  {
    id: 2,
    header: 'What is the History of React?',
    text: `When compared to other technologies on the market, React is a new technology. Jordan Walke, a software engineer at Facebook, founded the library in 2011, giving it life. The likes of XHP, a straightforward HTML component framework for PHP, have an influence on React. React's newsfeed was its debut application in 2011. Later, Instagram picks it up and incorporates it into their platform.`,
  },
  {
    id: 3,
    header: 'What is React JS used for?',
    text: `ReactJS's primary goal is to create User Interfaces (UI) which enhance the speed of programs. It makes use of virtual DOM (JavaScript object), which enhances the app's efficiency. Quicker than the standard DOM is the JavaScript virtual DOM.`,
  },
  {
    id: 4,
    header: 'What is the difference between React and React JS?',
    text: `Although Reactjs is essentially a Software framework and React Native is the whole framework, the two work in harmony because the former forms the core of the latter. React Native is perfect for giving your mobile apps a native feel, just as Reactjs is ideal for building apps with higher efficacy and complications .`,
  },
];

const App = () => {
  return (
    <div className={classes.card}>
      <h4 className='text-center'> React FAQs</h4>
      <Accordion faqs={faqs} />
    </div>
  );
};

export default App;
