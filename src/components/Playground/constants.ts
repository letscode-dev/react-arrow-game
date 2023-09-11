export interface IMapArrowCodes {
  ArrowUp: string
  ArrowDown: string
  ArrowRight: string
  ArrowLeft: string
}

export const MAP_ARROW_CODES: IMapArrowCodes = {
  ArrowUp: "⬆️",
  ArrowDown: "⬇️",
  ArrowRight: "➡️",
  ArrowLeft: "⬅️",
}

export const ARR_ARROW_CODES = Object.keys(MAP_ARROW_CODES)

export const INTERVAL_TIME: number = 4000

interface IEmoji {
  TIME: string
}

export const EMOJI: IEmoji = {
  TIME: "🕓",
}

interface IEndGameConditions {
  SUCCESS_COUNT: number
  UNSUCCESS_COUNT: number
}

export const END_GAME_CONDITIONS: IEndGameConditions = {
  SUCCESS_COUNT: 3,
  UNSUCCESS_COUNT: 3,
}
