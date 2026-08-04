import Link from "next/link";
import type { Product } from "@/data/products";
import { getMachineGalleryImages } from "@/data/machineDetail";

const ProductCard = ({ product }: { product: Product }) => {
  const gallery = getMachineGalleryImages(product.slug);
  const displayImage = gallery.length > 0 ? gallery[0].src : product.image;

  return (
    <Link
      href={`/products/${product.categorySlug}/${product.slug}`}
      className="group overflow-hidden rounded-lg border border-border bg-card shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
    >
      <div className="aspect-square overflow-hidden bg-muted">
        <img
          src={displayImage}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-4">
        <p className="mb-1 text-xs font-medium uppercase tracking-wider text-accent">{product.category}</p>
        <h3 className="mb-2 font-semibold text-foreground">{product.name}</h3>
        <p className="text-sm text-muted-foreground line-clamp-2">{product.shortDescription}</p>
        <span className="mt-3 inline-block text-sm font-medium text-accent transition-colors group-hover:text-accent/80">
          View Details →
        </span>
      </div>
    </Link>
  );
};

export default ProductCard;
