'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const ctx = this.ctx
    await ctx.model.User.create({name:'姓名1'})  // 先创建一条数据
    let user = await ctx.model.User.findAll({attributes: ['name']}); // 查询所有，只返回name字段
    ctx.body = user
  }
}

module.exports = HomeController;