export function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(' ')
}

export type Tone = 'blue' | 'orange' | 'red' | 'green' | 'gray'

export const toneClass: Record<Tone, string> = {
  blue: 'bg-[rgba(0,103,209,0.2)] text-[#0067D1]',
  orange: 'bg-[rgba(250,140,22,0.2)] text-[#FA8C16]',
  red: 'bg-[rgba(255,77,79,0.2)] text-[#FF4D4F]',
  green: 'bg-[rgba(115,209,61,0.2)] text-[#73D13D]',
  gray: 'bg-[#F3F4F6] text-[#777777]',
}
