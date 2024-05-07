'use client'

import React, { useState } from "react";
import TitleTab from "./TitleTab";
import BodyTab from "./BodyTab";
import ConclusionTab from "./ConclusionTab";
import ResumeTab from "./ResumeTab";

const Tabs = () => {
    const [activeTab, setActiveTab] = useState("resume-tab")

    const handleTabResume = () => {setActiveTab("resume-tab");};
    const handleTabTitle = () => {setActiveTab("title-tab");};
    const handleTabBody = () => {setActiveTab("body-tab");};
    const handleTabConclusion = () => {setActiveTab("conclusion-tab");};
    return (
        <div className="flex flex-col h-full">
            <div role="tablist" className="tabs tabs-boxed">
                    <a role="tab" className={activeTab === "resume-tab" ? "tab tab-active" : "tab"} onClick={handleTabResume}>Resume</a>
                    <a role="tab" className={activeTab === "title-tab" ? "tab tab-active" : "tab"} onClick={handleTabTitle}>Introduction</a>
                    <a role="tab" className={activeTab === "body-tab" ? "tab tab-active" : "tab"} onClick={handleTabBody}>Body</a>
                    <a role="tab" className={activeTab === "conclusion-tab" ? "tab tab-active" : "tab"} onClick={handleTabConclusion}>Conclusion</a>
            </div>
            <div className= "flex-grow overflow-y-scroll">
                {activeTab === "resume-tab" ? <ResumeTab/> : ""}
                {activeTab === "title-tab" ? <TitleTab/> : ""}
                {activeTab === "body-tab" ? <BodyTab/> : ""}
                {activeTab === "conclusion-tab" ? <ConclusionTab/> : ""}
            </div>
        </div>
    )
}

//  Functions to handle Tab Switching



export default Tabs