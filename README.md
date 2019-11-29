# beanify-env

[![Greenkeeper badge](https://badges.greenkeeper.io/beanjs-framework/beanify-env.svg)](https://greenkeeper.io/)

## install

```
npm i beanify-env
```

## options

* [env-schema](https://github.com/fastify/env-schema)

## usage 

```
const Beanify=require("beanify")
const beanifyPlugin=require("beanify-plugin")

const b=new Beanify({})

b
    .register(require("beanify-env"),{
        schema: {
            type: 'object',
            required: ['PORT'],
            properties: {
                PORT: {
                    type: 'integer',
                    default: 6666
                }
            }
        }
    })
    .ready((err)=>{
        console.log(b.config.PORT==6666)
        b.close()
    })


```