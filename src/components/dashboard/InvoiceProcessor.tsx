// src/components/dashboard/InvoiceProcessor.tsx

import { useState } from "react";
import { type ExtractedData } from "@/components/dashboard/SuccessState";
import { InvoiceUpload } from "@/components/dashboard/InvoiceUploader";
import { LoadingState } from "@/components/dashboard/LoadingState";
import { SuccessState } from "@/components/dashboard/SuccessState";
import { ErrorState } from "@/components/dashboard/ErrorState";

// The type for the raw API response.
type ApiData = {
  vendor: string | null;
  invoice_date: string | null;
  total_amount: number | null;
  currency: string | null;
  invoice_number: string | null;
};

export function InvoiceProcessor() {
  const [processingState, setProcessingState] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [extractedData, setExtractedData] = useState<ExtractedData[] | null>(
    null
  );
  const [errorMessage, setErrorMessage] = useState("");

  const handleFileSelect = async (file: File) => {
    setProcessingState("loading");
    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("http://localhost:8000/invoices/extract", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`Server error: ${response.statusText}`);
      }

      const rawData: ApiData = await response.json();

      // --- DATA TRANSFORMATION LOGIC ---
      // This logic converts the API object into the array that SuccessState expects.
      const formattedData: ExtractedData[] = [
        {
          field: "Vendor Name",
          value: rawData.vendor,
          status: rawData.vendor ? "extracted" : "missing",
        },
        {
          field: "Invoice Date",
          value: rawData.invoice_date,
          status: rawData.invoice_date ? "extracted" : "missing",
        },
        {
          field: "Total Amount",
          value: rawData.total_amount,
          status: rawData.total_amount ? "extracted" : "missing",
        },
        {
          field: "Currency",
          value: rawData.currency,
          status: rawData.currency ? "extracted" : "missing",
        },
        {
          field: "Invoice Number",
          value: rawData.invoice_number,
          status: rawData.invoice_number ? "extracted" : "missing",
        },
      ];
      // --------------------------------

      setExtractedData(formattedData);
      setProcessingState("success");
    } catch (error) {
      console.error("Failed to process file:", error);
      setErrorMessage(
        error instanceof Error ? error.message : "An unknown error occurred."
      );
      setProcessingState("error");
    }
  };

  return (
    <div className="w-full">
      {processingState === "idle" && (
        <InvoiceUpload onFileSelect={handleFileSelect} />
      )}
      {processingState === "loading" && <LoadingState />}
      {processingState === "success" && <SuccessState data={extractedData} />}
      {processingState === "error" && (
        <ErrorState errorMessage={errorMessage} />
      )}
    </div>
  );
}
