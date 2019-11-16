	// server.js
  const jsonServer = require('json-server')
  const server = jsonServer.create()
  // 根据db.json文件自动生成路由规则
  const router = jsonServer.router('db.json')
  const middlewares = jsonServer.defaults()


  server.use(middlewares)
  const dbs = require('./mock/postdb.js')
  server.get("/api/productVariants",function(req,res){
    console.log(req.query);
    switch (req.query.productId) {
      case '1':
          res.json(dbs.productVariants);
        break;
      case '2':
          res.json(dbs.productVariants);
        break;
      default:
          res.json(dbs.productVariants);
        break;
      // case '3':
      //     res.json({});
      //     break;
      // default:
      //     res.json({});
      //   break;
    }
  });
  server.get("/api/tab",function(req,res){
    res.json(dbs.tab);
  });
  server.get("/api/ads",function(req,res){
    res.json(dbs.ads);
  });
  server.get("/api/products",function(req,res){
    res.json(dbs.products);
  });
  server.get("/api/channels",function(req,res){
    res.json(dbs.channels);
  });

  server.post("/postdata",function(req,res){
        res.send(dbs.postData);
  });
  
  server.use(router)
  server.listen(8082, () => {
      console.log('JSON Server is running at port 8082')
  })
