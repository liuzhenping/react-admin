import React, {useEffect} from 'react';
import {Button, Form, Input} from 'antd';
import axios from 'axios';
import {useParams} from 'react-router-dom';

const layout = {
    labelCol: {span: 2},
    wrapperCol: {span: 8},
};
const tailLayout = {
    wrapperCol: {offset: 2, span: 8},
};

const ArticleForm = () => {
    const {id} = useParams();
    const [form] = Form.useForm();
    useEffect(() => {
        if (id) {
            axios.get(`/articles/${id}`)
                .then((response) => {
                    const article = response.data.result;
                    form.setFieldsValue({
                        title: article.title,
                        content: article.content
                    });
                })
                .catch((error) => console.error(error));
            return () => {
                form.resetFields();
            };
        }
    }, [id, form]);

    const onFinish = values => {
        if (id) {
            values._id = id;
            console.log(values);
            axios.put(`/articles`, values)
                .then((response) => {
                    alert("update success");
                })
                .catch((error) => console.error(error));
        } else {
            axios.post(`/articles`, values)
                .then((response) => {
                    alert("create success");
                    form.resetFields();
                })
                .catch((error) => console.error(error));
        }

    };

    const onReset = () => {
        form.resetFields();
    };

    return (
        <div>
            <h1>{id ? "修改文章" : "添加文章"}</h1>
            <Form {...layout} form={form} name="control-ref" onFinish={onFinish}>
                <Form.Item name="title" label="Title" rules={[{required: true}]}>
                    <Input/>
                </Form.Item>
                <Form.Item name="content" label="Content" rules={[{required: true}]}>
                    <Input/>
                </Form.Item>
                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                    <Button htmlType="button" onClick={onReset}>
                        Reset
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
};


export default ArticleForm