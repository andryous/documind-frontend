// src/components/dashboard/InvoiceProcessor.tsx

import { useState } from "react";
import { InvoiceUpload } from "@/components/dashboard/InvoiceUploader";
import { LoadingState } from "@/components/dashboard/LoadingState";
import { SuccessState } from "@/components/dashboard/SuccessState";
import { Button } from "@/components/ui/button";
import { ErrorState } from "@/components/dashboard/ErrorState";

type ProcessingState = "idle" | "loading" | "success" | "error";

export function InvoiceProcessor() {
  const [processingState, setProcessingState] =
    useState<ProcessingState>("idle");

  return (
    <>
      <div className="w-full">
        {processingState === "idle" && <InvoiceUpload />}
        {processingState === "loading" && <LoadingState />}
        {processingState === "success" && <SuccessState />}
        {processingState === "error" && <ErrorState />} {/* Step 2: Render */}
      </div>

      <div className="border p-4 mt-8 space-x-3">
        <span>Dev Controls:</span>
        <Button variant="outline" onClick={() => setProcessingState("idle")}>
          Idle
        </Button>
        <Button variant="outline" onClick={() => setProcessingState("loading")}>
          Loading
        </Button>
        <Button variant="outline" onClick={() => setProcessingState("success")}>
          Success
        </Button>
        <Button variant="outline" onClick={() => setProcessingState("error")}>
          Error
        </Button>
      </div>
    </>
  );
}
