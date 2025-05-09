import { Menu } from "lucide-react";

export default function MainHeader() {
  return (
    <div className="pt-[env(safe-area-inset-top)] flex items-center justify-between px-4 py-3 bg-white shadow">
      <div className="text-base font-semibold">
        {/* <img src="/logo.svg" alt="logo" className="h-6" /> */}
        로고
      </div>
      <button className="w-11 h-11 flex items-center justify-center">
        <Menu className="w-5 h-5" />
      </button>
    </div>
  );
}
