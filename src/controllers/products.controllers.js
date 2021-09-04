import Product from '../models/Products';

export const createProduct = async (req, res) => {
    const { name, category, price, imgURL} = req.body;

    const newProduct = new Product({
        name,
        category,
        price,
        imgURL 
    });
    const productSaved = await newProduct.save();
    res.status(201).json(productSaved);
}

export const getProducts = async(req, res) => {  
    const listProducts = await Product.find();

    res.json(listProducts);
}

export const getProductById = async (req, res) => {
    const { productId } = req.params;
    const findProduct = await Product.findById(productId);

    res.json(findProduct);
}

export const updateProductById = async (req, res) => {
    const { productId } = req.params;

    const updateProduct = await Product.findByIdAndUpdate(productId, req.body, {
        new: true
    });
    res.status(200).json(updateProduct);
}

export const deleteProductById = async (req, res) => {
    const { productId } = req.params;
    await Product.findByIdAndDelete(productId);

    res.status(204).json();
}