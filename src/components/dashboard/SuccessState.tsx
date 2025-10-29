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
export interface ExtractedData {
  field: string;
  value: string | number | null;
  status: "extracted" | "missing";
}

interface SuccessStateProps {
  data: ExtractedData | ExtractedData[] | null;
}

/**
 * Renders the extracted invoice data in a structured, responsive table.
 */
export function SuccessState({ data }: SuccessStateProps) {
  const items = data ? (Array.isArray(data) ? data : [data]) : [];

  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader>
        <CardTitle>Extraction Successful</CardTitle>
        <CardDescription>
          Review the extracted fields from your document below.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          {/* This table header will be hidden on small screens (mobile). */}
          {/* It becomes a 'table-header-group' on medium screens and larger. */}
          <TableHeader className="hidden md:table-header-group">
            <TableRow>
              <TableHead className="w-[180px]">Field</TableHead>
              <TableHead>Value</TableHead>
              <TableHead className="text-right">Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {items.map((item) => (
              // On small screens, each row becomes a block with padding and a border.
              // On medium screens, it reverts to being a normal table row.
              <TableRow
                key={item.field}
                className="block border-b p-4 md:table-row md:border-b-0 md:p-0"
              >
                {/* Each cell becomes a block element on small screens. */}
                {/* A label is added using the 'before:' pseudo-element for context. */}
                <TableCell className="block font-medium md:table-cell md:w-[180px] before:content-['Field:'] before:font-bold before:mr-2 md:before:content-none">
                  <span className="float-right md:float-none">
                    {item.field}
                  </span>
                </TableCell>

                <TableCell className="block md:table-cell before:content-['Value:'] before:font-bold before:mr-2 md:before:content-none">
                  <span className="float-right md:float-none">
                    {String(item.value)}
                  </span>
                </TableCell>

                <TableCell className="block text-right md:table-cell before:content-['Status:'] before:font-bold before:mr-2 md:before:content-none">
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
