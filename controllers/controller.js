const items = [];
const cart = [];


exports.getBuyerCart = (req, res) => {
  res.status(200).json({ status: 200, message: "Success", data: cart});
};

exports.addToBuyerCart = (req, res) => {
  const newItem = {
    "Buku Id": req.body["Buku Id"],
    "Jumlah": req.body["Jumlah"]
  };

  cart.push(newItem);
  res.status(200).json({status: 200, message: "Success", data: newItem});
};


exports.getAllItems = (req, res) => {
  res.status(200).json(items);
};

exports.addItem = (req, res) => {
  const newItem = req.body;
  items.push(newItem);
  res.status(201).send('Item berhasil dibuat');
};


exports.getItemById = (req, res) => {
  const itemId = req.params.id;
  const item = items.find(i => i.id === itemId);

  if (item) {
    res.status(200).json({status: 200, message: "Success", data: item});
  } else {
    res.status(404).send('Item tidak ditemukan');
  }
};

exports.updateItemById = (req, res) => {
  const itemId = req.params.id;
  const updatedItem = req.body;
  const index = items.findIndex(i => i.id === itemId);

  if (index !== -1) {
    items[index] = updatedItem;
    res.status(200).send('Item berhasil diperbarui');
  } else {
    res.status(404).send('Item tidak ditemukan');
  }
};

exports.deleteItemById = (req, res) => {
  const itemId = req.params.id;
  const index = items.findIndex(i => i.id === itemId);

  if (index !== -1) {
    items.splice(index, 1);
    res.status(200).send('Item berhasil dihapus');
  } else {
    res.status(404).send('Item tidak ditemukan');
  }
};
