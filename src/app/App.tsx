import React from "react";
import { LanguageProvider } from "./context/LanguageContext";
import { ChatProvider } from "./context/ChatContext";
import { SocialMediaProvider } from "./context/SocialMediaContext";
import { ChatWidget } from "./components/ChatWidget";
import { MainContent } from "./MainContent";
import { Toaster } from "sonner";

export default function App() {
  return (
    <LanguageProvider>
      <ChatProvider>
        <SocialMediaProvider>
          <MainContent />
          <ChatWidget />
          <Toaster position="top-right" richColors closeButton />
        </SocialMediaProvider>
      </ChatProvider>
    </LanguageProvider>
  );
}
