"use client";

import { TabsProps } from "@/app/page";
import { useState } from "react";

const Tabs = ({ tabs }: { tabs: TabsProps[] }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="w-full">
      <div className="flex border-b border-zinc-200 items-center justify-center">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`py-2 px-4 border-b-2 outline-none transition-all ${
              activeTab === index
                ? "border-orange-500 text-orange-500 font-semibold"
                : "border-transparent text-gray-500 hover:text-gray-700"
            }`}
            onClick={() => setActiveTab(index)}
          >
            <p className="text-sm">{tab.label}</p>
          </button>
        ))}
      </div>
      <div>{tabs[activeTab] && tabs[activeTab].content}</div>
    </div>
  );
};

export default Tabs;
