export enum Brands {
  samsung = "samsung",
  apple = "apple",
  xiaomi = "xiaomi",
  motorola = "motorola",
  oneplus = "oneplus",
  realme = "realme",
  vivo = "vivo",
  google = "google",
  zte = "zte",
}

export enum Os {
  android = "android",
  ios = "ios",
}

export enum Processor {
  helio = "helio",
  snapdragon = "snapdragon",
  fusion = "fusion",
  dimensity = "dimensity",
  bionic = "bionic",
  exynos = "exynos",
  mediatec = "mediatec",
  google = "google",
  unisoc = "unisoc",
  tiger = "tiger",
}

export interface Phone {
  _id: string;
  brand_name: Brands;
  model: string;
  price: number;
  stock: number;
  rating: number;
  has_5g: boolean;
  has_nfc: boolean;
  has_ir_blaster: boolean;
  processor_brand: Processor;
  num_cores: number;
  processor_speed: number;
  battery_capacity: number;
  fast_charging_available: boolean;
  ram_capacity: number;
  internal_memory: number;
  screen_size: number;
  num_rear_cameras: number;
  num_front_cameras: number;
  os: Os;
  primary_camera_rear: number;
  primary_camera_front: number;
  extended_memory_available: boolean;
  resolution_width: number;
  resolution_height: number;
}

export type NewProduct = Omit<Phone, "_id">;
