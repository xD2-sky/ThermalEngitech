import { Phone, MessageCircle } from "lucide-react";
import { SITE } from "./data";

export default function FloatingActions() {
    return (
        <div data-testid="floating-action-buttons" className="fixed bottom-5 right-5 z-50 flex flex-col gap-3">
            <a
                href={SITE.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="floating-whatsapp-button"
                aria-label="Chat on WhatsApp"
                className="h-13 w-13 sm:h-14 sm:w-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-[0_10px_30px_rgba(37,211,102,0.45)] transition-transform duration-300 hover:scale-110 p-3.5"
            >
                <MessageCircle className="h-6 w-6" />
            </a>
            <a
                href={`tel:${SITE.phoneTel}`}
                data-testid="floating-call-button"
                aria-label="Call Thermal Engitech"
                className="h-13 w-13 sm:h-14 sm:w-14 rounded-full bg-brand text-white flex items-center justify-center shadow-[0_10px_30px_rgba(29,78,216,0.45)] transition-transform duration-300 hover:scale-110 p-3.5"
            >
                <Phone className="h-6 w-6" />
            </a>
        </div>
    );
}
