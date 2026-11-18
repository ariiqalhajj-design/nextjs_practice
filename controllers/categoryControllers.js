const { Category } = require("../models");

exports.getAllCategories = (req, res) => {
  //menampilkan waktu request
  console.log("request time:", req.requestTime);
  res.json({
    message: "Welcome to the categories route!",
    data: [
      { id: 1, name: "Electronics" },
      { id: 2, name: "Clothing" },
      { id: 3, name: "Books" },
    ],
  });
};

exports.storCategoryByName = async (req, res) => {
  const { name, description } = req.body;
  try {
    const newCategory = await Category.create({
      nama: name,
      deskripsi: description,
    });

    return res.status(201).json({
      status: "Category created successfully",
      data: newCategory,
    });
  } catch (error) {
    return res.status(400).json({
      status: "Failed to create category",
      message: error.message,
    });
  }
};
