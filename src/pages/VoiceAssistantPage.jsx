import { Mic } from "lucide-react";
import { Card } from "./DashboardPage";
import { useOutletContext } from "react-router-dom";

export default function VoiceAssistantPage() {
  const { t } = useOutletContext();
  
  return (
    <div className="space-y-6">
      <h1 className="font-display text-2xl font-bold text-shopfront flex items-center gap-2">
        <Mic className="h-6 w-6 text-terracotta" /> Voice Assistant
      </h1>
      <Card title="Speech-to-Text Analytics">
        <div className="flex flex-col items-center justify-center py-12 text-center">
          <div className="relative mb-6">
            <div className="absolute inset-0 rounded-full bg-terracotta/20 animate-ping"></div>
            <div className="w-20 h-20 bg-terracotta text-white rounded-full flex items-center justify-center relative shadow-lg">
              <Mic className="h-10 w-10" />
            </div>
          </div>
          <h2 className="text-xl font-bold text-shopfront mb-2">Speak your sales</h2>
          <p className="text-ink/60 max-w-md mx-auto">
            You can already log sales by speaking into the AI Chat on any page. In the future, this page will host a full screen "always-on" listening mode for busy hours.
          </p>
        </div>
      </Card>
    </div>
  );
}
