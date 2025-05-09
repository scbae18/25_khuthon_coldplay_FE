import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/main";

function App() {
  return (
    <div className="flex h-dvh w-full justify-center">
      <div className="relative flex w-full max-w-[600px] flex-col bg-background">
        <p className="w-6 h-6 bg-red-500 text-red">fadsfasd</p>
        <Routes>
          <Route path="/" element={<MainPage />} />
          {/* 나중에 LoginPage로 */}

          <Route path="/main" element={<MainPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
