import React from 'react';
import Interactive from 'react-interactive';
import { Switch, Route, Link } from 'react-router-dom';

const Article = (props) => (
    <div className="col-md-12">
    <article className={`article-container ${props.articleType}`}>
        <h2>{props.articleTitle}</h2>
        <h3>{props.articleSubtitle}</h3>
        <section dangerouslySetInnerHTML={
            {__html: props.articleBody}
        }></section>
        <Link to={`/article/${props.articleName}`}>
            Click here to read
        </Link>
        <footer className="article-footer">
            <span className="article-author">Author: {props.articleAuthor}</span>
            <span className="article-date">Date: {props.articleDate}</span>
        </footer>
    </article>
    </div>
)

export default Article;