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
          {/* Contact HR Team */}
          <div className="mb-4">
            <h2 className="font-avenirRegular font-bold">Confirm with HR Team</h2>
            <p className="mb-3 font-latoRegular text-gray-600">
              Please kindly confirm with our HR Team regarding your submission.
            </p>
            <p className="font-latoBold underline">Faz: +62 813-8001-0227</p>
            <p className="font-latoBold underline">Doni: +62 822-1100-0333</p>
          </div>

          {/* Join Recruitment Group */}
          <div className="mb-4">
            <h2 className="font-avenirRegular font-bold">Join Recruitment Group</h2>
            <p className="mb-3 font-latoRegular text-gray-600">
              And kindly join our Recruitment Group here
            </p>
            <Link
              href="https://bit.ly/ConsultingRecruitment-Cycle1"
              target="_blank"
              className="inline-flex items-center gap-2 rounded-md bg-secondary px-4 py-2 font-avenirRegular text-sm text-white transition-all duration-200 hover:bg-secondary/80"
            >
              <ExternalLink className="h-4 w-4" />
              bit.ly/ConsultingRecruitment-Cycle1
            </Link>
          </div>

          {/* Join Community Group */}
          <div className="mb-4">
            <h2 className="font-avenirRegular font-bold">Join 180DC Community Group</h2>
            <p className="mb-3 font-latoRegular text-gray-600">
              And 180DC&quot;s Community Group here
            </p>
            <Link
              href="https://bit.ly/180DCUGMCOMMUNITY1"
              target="_blank"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 font-avenirRegular text-sm text-white transition-all duration-200 hover:bg-primary/80"
            >
              <ExternalLink className="h-4 w-4" />
              bit.ly/180DCUGMCOMMUNITY1
            </Link>
          </div>

          {/* Email Results */}
          <div className="mb-4">
            <h2 className="font-avenirRegular font-bold">Result Announcement</h2>
            <p className="mb-3 font-latoRegular text-gray-600">
              Please monitor your email regularly, as we will further announce our decision via
              email. We wish you the best of luck!
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
            <span className="font-avenirRegular text-sm font-medium text-gray-700">Batch:</span>
            <p className="font-latoRegular text-gray-600">{formData.batch || "N/A"}</p>
          </div>
          <div>
            <span className="font-avenirRegular text-sm font-medium text-gray-700">Phone:</span>
            <p className="font-latoRegular text-gray-600">{formData.phone || "N/A"}</p>
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
            <span className="font-avenirRegular text-sm font-medium text-gray-700">GPA:</span>
            <p className="font-latoRegular text-gray-600">{formData.gpa || "N/A"}</p>
          </div>
          <div>
            <span className="font-avenirRegular text-sm font-medium text-gray-700">
              Active Student:
            </span>
            <p className="font-latoRegular text-gray-600">
              {formData.activeStudent ? "Yes" : "No"}
            </p>
          </div>
          <div>
            <span className="font-avenirRegular text-sm font-medium text-gray-700">
              First Choice Position:
            </span>
            <p className="font-latoRegular text-gray-600">
              {formData.firstChoicePosition || "N/A"}
            </p>
          </div>
          {formData.secondChoicePosition && formData.secondChoicePosition !== "unassigned" && (
            <div>
              <span className="font-avenirRegular text-sm font-medium text-gray-700">
                Second Choice Position:
              </span>
              <p className="font-latoRegular text-gray-600">{formData.secondChoicePosition}</p>
            </div>
          )}
          <div>
            <span className="font-avenirRegular text-sm font-medium text-gray-700">
              Alumni Status:
            </span>
            <p className="font-latoRegular text-gray-600">
              {formData.is180DCAlumni ? "Yes, 180DC UGM Alumni" : "Not an Alumni"}
            </p>
          </div>
          {formData.is180DCAlumni && (
            <>
              <div>
                <span className="font-avenirRegular text-sm font-medium text-gray-700">
                  Past Position:
                </span>
                <p className="font-latoRegular text-gray-600">{formData.pastPosition || "N/A"}</p>
              </div>
              <div>
                <span className="font-avenirRegular text-sm font-medium text-gray-700">
                  Past Batch:
                </span>
                <p className="font-latoRegular text-gray-600">{formData.pastBatch || "N/A"}</p>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Documents Section */}
      <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
        <h3 className="mb-6 flex items-center gap-2 font-avenirBlack text-xl text-gray-800">
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary">
            <span className="text-sm font-bold text-white">8</span>
          </div>
          Submitted Documents
        </h3>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="md:col-span-2">
            <span className="font-avenirRegular text-sm font-medium text-gray-700">
              Motivation Document:
            </span>
            <p className="font-latoRegular text-gray-600">
              {formData.documentLink ? (
                <Link
                  href={formData.documentLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  View Document
                </Link>
              ) : (
                "Not provided"
              )}
            </p>
          </div>
          <div className="md:col-span-2">
            <span className="font-avenirRegular text-sm font-medium text-gray-700">
              CV (McKinsey Format):
            </span>
            <p className="font-latoRegular text-gray-600">
              {formData.cvLink ? (
                <Link
                  href={formData.cvLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  View CV
                </Link>
              ) : (
                "Not provided"
              )}
            </p>
          </div>
          <div className="md:col-span-2">
            <span className="font-avenirRegular text-sm font-medium text-gray-700">
              Twibbon Post:
            </span>
            <p className="font-latoRegular text-gray-600">
              {formData.twibbonPost ? (
                <Link
                  href={formData.twibbonPost}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  View Post
                </Link>
              ) : (
                "Not provided"
              )}
            </p>
          </div>
          <div className="md:col-span-2">
            <span className="font-avenirRegular text-sm font-medium text-gray-700">
              Instagram Proof:
            </span>
            <p className="font-latoRegular text-gray-600">
              {formData.instagramProofLink ? (
                <Link
                  href={formData.instagramProofLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  View Proof
                </Link>
              ) : (
                "Not provided"
              )}
            </p>
          </div>
          <div className="md:col-span-2">
            <span className="font-avenirRegular text-sm font-medium text-gray-700">
              Consulting Day Registration Proof:
            </span>
            <p className="font-latoRegular text-gray-600">
              {formData.registrationProofLink ? (
                <Link
                  href={formData.registrationProofLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  View Registration Proof
                </Link>
              ) : (
                "Not provided"
              )}
            </p>
          </div>
        </div>
      </div>

      {/* Additional Information */}
      <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
        <h3 className="mb-6 flex items-center gap-2 font-avenirBlack text-xl text-gray-800">
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary">
            <span className="text-sm font-bold text-white">9</span>
          </div>
          Additional Information
        </h3>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="md:col-span-2">
            <span className="font-avenirRegular text-sm font-medium text-gray-700">
              How did you hear about us:
            </span>
            <p className="font-latoRegular text-gray-600">
              {formData.hearAboutUs && formData.hearAboutUs.length > 0
                ? formData.hearAboutUs.join(", ")
                : "Not specified"}
            </p>
          </div>
          <div>
            <span className="font-avenirRegular text-sm font-medium text-gray-700">
              Consent Agreement:
            </span>
            <p className="font-latoRegular text-gray-600">
              {formData.consentAgreed ? "Agreed" : "Not agreed"}
            </p>
          </div>
          <div>
            <span className="font-avenirRegular text-sm font-medium text-gray-700">
              Consulting Day Consent:
            </span>
            <p className="font-latoRegular text-gray-600">
              {formData.consentAgreed ? "Agreed" : "Not agreed"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubmitSlide;
