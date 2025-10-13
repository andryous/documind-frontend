// src/components/dashboard/ErrorState.tsx

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AlertTriangle } from "lucide-react"; // An icon for warnings/errors

// The component expects a props object with an optional message.
interface ErrorStateProps {
  errorMessage?: string;
}

/**
 * Renders an error message card.
 * It provides feedback to the user when an operation fails.
 */
export function ErrorState({
  errorMessage = "An unexpected error occurred.",
}: ErrorStateProps) {
  return (
    <Card className="w-full max-w-3xl border-destructive">
      <CardHeader>
        <CardTitle className="text-destructive flex items-center gap-2">
          <AlertTriangle />
          Extraction Failed
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p>{errorMessage}</p>
        <p className="text-sm text-muted-foreground mt-2">
          Please check your file or try again. If the problem persists, the
          document might be corrupted.
        </p>
      </CardContent>
      <CardFooter>
        {/* This button will eventually reset the state to 'idle'. */}
        <Button variant="destructive">Try Again</Button>
      </CardFooter>
    </Card>
  );
}
