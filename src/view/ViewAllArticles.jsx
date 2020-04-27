import React, {useEffect, useState} from 'react';

import axios from 'axios';

const ViewAllArticles = () => {
    const [articleList, setArticleList] = useState([]);
    useEffect(() => {
        axios.get('/articles').then((response) => {
            setArticleList(response.data.result);
        });
    }, []);
    return (
        <div>
            <table>
                <thead>
                <tr>
                    <th>Title</th>
                </tr>
                </thead>
                <tbody>
                {articleList.map((article, index) => (
                    <tr key={index}>
                        <td>
                            <a href={`/article/${article._id}`}>{article.title}</a>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default ViewAllArticles
