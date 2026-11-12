import { Suspense } from "react";
import ContentDisplay from "@/app/components/ContentDisplay";
import { getDocuments } from "@/lib/doc";
import { getDocumentsByTag } from "@/utils/doc-utils";
const TagContent = async ({ params }) => {
  const { name } = await params;
  const docs = getDocuments();
  const matchedDocuments = getDocumentsByTag(docs, name);
  return <ContentDisplay id={matchedDocuments[0]?.id} />;
};

const TagsPage = ({ params }) => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <TagContent params={params} />
    </Suspense>
  );
};

export default TagsPage;
