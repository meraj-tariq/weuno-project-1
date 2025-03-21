import CommonLayoutPage from "@/components/CommonLayout";
import MainScreen from "@/components/MainScreen/MainScreen";

export default function Home() {
  return (
    <div>
      <main className="h-screen">
        <MainScreen />
        <CommonLayoutPage />
      </main>
    </div>
  );
}
