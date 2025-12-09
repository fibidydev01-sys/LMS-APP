// src/components/lessons/Explanation.tsx

import { Lightbulb } from "lucide-react";
import type { ExplanationItem } from "@/src/types";

interface ExplanationProps {
  items: ExplanationItem[];
}

export default function Explanation({ items }: ExplanationProps) {
  if (!items || items.length === 0) {
    return null;
  }

  return (
    <div className="rounded-lg border border-purple-200 bg-purple-50 p-4">
      <div className="mb-3 flex items-center gap-2 font-semibold text-purple-800">
        <Lightbulb className="h-5 w-5" />
        <span>Penjelasan Code</span>
      </div>

      <dl className="space-y-3">
        {items.map((item) => (
          <div key={item._key}>
            <dt className="inline-block rounded bg-purple-100 px-2 py-1 font-mono text-sm text-purple-900">
              {item.term}
            </dt>
            <dd className="ml-2 mt-1 text-sm text-purple-800">
              {item.definition}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}