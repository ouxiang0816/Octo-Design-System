import { useState } from 'react'
import { Check, X } from 'lucide-react'
import { cx } from './utils'

export function Steps({ items = ['步骤一', '步骤二', '步骤三', '步骤四'] }: { items?: string[] }) {
  const [currentStep, setCurrentStep] = useState(1)
  return (
    <div className="flex min-w-[520px] flex-col gap-3">
      <div className="flex items-start">
        {items.map((label, index) => {
          const state = index < currentStep ? 'done' : index === currentStep ? 'current' : 'pending'
          return (
            <div key={label} className="flex flex-1 items-start">
              <button
                type="button"
                aria-current={state === 'current' ? 'step' : undefined}
                onClick={() => setCurrentStep(index)}
                className="flex min-w-[82px] cursor-pointer flex-col items-center gap-2 border-0 bg-transparent p-0 text-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0067D1]"
              >
                <span
                  className={cx(
                    'flex h-8 w-8 items-center justify-center rounded-full border-[1.5px] text-[14px] font-medium transition-colors duration-200',
                    state === 'done' && 'border-[#0067D1] bg-[#E6F2FD] text-[#0067D1]',
                    state === 'current' && 'border-[#0067D1] bg-[#0067D1] text-white',
                    state === 'pending' && 'border-[#C9C9C9] bg-[rgba(25,25,25,0.05)] text-[#AEAEAE]',
                  )}
                >
                  {state === 'done' ? <Check size={18} /> : index + 1}
                </span>
                <span className="text-[13px] font-medium leading-5 text-[#191919]">{label}</span>
                <span className="text-[11px] leading-4 text-[#777777]">
                  {state === 'done' ? '已完成' : state === 'current' ? '当前步骤' : '待完成'}
                </span>
              </button>
              {index < items.length - 1 ? <span className={cx('mt-4 h-px flex-1 transition-colors duration-200', index < currentStep ? 'bg-[#0067D1]' : 'bg-[#DFDFDF]')} /> : null}
            </div>
          )
        })}
      </div>
      <div className="text-[12px] leading-5 text-[#777777]">点击步骤节点切换当前步骤：{items[currentStep]}</div>
    </div>
  )
}

export function StepStatusPreview() {
  const steps = [
    ['完成', 'done'],
    ['当前', 'current'],
    ['待完成', 'pending'],
    ['错误', 'error'],
  ]
  return (
    <div className="flex min-w-[520px] items-start">
      {steps.map(([label, state], index) => (
        <div key={label} className="flex flex-1 items-start">
          <div className="flex min-w-[82px] flex-col items-center gap-2">
            <span
              className={cx(
                'flex h-8 w-8 items-center justify-center rounded-full border-[1.5px] text-[14px] font-medium',
                state === 'done' && 'border-[#0067D1] bg-[#E6F2FD] text-[#0067D1]',
                state === 'current' && 'border-[#0067D1] bg-[#0067D1] text-white',
                state === 'pending' && 'border-[#C9C9C9] bg-[rgba(25,25,25,0.05)] text-[#AEAEAE]',
                state === 'error' && 'border-[#FF4D4F] bg-[#FF4D4F] text-white',
              )}
            >
              {state === 'done' ? <Check size={18} /> : state === 'error' ? <X size={18} /> : index + 1}
            </span>
            <span className="text-[13px] font-medium leading-5 text-[#191919]">{label}</span>
          </div>
          {index < steps.length - 1 ? <span className={cx('mt-4 h-px flex-1', index < 2 ? 'bg-[#0067D1]' : 'bg-[#DFDFDF]')} /> : null}
        </div>
      ))}
    </div>
  )
}
