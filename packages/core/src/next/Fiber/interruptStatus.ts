export class InterruptStatus {
  constructor(readonly isInterruptible: boolean) {}

  get isUninteruptible(): boolean {
    return !this.isInterruptible
  }

  get toBoolean(): boolean {
    return this.isInterruptible
  }
}

export const interruptible = new InterruptStatus(true)

export const uninterruptible = new InterruptStatus(false)

export const fromBoolean = (b: boolean) => (b ? interruptible : uninterruptible)
