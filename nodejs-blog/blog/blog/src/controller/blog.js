const {
    exec,
} = require('../db/mysql');
const xss = require('xss');

const getList = (author, title) => {
    let sql = `select id, title, content, createtime from blogs where 1=1 `;

    if(author) {
        sql += `and author='${author}' `;
    }

    if(title) {
        title = xss(title);
        sql += `and title like '%${title}%' `;
    }

    sql += `order by createtime desc`;

    return exec(sql);
};

const getDetail = (id) => {
    let sql = `select id, title, content, createtime from blogs where 1=1 `;

    if(id) {
        sql += `and id='${id}' `;
    }

    return exec(sql).then(data => {
        return data[0];
    });
};

// 新增
const addBlog = (blog, author) => {
    let title = xss(blog.title);
    let content = xss(blog.content);

    let sql = `insert into blogs (title, content, createtime, author) values ('${title}', '${content}', ${new Date().getTime()}, '${author}') `;

    return exec(sql);
};

// 编辑
const editBlog = (id, blog={}) => {
    let {
        title,
        content,
    } = blog;
    let sql = `update blogs set id=${id}`;

    if(title) {
        title = xss(title);
        sql += `, title='${title}'`;
    }

    if(content) {
        content = xss(content);
        sql += `, content='${content}' `
    }

    sql += `where id=${id}`;

    return exec(sql);
};

// 删除
const deleteBlog = (id) => {
    let sql = `delete from blogs where 1=2 `;
    let arr = id.split(',');

    for(let i = 0; i < arr.length; i++) {
        sql += `or id=${arr[i]} `;
    }

    return exec(sql);
};

module.exports = {
    getList,
    getDetail,
    addBlog,
    editBlog,
    deleteBlog,
};