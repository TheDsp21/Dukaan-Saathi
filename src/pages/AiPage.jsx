import { Sparkles } from "lucide-react";
import { Card } from "./DashboardPage";

export default function AiPage() {
  return (
    <div className="space-y-6">
      <h1 className="font-display text-2xl font-bold text-shopfront flex items-center gap-2">
        <Sparkles className="h-6 w-6 text-marigold" /> Dukaan Saathi AI
      </h1>
      <Card title="Your AI Assistant">
        <div className="flex flex-col items-center justify-center py-12 text-center">
          <div className="w-16 h-16 bg-marigold/20 text-marigold rounded-full flex items-center justify-center mb-4 ring-8 ring-marigold/10">
            <Sparkles className="h-8 w-8" />
          </div>
          <h2 className="text-xl font-bold text-shopfront mb-2">I am always here to help</h2>
          <p className="text-ink/60 max-w-md mx-auto">
            Use the chat button in the bottom right corner of any page to ask me questions, add sales, or get insights about your business.
          </p>
        </div>
      </Card>
    </div>
  );
}
