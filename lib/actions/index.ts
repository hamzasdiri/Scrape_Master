"use server";

import { scrapeAmazonProduct } from "../scraper";

export async function scrapeAndStoreProduct(productUrl: string) {
  if (!productUrl) return;
  try {
    const scrpedProduct = await scrapeAmazonProduct(productUrl);
    if (!scrpedProduct) return;
  } catch (error: any) {
    throw new Error(`Failed to create/update product : ${error.message}`);
  }
}
