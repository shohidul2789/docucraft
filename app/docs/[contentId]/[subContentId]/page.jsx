import ContentDisplay from "@/app/components/ContentDisplay";
import { Suspense } from "react";

const SubContent = async ({ params }) => {
  const { subContentId } = await params;

  return <ContentDisplay id={subContentId} />;
};

const SubContentPage = ({ params }) => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SubContent params={params} />
    </Suspense>
  );
};

export default SubContentPage;
