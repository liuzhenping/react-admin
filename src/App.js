import React from 'react';
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import {Breadcrumb} from 'antd';
import ArticleForm from "./components/ArticleForm";
import ViewAllArticles from "./view/ViewAllArticles";
import ViewArticleDetail from "./view/ViewArticleDetail";
// import './App.scss';

const App = () => {
    return (
        <Router>
            <div>
                <Breadcrumb>
                    <Breadcrumb.Item><Link to="/">Home</Link></Breadcrumb.Item>
                    <Breadcrumb.Item><Link to="/articles">所有文章</Link></Breadcrumb.Item>
                    <Breadcrumb.Item><Link to="/create">写文章</Link></Breadcrumb.Item>
                </Breadcrumb>
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
                        <Home/>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

function Home() {
    return <h2>Home</h2>;
}

export default App;
