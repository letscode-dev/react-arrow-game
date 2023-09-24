export interface IPlaygroundStepsState {
  currentValue: string
}

export interface IPlaygroundState {
  currentStep: number
  steps: IPlaygroundStepsState[]
}
