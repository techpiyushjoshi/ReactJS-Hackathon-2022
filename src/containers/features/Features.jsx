import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'Nurture Program Class 1-5',
    text: 'The Nurture Program focuses on embibing curiosity among the young minds about the world around them, in a learn by fun way.',
  },
  {
    title: 'Ignite Program   Class 6-10',
    text: 'The Ignite Program is designed for the students of middle and high school to impart crucial scientific concepts and make them ready for senior secondary curriculum.',
  },
  {
    title: 'Excel Program   Class 11-12',
    text: 'The Excel Program is developed for students preparing for university competitive examinations including JEE,SAT,NEET,AIIMS to impart the toughest of scientific concepts in the easiest of ways',
  },
  {
    title: 'Achiever Program UG-PG Students',
    text: 'The Program is built on embibing a sense of research methodology within an individual, along with imparting soft skills to excel in the ever so competitive world...',
  },
];

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">The Future of Education is Virtual and Augumented Reality with EdVaR. Step into Future Today. & Make it Happen.</h1>
      <p>Start Today</p>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;
