"use server";

interface Props {
  value: string;
}
const TitlePreview = ({ value }: Props) => {
  return (
    <div className={`w-full`}>
      <div
        className="focus-visible:cursor-auto font-bold align-middle w-full resize-none text-5xl text-white bg-inherit focus-visible:border-none focus-visible:outline-none focus-visible:shadow-none"
      >
        <span className="bg-primary-purple">{value}</span>
      </div>
    </div>
  );
};
export default TitlePreview;
