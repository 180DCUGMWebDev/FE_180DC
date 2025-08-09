import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ChevronRight } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";

const Slide1 = ({ formData, updateFormData, onNext }) => {
  const [name, setName] = useState(formData.name || "");
  const [email, setEmail] = useState(formData.email || "");
  const [batch, setBatch] = useState(formData.batch || "");
  const [phone, setPhone] = useState(formData.phone || "");
  const [faculty, setFaculty] = useState(formData.faculty || "");
  const [major, setMajor] = useState(formData.major || "");
  const [gpa, setgpa] = useState(formData.gpa || "");
  const [activeStudent, setActiveStudent] = useState(formData.activeStudent || false);

  const handleNext = () => {
    // Check if user is not an active student
    if (!activeStudent) {
      updateFormData({
        name,
        email,
        batch,
        phone,
        faculty,
        major,
        gpa,
        activeStudent: false,
      });
      return;
    }

    // If active student, proceed normally to Slide 2
    updateFormData({
      name,
      email,
      batch,
      phone,
      faculty,
      major,
      gpa,
      activeStudent,
    });
    onNext();
  };

  const isValid =
    name.trim() &&
    email.trim() &&
    email.includes("@") &&
    batch.trim() &&
    phone.trim() &&
    faculty.trim() &&
    major.trim() &&
    gpa.trim() &&
    parseFloat(gpa) >= 0 &&
    parseFloat(gpa) <= 100 &&
    activeStudent;

  return (
    <div className="animate-fade-in space-y-6">
      <div className="text-center">
        <h2 className="mb-1 mt-2 font-avenirBlack text-2xl leading-snug text-primary lg:text-3xl">
          180DC UGM - Functional Analyst Recruitment Form 2025/2026
        </h2>
        <p className="font-latoRegular text-gray-600">
          Start your journey by get knowing more about 180DC UGM
        </p>
      </div>

      {/* Prerequisites */}
      <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
        <h3 className="mb-6 flex items-center gap-2 font-avenirBlack text-xl text-gray-800">
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary">
            <span className="text-sm font-bold text-white">1</span>
          </div>
          About 180DC UGM
        </h3>

        <div className="mb-4">
          <h2 className="font-avenirRegular font-bold">Our Mission and Vision</h2>
          <p className="font-latoRegular text-gray-600">
            180 Degrees Consulting is the world’s largest volunteer-led consultancy for non-profits
            and social enterprises. With over 150 branches across 35+ countries and over 10.000
            consultants.
            <br />
            <br />
            ⭐️ We are committed to give back to society and deliver excellent standards in
            everything we do, as illustrated by our university motto to be “Locally Rooted, Globally
            Respected”.
            <br />
            <br />
            ⭐️ We are here to help Non-Profit Organizations, Non-Governmental Organizations, and
            SMEs by providing pro-bono consulting services from a qualified and trained student. We
            do what we do because we believe in effective charity, and because we believe in
            developing the next generation of social impact leaders.
            <br />
            <br />
            ⭐️ We highly value our #CloSER value that consist of Collaborative, Socially Driven,
            Excellent and Responsible within our respective members
            <br />
            <br />
            We are very thrilled to welcome you in this process, and hope you find meaningful
            lessons throughout the journey 🏆 We wish you the best of luck!
          </p>
        </div>

        <div className="mb-4">
          <h2 className="font-avenirRegular font-bold">Recruitment Booklet</h2>
          <p className="font-latoRegular text-gray-600">
            We advise you to read through the booklet first before filling out the form!
          </p>
          <Link href="https://drive.google.com/file/d/1l5cZZiw5AKvcu7T3MVmk5JLt_5PPkS0X/view?usp=sharing">
            <p className="font-latoBold underline">Read Booklet</p>
          </Link>
        </div>
      </div>

      {/* Personal Information Form */}
      <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
        <h3 className="mb-6 flex items-center gap-2 font-avenirBlack text-xl text-gray-800">
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary">
            <span className="text-sm font-bold text-white">2</span>
          </div>
          Personal Information
        </h3>

        <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="md:col-span-2">
            <Label
              htmlFor="name"
              className="mb-2 block font-avenirRegular text-sm font-medium text-gray-700"
            >
              Full Name *
            </Label>
            <Input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your full name as registered in UGM"
              className="border-gray-300 font-latoRegular transition-all duration-200 focus:ring-2 focus:ring-primary/50"
            />
          </div>

          <div>
            <Label
              htmlFor="email"
              className="mb-2 block font-avenirRegular text-sm font-medium text-gray-700"
            >
              Email Address *
            </Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your.email@ugm.ac.id"
              className="border-gray-300 font-latoRegular transition-all duration-200 focus:ring-2 focus:ring-primary/50"
            />
          </div>

          <div>
            <Label
              htmlFor="batch"
              className="mb-2 block font-avenirRegular text-sm font-medium text-gray-700"
            >
              Batch *
            </Label>
            <Select
              value={batch}
              onValueChange={(value) => {
                setBatch(value);
                updateFormData({ batch: value });
              }}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Batch" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="2022">2022</SelectItem>
                <SelectItem value="2023">2023</SelectItem>
                <SelectItem value="2024">2024</SelectItem>
                <SelectItem value="2025">2025</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label
              htmlFor="phone"
              className="mb-2 block font-avenirRegular text-sm font-medium text-gray-700"
            >
              Phone Number *
            </Label>
            <Input
              id="phone"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="62 8xx-xxxx-xxxx"
              className="border-gray-300 font-latoRegular transition-all duration-200 focus:ring-2 focus:ring-primary/50"
            />
          </div>

          <div>
            <Label
              htmlFor="faculty"
              className="mb-2 block font-avenirRegular text-sm font-medium text-gray-700"
            >
              Faculty *
            </Label>
            <Input
              id="faculty"
              type="text"
              value={faculty}
              onChange={(e) => setFaculty(e.target.value)}
              placeholder="e.g., Faculty of Economics and Business"
              className="border-gray-300 font-latoRegular transition-all duration-200 focus:ring-2 focus:ring-primary/50"
            />
          </div>

          <div>
            <Label
              htmlFor="major"
              className="mb-2 block font-avenirRegular text-sm font-medium text-gray-700"
            >
              Major/Study Program *
            </Label>
            <Input
              id="major"
              type="text"
              value={major}
              onChange={(e) => setMajor(e.target.value)}
              placeholder="e.g., Management"
              className="border-gray-300 font-latoRegular transition-all duration-200 focus:ring-2 focus:ring-primary/50"
            />
          </div>
          <div>
            <Label
              htmlFor="gpa"
              className="mb-2 block font-avenirRegular text-sm font-medium text-gray-700"
            >
              Current GPA (If you are in semester 1 and currently do not have a GPA, enter your final score in high school) *
            </Label>
            <Input
              id="gpa"
              type="text"
              value={gpa}
              onChange={(e) => setgpa(e.target.value)}
              placeholder="e.g., 3.75 or 90"
              className="border-gray-300 font-latoRegular transition-all duration-200 focus:ring-2 focus:ring-primary/50"
            />
          </div>
        </div>
        <div className="mb-4 flex flex-col gap-2">
          <h2 className="font-avenirRegular font-bold">Are you an active UGM student?</h2>
          <div className="flex flex-row items-center gap-2">
            <Checkbox
              id="activeStudent"
              checked={activeStudent}
              onCheckedChange={(checked) => setActiveStudent(checked)}
              className="text-white"
            />
            <Label>
              <p className="font-latoRegular text-gray-600">
                By checking this box, I hereby declare that I am an active UGM student
              </p>
            </Label>
          </div>
        </div>
      </div>
      <div className="flex justify-end pt-4">
        <Button
          onClick={handleNext}
          disabled={!isValid}
          className="flex items-center gap-2 bg-primary font-avenirRegular text-white transition-all duration-200 hover:scale-105 hover:bg-primary/90 disabled:text-black disabled:opacity-50 disabled:hover:scale-100"
        >
          Continue to Next Step
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default Slide1;
