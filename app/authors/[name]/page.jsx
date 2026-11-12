import { Suspense } from "react";
import ContentDisplay from "@/app/components/ContentDisplay";
import { getDocuments } from "@/lib/doc";
import { getDocumentsByAuthor } from "@/utils/doc-utils";
const AuthorContent = async ({ params }) => {
  const { name } = await params;
  const docs = getDocuments();
  const matchedDocuments = getDocumentsByAuthor(docs, name);
  return <ContentDisplay id={matchedDocuments[0]?.id} />;
};

const AuthorPage = ({ params }) => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AuthorContent params={params} />
    </Suspense>
  );
};

export default AuthorPage;
