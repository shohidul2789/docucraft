import { Suspense } from "react";
import ContentDisplay from "@/app/components/ContentDisplay";
import { getDocuments } from "@/lib/doc";
import { getDocumentsByCategory } from "@/utils/doc-utils";
const CategoryContent = async ({ params }) => {
  const { name } = await params;
  const docs = getDocuments();
  const matchedDocuments = getDocumentsByCategory(docs, name);
  return <ContentDisplay id={matchedDocuments[0]?.id} />;
};

const CategoriesPage = ({ params }) => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CategoryContent params={params} />
    </Suspense>
  );
};

export default CategoriesPage;
