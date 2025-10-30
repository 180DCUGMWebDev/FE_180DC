"use client";
import { Label } from "@/components/elements/Form/label";
import { Input } from "@/components/elements/Form/input";

const SlideFinance = ({
  formData,
  updateFormData,
  onNext,
  onPrevious,
  isSecondChoice = false,
  divisionType = "first",
  documentLink,
  setDocumentLink,
  cvLink,
  setCvLink,
  isValid,
}) => {
  const choiceText = isSecondChoice ? "Second Choice" : "First Choice";
  const stepNumber = isSecondChoice ? "4" : "3";

  return (
    <div className="animate-fade-in space-y-6">
      <div className="text-center">
        <h2 className="font-avenir-black text-brand-primary mt-2 mb-1 text-2xl leading-snug lg:text-3xl">
          Finance Division
        </h2>
        <p className="font-lato-regular text-gray-600">
          Tell us about your financial analysis experience and why you want to join the Finance
          team.
        </p>
      </div>

      <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-xs">
        <div className="mb-1 flex items-center gap-2">
          <div className="bg-brand-primary flex h-6 w-6 items-center justify-center rounded-full">
            <span className="text-sm font-bold text-white">{stepNumber}</span>
          </div>
          <h3 className="font-avenir-black text-xl text-gray-800">
            Finance Division ({choiceText})
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
              Motivation Document *
            </Label>
            <p className="font-lato-regular mb-3 text-sm text-gray-500">
              Please prepare a document that answers the following questions (max. 500 words) :
              <span className="font-lato-bold text-brand-black">
                <br />
                1. Why do you want to be a part of 180DC UGM?
                <br />
                2. Why are you applying for this position?
              </span>
              <br />
              <br />
              Once completed, upload your document to Google Drive, ensure the access settings are
              set to{" "}
              <span className="font-lato-bold text-brand-black">
                {" "}
                &quot;Anyone with the link can view,&quot;`
              </span>{" "}
              and paste the link in the space provided below.
            </p>
            <Input
              value={documentLink}
              onChange={(e) => setDocumentLink(e.target.value)}
              placeholder="https://drive.google.com/your-document-link"
              className="font-lato-regular focus:ring-brand-primary/50 border-gray-300 transition-all duration-200 focus:ring-2"
            />
          </div>

          <div>
            <Label className="font-avenir-regular mb-2 block text-sm font-medium text-gray-700">
              Please Insert your CV! *
            </Label>
            <p className="font-lato-regular mb-3 text-sm text-gray-500">
              Please do make sure you use McKinsey ATS Template{" "}
              <span className="font-lato-bold text-brand-black">(bit.ly/McKinseyATS-Example)</span>
              <br />
              <br />
              <span className="font-lato-bold text-brand-black">
                Format: FullName_FirstChoice_SecondChoice
              </span>
              <br />
              <br />
              Then, upload your document to a Google Drive, ensure the access settings are set to{" "}
              <span className="font-lato-bold text-brand-black">
                {" "}
                &quot;Anyone with the link can view,&quot;`
              </span>{" "}
              and paste the link in the space provided below.
            </p>
            <Input
              value={cvLink}
              onChange={(e) => setCvLink(e.target.value)}
              placeholder="https://drive.google.com/your-document-link"
              className="font-lato-regular focus:ring-brand-primary/50 border-gray-300 transition-all duration-200 focus:ring-2"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlideFinance;
