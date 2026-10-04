import { ARTIST, WHATSAPP } from '@/data/site'

export const whatsappUrl = (text: string) => `https://wa.me/${WHATSAPP.number}?text=${encodeURIComponent(text)}`

export type BookingDetails = {
  nome: string
  contato: string
  regiao: string
  tamanho: string
  ideia: string
}

/** Builds the WhatsApp message (uses *bold* markup). */
export function buildBookingMessage(d: BookingDetails) {
  return [
    `*Pedido de orçamento — ${ARTIST} Tattoo*`,
    '',
    `*Nome:* ${d.nome.trim()}`,
    `*Contato:* ${d.contato.trim()}`,
    `*Região:* ${d.regiao}`,
    `*Tamanho:* ${d.tamanho}`,
    `*Ideia:* ${d.ideia.trim()}`,
  ].join('\n')
}
