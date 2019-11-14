# beanify-ajv

## install

```
npm i beanify-ajv
```

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