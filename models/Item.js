import mongoose from 'mongoose';

const itemSchema = new mongoose.Schema({
    itemName: {
        type: String,
        required: true
    },
     description: {
        type: String,  // Add description as a new field
        required: false
    },
    isCompleted: {
        type: Boolean,
        default: false
    }
});

const Item = mongoose.model("Item", itemSchema);

export default Item;
// import mongoose from 'mongoose';

// const itemSchema = new mongoose.Schema({
//   itemName: {
//     type: String,
//     required: true,
//   },
//   description: {
//     type: String,
//     required: false,
//   },
//   isCompleted: {
//     type: Boolean,
//     default: false,
//   },
// });

// const Item = mongoose.model('Item', itemSchema);

// export default Item;
