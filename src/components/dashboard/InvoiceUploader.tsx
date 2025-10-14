// Hero + upload card (visual only, no logic yet)
import { useRef } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CloudUpload } from "lucide-react";

/**
 * A component that allows users to select a file for processing.
 * It handles the click event to trigger a hidden file input.
 */
export function InvoiceUpload() {
  // Step 2: It creates a ref. This will act as the 'remote control' for the file input.
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Step 3: This function will be called when the user clicks the visible button.
  const handleButtonClick = () => {
    // It uses the ref to access the invisible input and trigger its click event.
    fileInputRef.current?.click();
  };

  // Step 4: This function will be called when a file is actually selected.
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      console.log("File selected:", file.name);
      // In the next step, we will use this file to call our API.
    }
  };

  return (
    <section>
      {/* Hero */}
      <h1 className="mb-2 text-center text-3xl font-bold md:text-5xl">
        Extract data from your invoices instantly
      </h1>
      <p className="mb-8 text-center text-sm text-muted-foreground md:text-base">
        Upload your invoice — drag and drop your file or click the button below
      </p>

      {/* Upload card */}
      <Card className="mx-auto max-w-3xl rounded-2xl">
        <CardHeader>
          <CardTitle className="text-center">Upload your Invoice</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="rounded-xl border-2 border-dashed border-muted-foreground/40 p-10 text-center">
            <CloudUpload className="mx-auto mb-4 size-10 opacity-70" />

            {/* The primary button now triggers the file selection. */}
            <Button
              type="button"
              onClick={handleButtonClick} // This is the connection to the logic.
              className="mx-auto block bg-blue-600 text-white hover:bg-blue-500"
            >
              Select File
            </Button>
            <p className="mt-4 text-xs text-muted-foreground">
              Supported formats: PDF, JPG, PNG.
            </p>

            {/* The hidden file input that does the actual work. */}
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              className="hidden"
              accept=".pdf,.jpg,.jpeg,.png "
            />
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
