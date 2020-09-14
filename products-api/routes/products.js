const express = require("express");
const ProductService = require("../services/products");

function productsApi(app) {
  const router = express.Router();
  app.use("/api", router);

  const productService = new ProductService();

  //Get product by parameter
  router.get("/items", async function (req, res, next) {
    try {
      //Get products by query param
      const productsByParam = await productService.getProductsByQuery(
        req.query.q
      );

      const message =
        productsByParam.items.length <= 0
          ? "there are no products with that parameter"
          : "products listed";

      res.status(200).json({
        results: productsByParam,
        message: message,
      });
    } catch (err) {
      next(err);
    }
  });

  router.get("items/:id", async function (req, res, next) {
    const { id } = req.params;

    try {
      const product = await productService.getProductById({ id });

      res.status(200).json({
        data: product,
        message: "product retrieved",
      });
    } catch (err) {
      next(err);
    }
  });


   //Get provider by id
   router.get('/items/:id', async function(req, res, next) {
      const { id } = req.params;

      try {
      
       const product = await productService.getProductById(id);

        res.status(200).json({
          data: product,
          message: product.item.id !== undefined ? "product retrieved" : 'Item not found',
        });

      } catch (err) {
        next(err);
      }
    }
  );
}

module.exports = productsApi;
