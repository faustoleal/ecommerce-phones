import { Schema, model, models } from "mongoose";
import { Os, Processor, Brands, Phones } from "../types/phones";

const phonesSchema = new Schema<Phones>({
  brand_name: {
    type: String,
    enum: Object.values(Brands),
    required: true,
  },
  model: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  has_5g: {
    type: Boolean,
    required: true,
  },
  has_nfc: {
    type: Boolean,
    required: true,
  },
  has_ir_blaster: {
    type: Boolean,
    required: true,
  },
  processor_brand: {
    type: String,
    enum: Object.values(Processor),
    required: true,
  },
  num_cores: {
    type: Number,
    required: true,
  },
  processor_speed: {
    type: Number,
    required: true,
  },
  battery_capacity: {
    type: Number,
    required: true,
  },
  fast_charging_available: {
    type: Boolean,
    required: true,
  },
  ram_capacity: {
    type: Number,
    required: true,
  },
  internal_memory: {
    type: Number,
    required: true,
  },
  screen_size: {
    type: Number,
    required: true,
  },
  num_rear_cameras: {
    type: Number,
    required: true,
  },
  num_front_cameras: {
    type: Number,
    required: true,
  },
  os: {
    type: String,
    enum: Object.values(Os),
    required: true,
  },
  primary_camera_rear: {
    type: Number,
    required: true,
  },
  primary_camera_front: {
    type: Number,
    required: true,
  },
  extended_memory_available: {
    type: Boolean,
    required: true,
  },
  resolution_width: {
    type: Number,
    required: true,
  },
  resolution_height: {
    type: Number,
    required: true,
  },
});

export const PhonesModel =
  models.Phones || model<Phones>("Phones", phonesSchema);
