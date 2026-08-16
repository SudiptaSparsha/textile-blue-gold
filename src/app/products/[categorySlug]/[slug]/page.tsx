import Link from "next/link";
import { ArrowLeft, CheckCircle } from "lucide-react";
import PageBanner from "@/components/PageBanner";
import SectionWrapper from "@/components/SectionWrapper";
import { getProductBySlug, categories } from "@/data/products";
import { getMachineBreadcrumbs, getMachineDetailContent, isMachineDetailPage } from "@/data/machineDetail";
import MachineDetailPage from "@/components/products/MachineDetailPage";
import ProductImagePopup from "@/components/products/ProductImagePopup";

export default async function ProductDetail({ params }: { params: Promise<{ categorySlug: string; slug: string }> }) {
  const { slug } = await params;
  const product = getProductBySlug(slug || "");

  if (!product) {
    return (
      <>
        <PageBanner title="Product Not Found" breadcrumbs={[{ label: "Home", path: "/" }, { label: "Products", path: "/products" }]} />
        <SectionWrapper>
          <div className="text-center">
            <p className="text-muted-foreground mb-4">This product does not exist.</p>
            <Link href="/products" className="text-accent hover:underline">View All Products</Link>
          </div>
        </SectionWrapper>
      </>
    );
  }

  const category = categories.find((c) => c.slug === product.categorySlug);
  const machineDetail = isMachineDetailPage(product.slug);
  const machineContent = getMachineDetailContent(product.slug);
  const machineBreadcrumbs = getMachineBreadcrumbs(product.slug, product.name, product.categorySlug);

  return (
    <>
      <PageBanner
        title={product.name}
        breadcrumbs={
          machineDetail && machineBreadcrumbs
            ? machineBreadcrumbs
            : [
                { label: "Home", path: "/" },
                { label: "Products", path: "/products" },
                { label: product.category, path: `/products/${product.categorySlug}` },
                { label: product.name },
              ]
        }
      />
      <SectionWrapper>
        {machineDetail && machineContent ? (
          <MachineDetailPage product={product} category={category} content={machineContent} />
        ) : (
          <>
        <Link href={`/products/${product.categorySlug}`} className="mb-6 inline-flex items-center gap-2 text-sm text-accent hover:underline">
          <ArrowLeft className="h-4 w-4" /> Back to {category?.name}
        </Link>

        <div className="grid gap-10 lg:grid-cols-2">
          <div className="overflow-hidden rounded-lg border border-border bg-muted">
            <ProductImagePopup src={product.image} alt={product.name} title={product.name} />
          </div>

          <div>
            <p className="text-sm font-medium uppercase tracking-wider text-accent">{product.category}</p>
            <h2 className="mt-2 text-2xl font-bold md:text-3xl">{product.name}</h2>
            <p className="mt-4 text-muted-foreground">{product.description}</p>
            
            {product.fullDescription && (
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground/80">{product.fullDescription}</p>
            )}

            <div className="mt-6">
              <h3 className="mb-3 font-semibold">Standard Features</h3>
              <ul className="grid gap-2 sm:grid-cols-2">
                {product.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="h-4 w-4 shrink-0 text-accent" /> {f}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              {product.categorySlug !== "generators" && (
                <Link href="/contact" className="inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3 font-semibold text-accent-foreground transition-colors hover:bg-accent/90">
                  Request a Quote
                </Link>
              )}
              {product.optionalDevices && (
                <div className="w-full">
                  <h3 className="mb-2 mt-6 font-semibold">Optional Attachments</h3>
                  <div className="flex flex-wrap gap-2">
                    {product.optionalDevices.map((d) => (
                      <span key={d} className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                        {d}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Upgrades Section */}
        {product.upgrades && (
          <div className="mt-16">
            <h3 className="mb-8 text-2xl font-bold text-center">Core Technical Upgrades</h3>
            <div className="grid gap-6 md:grid-cols-3">
              {product.upgrades.map((u) => (
                <div key={u.title} className="rounded-lg border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md">
                  <h4 className="mb-2 font-bold text-accent">{u.title}</h4>
                  <p className="text-sm text-muted-foreground">{u.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Parameters Table (Embroidery Style) */}
        {product.parameters && (
          <div className="mt-16 overflow-hidden rounded-lg border border-border shadow-sm">
            <div className="bg-accent px-6 py-4">
              <h3 className="text-lg font-bold text-accent-foreground text-center sm:text-left">Model Parameter Range</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="bg-muted text-muted-foreground uppercase text-[10px] tracking-wider">
                  <tr>
                    <th className="px-6 py-4">Model</th>
                    <th className="px-6 py-4">Needles</th>
                    <th className="px-6 py-4">Heads</th>
                    <th className="px-6 py-4">Head Space</th>
                    <th className="px-6 py-4 text-right">Emb. Area</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {product.parameters.map((p) => (
                    <tr key={p.model} className="hover:bg-muted/50 transition-colors">
                      <td className="px-6 py-4 font-medium text-foreground">{p.model}</td>
                      <td className="px-6 py-4">{p.needles}</td>
                      <td className="px-6 py-4">{p.heads}</td>
                      <td className="px-6 py-4">{p.headSpace}</td>
                      <td className="px-6 py-4 text-right">{p.embArea}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="bg-muted/30 px-6 py-3">
              <p className="text-center text-[10px] text-muted-foreground italic">
                * We specialize in customizing machines with various specifications and colors according to your unique requirements.
              </p>
            </div>
          </div>
        )}

        {/* Knitting Parameters Table */}
        {product.knittingParameters && (
          <div className="mt-16 overflow-hidden rounded-lg border border-border shadow-sm">
            <div className="bg-accent px-6 py-4">
              <h3 className="text-lg font-bold text-accent-foreground text-center sm:text-left">Machine Parameter Range</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="bg-muted text-muted-foreground uppercase text-[10px] tracking-wider">
                  <tr>
                    <th className="px-6 py-4">Diameter</th>
                    <th className="px-6 py-4">Feeders</th>
                    <th className="px-6 py-4">Gauge</th>
                    <th className="px-6 py-4 text-right">RPM</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {product.knittingParameters.map((p, idx) => (
                    <tr key={idx} className="hover:bg-muted/50 transition-colors">
                      <td className="px-6 py-4 font-medium text-foreground">{p.diameter}</td>
                      <td className="px-6 py-4">{p.feeders}</td>
                      <td className="px-6 py-4">{p.gauge}</td>
                      <td className="px-6 py-4 text-right">{p.rpm}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="bg-muted/30 px-6 py-3">
              <p className="text-center text-[10px] text-muted-foreground italic">
                * We specialize in customizing machines with various specifications and models according to your requirements.
              </p>
            </div>
          </div>
        )}

        {/* Specifications Grid (General) */}
        <div className="mt-16 rounded-lg border border-border bg-section-alt p-6 md:p-8">
          <h3 className="mb-6 text-xl font-bold">Standard Specifications</h3>
          <div className="grid gap-3 sm:grid-cols-2">
            {Object.entries(product.specifications).map(([key, value]) => (
              <div key={key} className="flex justify-between rounded-md bg-card px-4 py-3 border border-border/50">
                <span className="font-medium text-sm">{key}</span>
                <span className="text-muted-foreground text-sm">{value}</span>
              </div>
            ))}
          </div>
        </div>
          </>
        )}
      </SectionWrapper>
    </>
  );
}
