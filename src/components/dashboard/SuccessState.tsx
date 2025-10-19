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

// This TypeScript interface defines the shape of the data that the component expects.
// It acts as a contract to ensure data consistency.
export interface ExtractedData {
  field: string;
  // The value can be a string, a number, or null if not found.
  value: string | number | null;
  status: "extracted" | "missing";
}

// This interface defines the props for the SuccessState component itself.
// It can accept a single object, an array of objects, or null.
interface SuccessStateProps {
  data: ExtractedData | ExtractedData[] | null;
}

/**
 * Renders the extracted invoice data in a structured table.
 * It receives the processed data as props and displays it.
 */
export function SuccessState({ data }: SuccessStateProps) {
  // This logic ensures 'items' is always an array.
  // - If 'data' exists, it checks if it's already an array.
  // - If it's not an array (i.e., a single object), it wraps it in a new array.
  // - If 'data' is null or undefined, it defaults to an empty array to prevent crashes.
  const items = data ? (Array.isArray(data) ? data : [data]) : [];

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
            {/* The .map() method can now be safely called, as 'items' is guaranteed to be an array. */}
            {items.map((item) => (
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
