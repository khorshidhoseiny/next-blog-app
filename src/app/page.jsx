import Button from "@/ui/Button";
import Link from "next/link";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen px-4 bg-white">
      <h1 className="text-2xl md:text-4xl font-semibold text-gray-800 mb-6">
        اپلیکیشن مدیریت بلاگ
      </h1>
      <p className="text-center text-gray-600 max-w-xl mb-8 leading-relaxed">
        جایی که می‌تونی یک اپلیکیشن بلاگ کامل رو مدیریت کنی! بلاگ بسازی، کامنت
        بذاری و همه‌چیز رو از پنلت رصد کنی.
      </p>

      <div className="flex gap-4">
        <Link href="/blogs">
          <Button variant="outline">مطالعه بلاگ‌ها</Button>
        </Link>
        <Link href="/profile">
          <Button variant="primary">مدیریت بلاگ‌ها</Button>
        </Link>
      </div>
    </section>
  );
}
