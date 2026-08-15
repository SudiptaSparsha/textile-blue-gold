import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CheckCircle } from "lucide-react";
import PageBanner from "@/components/PageBanner";
import SectionWrapper from "@/components/SectionWrapper";
import { getOptionalDevice } from "@/data/optionalDevices";

export default async function OptionalDeviceDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const device = getOptionalDevice(slug);

  if (!device) {
    notFound();
  }

  return (
    <>
      <PageBanner
        title={device.name}
        breadcrumbs={[
          { label: "Home", path: "/" },
          { label: "Products", path: "/products" },
          { label: "Embroidery Machines", path: "/products/embroidery-machines" },
          { label: device.name },
        ]}
      />
      <SectionWrapper>
        <Link
          href="/products/embroidery-machines"
          className="mb-6 inline-flex items-center gap-2 text-sm text-accent hover:underline"
        >
          <ArrowLeft className="h-4 w-4" /> Back to Embroidery Machines
        </Link>

        <div className="grid gap-10 lg:grid-cols-2">
          <div className="overflow-hidden rounded-lg border border-border bg-muted">
            <img src={device.image} alt={device.name} className="h-full w-full object-cover" />
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-accent">Optional Device</p>
            <h2 className="mt-2 text-2xl font-bold text-foreground md:text-3xl">{device.name}</h2>
            <p className="mt-4 text-muted-foreground">{device.overview}</p>

            <h3 className="mt-8 mb-3 font-semibold text-foreground">Key Features</h3>
            <ul className="space-y-2">
              {device.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 rounded-xl border border-border bg-section-alt p-6 md:p-8">
          <h3 className="text-xl font-bold text-foreground md:text-2xl">How It Works</h3>
          <p className="mt-3 text-muted-foreground">{device.howItWorks}</p>
        </div>

        <div className="mt-10 grid gap-10 lg:grid-cols-2">
          <div>
            <h3 className="mb-4 font-semibold text-foreground">Specifications</h3>
            <div className="overflow-hidden rounded-lg border border-border">
              <table className="w-full text-left text-sm">
                <tbody className="divide-y divide-border">
                  {device.specifications.map((spec) => (
                    <tr key={spec.label}>
                      <td className="bg-section-alt px-4 py-3 font-medium text-foreground">{spec.label}</td>
                      <td className="px-4 py-3 text-muted-foreground">{spec.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-foreground">Applications</h3>
            <ul className="space-y-2">
              {device.applications.map((app) => (
                <li
                  key={app}
                  className="rounded-md border border-border bg-card px-4 py-3 text-sm text-muted-foreground"
                >
                  {app}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 rounded-xl border border-border bg-gradient-to-br from-blue-50 via-white to-orange-50 p-6 text-center md:p-8">
          <h3 className="text-xl font-bold text-foreground md:text-2xl">Interested in this device?</h3>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            Get in touch with our team to check compatibility with your machine and get a quote.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent/90"
          >
            Contact Us
          </Link>
        </div>
      </SectionWrapper>
    </>
  );
}
