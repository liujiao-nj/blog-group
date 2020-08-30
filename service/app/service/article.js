'use strict'

const Service = require('egg').Service;

class ArticleService extends Service {
    async find() {
        const { app } = this;
        const sql = `SELECT a.id as id,
                                        a.title as title,
                                        a.introduction as introduction,
                                        a.createTime as createTime,
                                        b.name as category
                                        FROM article as a
                                        LEFT JOIN category as b
                                        ON a.category = b.id;`;
        const results = app.mysql.query(sql);
        return results;
    }

    async show(id) {
        const { app } = this;
        const sql = `SELECT a.id as id,
                                        a.title as title,
                                        a.content as content,
                                        a.createTime as createTime,
                                        b.name as category
                                        FROM article as a
                                        LEFT JOIN category as b
                                        ON a.category = b.id 
                                        WHERE a.id = ${ id };`;
        const results = app.mysql.query(sql);
        return results;
    }

}

module.exports = ArticleService;
