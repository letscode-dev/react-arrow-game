export interface IPlaygroundStepsState {
  step: number
  currentValue: string | null
  enteredValue: string | null
  success: boolean | null
}

export interface IPlaygroundState {
  currentStep: number
  isTimer: boolean
  steps: IPlaygroundStepsState[]
  totalSuccessful: number
  totalUnsuccessful: number
}
