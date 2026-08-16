export type PropertyStatus = "FOR_SALE" | "SOLD" | "UNDER_DEVELOPMENT" | "COMPLETED";
export type PropertyCategory = "RESIDENTIAL" | "COMMERCIAL" | "FACILITY" | "INDUSTRIAL";

export interface FloorPlan {
  title: string;
  sqm: number;
  bedrooms?: number;
  bathrooms?: number;
  image: string;
}

export interface Property {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  category: PropertyCategory;
  status: PropertyStatus;
  price: number;
  currency: string;
  location: {
    address: string;
    city: string;
    state: string;
  };
  features: {
    bedrooms?: number;
    bathrooms?: number;
    areaSqm: number;
    parkingSpaces?: number;
  };
  amenities: string[];
  images: string[];
  floorPlans?: FloorPlan[];
  isFeatured: boolean;
  division: "ENGINEERING" | "FACILITIES_MANAGEMENT" | "REAL_ESTATE";
  createdAt: string;
}