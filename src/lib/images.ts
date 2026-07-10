import { getImage } from "astro:assets";
import type { ImageMetadata } from "astro";

/** Default responsive widths for <ResponsivePicture>. */
export const RESPONSIVE_WIDTHS = [480, 768, 1024, 1440, 1920];

/** Full-bleed hero widths (sizes="100vw", so the browser needs cssWidth × DPR).
 *
 *  1080 and 1200 both exist to stop modern phones falling through to 1440w
 *  (80KB) when they need barely more than 1024px:
 *    Galaxy S23   360 × 3     = 1080 → 1080w (53KB)
 *    Pixel 7/8    412 × 2.625 = 1082 → 1200w (62KB, was 1440w/80KB)
 *    iPhone 15    393 × 3     = 1179 → 1200w (62KB, was 1440w/80KB)
 *  1080 alone isn't enough — it's 1.5px short of the Pixel — and 1200 alone
 *  would push the S23 up from 53KB to 62KB. Note Lighthouse/PSI emulates DPR
 *  1.75 (412 × 1.75 = 721 → 768w), so this moves field data, not the lab score. */
export const HERO_WIDTHS = [480, 768, 1024, 1080, 1200, 1440, 1920];
export const HERO_SIZES = "100vw";

/** Never upscale past the source's intrinsic width. */
export function widthsFor(src: ImageMetadata, widths: number[] = RESPONSIVE_WIDTHS): number[] {
  const capped = widths.filter((w) => w <= src.width);
  return capped.length ? capped : [src.width];
}

/** Describes an LCP image to preload. Pass to BaseLayout's `preloadImage`. */
export interface PreloadImage {
  src: ImageMetadata;
  widths?: number[];
  sizes?: string;
}

export const heroPreload = (src: ImageMetadata): PreloadImage => ({
  src,
  widths: HERO_WIDTHS,
  sizes: HERO_SIZES,
});

/** AVIF srcset for <link rel=preload>. Must match the avif <source> that
 *  <Picture> emits for the same src/widths, or the browser downloads twice. */
export async function avifPreloadSrcset(
  src: ImageMetadata,
  widths: number[] = RESPONSIVE_WIDTHS,
): Promise<string> {
  const ws = widthsFor(src, widths);
  const variants = await Promise.all(
    ws.map((w) => getImage({ src, width: w, format: "avif" })),
  );
  return variants.map((v, i) => `${v.src} ${ws[i]}w`).join(", ");
}
