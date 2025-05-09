import { ArrowLeft } from "lucide-react";

export default function TopHeader({ title = "제목" }) {
  return (
    <div className="flex items-center justify-between px-4 py-3 bg-white shadow">
      <button>
        <ArrowLeft className="w-5 h-5" />
      </button>
      <h1 className="text-base font-semibold">{title}</h1>
      <div className="w-5 h-5" /> {/* 오른쪽 여백 맞추기용 */}
    </div>
  );
}
