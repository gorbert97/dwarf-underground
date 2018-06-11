import React, {Component} from 'react';
import ArticleBody from './ArticleBody';
import ArticleLinks from './ArticleLinks';
import ArticleAuthor from './ArticleAuthor';

class Article extends Component{
    render(){
        return (
        <div className="large-8 medium-12 columns article">
            <h2 className="article-title">Gold Madness - Fact or Fiction?</h2>
            <ArticleAuthor/>
            <ArticleBody/>
            <ArticleLinks/>
        </div>
       )
    }
}
export default Article