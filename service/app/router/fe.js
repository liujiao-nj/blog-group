'use strict';

module.exports = app => {
    const { router, controller } = app
    router.get('/fe/index', controller.frontend.article.index)
    router.get('/fe/index/:id', controller.frontend.article.show)
}
