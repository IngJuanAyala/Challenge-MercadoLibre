const fetch = require("node-fetch");
const { config } = require("../config/index");

class ProductService {
  async getProductsByQuery(param) {
    //contact Mercado Libre API with query parameter.
    const url_api = `${config.url_search}${param}`;

    return await fetch(url_api, { method: "GET" })
      .then((response) => response.json())
      .then((resultData) => {
        //Create result variable.
        let formattedData = {};
        let categoriesLt = [];

        if (
          resultData.filters.length > 0 &&
          resultData.filters[0].values[0] !== undefined
        ) {
          //get product category list.
          resultData.filters[0].values[0].path_from_root.map((cat) => {
            categoriesLt.push(cat.name);
          });
        }

        let resultItems = [];
        if (resultData.results.length > 0) {
          //return first four items.
          let items = resultData.results.slice(0, 4);

          //Set array object with formatted information
          items.map((prod) => {
            //get decimal part from product price.
            let decimalValue = getDecimalPart(prod.price.toString());

            resultItems.push({
              id: prod.id,
              title: prod.title,
              price: {
                currency: prod.currency_id,
                amount: Number(prod.price.toFixed()),
                rate: prod.installments.rate,
                decimals: Number(decimalValue),
              },
              picture: prod.thumbnail,
              condition: prod.condition,
              free_shipping: prod.shipping.free_shipping,
              location: prod.address.state_name,
            });
          });
        }

        //Get autor full name from enviroment variables.
        formattedData.author = {
          name: `${config.name}`,
          lastname: `${config.lastname}`,
        };

        formattedData.categories = categoriesLt.join(",");
        formattedData.items = resultItems;

        return formattedData;
      })
      .catch((err) => {
        console.log("Error --> " + err);
      });
  }

  async getProductById(id) {
    //Create result variable.
    let formattedData = {};

    //contact Mercado Libre API to get product by id.
    const url_api = `${config.url_item_id}${id}`;

    let dataItemResult = await fetch(url_api)
      .then((response) => response.json())
      .then((resultData) => {
        return resultData;
      })
      .catch((err) => {
        console.log("Error --> " + err);
      });

    //If get result, set information item.
    if (dataItemResult !== null && dataItemResult !== undefined) {
      //get decimal part from product price.
      let decimalValue = getDecimalPart(dataItemResult.price.toString());

      formattedData.item = {
        id: dataItemResult.id,
        title: dataItemResult.title,
        price: {
          currency: dataItemResult.currency_id,
          amount: Number(dataItemResult.price.toFixed()),
          decimals: Number(decimalValue),
        },
        picture:
          dataItemResult.pictures && dataItemResult.pictures.length > 0
            ? dataItemResult.pictures[0].secure_url
            : "",
        condition: dataItemResult.condition,
        free_shipping:
          dataItemResult.shipping && dataItemResult.shipping.free_shipping,
        sold_quantity: dataItemResult.sold_quantity,
      };
    }

    //Get autor full name from enviroment variables.
    formattedData.author = {
      name: `${config.name}`,
      lastname: `${config.lastname}`,
    };

    //contact Mercado Libre API to get description product by id-.
    const url_api_description = `${config.url_item_id}${id}/description`;

    //Fetch Api.
    let descrItemResult = await fetch(url_api_description)
      .then((response) => response.json())
      .then((resultData) => {
        return resultData;
      })
      .catch((err) => {
        console.log("Error --> " + err);
      });

    //if we haven't error, set description response.
    formattedData.item.description =
      descrItemResult.error !== undefined
        ? descrItemResult.message
        : descrItemResult.plain_text;

    //contact Mercado Libre API to get category product.
    const url_api_categories = `${config.url_categories}/${dataItemResult.category_id}`;

    //Fetch Api.
    let categoryResult = await fetch(url_api_categories)
      .then((response) => response.json())
      .then((resultData) => {
        return resultData;
      })
      .catch((err) => {
        console.log("Error --> " + err);
      });

    //if we haven't error, set category response.
    formattedData.item.category =
      categoryResult.error !== undefined
        ? categoryResult.message
        : categoryResult.name;

    return formattedData;
  }
}

//Function to get or add decimal part from the product price
const getDecimalPart = (num) => {
  return Number(num)
    .toFixed(2)
    .replace(/^[^\.]+/, "")
    .replace(".", "");
};

module.exports = ProductService;
