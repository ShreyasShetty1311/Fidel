import { Outlet } from "react-router-dom";
import { TopNav } from "./TopNav";
import { SideNav } from "./SideNav";
import { AICoach } from "../AICoach";

export function Shell() {
  return (
    <div className="w-screen h-screen bg-background text-text-main flex flex-col border-4 border-surface overflow-hidden">
      <TopNav />
      <div className="flex flex-1 pt-[72px]">
        <SideNav />
        <main className="flex-1 ml-16 p-4 md:p-6 overflow-hidden relative">
            <Outlet />
        </main>
      </div>
      <AICoach />
      {/* Cinematic Background Effects */}
      <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-primary/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-tertiary/5 rounded-full blur-[120px]"></div>
      </div>
    </div>
  );
}
