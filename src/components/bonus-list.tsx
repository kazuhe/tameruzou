// React API
import React, { FC } from 'react'

// SVG Component
import { Trash } from '../images/trash'
import { Plus } from '../images/plus'
import { ChevronDown } from '../images/chevron-down'

// Css
import styles from '../styles/bonus-list.module.scss'

// Third party library
import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'

// Types
import { Bonus } from '../types'

interface Props {
  bonuses: Bonus[]
  isError: boolean
  inputValue: number
  handleInput: (value: number) => void
  setSelectValue: (value: number) => void
  addBonus: () => void
  deleteBonus: (bonus: Bonus) => void
}

const month = Array.from(new Array(12)).map((v, i) => ++i)

export const BonusListComponent: FC<Props> = (props: Props) => (
  <>
    <div className={styles.wrap}>
      <p>【任意】ボーナス月の貯金額をカスタマイズしたい場合は下記のフォームを入力して追加してください</p>
      <div className={styles.form}>
        <div>
          <span>月</span>
          <select name="month" onChange={(e) => props.setSelectValue(Number(e.target.value))}>
            <option value=""></option>
            {month.map((n) => (
              <option key={n} value={n}>
                {n}
              </option>
            ))}
          </select>
          <ChevronDown size={18} />
        </div>
        <Tippy content="半角数字を入力してください" visible={props.isError} className="tameruzou">
          <div>
            <span>金額</span>
            <input
              type="tel"
              name="inputMoney"
              value={props.inputValue.toLocaleString()}
              onChange={(e) => props.handleInput(Number(e.target.value.split(',').join('')))}
            />
            <span>円</span>
          </div>
        </Tippy>
        <button type="submit" onClick={props.addBonus}>
          <Plus size={15} />
        </button>
      </div>
      <p>設定したボーナス一覧</p>
      <div>
        {props.bonuses.length <= 0 ? (
          <div className={styles.message}>ココに設定したボーナスが追加されます</div>
        ) : (
          <ul className={styles.list}>
            {props.bonuses.map((bonus) => (
              <li key={bonus.id}>
                <span>{bonus.month}月</span>
                <span>{bonus.money.toLocaleString()}円</span>
                <button onClick={() => props.deleteBonus(bonus)}>
                  <Trash size={20} />
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  </>
)
