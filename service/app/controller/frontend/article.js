'use strict';

const Controller = require('egg').Controller;

class ArticleController extends Controller {
    async index() {
        const { ctx } = this;
        const results = await ctx.service.article.find();
        ctx.body = { data: results  };
    }
    async show() {
        const { ctx } = this;
        const id = ctx.params.id;
        const results = await ctx.service.article.show(id);
        ctx.body = { data: results };
    }
}

module.exports = ArticleController;
