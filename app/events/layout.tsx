import React from "react";

export default function EventLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
        <p className="text-teal-400">HI EventLayout</p>
      {children}
    </div>
  );
}
