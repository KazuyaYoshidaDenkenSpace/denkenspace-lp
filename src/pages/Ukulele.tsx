import { useEffect } from "react";

const REDIRECT_URL =
  import.meta.env.VITE_UKULELE_URL ||
  (import.meta.env.DEV
    ? "http://localhost:5174"
    : "https://ukulele.denkenspace.com");

export default function Ukulele() {
  useEffect(() => {
    window.location.replace(REDIRECT_URL);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white via-sky-50 to-emerald-50/60 text-slate-700">
      <div className="text-center px-6">
        <div className="mx-auto mb-6 h-10 w-10 rounded-full border-2 border-sky-300 border-t-transparent animate-spin" />
        <p className="text-base font-semibold mb-2">
          ウクレレ教室サイトへ移動中…
        </p>
        <p className="text-sm text-slate-500">
          自動で遷移しない場合は{" "}
          <a
            href={REDIRECT_URL}
            className="text-sky-600 font-bold underline hover:text-sky-700"
          >
            こちら
          </a>{" "}
          をクリックしてください。
        </p>
      </div>
    </div>
  );
}
