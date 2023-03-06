import { Inter } from "next/font/google";
import { use } from "react";

const inter = Inter({ subsets: ["latin"] });

const fetchSomething = async () => {
  return new Promise((resolve, reject) => {
    return setTimeout(() => {
      console.log("hi");
      resolve(1);
    }, 2000);
  }).then((res) => res);
};
export default async function Home() {
  const a = await fetchSomething();

  return (
    <>
      <h2 className={inter.className}>
        Deploy <span>-&gt;</span>
      </h2>
      <p className={inter.className}>{a}</p>
    </>
  );
}
