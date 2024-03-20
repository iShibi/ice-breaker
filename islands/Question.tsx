import { useState } from "preact/hooks";

export default function Question() {
  const [question, setQuestion] = useState("");

  const fetchQuestion = async () => {
    const res = await fetch("/api/questions");
    const data = await res.json() as { question: string };
    setQuestion(data.question);
  };

  return (
    <div class="grid grid-cols-1 gap-y-3 w-3/4 lg:w-2/4 bg-purple-400 mx-auto px-4 py-3 rounded-lg shadow-lg min-h-80">
      <div class="row-span-12 flex items-center bg-white border-2 border-dashed border-black shadow-md rounded-md justify-center">
        <p class="text-center text-xl px-4">{question}</p>
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
  );
}
