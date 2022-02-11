const Product = require(`../models/product`);

const getAllProduct = async (req, res) =>{
    let quertObj = {};
    const {name, company, featured, sort, fields, limit, page} = req.query;
    if(company){
        quertObj.company = company;
    }
    if(featured){
        quertObj.featured = (featured === `true` ? true : false);
    }
    if(name){
        quertObj.name = { $regex: name, $options: 'i' } ;
    }
    let products = Product.find(quertObj);
    if(sort){
        const sortQuery = sort.split(`,`).join(` `);
        products.sort(sortQuery);
    }
    if(fields){
        const selectQuery = fields.split(`,`).join(` `);
        products.select(selectQuery);
    }
    const pageNum = page? Number(page) : 1;
    const limitNum = limit? Number(limit) : 10;
    const skip = (pageNum - 1) * limitNum;
    products = products.skip(skip).limit(limitNum);
    products = await products;
    res.json({ products, num: products.length});
}

const getAllProductStatic = async (req, res) =>{
    const products = await Product.find({});
    console.log(products);
    res.json({ products, num: products.length});
}

module.exports = {getAllProduct, getAllProductStatic};