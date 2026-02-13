"use client";

import { useState, useEffect } from "react";
import { X, Download, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

export function InstallPrompt() {
    const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
    const [showPrompt, setShowPrompt] = useState(false);
    const [isIOS, setIsIOS] = useState(false);

    useEffect(() => {
        // Check if it's iOS
        const isIosDevice =
            /iPad|iPhone|iPod/.test(navigator.userAgent) && !(window as any).MSStream;
        setIsIOS(isIosDevice);

        // Check if already installed
        const isStandalone =
            window.matchMedia("(display-mode: standalone)").matches ||
            (window.navigator as any).standalone === true;

        if (isStandalone) {
            return;
        }

        const handler = (e: any) => {
            e.preventDefault();
            setDeferredPrompt(e);
            // Show prompt after a delay to not be intrusive
            setTimeout(() => setShowPrompt(true), 3000);
        };

        window.addEventListener("beforeinstallprompt", handler);

        // For iOS, show prompt if likely not installed (simple check)
        if (isIosDevice && !isStandalone) {
            setTimeout(() => setShowPrompt(true), 5000);
        }

        return () => window.removeEventListener("beforeinstallprompt", handler);
    }, []);

    const handleInstallClick = async () => {
        if (!deferredPrompt) return;

        deferredPrompt.prompt();
        const { outcome } = await deferredPrompt.userChoice;

        if (outcome === "accepted") {
            setDeferredPrompt(null);
            setShowPrompt(false);
        }
    };

    const handleDismiss = () => {
        setShowPrompt(false);
    };

    return (
        <AnimatePresence>
            {showPrompt && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    className="fixed bottom-4 left-4 right-4 z-50 md:left-auto md:right-4 md:w-96"
                >
                    <div className="bg-background/80 backdrop-blur-md border border-primary/20 p-4 rounded-xl shadow-2xl relative overflow-hidden group">

                        {/* Matrix/Scanline Effect Overlay */}
                        <div className="absolute inset-0 pointer-events-none opacity-10 bg-[linear-gradient(transparent_0%,rgba(34,197,94,0.1)_50%,transparent_50%)] bg-[length:100%_4px]" />

                        <button
                            onClick={handleDismiss}
                            className="absolute top-2 right-2 p-1 text-muted-foreground hover:text-foreground transition-colors"
                        >
                            <X className="w-4 h-4" />
                        </button>

                        <div className="flex items-start gap-4 pr-6">
                            <div className="bg-primary/10 p-3 rounded-lg flex-shrink-0">
                                <Download className="w-6 h-6 text-primary animate-bounce" />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg leading-tight mb-1">
                                    Install App
                                </h3>
                                <p className="text-sm text-muted-foreground mb-3">
                                    {isIOS
                                        ? "Install for the best experience. Tap 'Share' then 'Add to Home Screen'."
                                        : "Add to your home screen for offline access and a native-like experience."}
                                </p>

                                {isIOS ? (
                                    <div className="flex items-center gap-2 text-xs font-mono text-primary/80 bg-primary/5 p-2 rounded">
                                        <span>1. Tap <Share2 className="w-3 h-3 inline" /></span>
                                        <span>2. Add to Home Screen</span>
                                    </div>
                                ) : (
                                    <Button
                                        onClick={handleInstallClick}
                                        className="w-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20 transition-all font-semibold"
                                    >
                                        Install Now
                                    </Button>
                                )}
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
