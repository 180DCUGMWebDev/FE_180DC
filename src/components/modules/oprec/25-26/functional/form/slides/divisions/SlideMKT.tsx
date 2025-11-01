"use client";
import { Label } from "@/components/elements/Form/label";
import { Input } from "@/components/elements/Form/input";
import { Checkbox } from "@/components/elements/Form/checkbox";

const SlideMKT = ({
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
  content,
  setContent,
  graphicDesigner,
  setGraphicDesigner,
  videographer,
  setVideographer,
  partnership,
  setPartnership,
}) => {
  const choiceText = isSecondChoice ? "Second Choice" : "First Choice";
  const stepNumber = isSecondChoice ? "4" : "3";

  // Check if at least one role is selected (use local state props)
  const hasSelectedRole = content || graphicDesigner || videographer || partnership;

  return (
    <div className="animate-fade-in space-y-6">
      <div className="text-center">
        <h2 className="font-avenir-black mt-2 mb-1 text-2xl leading-snug text-green-300 lg:text-3xl">
          Marketing Division
        </h2>
        <p className="font-lato-regular text-gray-600">
          Tell us about your experience and why you want to join the Marketing team.
        </p>
      </div>

      <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-xs">
        <div className="mb-1 flex items-center gap-2">
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-300">
            <span className="text-sm font-bold text-white">{stepNumber}</span>
          </div>
          <h3 className="font-avenir-black text-xl text-gray-800">
            Marketing Division ({choiceText})
          </h3>
        </div>

        <p className="font-lato-regular mb-4 text-gray-600">
          Please answer all the questions below specifically and thoroughly to ensure a
          comprehensive and effective recruitment process. Your detailed responses will greatly
          assist us in evaluating the best candidates for the position.
        </p>

        <div className="space-y-6">
          <div>
            <Label className="font-avenir-regular mb-2 block text-sm font-medium text-gray-700">
              Desired Role in Marketing *
            </Label>
            <p className="font-lato-regular mb-3 text-sm text-gray-500">
              You can pick more than one role that you are interested in! (Minimum 1 role required)
            </p>
            <div
              className={`flex flex-col gap-2 rounded-lg p-3 ${!hasSelectedRole ? "border-2 border-red-300 bg-red-50" : "border border-gray-200"}`}
            >
              <div className="flex flex-row items-center gap-2">
                <Checkbox
                  id="content"
                  checked={content}
                  onCheckedChange={(checked) => setContent(checked)}
                  className="text-white"
                />
                <Label htmlFor="content">
                  <p className="font-lato-regular text-gray-600">Content</p>
                </Label>
              </div>
              <div className="flex flex-row items-center gap-2">
                <Checkbox
                  id="graphic-designer"
                  checked={graphicDesigner}
                  onCheckedChange={(checked) => setGraphicDesigner(checked)}
                  className="text-white"
                />
                <Label htmlFor="graphic-designer">
                  <p className="font-lato-regular text-gray-600">Graphic Designer</p>
                </Label>
              </div>
              <div className="flex flex-row items-center gap-2">
                <Checkbox
                  id="videographer"
                  checked={videographer}
                  onCheckedChange={(checked) => setVideographer(checked)}
                  className="text-white"
                />
                <Label htmlFor="videographer">
                  <p className="font-lato-regular text-gray-600">Videographer</p>
                </Label>
              </div>
              <div className="flex flex-row items-center gap-2">
                <Checkbox
                  id="partnership"
                  checked={partnership}
                  onCheckedChange={(checked) => setPartnership(checked)}
                  className="text-white"
                />
                <Label htmlFor="partnership">
                  <p className="font-lato-regular text-gray-600">Partnership</p>
                </Label>
              </div>
            </div>
            {!hasSelectedRole && (
              <p className="font-lato-regular mt-2 text-sm text-red-600">
                Please select at least one role you are interested in.
              </p>
            )}
          </div>

          <div>
            <Label className="font-avenir-regular mb-2 block text-sm font-medium text-gray-700">
              Personal Portfolio *
            </Label>
            <div className="font-lato-regular mb-3 text-sm text-gray-500">
              <p>Please upload:</p>
              <ul className="list-disc pl-5">
                <li>
                  <span className="font-lato-bold text-black-300">
                    Link to a portfolio of your past projects such as illustrations, posters, posts,
                    etc{" "}
                  </span>
                  if you are interested in the Graphic Designer Role.
                </li>
                <li>
                  <span className="font-lato-bold text-black-300">
                    Link to completed video or animation projects
                  </span>{" "}
                  if you are interested in the Videographer Role.
                </li>
                <li>
                  <span className="font-lato-bold text-black-300">
                    Link to a portfolio of past projects (Instagram, TikTok, etc.), copy and/or
                    campaign examples
                  </span>{" "}
                  if you are interested in the Copywriter Role.
                </li>
              </ul>
              <br />
              <p>
                <span className="font-lato-bold text-black-300">[EXAMPLE]</span> If you want to
                insert for more than one role:
                <br /> 1. Graphic Designer Role: [LINK]
                <br /> 2. Copywriter Role: [LINK]
              </p>
            </div>
            <Input
              value={portfolioLink}
              onChange={(e) => setPortfolioLink(e.target.value)}
              placeholder="[your-portfolio-link]"
              className="font-lato-regular border-gray-300 transition-all duration-200 focus:ring-2 focus:ring-green-300/50"
            />
          </div>

          <div>
            <Label className="font-avenir-regular mb-2 block text-sm font-medium text-gray-700">
              Motivation Document *
            </Label>
            <p className="font-lato-regular mb-3 text-sm text-gray-500">
              Please prepare a document that answers the following questions (max. 500 words) :
              <span className="font-lato-bold text-black-300">
                <br />
                1. Why do you want to be a part of 180DC UGM?
                <br />
                2. Why are you applying for this position?
              </span>
              <br />
              <br />
              Once completed, upload your document to Google Drive, ensure the access settings are
              set to{" "}
              <span className="font-lato-bold text-black-300">
                {" "}
                &quot;Anyone with the link can view,&quot;`
              </span>{" "}
              and paste the link in the space provided below.
            </p>
            <Input
              value={documentLink}
              onChange={(e) => setDocumentLink(e.target.value)}
              placeholder="https://drive.google.com/your-document-link"
              className="font-lato-regular border-gray-300 transition-all duration-200 focus:ring-2 focus:ring-green-300/50"
            />
          </div>

          <div>
            <Label className="font-avenir-regular mb-2 block text-sm font-medium text-gray-700">
              Please Insert your CV! *
            </Label>
            <p className="font-lato-regular mb-3 text-sm text-gray-500">
              Please do make sure you use McKinsey ATS Template{" "}
              <span className="font-lato-bold text-black-300">(bit.ly/McKinseyATS-Example)</span>
              <br />
              <br />
              <span className="font-lato-bold text-black-300">
                Format: FullName_FirstChoice_SecondChoice
              </span>
              <br />
              <br />
              Then, upload your document to a Google Drive, ensure the access settings are set to
              <span className="font-lato-bold text-black-300">
                {" "}
                &quot;Anyone with the link can view,&quot;`
              </span>{" "}
              and paste the link in the space provided below.
            </p>
            <Input
              value={cvLink}
              onChange={(e) => setCvLink(e.target.value)}
              placeholder="https://drive.google.com/your-document-link"
              className="font-lato-regular border-gray-300 transition-all duration-200 focus:ring-2 focus:ring-green-300/50"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlideMKT;
