// src/components/dashboard/SuccessState.tsx

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

// This TypeScript interface defines the shape of the data the component expects.
// This is a contract that ensures data consistency.
interface ExtractedData {
  field: string;
  value: string | number;
  status: "extracted" | "missing";
}

// We define our mock data here. In the future, this will come from the API.
const mockInvoiceData: ExtractedData[] = [
  { field: "Vendor Name", value: "ACME Inc.", status: "extracted" },
  { field: "Invoice Date", value: "2025-10-13", status: "extracted" },
  { field: "Total Amount", value: 150.75, status: "extracted" },
  { field: "Currency", value: "USD", status: "extracted" },
  { field: "Invoice Number", value: "INV-2025-101", status: "extracted" },
  { field: "Payment Due Date", value: "N/A", status: "missing" },
];

/**
 * Renders the extracted invoice data in a structured table.
 * It receives the processed data as props and displays it.
 */
export function SuccessState() {
  // In a real scenario, this component would receive the data via props,
  // for example: export function SuccessState({ data }: { data: ExtractedData[] })
  const data = mockInvoiceData;

  return (
    <Card className="w-full max-w-3xl">
      <CardHeader>
        <CardTitle>Extraction Successful</CardTitle>
        <CardDescription>
          Review the extracted fields from your document below.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[180px]">Field</TableHead>
              <TableHead>Value</TableHead>
              <TableHead className="text-right">Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {/* We use the .map() method to dynamically generate a row for each item in our data array. */}
            {data.map((item) => (
              <TableRow key={item.field}>
                <TableCell className="font-medium">{item.field}</TableCell>
                <TableCell>{item.value}</TableCell>
                <TableCell className="text-right">
                  <Badge
                    variant={
                      item.status === "extracted" ? "default" : "destructive"
                    }
                  >
                    {item.status}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
