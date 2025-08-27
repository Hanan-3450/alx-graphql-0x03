# ALX Rick and Morty App

Next.js (TypeScript + ESLint + Tailwind) with Apollo Client connected to the Rick and Morty GraphQL API.

## Scripts
- `npm run dev` - start dev server
- `npm run build` - production build
- `npm run start` - run production server

## GraphQL Setup
- `graphql/apolloClient.ts` - Apollo Client with HttpLink + InMemoryCache
- `graphql/queries.ts` - Example GET_EPISODES query
- `pages/_app.tsx` - App wrapped in ApolloProvider


# alx-graphql-0x03 - Rick and Morty App

This project is a continuation of **alx-graphql-0x02**, extended with an **ErrorBoundary** component to handle runtime errors gracefully in a React/Next.js application.

---

## 📌 Task 0 - Create the ErrorBoundary Component

### Objective
Implement an ErrorBoundary class component in TypeScript that can catch and handle JavaScript errors in the application.

---

### ✅ Steps Completed
1. **Duplicated Project**  
   Duplicated `alx-graphql-0x02` into `alx-graphql-0x03`.

2. **Created ErrorBoundary Component**  
   Added a new file: `components/ErrorBoundary.tsx` with the following code:

   ```tsx
   import React, { ReactNode } from "react";

   interface State {
     hasError: boolean;
   }

   interface ErrorBoundaryProps {
     children: ReactNode;
   }

   class ErrorBoundary extends React.Component<ErrorBoundaryProps, State> {
     constructor(props: ErrorBoundaryProps) {
       super(props);
       this.state = { hasError: false };
     }

     static getDerivedStateFromError(_: Error): State {
       return { hasError: true };
     }

     componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
       console.log("Error caught by ErrorBoundary:", { error, errorInfo });
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
