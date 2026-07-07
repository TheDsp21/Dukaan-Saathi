import { Scan, Camera } from "lucide-react";
import { Card } from "./DashboardPage";

export default function ScannerPage() {
  return (
    <div className="space-y-6">
      <h1 className="font-display text-2xl font-bold text-shopfront flex items-center gap-2">
        <Scan className="h-6 w-6 text-leaf" /> Notebook Scanner
      </h1>
      <Card title="Khata OCR (Optical Character Recognition)">
        <div className="flex flex-col items-center justify-center py-12 text-center">
          <div className="w-16 h-16 bg-leaf/20 text-leaf rounded-xl flex items-center justify-center mb-4 ring-8 ring-leaf/10 rotate-12 transition-transform hover:rotate-0">
            <Camera className="h-8 w-8" />
          </div>
          <h2 className="text-xl font-bold text-shopfront mb-2">Scan Physical Notebooks</h2>
          <p className="text-ink/60 max-w-md mx-auto">
            Our AI vision model is being trained to automatically read hand-written Udhaar entries from your notebook. Point your camera, and it will digitize everything instantly.
          </p>
        </div>
      </Card>
    </div>
  );
}
