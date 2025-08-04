"use client";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

const SlideIT = ({
  formData,
  updateFormData,
  onNext,
  onPrevious,
  isSecondChoice = false,
  divisionType = "first",
  portfolioLink,
  setPortfolioLink,
  documentLink,
  setDocumentLink,
  cvLink,
  setCvLink,
  isValid,
  frontend,
  setFrontend,
  backend,
  setBackend,
  uiux,
  setUiux,
}) => {
  const choiceText = isSecondChoice ? "Second Choice" : "First Choice";
  const stepNumber = isSecondChoice ? "4" : "3";

  // Check if at least one role is selected (use local state props)
  const hasSelectedRole = frontend || backend || uiux;

  return (
    <div className="animate-fade-in space-y-6">
      <div className="text-center">
        <h2 className="mb-1 mt-2 font-avenirBlack text-2xl leading-snug text-primary lg:text-3xl">
          Information Technology Sub-Division
        </h2>
        <p className="font-latoRegular text-gray-600">
          Tell us about your experience and why you want to join the IT team.
        </p>
      </div>

      <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
        <div className="mb-1 flex items-center gap-2">
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary">
            <span className="text-sm font-bold text-white">{stepNumber}</span>
          </div>
          <h3 className="font-avenirBlack text-xl text-gray-800">
            Information Technology Division ({choiceText})
          </h3>
        </div>

        <p className="mb-4 font-latoRegular text-gray-600">
          Please answer all the questions below specifically and thoroughly to ensure a
          comprehensive and effective recruitment process. Your detailed responses will greatly
          assist us in evaluating the best candidates for the position.
        </p>

        <div className="space-y-6">
          <div>
            <Label className="mb-2 block font-avenirRegular text-sm font-medium text-gray-700">
              Desired Role in IT *
            </Label>
            <p className="mb-3 font-latoRegular text-sm text-gray-500">
              You can pick more than one role that you are interested in! (Minimum 1 role required)
            </p>
            <div
              className={`flex flex-col gap-2 rounded-lg p-3 ${!hasSelectedRole ? "border-2 border-red-300 bg-red-50" : "border border-gray-200"}`}
            >
              <div className="flex flex-row items-center gap-2">
                <Checkbox
                  id="frontend"
                  checked={frontend}
                  onCheckedChange={(checked) => setFrontend(checked)}
                  className="text-white"
                />
                <Label htmlFor="frontend">
                  <p className="font-latoRegular text-gray-600">Frontend Developer</p>
                </Label>
              </div>
              <div className="flex flex-row items-center gap-2">
                <Checkbox
                  id="backend"
                  checked={backend}
                  onCheckedChange={(checked) => setBackend(checked)}
                  className="text-white"
                />
                <Label htmlFor="backend">
                  <p className="font-latoRegular text-gray-600">Backend Developer</p>
                </Label>
              </div>
              <div className="flex flex-row items-center gap-2">
                <Checkbox
                  id="uiux"
                  checked={uiux}
                  onCheckedChange={(checked) => setUiux(checked)}
                  className="text-white"
                />
                <Label htmlFor="uiux">
                  <p className="font-latoRegular text-gray-600">UI/UX Designer</p>
                </Label>
              </div>
            </div>
            {!hasSelectedRole && (
              <p className="mt-2 font-latoRegular text-sm text-red-600">
                Please select at least one role you are interested in.
              </p>
            )}
          </div>

          <div>
            <Label className="mb-2 block font-avenirRegular text-sm font-medium text-gray-700">
              Personal Portfolio *
            </Label>
            <div className="mb-3 font-latoRegular text-sm text-gray-500">
              <p>Please upload:</p>
              <ul className="list-disc pl-5">
                <li>
                  <span className="font-latoBold text-black">
                    {" "}
                    A Portfolio (website, PDF, etc.){" "}
                  </span>{" "}
                  if you are interested in the Front-End and Back-End Developer Role.
                </li>
                <li>
                  <span className="font-latoBold text-black"> Figma Portfolio Folder </span> if you
                  are interested in the UI/UX Designer Role.
                </li>
              </ul>
              <p>
                Note: It is NOT MANDATORY but a plus point if you do! Please upload in the form of
                link.
              </p>
              <br />
              <p>
                <span className="font-latoBold text-black">[EXAMPLE]</span> If you want to insert
                for more than one role:
                <br /> 1. Front-End Developer: [LINK]
                <br /> 2. UI/UX Designer Role: [LINK]
              </p>
            </div>
            <Input
              value={portfolioLink}
              onChange={(e) => setPortfolioLink(e.target.value)}
              placeholder="[your-portfolio-link]"
              className="border-gray-300 font-latoRegular transition-all duration-200 focus:ring-2 focus:ring-primary/50"
            />
          </div>

          <div>
            <Label className="mb-2 block font-avenirRegular text-sm font-medium text-gray-700">
              Motivation Document *
            </Label>
            <p className="mb-3 font-latoRegular text-sm text-gray-500">
              Please prepare a document that answers the following questions (max. 500 words) :
              <span className="font-latoBold text-black">
                <br />
                1. Why do you want to be a part of 180DC UGM?
                <br />
                2. Why are you applying for this position?
              </span>
              <br />
              <br />
              Once completed, upload your document to Google Drive, ensure the access settings are
              set to{" "}
              <span className="font-latoBold text-black">
                {" "}
                &quot;Anyone with the link can view,&quot;`
              </span>{" "}
              and paste the link in the space provided below.
            </p>
            <Input
              value={documentLink}
              onChange={(e) => setDocumentLink(e.target.value)}
              placeholder="https://drive.google.com/your-document-link"
              className="border-gray-300 font-latoRegular transition-all duration-200 focus:ring-2 focus:ring-primary/50"
            />
          </div>

          <div>
            <Label className="mb-2 block font-avenirRegular text-sm font-medium text-gray-700">
              Please Insert your CV! *
            </Label>
            <p className="mb-3 font-latoRegular text-sm text-gray-500">
              Please do make sure you use McKinsey ATS Template{" "}
              <span className="font-latoBold text-black">(bit.ly/McKinseyATS-Example)</span>
              <br />
              <br />
              <span className="font-latoBold text-black">
                Format: FullName_FirstChoice_SecondChoice
              </span>
              <br />
              <br />
              Then, upload your document to a Google Drive, ensure the access settings are set to
              <span className="font-latoBold text-black">
                {" "}
                &quot;Anyone with the link can view,&quot;`
              </span>{" "}
              and paste the link in the space provided below.
            </p>
            <Input
              value={cvLink}
              onChange={(e) => setCvLink(e.target.value)}
              placeholder="https://drive.google.com/your-document-link"
              className="border-gray-300 font-latoRegular transition-all duration-200 focus:ring-2 focus:ring-primary/50"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlideIT;
