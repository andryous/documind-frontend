// src/components/dashboard/InvoiceUpload.tsx

import { useRef, useState } from "react"; // Step 1: Import useState
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { UploadCloud } from "lucide-react";
import { cn } from "@/lib/utils"; // A helper for conditional class names

interface InvoiceUploadProps {
  onFileSelect: (file: File) => void;
}

/**
 * A component that allows users to select a file for processing via click or drag-and-drop.
 */
export function InvoiceUpload({ onFileSelect }: InvoiceUploadProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  // Step 2: Add a state to track if a file is being dragged over the drop zone.
  const [isDragging, setIsDragging] = useState(false);

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      onFileSelect(file);
    }
  };

  // --- New Drag and Drop Handlers ---

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault(); // This is crucial to allow dropping.
    setIsDragging(true);
  };

  const handleDragLeave = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragging(false);
    const file = event.dataTransfer.files?.[0]; // Get the file from the drop event.
    if (file) {
      onFileSelect(file);
    }
  };
  // ------------------------------------

  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl">Upload your Invoice</CardTitle>
      </CardHeader>
      <CardContent>
        {/* Step 3: Attach the new event handlers to the drop zone div. */}
        {/* We also conditionally change the border color when a file is being dragged. */}
        <div
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          className={cn(
            "border-2 border-dashed border-muted-foreground/50 rounded-lg p-12 flex flex-col items-center justify-center text-center transition-colors",
            { "border-primary bg-primary/10": isDragging }
          )}
        >
          <div className="p-4 rounded-full bg-muted/70 mb-4">
            <UploadCloud className="w-10 h-10 text-muted-foreground" />
          </div>
          <Button size="lg" onClick={handleButtonClick}>
            Select File
          </Button>
          <p className="text-xs text-muted-foreground mt-4">
            or drag and drop it here
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            Supported formats: PDF only.
          </p>
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            className="hidden"
            accept=".pdf,.jpg,.jpeg,.png"
          />
        </div>
      </CardContent>
    </Card>
  );
}
