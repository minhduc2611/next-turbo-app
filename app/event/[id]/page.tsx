import { getEvent } from "@/service/eventCreatorService";

import { EventCreatorDataState } from "@/common/types";
import BannerPreview from "@/components/BannerEditor/BannerPreview";
import CapacityPreview from "@/components/CapacityEditor/CapacityPreview";
import CostPreview from "@/components/CostEditor/CostPreview";
import DatePreview from "@/components/DateEditor/DatePreview";
import TextAreaPreview from "@/components/TextAreaEditor/TextAreaPreview";
import TimePreview from "@/components/TimeEditor/TimePreview";
import TitlePreview from "@/components/TitleEditor/TitlePreview";
import VenuePreview from "@/components/VenueEditor/VenuePreview";

const fetchSomething = async (id: string) => {
  console.log("fetchSomething", id);

  return getEvent(id).then((res) => res.data);
};

interface NextProps {
  params: { id: string };
}
const Home = async ({ params }: NextProps) => {
  const data: EventCreatorDataState = await fetchSomething(params?.id);
  console.log(data);
  if (data === null) {
    return <>Something went wrong, cannot get event from id: {params?.id}</>;
  }

  return (
    <main id="home-container" className="pt-32 w-full grid grid-cols-2 gap-1">
      <div id="form-container" className="z-10">
        <div className="w-full mt-10">
          <TitlePreview value={data.title} />
        </div>

        <div className="w-9/12 mt-7 grid grid-cols-2 gap-6">
          <DatePreview value={data.startAt} />

          <TimePreview value={data.startAt} />
        </div>

        <div className="w-9/12 mt-7">
          <VenuePreview value={data.venue} />
        </div>
        <div className="w-7/12 mt-4 grid grid-cols-2 gap-6">
          <CapacityPreview value={data.capacity} />
          <CostPreview value={data.price} />
        </div>
        <div className="w-full mt-8">
          <TextAreaPreview value={data.description} />
        </div>
      </div>

      <div id="image-container" className="w-[100%]">
        <BannerPreview link={data.banner} />
      </div>
    </main>
  );
};
export default Home;