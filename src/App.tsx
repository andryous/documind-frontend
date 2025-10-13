// src/App.tsx

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { InvoiceProcessor } from "@/components/dashboard/InvoiceProcessor"; // Step 1: Import the new manager component

function App() {
  return (
    <>
      <Header />
      <main className="container mx-auto p-4 flex-grow flex flex-col items-center justify-center">
        {/* Step 2: Delegate the entire feature to its manager component. Clean and simple. */}
        <InvoiceProcessor />
      </main>
      <Footer />
    </>
  );
}

export default App;
