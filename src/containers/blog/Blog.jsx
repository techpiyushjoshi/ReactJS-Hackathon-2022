import React from 'react';
import Article from '../../components/article/Article';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import './blog.css';

const Blog = () => (
  <div className="gpt3__blog section__padding" id="blog">
    <div className="gpt3__blog-heading">
      <h1 className="gradient__text">A lot is happening in edtech, <br /> We are blogging about it.</h1>
    </div>
    <div className="gpt3__blog-container">
      <div className="gpt3__blog-container_groupA">
        <Article imgUrl={blog01} date="Jul 20,2022" text="EdVaR is the future. Let us explore how it is?" />
      </div>
      <div className="gpt3__blog-container_groupB">
        <Article imgUrl={blog02} date="Jul 19, 2022" text="EdVaR and Artificial Intelligence" />
        <Article imgUrl={blog03} date="Jul 18, 2022" text="Natural Language Processing in the Modern World?" />
        <Article imgUrl={blog04} date="Jul 17, 2022" text="Laying the Foundation for future of education" />
        <Article imgUrl={blog05} date="Jul 16, 2022" text="Its not who we are, its what we do as a company that defines us" />
      </div>
    </div>
  </div>
);

export default Blog;
