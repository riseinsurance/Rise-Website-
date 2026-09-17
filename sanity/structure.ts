import type { StructureResolver } from "sanity/structure";

export const structure: StructureResolver = (S) =>
  S.list()
    .title("The Fine Print")
    .items([
      S.documentTypeListItem("post").title("Posts"),
    ]);
