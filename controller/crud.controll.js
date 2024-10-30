const product = require("../model/crud.model");

exports.insert = async (req, res) => {
    try {
        const { productID, name, category, description, price, quantity, status, dateAdded, supplierName, ratings } = req.body;
        const productData = new product({ productID, name, category, description, price, quantity, status, dateAdded, supplierName, ratings });
        await productData.save();
        const sucess = {
            message: "Product Added Successfully",
            status: 200
        };
        res.json(sucess);
    }
    catch (err) {
        const error = {
            status: err.status,
            message: err.message
        };
        res.json(error);
    }
};

exports.update = async (req, res) => {
    try {
        const id = req.params.productID;
        const products = await product.findByIdAndUpdate(id, req.body, ({ new: true, runValidators: true }));
        if (!products) {
            const error = {
                status: 404,
                message: "Product is not find"
            };
            res.json(error);
        } else {
            await products.save();
            const sucess = {
                message: "Product Updated Successfully",
                status: 200,
                data : products
            };
            res.json(sucess);
        }
    }
    catch (err) {
        const error = {
            status: err.status,
            message: err.message
        };
        res.json(error);
    }
};

exports.delete = async (req,res)=>{
    try{
        const id = req.params.productID;
        const products = await product.findByIdAndDelete(id);
        if(!products){
            const error = {
                status: 404,
                message: "Product is not find"
            };
            res.json(error);
        }else{
            await products.save();
            const sucess = {
                message: "Product Deleted Successfully",
                status: 200
            };
            res.json(sucess);
        }
    }
    catch(err){
        const error = {
            status: err.status,
            message: err.message
        };
        res.json(error);
    }
};

exports.all = async (req,res)=>{
    try{
        const products = await product.find();
        const sucess = {
            message: "Product List",
            status: 200,
            data : products
        };
        res.json(sucess);
    }
    catch(err){
        const error = {
            status: err.status,
            message: err.message
        };
        res.json(error);
    }
};

exports.single = async (req,res) =>{
    try{
        const id = req.body.productID;
        const products=await product.findById(id);
        if(!id){
            const error = {
                status: 404,
                message: "Product is not find"
            };
            res.json(error);
        }else{
            const sucess = {
                message: "Product Found",
                status: 200,
                data : products
            };
            res.json(sucess);
        }
    }
    catch(err){
        const error = {
            status: err.status,
            message: err.message
        };
        res.json(error);
    }
};