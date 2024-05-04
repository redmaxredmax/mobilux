"use client";
import * as React from "react";
import { Progress } from "@/components/ui/progress";

const Loading = () => {
  const [progress, setProgress] = React.useState(13);
  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(99), 1000);
    return () => clearTimeout(500);
  }, []);
  return (
    <div className="absolute h-screen bg-bg w-full text-center items-center">
      <div className="w-[700px] mt-[200px] mx-auto">
        <h2 className="text-2xl font-semibold mb-3">Loading...</h2>
        <Progress value={progress} className="items-center w-[700px]" />
      </div>
    </div>
  );
};

export default Loading;
