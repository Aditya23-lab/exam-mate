// src/components/FeedbackWidget.jsx
import { useState } from "react";
import { Dialog } from "@radix-ui/react-dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function FeedbackWidget() {
  const [open, setOpen] = useState(false);
  const [feedback, setFeedback] = useState("");

  const handleSubmit = () => {
    if (feedback.trim() !== "") {
      console.log("Feedback submitted:", feedback); // Replace with actual API call
      setFeedback("");
      setOpen(false);
    }
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      <Button onClick={() => setOpen(true)} className="bg-blue-600 hover:bg-blue-700">
        💬 Feedback
      </Button>

      <Dialog open={open} onOpenChange={setOpen}>
        <div className="fixed inset-0 bg-black/40 z-40" onClick={() => setOpen(false)} />
        <div className="fixed bottom-24 right-5 w-80 bg-white rounded-xl shadow-lg p-4 z-50">
          <h2 className="text-lg font-bold mb-2">Your Feedback</h2>
          <Textarea
            placeholder="Write your feedback here..."
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            className="mb-3"
          />
          <div className="flex justify-end gap-2">
            <Button variant="ghost" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleSubmit} className="bg-green-600 hover:bg-green-700">
              Submit
            </Button>
          </div>
        </div>
      </Dialog>
    </div>
  );
}
