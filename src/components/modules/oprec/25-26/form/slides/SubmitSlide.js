import { CheckCircle, ExternalLink } from "lucide-react";
import Link from "next/link";

const SubmitSlide = ({ formData }) => {
  return (
    <div className="animate-fade-in space-y-6">
      <div className="text-center">
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
          <CheckCircle className="h-10 w-10 text-primary" />
        </div>
        <h2 className="mb-2 font-avenirBlack text-2xl leading-snug text-primary lg:text-3xl">
          Thank You for Submitting!
        </h2>
        <p className="font-latoRegular text-gray-600">
          Your application has been successfully received
        </p>
      </div>

      {/* Next Steps */}
      <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
        <h3 className="mb-6 flex items-center gap-2 font-avenirBlack text-xl text-gray-800">
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary">
            <span className="text-sm font-bold text-white">6</span>
          </div>
          Next Steps
        </h3>

        <div className="space-y-6">
          {/* Join group */}
          <div className="mb-4">
            <h2 className="font-avenirRegular font-bold">Join group</h2>
            <p className="mb-3 font-latoRegular text-gray-600">
              Stay updated with the latest information about the recruitment process
            </p>
            <Link
              href="https://bit.ly/Cycle2GroupRecruitment180DC"
              target="_blank"
              className="inline-flex items-center gap-2 rounded-md bg-secondary px-4 py-2 font-avenirRegular text-sm text-white transition-all duration-200 hover:bg-blue-700"
            >
              <ExternalLink className="h-4 w-4" />
              bit.ly/Cycle2GroupRecruitment180DC
            </Link>
          </div>

          {/* Contact CP */}
          <div className="mb-4">
            <h2 className="font-avenirRegular font-bold">Contact Person</h2>
            <p className="mb-3 font-latoRegular text-gray-600">
              If you have any questions about the recruitment process, feel free to contact our CPs
            </p>
            <p className="font-latoBold underline">Thara: +62 811-160-165</p>
            <p className="font-latoBold underline">Windra: +62 821-1451-2715</p>
          </div>

          {/* Email Results */}
          <div className="mb-4">
            <h2 className="font-avenirRegular font-bold">Result</h2>
            <p className="mb-3 font-latoRegular text-gray-600">
              We will further announce our decision through email, kindly check your email same time
              next week. We wish you the best of luck!!!
            </p>
          </div>
        </div>
      </div>

      {/* Application Summary */}
      <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
        <h3 className="mb-6 flex items-center gap-2 font-avenirBlack text-xl text-gray-800">
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary">
            <span className="text-sm font-bold text-white">7</span>
          </div>
          Application Summary
        </h3>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div>
            <span className="font-avenirRegular text-sm font-medium text-gray-700">Name:</span>
            <p className="font-latoRegular text-gray-600">{formData.name || "N/A"}</p>
          </div>
          <div>
            <span className="font-avenirRegular text-sm font-medium text-gray-700">Email:</span>
            <p className="font-latoRegular text-gray-600">{formData.email || "N/A"}</p>
          </div>
          <div>
            <span className="font-avenirRegular text-sm font-medium text-gray-700">Faculty:</span>
            <p className="font-latoRegular text-gray-600">{formData.faculty || "N/A"}</p>
          </div>
          <div>
            <span className="font-avenirRegular text-sm font-medium text-gray-700">Major:</span>
            <p className="font-latoRegular text-gray-600">{formData.major || "N/A"}</p>
          </div>
          <div>
            <span className="font-avenirRegular text-sm font-medium text-gray-700">
              First Choice Position:
            </span>
            <p className="font-latoRegular text-gray-600">{formData.firstChoice || "N/A"}</p>
          </div>
          {formData.secondChoice && (
            <div>
              <span className="font-avenirRegular text-sm font-medium text-gray-700">
                Second Choice Position:
              </span>
              <p className="font-latoRegular text-gray-600">{formData.secondChoice}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SubmitSlide;
