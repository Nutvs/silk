import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f5dfc6] sm:p-6">
      <div className="w-full max-w-[1440px] overflow-hidden shadow-[0_20px_70px_rgba(14,61,57,0.12)]">
        <Image
          src="/directory-map.png"
          alt="แผนที่ไดเรกทอรี Silk Festival 2026 แสดงโซนอาหาร นิทรรศการ แฟชั่นรันเวย์ และเวที"
          width={1248}
          height={780}
          priority
          sizes="(max-width: 1440px) 100vw, 1440px"
          className="block h-auto w-full"
        />
      </div>
    </main>
  );
}
