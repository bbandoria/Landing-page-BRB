const WHATSAPP_NUMBER = "5519999353218";
const DEFAULT_MESSAGE =
  "Olá! Vim pela landing page e quero saber mais sobre os serviços da BRB.";

export function whatsappLink(message: string = DEFAULT_MESSAGE): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
