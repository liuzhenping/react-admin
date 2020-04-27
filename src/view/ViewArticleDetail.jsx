import React, {useEffect, useState} from 'react';

import axios from 'axios';
import {useParams} from "react-router-dom";

const ViewArticleDetail = () => {
    const {id} = useParams();
    const [articleDetail, setArticleDetail] = useState([]);
    useEffect(() => {
        axios.get(`/articles/${id}`)
            .then((response) => {
                setArticleDetail(response.data.result);
            })
            .catch((error) => console.error(error));
    }, [id]);
    return (
        <div>
            <h1>文章详细</h1>
            <h3>标题：{articleDetail.title}</h3>
            <h4>内容：{articleDetail.content}</h4>
            <a href={`/article/edit/${articleDetail._id}`}>修改</a>
        </div>
    );
};

export default ViewArticleDetail
