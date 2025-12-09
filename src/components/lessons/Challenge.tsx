// src/components/lessons/Challenge.tsx

import { Target, Sparkles } from "lucide-react";

interface ChallengeProps {
  content: string;
}

export default function Challenge({ content }: ChallengeProps) {
  return (
    <div className="relative overflow-hidden rounded-lg border border-orange-200 bg-orange-50 p-4">
      <Sparkles className="absolute right-2 top-2 h-5 w-5 text-orange-300" />

      <div className="mb-3 flex items-center gap-2 font-semibold text-orange-800">
        <Target className="h-5 w-5" />
        <span>Tantangan!</span>
      </div>

      <div className="whitespace-pre-line text-sm text-orange-800">
        {content}
      </div>

      <p className="mt-4 text-sm font-medium text-orange-600">
        💪 Coba sendiri dan lihat hasilnya!
      </p>
    </div>
  );
}