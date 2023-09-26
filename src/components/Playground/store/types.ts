export interface IPlaygroundStepsState {
  step: number
  currentValue: string | null
  enteredValue: string | null
}

export interface IPlaygroundState {
  currentStep: number
  steps: IPlaygroundStepsState[]
}
