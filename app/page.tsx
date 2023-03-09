"use client";
import AttendeeEditor from "@/components/AttendeeEditor";
import BannerEditor from "@/components/BannerEditor";
import CapacityEditor from "@/components/CapacityEditor";
import CostEditor from "@/components/CostEditor";
import DateEditor from "@/components/DateEditor";
import PrivacyEditor from "@/components/PrivacyEditor";
import TagEditor from "@/components/TagEditor";
import TextAreaEditor from "@/components/TextAreaEditor";
import TimeEditor from "@/components/TimeEditor";
import TitleEditor from "@/components/TitleEditor";
import VenueEditor from "@/components/VenueEditor";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

import {
  EventCreatorData,
  eventCreatorDataDefaultValue,
  EventCreatorDataState,
} from "@/common/types";
import { submitForm, validationSchema } from "@/service/eventCreatorService";

export default function Home() {
  const { getValues, control, formState } = useForm<EventCreatorDataState>({
    mode: "onChange",
    reValidateMode: "onChange",
    defaultValues: eventCreatorDataDefaultValue,
    resolver: yupResolver(validationSchema),
    context: undefined,
    criteriaMode: "firstError",
    shouldFocusError: true,
    shouldUnregister: false,
    shouldUseNativeValidation: false,
    delayError: undefined,
  });
  const router = useRouter();

  const { isDirty, isValid, errors } = formState;
  console.log({ isDirty, isValid, errors });

  return (
    <main id="home-container" className="pt-32 w-full grid grid-cols-2 gap-1">
      <div id="form-container">
        <div className="w-9/12 mt-10">
          <Controller
            name="title"
            control={control}
            render={({ field: { onChange }, formState: { errors } }) => (
              <TitleEditor
                defaultValue={getValues("title")}
                handleChange={(text) => {
                  console.log("TitleEditor", text);
                  onChange(text);
                }}
              />
            )}
          />
        </div>

        <div className="w-9/12 mt-7 grid grid-cols-2 gap-6">
          <Controller
            name="date"
            control={control}
            render={({ field: { onChange }, formState: { errors } }) => (
              <DateEditor
                handleChange={(text) => {
                  console.log("DateEditor", text);
                  onChange(text);
                }}
              />
            )}
          />

          <Controller
            name="time"
            control={control}
            render={({ field: { onChange }, formState: { errors } }) => (
              <TimeEditor
                handleChange={(text) => {
                  console.log("TimeEditor", text);
                  onChange(text);
                }}
              />
            )}
          />
        </div>

        <div className="w-9/12 mt-7">
          <Controller
            name="venue"
            control={control}
            render={({ field: { onChange }, formState: { errors } }) => (
              <VenueEditor
                placeholder="Venue"
                handleChange={(text) => {
                  console.log("VenueEditor", text);
                  onChange(text);
                }}
              />
            )}
          />
        </div>
        <div className="w-7/12 mt-4 grid grid-cols-2 gap-6">
          <Controller
            name="capacity"
            control={control}
            render={({ field: { onChange }, formState: { errors } }) => (
              <CapacityEditor
                placeholder="Max capacity"
                handleChange={(text) => {
                  console.log("CapacityEditor", text);
                  onChange(text);
                }}
              />
            )}
          />
          <Controller
            name="price"
            control={control}
            render={({ field: { onChange }, formState: { errors } }) => (
              <CostEditor
                placeholder="Cost per person"
                handleChange={(text) => {
                  console.log("CostEditor", text);
                  onChange(text);
                }}
              />
            )}
          />
        </div>
        <div className="w-full mt-40">
          <Controller
            name="description"
            control={control}
            render={({ field: { onChange }, formState: { errors } }) => (
              <TextAreaEditor
                title="Description"
                placeholder="Description of your event.."
                handleChange={(text) => {
                  console.log("TextAreaEditor", text);
                  onChange(text);
                }}
              />
            )}
          />
        </div>
        <div className="w-full mt-8 bg-white h-[414px] rounded-[20px] p-8">
          <div
            className={`px-3 inline-flex h-[60px] text-center w-auto bg-secondary-yellow`}
          >
            <span className="w-full justify-center align-middle self-center items-center text-primary-purple font-bold text-[32px] leading-[60px]">
              Settings
            </span>
          </div>

          <div className="mt-5 flex">
            <Controller
              name="isManualApprove"
              control={control}
              render={({ field: { onChange }, formState: { errors } }) => (
                <AttendeeEditor
                  handleChange={(val) => {
                    console.log("AttendeeEditor", val);
                    onChange(val);
                  }}
                />
              )}
            />
          </div>
          <div className="mt-6">
            <Controller
              name="privacy"
              control={control}
              render={({ field: { onChange }, formState: { errors } }) => (
                <PrivacyEditor
                  handleChange={(text) => {
                    console.log("PrivacyEditor", text);
                    onChange(text);
                  }}
                />
              )}
            />
          </div>
          <div className="mt-6">
            <Controller
              name="tags"
              control={control}
              render={({ field: { onChange }, formState: { errors } }) => (
                <TagEditor
                  handleChange={(value) => {
                    console.log("TagEditor", value);
                    onChange(value.list);
                  }}
                />
              )}
            />
          </div>
        </div>

        {Object.entries(errors).length > 0 && (
          <div
            title="Errors"
            className="mt-6 w-full bg-white rounded-[8px] min-h-[50px] p-2"
          >
            {Object.entries(errors).map(([k, v], indx) => {
              console.log(k, v.message, indx);
              return (
                <p key={indx} className="text-red-600">
                  * {v.message}
                </p>
              );
            })}
          </div>
        )}

        <button
          disabled={!isValid}
          className="mt-6 text-primary-purple bg-secondary-yellow w-full h-12 rounded-lg my-5 disabled:bg-gray-400 disabled:text-white disabled:cursor-not-allowed"
          type="button"
          onClick={() => {
            const data: EventCreatorData = {
              ...getValues(),
              startAt: `${getValues("date")}T${getValues("time")}`,
            };
            console.log("data", data);
            toast.promise(
              submitForm(data)
                .then((res) => {
                  console.log("res", res.data.id);
                  setTimeout(() => {
                    router.push("/event/" + res.data.id);
                  }, 2000);
                })
                .catch((e) => {
                  toast(e.message);
                }),
              {
                pending: "Creating new event",
                success: "Event is created, navigating to event ...",
              }
            );
          }}
        >
          CREATE SOCIAL
        </button>
      </div>
      <div id="image-container" className="w-[100%]">
        <Controller
          name="banner"
          control={control}
          render={({ field: { onChange }, formState: { errors, isValid } }) => (
            <BannerEditor
              handleChange={(link) => {
                console.log("BannerEditor", { link, isValid, errors });
                onChange(link);
              }}
            />
          )}
        />
      </div>
    </main>
  );
}
