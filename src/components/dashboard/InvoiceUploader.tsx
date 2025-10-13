// Hero + upload card (visual only, no logic yet)
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CloudUpload } from "lucide-react";

export function InvoiceUpload() {
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
            {/* Primary button (blue accent as requested) */}
            <Button
              type="button"
              className="mx-auto block bg-blue-600 text-white hover:bg-blue-500"
            >
              Select File
            </Button>
            <p className="mt-4 text-xs text-muted-foreground">
              Supported formats: PDF, JPG, PNG.
            </p>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
