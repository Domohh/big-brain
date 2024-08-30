"use client";

import { SignInButton, UserButton } from "@clerk/nextjs";
import {
  Authenticated,
  Unauthenticated,
  useMutation,
  useQuery,
} from "convex/react";
import { api } from "../../convex/_generated/api";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/mode-toggle";

export default function Home() {
  const documents = useQuery(api.documents.getDocuments);
  const createDocument = useMutation(api.documents.createDocument);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Unauthenticated>
        <SignInButton />
      </Unauthenticated>
      <Authenticated>
        <UserButton />
        <ModeToggle />
        <Button
          onClick={() => {
            createDocument({
              title: "Hello World",
            });
          }}
        >
          Click me!
        </Button>

        {documents?.map((doc, i) => <div key={i}>{doc.title}</div>)}
      </Authenticated>
    </main>
  );
}
