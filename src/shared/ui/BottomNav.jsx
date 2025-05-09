import { Home, Users, DollarSign, User } from "lucide-react";

export default function BottomNav() {
  return (
    <nav className="fixed bottom-4 left-1/2 -translate-x-1/2 w-[90%] max-w-md bg-white rounded-xl shadow-md flex justify-around py-3 z-50">
      <button><Home className="w-6 h-6" /></button>
      <button><Users className="w-6 h-6" /></button>
      <button><DollarSign className="w-6 h-6" /></button>
      <button><User className="w-6 h-6" /></button>
    </nav>

  );
}
