// src/App.tsx

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { InvoiceProcessor } from "@/components/dashboard/InvoiceProcessor";

function App() {
  return (
    <>
      <Header />
      {/* The 'justify-center' class is added to center the content vertically */}
      <main className="container mx-auto p-4 flex-grow flex flex-col items-center justify-center">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold">
            Extract data from your invoices instantly
          </h1>
          <p className="text-muted-foreground mt-2">
            Upload an invoice — drag and drop a file or click the button below
          </p>
        </div>

        <InvoiceProcessor />
      </main>
      <Footer />
    </>
  );
}

export default App;
