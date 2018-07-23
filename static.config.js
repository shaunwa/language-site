import axios from 'axios'
import yaml from 'yamljs'

export default {
  getSiteData: () => ({
    title: 'React Static',
  }),
  getRoutes: async () => {
    const { data: posts } = await axios.get('https://jsonplaceholder.typicode.com/posts')
    const ymlstuff = yaml.load('data/gonna.yml')
    return [
      {
        path: '/',
        component: 'src/containers/Home',
      },
      {
        path: '/article',
        component: 'src/containers/Article',
        getData: () => ({ article: ymlstuff }),
      },
      {
        path: '/about',
        component: 'src/containers/About',
      },
      {
        path: '/blog',
        component: 'src/containers/Blog',
        getData: () => ({
          posts,
        }),
        children: posts.map(post => ({
          path: `/post/${post.id}`,
          component: 'src/containers/Post',
          getData: () => ({
            post,
          }),
        })),
      },
      {
        is404: true,
        component: 'src/containers/404',
      },
    ]
  },
}
