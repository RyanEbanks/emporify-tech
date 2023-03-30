// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
 //Figure out if I need to do an on delete or onupdate
 //RESTRICT, CASCADE, NO ACTION, SET DEFAULT or SET NULL
});

// Categories have many Products
Category.hasMany(Product, {
  //Same thing here
});

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: {
    model: ProductTag,
    //The product_id in product_tag seed isn't unique
    unique: false
  },
  //Creating an alias for when the data is retrieved
  as: 'product_tag'
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: {
    model: ProductTag,
    unique: false
  },
  as: 'product_id'
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
