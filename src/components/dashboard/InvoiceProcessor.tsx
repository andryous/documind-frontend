// src/components/dashboard/InvoiceProcessor.tsx

import { useState } from "react";
import { type ExtractedData } from "@/components/dashboard/SuccessState";
import { InvoiceUpload } from "@/components/dashboard/InvoiceUploader";
import { LoadingState } from "@/components/dashboard/LoadingState";
import { SuccessState } from "@/components/dashboard/SuccessState";
import { ErrorState } from "@/components/dashboard/ErrorState";

// Defines the shape of the raw JSON response expected from the API.
type ApiData = {
  vendor: string | null;
  invoice_date: string | null;
  total_amount: number | null;
  currency: string | null;
  invoice_number: string | null;
};

// Get the API URL from environment variables.
// Vite exposes env variables via `import.meta.env`.
// It defaults to localhost for local development if the VITE_API_URL is not set.
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8000";

export function InvoiceProcessor() {
  const [processingState, setProcessingState] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [extractedData, setExtractedData] = useState<ExtractedData[] | null>(
    null
  );
  const [errorMessage, setErrorMessage] = useState("");

  /**
   * Handles the file selection event.
   * It sends the file to the backend API for processing.
   * @param file The file selected by the user.
   */
  const handleFileSelect = async (file: File) => {
    setProcessingState("loading");
    const formData = new FormData();
    formData.append("file", file);

    try {
      // Use the dynamic API_URL instead of a hardcoded localhost path.
      const response = await fetch(`${API_URL}/invoices/extract`, {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        // Handle HTTP errors (e.g., 500, 415) from the server.
        const errorData = await response.json();
        throw new Error(
          errorData.detail || `Server error: ${response.statusText}`
        );
      }

      const rawData: ApiData = await response.json();

      // --- Data Transformation Logic ---
      // This logic converts the flat API object into the array format
      // that the SuccessState component expects.
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
      // Catch network errors or errors thrown from the block above.
      console.error("Failed to process file:", error);
      setErrorMessage(
        error instanceof Error ? error.message : "An unknown error occurred."
      );
      setProcessingState("error");
    }
  };

  /**
   * Resets the application state back to the initial 'idle' state.
   * This is passed to child components (SuccessState, ErrorState).
   */
  const handleReset = () => {
    setProcessingState("idle");
    setExtractedData(null);
    setErrorMessage("");
  };

  // Conditionally render the correct component based on the current application state.
  return (
    <div className="w-full">
      {processingState === "idle" && (
        <InvoiceUpload onFileSelect={handleFileSelect} />
      )}
      {processingState === "loading" && <LoadingState />}

      {processingState === "success" && (
        <SuccessState data={extractedData} onReset={handleReset} />
      )}

      {processingState === "error" && (
        <ErrorState errorMessage={errorMessage} onReset={handleReset} />
      )}
    </div>
  );
}
