import ContentDisplay from "@/app/components/ContentDisplay";
import { Suspense } from "react";

const Content = async ({ params }) => {
  const { contentId } = await params;
  return <ContentDisplay id={contentId} />;
};

const ContentPage = ({ params }) => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Content params={params} />
    </Suspense>
  );
};

export default ContentPage;
