// src/components/dashboard/InvoiceUploader.tsx

import { useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { UploadCloud } from "lucide-react";

// Step 1: Define the props contract. The component now expects a function.
interface InvoiceUploadProps {
  onFileSelect: (file: File) => void;
}

/**
 * A component that allows users to select a file for processing.
 * It calls a parent function once a file is selected.
 */
// Step 2: Accept the 'onFileSelect' function from the props.
export function InvoiceUpload({ onFileSelect }: InvoiceUploadProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // Step 3: Instead of just logging, call the function passed from the parent.
      // This sends the selected file "up" to the manager.
      onFileSelect(file);
    }
  };

  return (
    // The component only returns the Card, as the title is handled by the parent (App.tsx)
    <Card className="mx-auto max-w-3xl rounded-2xl">
      <CardHeader>
        <CardTitle className="text-center">Upload your Invoice</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="border-2 border-dashed border-muted-foreground/50 rounded-lg p-12 flex flex-col items-center justify-center text-center">
          <div className="p-4 rounded-full bg-muted/70 mb-4">
            <UploadCloud className="w-10 h-10 text-muted-foreground" />
          </div>
          <Button size="lg" onClick={handleButtonClick}>
            Select File
          </Button>
          <p className="text-xs text-muted-foreground mt-4">
            Supported formats: PDF, JPG, PNG.
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
