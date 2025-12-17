import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-900">
      <div className="max-w-xl text-center px-6 py-24">
        <div className="text-amber-600 font-bold uppercase tracking-widest text-sm">404</div>
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-slate-100 mt-4">Page not found</h1>
        <p className="mt-4 text-slate-500">We couldnt find the page you were looking for. It may have been moved or removed.</p>

        <div className="mt-8 flex gap-4 justify-center">
          <Link href="/" className="bg-amber-600 text-white px-5 py-3 rounded-md font-semibold hover:bg-amber-700 transition">Home</Link>
          <Link href="/practice-areas" className="border border-slate-200 text-slate-500 px-5 py-3 rounded-md hover:bg-slate-100 transition">Practice Areas</Link>
        </div>
      </div>
    </main>
  );
}
