"use client";

import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { dataset, projectId } from "@/sanity/env";
import { schema } from "@/sanity/schemaTypes";
import { structure } from "@/sanity/structure";

export default defineConfig({
  basePath: "/studio",
  name: "the-fine-print",
  title: "The Fine Print",
  projectId,
  dataset,
  schema,
  plugins: [structureTool({ structure })],
});
