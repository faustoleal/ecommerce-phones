import { connectDB } from "@/src/lib/db";
import { listarProductos, postProducto } from "../../../controllers/phones";

export async function GET(req: Request) {
  connectDB();
  return listarProductos(req);
}

export async function POST(req: Request) {
  connectDB();
  const {
    model,
    brand_name,
    price,
    rating,
    processor_brand,
    processor_speed,
    num_cores,
    os,
    internal_memory,
    ram_capacity,
    extended_memory_available,
    screen_size,
    resolution_width,
    resolution_height,
    battery_capacity,
    fast_charging_available,
    num_front_cameras,
    primary_camera_front,
    num_rear_cameras,
    primary_camera_rear,
    has_5g,
    has_nfc,
    has_ir_blaster,
  } = await req.json();

  return postProducto({
    model,
    brand_name,
    price,
    rating,
    processor_brand,
    processor_speed,
    num_cores,
    os,
    internal_memory,
    ram_capacity,
    extended_memory_available,
    screen_size,
    resolution_width,
    resolution_height,
    battery_capacity,
    fast_charging_available,
    num_front_cameras,
    primary_camera_front,
    num_rear_cameras,
    primary_camera_rear,
    has_5g,
    has_nfc,
    has_ir_blaster,
  });
}
