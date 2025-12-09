// src/components/lessons/CodeBlock.tsx

"use client";

import { useState } from "react";
import { Copy, Check, FileCode } from "lucide-react";
import { Button } from "@/src/components/ui/button";
import { cn } from "@/src/lib/utils";

interface CodeBlockProps {
  code: string;
  fileName?: string;
  language?: string;
  showLineNumbers?: boolean;
  className?: string;
}

export default function CodeBlock({
  code,
  fileName,
  language = "javascript",
  showLineNumbers = false,
  className,
}: CodeBlockProps) {
  const [copied, setCopied] = useState<boolean>(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const lines = code.split("\n");

  return (
    <div
      className={cn(
        "overflow-hidden rounded-lg border bg-gray-950",
        className
      )}
    >
      {/* Header */}
      <div className="flex items-center justify-between border-b border-gray-800 bg-gray-900 px-4 py-2">
        <div className="flex items-center gap-2 text-sm text-gray-400">
          <FileCode className="h-4 w-4" />
          <span>{fileName || language}</span>
        </div>

        <Button
          variant="ghost"
          size="sm"
          onClick={handleCopy}
          className="h-8 px-2 text-gray-400 hover:bg-gray-800 hover:text-white"
        >
          {copied ? (
            <>
              <Check className="mr-1 h-4 w-4 text-green-500" />
              <span className="text-green-500">Copied!</span>
            </>
          ) : (
            <>
              <Copy className="mr-1 h-4 w-4" />
              <span>Copy</span>
            </>
          )}
        </Button>
      </div>

      {/* Code Content */}
      <div className="overflow-x-auto">
        {showLineNumbers ? (
          <table className="w-full">
            <tbody>
              {lines.map((line, index) => (
                <tr key={index} className="hover:bg-gray-900/50">
                  <td className="w-12 select-none border-r border-gray-800 px-4 py-0.5 text-right text-sm text-gray-500">
                    {index + 1}
                  </td>
                  <td className="px-4 py-0.5">
                    <pre className="font-mono text-sm text-gray-100">
                      <code>{line || " "}</code>
                    </pre>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <pre className="p-4 font-mono text-sm text-gray-100">
            <code>{code}</code>
          </pre>
        )}
      </div>
    </div>
  );
}