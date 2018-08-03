'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  // 如何本地环境，同时表存在,就清空表
  // if (app.config.env === 'local') {
  //   app.beforeStart(function* () {
  //     yield app.model.sync({force: true});
  //   });
  // }
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/user', controller.user.index);
};
