import Module2Main from "@/components/modules/academy/module2/Module2main";
import CountinueCourse from "@/components/modules/academy/module1/ContinueCourse";

export const metadata = {
  title: "Academy | 180 Degrees Consulting UGM",
};

export default async function Module2() {
  return (
    <main>
      <Module2Main />
      <CountinueCourse />
    </main>
  );
}
