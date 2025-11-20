export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div className="flex items-center gap-3">
          <div className="text-4xl">⚡</div>
          <h1 className="text-2xl font-bold text-black dark:text-zinc-50">Turbo Starter</h1>
        </div>
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h2 className="max-w-md text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            Modern full-stack monorepo with NestJS & Next.js
          </h2>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Blazing-fast development with NestJS + Vite for the API and Next.js for the frontend. Includes Prisma ORM,
            PostgreSQL, and JIT compilation for shared packages.
          </p>
          <div className="flex flex-col gap-3 text-sm text-zinc-600 dark:text-zinc-400">
            <div className="flex items-center gap-2">
              <span className="font-semibold">API:</span>
              <a href="http://localhost:3000" className="text-zinc-950 dark:text-zinc-50 hover:underline">
                http://localhost:3000
              </a>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-semibold">Web:</span>
              <a href="http://localhost:8000" className="text-zinc-950 dark:text-zinc-50 hover:underline">
                http://localhost:8000
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <a
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-auto"
            href="https://github.com/mrgmnn/turbo-starter"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg className="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 24 24">
              <path
                fillRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                clipRule="evenodd"
              />
            </svg>
            <span className="whitespace-nowrap">View on GitHub</span>
          </a>
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/8 px-5 transition-colors hover:border-transparent hover:bg-black/4 dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[180px]"
            href="https://github.com/mrgmnn/turbo-starter#readme"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
          </a>
        </div>
      </main>
    </div>
  );
}
