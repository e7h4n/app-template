// @ts-nocheck -- skip type checking
import * as meta_0 from "../content/docs/meta.json?collection=meta&hash=1756390760895";
import * as docs_1 from "../content/docs/index.mdx?collection=docs&hash=1756390760895";
import * as docs_0 from "../content/docs/getting-started.mdx?collection=docs&hash=1756390760895";
import { _runtime } from "fumadocs-mdx";
import * as _source from "../source.config";
export const docs = _runtime.doc<typeof _source.docs>([
  {
    info: {
      path: "getting-started.mdx",
      absolutePath:
        "/workspaces/app-template3/turbo/apps/docs/content/docs/getting-started.mdx",
    },
    data: docs_0,
  },
  {
    info: {
      path: "index.mdx",
      absolutePath:
        "/workspaces/app-template3/turbo/apps/docs/content/docs/index.mdx",
    },
    data: docs_1,
  },
]);
export const meta = _runtime.meta<typeof _source.meta>([
  {
    info: {
      path: "meta.json",
      absolutePath:
        "/workspaces/app-template3/turbo/apps/docs/content/docs/meta.json",
    },
    data: meta_0,
  },
]);
