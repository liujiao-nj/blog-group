import http from './http'
import url from './urls'

export const getArticleList = () => http.get(url.GET_ARTICLE_LIST)
