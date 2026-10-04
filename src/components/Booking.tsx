import type { FormEvent } from 'react'
import sessao from '@/assets/sessao.jpg'
import { CONTACT, WHATSAPP } from '@/data/site'
import { buildBookingMessage, whatsappUrl } from '@/lib/whatsapp'
import type { BookingDetails } from '@/lib/whatsapp'

const regions = ['Braço / antebraço', 'Perna', 'Costas', 'Peito', 'Mão / dedos', 'Outra']
const sizes = ['Até 5 cm', '5–10 cm', '10–20 cm', 'Maior que 20 cm']

const label = 'flex flex-col gap-2 text-[14px] font-extrabold'
const field = 'min-h-[52px] rounded-[14px] border-2 border-ink bg-paper text-[16px] font-medium'

function onSubmit(e: FormEvent<HTMLFormElement>) {
  e.preventDefault()
  const form = e.currentTarget
  const data = Object.fromEntries(new FormData(form)) as BookingDetails
  window.open(whatsappUrl(buildBookingMessage(data)), '_blank', 'noopener')
  form.reset()
}

export default function Booking() {
  return (
    <section id="agenda" aria-labelledby="agenda-t" className="gutter pb-24">
      <div className="flex flex-wrap gap-12 rounded-[32px] border-2 border-ink bg-white p-[clamp(24px,4vw,56px)]">
        <div className="flex min-w-0 flex-[1_1_340px] flex-col gap-5">
          <span className="font-mono text-[13px] font-bold">05/07 — {'{AGENDA}'}</span>
          <h2 id="agenda-t" className="text-[clamp(40px,5vw,72px)] leading-[.92]">
            Bora
            <br />
            marcar?
          </h2>
          <p className="m-0 max-w-[420px] text-[17px] leading-[1.55] text-[#333]">
            Mande sua ideia e eu respondo com orçamento e datas disponíveis.
          </p>
          <span className="-rotate-4 self-start font-hand text-[30px] font-bold">resposta em até 2 dias ↘</span>
          <img
            src={sessao}
            alt="Sessão de tatuagem em andamento"
            loading="lazy"
            className="reveal block h-[220px] w-full max-w-[420px] rounded-[22px] border-2 border-ink object-cover"
          />
          <div className="flex flex-col gap-1.5 font-mono text-[13px] font-bold">
            <span>{CONTACT.address}</span>
            <span>{CONTACT.hours}</span>
            <span>
              {CONTACT.email} · {WHATSAPP.display}
            </span>
          </div>
        </div>

        <form onSubmit={onSubmit} className="grid min-w-0 flex-[1.4_1_460px] grid-cols-2 gap-[18px]">
          <label className={label}>
            Nome
            <input type="text" name="nome" required autoComplete="name" placeholder="Ex.: Marina Costa" className={`${field} px-4`} />
          </label>
          <label className={label}>
            E-mail ou WhatsApp
            <input type="text" name="contato" required placeholder="Ex.: marina@email.com" className={`${field} px-4`} />
          </label>
          <label className={label}>
            Região do corpo
            <select name="regiao" className={`${field} px-3.5`}>
              {regions.map((r) => (
                <option key={r}>{r}</option>
              ))}
            </select>
          </label>
          <label className={label}>
            Tamanho aproximado
            <select name="tamanho" className={`${field} px-3.5`}>
              {sizes.map((s) => (
                <option key={s}>{s}</option>
              ))}
            </select>
          </label>
          <label className={`${label} col-span-full`}>
            Sua ideia
            <textarea
              name="ideia"
              rows={4}
              required
              placeholder="Ex.: um ramo de lavanda em fineline no antebraço, uns 12 cm, bem delicado…"
              className="resize-y rounded-[14px] border-2 border-ink bg-paper px-4 py-3.5 text-[16px] font-medium"
            />
          </label>
          <button
            type="submit"
            className="group col-span-full inline-flex min-h-14 cursor-pointer items-stretch justify-self-start overflow-hidden rounded-full border-2 border-ink bg-ink p-0 text-[17px] font-extrabold transition-transform duration-200 hover:-translate-y-[3px]"
          >
            <span className="flex items-center rounded-full bg-white px-6 text-ink">Enviar pedido</span>
            <span className="flex items-center bg-accent pr-[26px] pl-5 text-ink">
              <span className="inline-block transition-transform duration-500 group-hover:scale-130 group-hover:rotate-180">✱</span>
            </span>
          </button>
        </form>
      </div>
    </section>
  )
}
