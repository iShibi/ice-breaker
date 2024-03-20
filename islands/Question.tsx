import { useState } from "preact/hooks";

export default function Question() {
  const [question, setQuestion] = useState("");
  const [showCopied, setShowCopied] = useState(false);

  const fetchQuestion = async () => {
    const res = await fetch("/api/questions");
    const data = await res.json() as { question: string };
    setQuestion(data.question);
  };

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(question);
    setShowCopied(true);
    setTimeout(() => {
      setShowCopied(false);
    }, 1000);
  };

  return (
    <>
      <div class="grid grid-cols-1 gap-y-3 w-3/4 lg:w-2/4 bg-purple-400 mx-auto px-4 py-3 rounded-lg shadow-lg min-h-80">
        <div class="row-span-12 relative flex items-center bg-white border-2 border-dashed border-black shadow-md rounded-md justify-center">
          <p class="text-center text-xl px-4">{question}</p>
          <button
            onClick={copyToClipboard}
            class="absolute border border-black/50 shadow-md rounded-md px-2 py-[1.5px] top-2 right-2 active:translate-y-0.5 hover:cursor-pointer select-none"
          >
            Copy
          </button>
        </div>
        <div class="flex items-center justify-center">
          <button
            type="submit"
            onClick={fetchQuestion}
            class="bg-white w-fit px-4 py-1 text-lg shadow-md rounded-md text-black active:translate-y-0.5"
          >
            Roll
          </button>
        </div>
      </div>
      <span
        class={`bg-yellow-300 text-lg border border-dotted border-black ${
          showCopied ? "" : "hidden"
        } rounded-lg shadow-lg px-4 py-1 delay-500 duration-700 ease-in-out w-fit mx-auto left-0 right-0 absolute bottom-32`}
      >
        Copied
      </span>
    </>
  );
}
