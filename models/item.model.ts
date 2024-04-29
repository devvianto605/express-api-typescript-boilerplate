import { Schema, model } from "mongoose";

interface Item {
  name: string,
  description: string,
  quantity: number,
  image: string;
  parts: string[];
}

const ItemSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter item name"],
    },

    description: {
      type: String,
      required: false,
    },

    quantity: {
      type: Number,
      required: true,
      default: 0,
    },

    image: {
      type: String,
      required: false,
    },

    parts: {
      type: Array,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);


export const Item = model("Item", ItemSchema);