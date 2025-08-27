import React, { ReactNode} from "react";
import * as Sentry from "@sentry/react";

interface State {
  hasError: boolean;
}

interface ErrorBoundaryProps {
  children: ReactNode;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps , State> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // Log to console
    console.log("Error caught by ErrorBoundary:", { error, errorInfo });
    // Send to Sentry
    Sentry.captureException(error, { extra: errorInfo });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: "20px", textAlign: "center" }}>
          <h2>Oops, there is an error!</h2>
          <button
            onClick={() => this.setState({ hasError: false })}
            style={{
              marginTop: "10px",
              padding: "8px 16px",
              borderRadius: "6px",
              border: "none",
              backgroundColor: "#0070f3",
              color: "white",
              cursor: "pointer",
            }}
          >
            Try again?
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;