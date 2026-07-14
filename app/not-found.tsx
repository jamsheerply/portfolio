import Link from "next/link";

export default function NotFound() {
  return (
    <main className="relative z-[10] min-h-[70vh] flex flex-col items-center justify-center px-5 py-28 text-center">
      <p className="text-[#b49bff] text-sm sm:text-base tracking-[0.2em] uppercase mb-3">
        404
      </p>
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
        Page not found
      </h1>
      <p className="text-gray-400 text-sm sm:text-base max-w-md mb-8">
        This route doesn&apos;t exist. Head back home to continue.
      </p>
      <Link
        href="/"
        className="py-2 px-6 button-primary text-center text-white rounded-lg min-w-[160px]"
      >
        Go Home
      </Link>
    </main>
  );
}
