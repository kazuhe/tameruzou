// React API
import React, { FC } from 'react'

// Original components
import { ResultComponent } from '../components/result'

// Redux Toolkit
import { useSelector } from 'react-redux'
import { RootState } from '../stores'

// Third party library
import dayjs from 'dayjs'
import isBetween from 'dayjs/plugin/isBetween'
dayjs.extend(isBetween)

export const ResultContainer: FC = () => {
  const targetAmount = useSelector((state: RootState) => state.simulation.targetAmount.money)
  const bonusMoney = useSelector((state: RootState) => state.simulation.bonus.money)
  const bonusMonths = useSelector((state: RootState) => state.simulation.bonus.months)
  const startDate = useSelector((state: RootState) => state.simulation.term.startDate) || 0
  const endDate = useSelector((state: RootState) => state.simulation.term.endDate) || 0

  // 対象期間の月数
  const targetMonths = dayjs(endDate).diff(dayjs(startDate), 'month') + 1

  // 貯金期間を計算
  const getYearMonth = () => {
    const year = Math.floor(targetMonths / 12)
    const month = targetMonths % 12
    if (!month) return `${year}年`

    return year ? `${year}年${month}ヶ月` : `${month}ヶ月`
  }

  // ボーナス月の配列を作成
  const activeBonusMonths: number[] = []
  Object.entries(bonusMonths).forEach(([key, value]) => {
    if (value) activeBonusMonths.push(Number(key))
  })

  // 対象月に存在するボーナス月の数を取得する関数
  const getNumberOfBonusesDuringTerm = (bonusMonth: number) => {
    const starMonth = dayjs(startDate).get('month') + 1 // 開始月
    const endMonth = dayjs(endDate).get('month') + 1 // 終了月

    const numberOfMonthsInFirstYear = 12 - starMonth + 1 // 期間初年度の月数
    const numberOfMonthsInLastYear = 12 - (12 - endMonth) // 期間末年度の月数

    const existsInFirstYear = bonusMonth > starMonth ? 1 : 0 // 期間初年度にボーナス月が存在していれば「1」を返す
    const existsInLastYear = bonusMonth < endMonth ? 1 : 0 // 期間末年度にボーナス月が存在していれば「1」を返す

    return (
      (targetMonths - numberOfMonthsInFirstYear - numberOfMonthsInLastYear) / 12 + existsInFirstYear + existsInLastYear
    )
  }

  // 対象月に存在するボーナス月の数
  let numberOfBonusesDuringTerm = 0
  activeBonusMonths.forEach((t) => {
    numberOfBonusesDuringTerm = numberOfBonusesDuringTerm + getNumberOfBonusesDuringTerm(t)
  })

  // 毎月の貯金額を計算する関数
  const monthlyAmount = Math.round(
    (targetAmount - numberOfBonusesDuringTerm * bonusMoney) / (targetMonths - numberOfBonusesDuringTerm)
  )

  return (
    <ResultComponent
      startDate={dayjs(startDate || 0).format('YYYY年MM月')}
      endDate={dayjs(endDate || 0).format('YYYY年MM月')}
      term={getYearMonth()}
      targetAmount={targetAmount}
      monthlyAmount={monthlyAmount}
      bonusMoney={bonusMoney}
      bonusMonth={activeBonusMonths}
    />
  )
}
