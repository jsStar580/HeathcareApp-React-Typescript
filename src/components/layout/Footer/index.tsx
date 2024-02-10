import LinkItem from './LinkItem'
import './index.scss'

export default () => {
  return (
    <div className="footer">
      <div className='footer-content'>
        <LinkItem to='#' className='ml-0'>会員登録</LinkItem>
        <LinkItem to='#'>運営会社</LinkItem>
        <LinkItem to='#'>利用規約</LinkItem>
        <LinkItem to='#'>個人情報の取扱について</LinkItem>
        <LinkItem to='#'>特定商取引法に基づく表記</LinkItem>
        <LinkItem to='#'>お問い合わせ</LinkItem>
      </div>
    </div>
  )
}