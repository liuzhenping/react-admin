import React from 'react';
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import {Breadcrumb} from 'antd';
import ArticleForm from "./components/ArticleForm";
import ViewAllArticles from "./view/ViewAllArticles";
import ViewArticleDetail from "./view/ViewArticleDetail";
import './App.scss';
import './locales/i18n'
import {useTranslation} from 'react-i18next'
import HomePage from "./view/HomePage";

const App = () => {
    const {t} = useTranslation();
    return (
        <Router>
            <div className={'App-header'}>
                <Breadcrumb>
                    <Breadcrumb.Item><Link to="/">{t('home')}</Link></Breadcrumb.Item>
                    <Breadcrumb.Item><Link to="/articles">{t('all_article')}</Link></Breadcrumb.Item>
                    <Breadcrumb.Item><Link to="/create">{t('create_article')}</Link></Breadcrumb.Item>
                </Breadcrumb>
            </div>
            <div className={'App-content'}>
                <Switch>
                    <Route path="/article/edit/:id">
                        <ArticleForm/>
                    </Route>
                    <Route path="/article/:id">
                        <ViewArticleDetail/>
                    </Route>
                    <Route path="/articles">
                        <ViewAllArticles/>
                    </Route>
                    <Route path="/create">
                        <ArticleForm/>
                    </Route>
                    <Route path="/">
                        <HomePage/>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
