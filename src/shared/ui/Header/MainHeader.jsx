import { Menu } from "lucide-react";

export default function MainHeader() {
  return (
    <div className="flex items-center justify-between px-4 py-3 bg-white shadow">
      <div className="text-base font-bold"> {/* 나중에 이미지로 교체할 자리 - <img src="/logo.svg" alt="logo" className="h-6" /> */}
        로고
      </div>
      <button>
        <Menu className="w-5 h-5" />
      </button>
    </div>
  );
}
