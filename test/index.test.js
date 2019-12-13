const Beanify = require('beanify')
const tap = require('tap')

const beanifyOpts = {
  nats: {
    url: 'nats://natsd:4222',
    user: 'testuser',
    pass: 'testpass'
  }
}

tap.test('beanify-env test', t => {
  t.plan(3)

  const b = new Beanify(beanifyOpts)

  b.register(require('../index'), {
    dotenv: { path: `${__dirname}/.env` },
    schema: {
      type: 'object',
      required: ['PORT'],
      properties: {
        PORT: {
          type: 'integer',
          default: 6666
        },
        VALUE_FROM_DOTENV: {
          type: 'string'
        }
      }
    }
  })
    .ready((err) => {
      t.error(err)
      t.equal(b.config.PORT, 6666, 'check PORT')
      t.equal(b.config.VALUE_FROM_DOTENV, 'look ma', 'check VALUE_FROM_DOTENV')
      b.close()
    })
})

tap.test('beanify-env test error', t => {
  t.plan(1)

  const b = new Beanify(beanifyOpts)

  b.register(require('../index'), {
    dotenv: { path: `${__dirname}/.env` },
    schema: {
      type: 'object',
      required: ['PORT', 'SOMETHING'],
      properties: {
        PORT: {
          type: 'integer',
          default: 6666
        },
        VALUE_FROM_DOTENV: {
          type: 'string'
        }
      }
    }
  })
    .ready((err) => {
      t.equal(err.message, "should have required property '.SOMETHING'", 'check error message')
      b.close()
    })
})
