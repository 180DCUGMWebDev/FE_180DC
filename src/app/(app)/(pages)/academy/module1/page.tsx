import Module1Main from "@/components/modules/academy/module1/Module1Main";
import CountinueCourse from "@/components/modules/academy/module1/ContinueCourse";

export const metadata = {
  title: "Academy | 180 Degrees Consulting UGM",
};

export default async function Module1() {
  return (
    <main>
      <Module1Main />
      <CountinueCourse />
    </main>
  );
}
