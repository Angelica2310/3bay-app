// Temporary - dynamic model display
// build into store page

import { ThemeProvider } from "@/components/ThemeContext";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import UserInfo from "@/components/ThemeUserInfo";

function App() {
  return (
    <ThemeProvider>
      <div className="flex w-full h-screen place-items-center place-content-center mt-20">
        <div className="flex flex-col gap-4 max-w-lg">
          <ThemeSwitcher />
          <UserInfo />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
