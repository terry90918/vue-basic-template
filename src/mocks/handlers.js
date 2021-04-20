import { rest } from 'msw'

const tokens = {
  admin: {
    token: 'admin-token',
  },
  editor: {
    token: 'editor-token',
  },
}

const users = {
  'admin-token': {
    roles: ['admin'],
    introduction: 'I am a super administrator',
    avatar:
      'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: 'Super Admin',
  },
  'editor-token': {
    roles: ['editor'],
    introduction: 'I am an editor',
    avatar:
      'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: 'Normal Editor',
  },
}

const Mock = require('mockjs')

const items = Mock.mock({
  'items|30': [
    {
      id: '@id',
      title: '@sentence(10, 20)',
      'status|1': ['published', 'draft', 'deleted'],
      author: 'name',
      display_time: '@datetime',
      pageviews: '@integer(300, 5000)',
    },
  ],
})

export const handlers = [
  rest.post('/dev-api/user/login', (req, res, ctx) => {
    const { username } = req.body
    const token = tokens[username]

    if (!token) {
      return res(
        ctx.status(200),
        ctx.json({
          code: 60204,
          message: 'Account and password are incorrect.',
        })
      )
    }

    return res(
      ctx.status(200),
      ctx.json({
        code: 20000,
        data: token,
      })
    )
  }),
  rest.post('/dev-api/user/logout', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        code: 20000,
        data: 'success',
      })
    )
  }),
  rest.get('/dev-api/user/info', (req, res, ctx) => {
    const token = req.url.searchParams.get('token')
    const info = users[token]

    if (!info) {
      return {
        code: 50008,
        message: 'Login failed, unable to get user details.',
      }
    }

    return res(
      ctx.status(200),
      ctx.json({
        code: 20000,
        data: info,
      })
    )
  }),
  rest.get('/dev-api/table/list', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        code: 20000,
        data: {
          total: items.length,
          items: items,
        },
      })
    )
  }),
]
