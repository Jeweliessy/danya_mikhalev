import Block1 from './block1/block1'
import Block2 from './block2/block2'
import Block3 from './block3/block3'
import Block4 from './block4/block4'
import './info.css'

const Info = () => {
  return (
    <div className="flex_block_info">
      <Block1 />
      <Block2 />
      <Block3 />
      <Block4 />
    </div>
  )
}

export default Info
