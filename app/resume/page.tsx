import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Download } from "lucide-react";
import { PageHeader } from "@/components/page-header";

export const metadata: Metadata = {
  title: "Resume | Data Scientist & ML Engineer",
  description: "Downloadable resume for data science and ML engineering roles."
};

export default function ResumePage() {
  const pdfWithZoom = "/resume.pdf#zoom=110";

  return (
    <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-12">
      <div className="flex flex-col gap-5">
        <Link
          href="/"
          className="inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-slate-900/80 px-5 py-2.5 text-base font-semibold text-white shadow-[0_10px_30px_-20px_rgba(0,0,0,0.6)] transition hover:-translate-y-0.5 hover:border-cyan-200/50 hover:shadow-[0_14px_34px_-18px_rgba(34,211,238,0.45)]"
        >
          <ArrowLeft size={20} />
          Back to Home
        </Link>

        <div className="flex items-center justify-between gap-4 px-2 sm:px-5 md:px-6 pt-1 pb-1">
          <PageHeader title="Resume" />
          <Link
            href="/resume.pdf"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-500 to-cyan-400 px-5 py-3 text-sm font-semibold text-white shadow-glow transition hover:brightness-110"
          >
            <Download size={16} />
            Download PDF
          </Link>
        </div>
      </div>

      <div className="mt-6 flex flex-col gap-6">
        <div className="aspect-[3/4] w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5">
          <object data={pdfWithZoom} type="application/pdf" className="h-full w-full">
            <p className="p-4 text-slate-300">
              Unable to display PDF.{" "}
              <Link href="/resume.pdf" className="text-cyan-200 underline">
                Download instead
              </Link>
              .
            </p>
          </object>
        </div>
      </div>
    </div>
  );
}
