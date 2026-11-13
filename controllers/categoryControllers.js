exports.getAllCategories = (req, res) => {
  //menampilkan waktu request
  console.log('request time:', req.requestTime);
  res.json({
    message: "Welcome to the categories route!",
    data: [
      { id: 1, name: "Electronics" },
      { id: 2, name: "Clothing" },
      { id: 3, name: "Books" },
    ],
  });
};

exports.storCategoryByName = (req, res) => {
  let name = req.body.name;
  let description = req.body.description;

  if (!name && !description) {
    return res
      .status(400)
      .json({ message: "Name and description are required" });
  }
  return res.status(200).json({
    data: {
      name: name,
      description: description,
    },
    status: "success",
    massage: "Category created successfully",
  });
};
