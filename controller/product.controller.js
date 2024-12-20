import Product from "../models/product.js";

export const updateProduct = (request, response, next) => {
    Product.findOneAndUpdate({ _id: request.params.id }) 
        .then(result => {
            console.log(result);
            return response.status(200).json({ message: "Product Deleted.." });
        })
        .catch(err => {
            console.log(err);
            return response.status(500).json({ error: "Internal Server Error" });
        });
};
export const deleteProduct = (request, response, next) => {
    Product.deleteOne({ _id: request.params.id })
        .then(result => {
            console.log(result);
            return response.status(200).json({ message: "Product Deleted.." });
        })
        .catch(err => {
            console.log(err);
            return response.status(500).json({ error: "Internal Server Error" });
        });
};

export const getProductById = (request, response, next) => {
    let id = request.params.name;
    Product.findById(id)
        .then(result => {
            return response.status(200).json({ product: result });
        })
        .catch(err => {
            return response.status(500).json({ message: "Internal Server Error" });
        });
};

export const getAllProduct = (request, response, next) => {
    Product.find()
        .then(result => {
            return response.status(200).json({ products: result });
        })
        .catch(err => {
            return response.status(500).json({ error: "Internal Server Error" });
        });
};

export const createProduct = (request, response, next) => {
    console.log(request.body)
    Product.insertMany(request.body)
        .then(() => {
            return response.status(201).json({ message: "All products saved.." });
        })
        .catch(() => {
            return response.status(500).json({ error: "Internal Server Error" });
        });
};
