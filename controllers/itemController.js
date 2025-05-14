import Item from "../models/Item.js";

// CREATE item
const postItem = async (req, res) => {
  const { itemName, description } = req.body;

  if (!itemName) {
    return res.status(400).json({ error: "Item name is required" });
  }

  try {
    const newItem = await Item.create({ itemName, description });
    res.status(201).json(newItem); // send JSON response
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// READ all items
const getItems = async (req, res) => {
  try {
    const items = await Item.find();
    res.status(200).json(items);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// READ single item (not used in frontend currently)
const getItem = async (req, res) => {
  const { id } = req.params;

  try {
    const item = await Item.findById(id);
    if (!item) {
      return res.status(404).json({ error: "Item not found" });
    }
    res.status(200).json(item);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// UPDATE item
const updateItem = async (req, res) => {
  const { id } = req.params;
  const { itemName, description, isCompleted } = req.body;

  try {
    const updatedItem = await Item.findByIdAndUpdate(
      id,
      { itemName, description, isCompleted },
      { new: true }
    );

    if (!updatedItem) {
      return res.status(404).json({ message: "Item not found" });
    }

    res.status(200).json(updatedItem);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// DELETE item
const deleteItem = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedItem = await Item.findByIdAndDelete(id);
    if (!deletedItem) {
      return res.status(404).json({ message: "Item not found" });
    }

    res.status(200).json({ message: "Item deleted", item: deletedItem });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ✅ Export all functions
export {
  postItem,
  getItems,
  getItem,
  updateItem,
  deleteItem
};
