import Header from "@/components/shared/Header";
import TransformationForm from "@/components/shared/TransformationForm";
import { transformationTypes } from "@/constants";
import { auth } from "@clerk/nextjs";

const AddTransformationTypePage = ({ params: { type } }: SearchParamProps) => {
  const { userId } = auth();
  const transformation = transformationTypes[type];

  return (
    <>
      <Header title={transformation.title} subtitle={transformation.subtitle} />

      <TransformationForm action='Add' userId={} />
    </>
  );
};

export default AddTransformationTypePage;
