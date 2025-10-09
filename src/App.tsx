// Page shell: header + main + footer (pure layout)
import Header from "@/components/layout/Header";
import InvoiceUpload from "@/components/dashboard/InvoiceUploader";
import Footer from "@/components/layout/Footer";

export default function App() {
  return (
    <div className="min-h-svh bg-background text-foreground">
      <Header />
      <main className="mx-auto max-w-5xl px-6 py-10 md:py-14">
        <InvoiceUpload />
      </main>
      <Footer />
    </div>
  );
}
