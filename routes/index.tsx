import Question from "../islands/Question.tsx";

export default function Home() {
  return (
    <div class="bg-green-300 min-h-screen">
      <div class="justify-center bg-yellow-300 flex p-4 shadow-md">
        <h1 class="text-4xl text-center font-bold w-fit border border-black px-2 rounded-md border-dotted py-1">
          Ice Breaker
        </h1>
      </div>
      <div class="flex items-center mt-20">
        <Question />
      </div>
    </div>
  );
}
