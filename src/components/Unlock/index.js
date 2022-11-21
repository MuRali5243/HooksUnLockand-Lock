import {useState} from 'react'
import {Maincont, Button, LockImg} from './styledComponents'

const lockText = 'Your Device is Locked'
const unText = 'Your Device is Unlocked'
const imgL = 'https://assets.ccbp.in/frontend/hooks/lock-img.png'
const imgUl = 'https://assets.ccbp.in/frontend/hooks/unlock-img.png'

const Locker = () => {
  const [isLocked, lockFunc] = useState(true)
  const text = isLocked ? lockText : unText
  const imgD = isLocked ? imgL : imgUl
  const imgT = isLocked ? 'lock' : 'unlock'
  const btnT = isLocked ? 'Unlock' : 'Lock'
  console.log(isLocked)

  const onState = () => {
    console.log('update')
    lockFunc(pre => {
      console.log(isLocked)
      return !isLocked
    })
  }

  return (
    <Maincont>
      <LockImg src={imgD} alt={imgT} />
      <p>{text}</p>
      <Button onClick={onState}>{btnT}</Button>
    </Maincont>
  )
}
export default Locker
