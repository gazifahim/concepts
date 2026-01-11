import { Search, ChevronDown, ArrowDown } from "lucide-react";

export default function JsConcept() {
  return (
    <div className="bg-white text-zinc-600 antialiased selection:bg-indigo-100 selection:text-indigo-900">

      {/* ================= Header ================= */}
      <div className="pt-12 pb-8 px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="mb-8 text-2xl font-semibold tracking-tighter text-zinc-900">
            JSQA Documentation
          </h1>

          {/* Search */}
          <div className="group relative mx-auto max-w-lg">
            <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-pink-500 opacity-30 blur" />

            <div className="relative flex items-center rounded-xl border bg-white px-4 py-3 shadow-sm">
              <Search size={20} className="text-zinc-400" />
              <input
                type="text"
                placeholder="Search questions..."
                autoFocus
                className="ml-3 w-full bg-transparent text-sm font-medium text-indigo-600 placeholder:text-zinc-400 focus:outline-none"
              />
              <div className="ml-3 border-l pl-3 text-[10px] text-zinc-400 font-mono">
                /
              </div>
            </div>
          </div>

          <div className="mt-5 flex justify-center gap-4 text-xs text-zinc-400">
            <span>Closures</span>
            <span>Event Loop</span>
            <span>Promises</span>
          </div>
        </div>
      </div>

      {/* ================= Content ================= */}
      <div className="mx-auto max-w-3xl px-4 pb-20 sm:px-6">
        <header className="mb-10 border-b pb-8">
          <span className="inline-block mb-4 rounded-full border bg-indigo-50 px-2 py-0.5 text-xs text-indigo-600">
            Interview Series
          </span>
          <h2 className="mb-4 text-3xl font-medium text-zinc-900">
            JavaScript Core Concepts
          </h2>
          <p className="text-lg text-zinc-500">
            Deep dive into the mechanics that power JavaScript.
          </p>
        </header>

        <div className="space-y-5">

          {/* ================= Q1 ================= */}
          <details className="group rounded-xl border bg-white shadow-sm">
            <summary className="flex cursor-pointer justify-between p-5">
              <h3 className="font-medium text-zinc-900">
                01. Difference between var, let, and const?
              </h3>
              <ChevronDown className="group-open:rotate-180 transition" size={16} />
            </summary>

            <div className="border-t bg-zinc-50 px-5 py-5 text-sm">
              <ul className="mb-4 list-disc pl-5 space-y-1">
                <li><strong>var</strong>: function scoped, hoisted</li>
                <li><strong>let</strong>: block scoped, TDZ</li>
                <li><strong>const</strong>: block scoped, no reassignment</li>
              </ul>

              <div className="overflow-x-auto rounded border bg-white p-4">
                <pre className="text-xs font-mono">
                  <code>{`function example() {
  if (true) {
    var a = "function scoped";
    let b = "block scoped";
  }

  console.log(a); // Works
  console.log(b); // ReferenceError
}`}</code>
                </pre>
              </div>
            </div>
          </details>

          {/* ================= Q2 ================= */}
          <details className="group rounded-xl border bg-white shadow-sm">
            <summary className="flex cursor-pointer justify-between p-5">
              <h3 className="font-medium text-zinc-900">
                02. What is a Closure?
              </h3>
              <ChevronDown className="group-open:rotate-180 transition" size={16} />
            </summary>

            <div className="border-t bg-zinc-50 px-5 py-5 text-sm">
              <p className="mb-4">
                A closure lets a function remember variables from its outer scope
                even after execution.
              </p>

              <div className="overflow-x-auto rounded border bg-white p-4">
                <pre className="text-xs font-mono">
                  <code>{`function makeCounter() {
  let count = 0;

  return function () {
    return ++count;
  };
}

const counter = makeCounter();
counter(); // 1
counter(); // 2`}</code>
                </pre>
              </div>
            </div>
          </details>

          {/* ================= Q3 ================= */}
          <details className="group rounded-xl border bg-white shadow-sm">
            <summary className="flex cursor-pointer justify-between p-5">
              <h3 className="font-medium text-zinc-900">
                03. How does the Event Loop work?
              </h3>
              <ChevronDown className="group-open:rotate-180 transition" size={16} />
            </summary>

            <div className="border-t bg-zinc-50 px-5 py-5 text-sm space-y-3">
              <p>
                JavaScript is single-threaded. The Event Loop coordinates async
                operations using queues.
              </p>

              <ul className="list-disc pl-5">
                <li>Call Stack</li>
                <li>Microtask Queue (Promises)</li>
                <li>Task Queue (setTimeout)</li>
              </ul>

              <p className="font-medium">
                Order: Stack → Microtasks → Render → Task
              </p>
            </div>
          </details>

          {/* ================= Q4 ================= */}
          <details className="group rounded-xl border bg-white shadow-sm">
            <summary className="flex cursor-pointer justify-between p-5">
              <h3 className="font-medium text-zinc-900">
                04. What is the this keyword?
              </h3>
              <ChevronDown className="group-open:rotate-180 transition" size={16} />
            </summary>

            <div className="border-t bg-zinc-50 px-5 py-5 text-sm">
              <ol className="list-decimal pl-5 space-y-1">
                <li>Implicit binding (object method)</li>
                <li>Explicit binding (call/apply/bind)</li>
                <li>Constructor binding (new)</li>
                <li>Arrow functions inherit this</li>
              </ol>
            </div>
          </details>
        </div>

        {/* Load More */}
        <div className="mt-12 flex justify-center">
          <button className="flex items-center gap-2 rounded-full border px-6 py-2 text-sm">
            Load more questions
            <ArrowDown size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
