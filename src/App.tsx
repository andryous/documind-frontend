// src/App.tsx

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { InvoiceProcessor } from "@/components/dashboard/InvoiceProcessor";

function App() {
  return (
    <>
      <Header />
      <main className="container mx-auto p-4 flex-grow flex flex-col items-center justify-center">
        {/* The hero section titles are now back in their correct place */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold">
            Extract data from your invoices instantly
          </h1>
          <p className="text-muted-foreground mt-2">
            Upload an invoice — drag and drop a file or click the button below
          </p>
        </div>

        {/* The InvoiceProcessor now only manages the state cards, not the title */}
        <InvoiceProcessor />
      </main>
      <Footer />
    </>
  );
}

export default App;
