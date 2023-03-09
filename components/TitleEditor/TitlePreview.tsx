"use server";

interface Props {
  value: string;
}
const TitlePreview = ({ value }: Props) => {
  return (
    <div className={`p-3 hover:cursor-pointer bg-primary-purple w-full`}>
      <textarea
        rows={1}
        value={value}
        className="hover:cursor-pointer focus-visible:cursor-auto font-bold align-middle w-full resize-none text-5xl text-white bg-inherit focus-visible:border-none focus-visible:outline-none focus-visible:shadow-none"
      />
    </div>
  );
};
export default TitlePreview;
