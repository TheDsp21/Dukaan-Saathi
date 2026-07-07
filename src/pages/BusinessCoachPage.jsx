import { Target } from "lucide-react";
import { Card } from "./DashboardPage";

export default function BusinessCoachPage() {
  return (
    <div className="space-y-6">
      <h1 className="font-display text-2xl font-bold text-shopfront flex items-center gap-2">
        <Target className="h-6 w-6 text-marigold" /> Business Coach
      </h1>
      <Card title="Business Growth Analytics">
        <div className="flex flex-col items-center justify-center py-12 text-center">
          <div className="w-16 h-16 bg-leaf/20 text-leaf rounded-full flex items-center justify-center mb-4 ring-8 ring-leaf/10">
            <Target className="h-8 w-8" />
          </div>
          <h2 className="text-xl font-bold text-shopfront mb-2">Personalized Coaching</h2>
          <p className="text-ink/60 max-w-md mx-auto">
            Our AI will soon automatically generate a weekly coaching report to help you reduce dead stock, increase footfall, and boost profits. Stay tuned!
          </p>
        </div>
      </Card>
    </div>
  );
}
