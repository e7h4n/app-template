import { DocsLayout } from "fumadocs-ui/layouts/docs";
import type { ReactNode } from "react";
import { pageTree } from "../source";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout tree={pageTree} nav={{ title: "Documentation" }}>
      {children}
    </DocsLayout>
  );
}
