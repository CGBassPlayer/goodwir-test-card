import React from 'react'

interface TestButtonProps {
  emoji: string
}

const SicasTestButton = ({ emoji }: TestButtonProps) => {
  return (
    <div>
      <button
        className='button'
        onClick={() => alert(emoji)}
      >Emoji Button</button>
    </div>
  )
}

export default SicasTestButton;
