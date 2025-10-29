// src/components/dashboard/ErrorState.tsx

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AlertTriangle } from "lucide-react";

// The component's props contract is updated.
// It now expects a function named 'onReset' that returns nothing (void).
interface ErrorStateProps {
  errorMessage?: string;
  onReset: () => void;
}

/**
 * Renders an error message card.
 * It provides feedback to the user and a way to reset the process.
 */
export function ErrorState({
  errorMessage = "An unexpected error occurred.",
  onReset, // The new function is received here.
}: ErrorStateProps) {
  return (
    <Card className="w-full max-w-3xl border-destructive mx-auto">
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
        {/* The 'onReset' function is now attached to the button's onClick event. */}
        <Button variant="destructive" onClick={onReset}>
          Try Again
        </Button>
      </CardFooter>
    </Card>
  );
}
