import {Nav} from 'rsuite'
import styled from 'styled-components'

const menu = [
  {
    name: 'AGENTES',
  },
  {
    name: 'ARMAS',
  },
  {
    name: 'MAPAS',
  },
]

export default function Header () {

  return (    
    <NavStyled className="header">    
      {
        menu.map((item, idx) => (       
          <ItemStyled key={idx}>
             {item.name}
          </ItemStyled>
        ))
      }
    </NavStyled>    
  )
}

const NavStyled = styled(Nav)`
  display: flex;
  color: whitesmoke;
  width: 100%;
  height: 50px;  
  padding: 10px;
  gap: 20px !important;
  letter-spacing: 2px;
  border-radius: 2px;
  font-family: 'Anton', cursive;

  @media(max-width: 820px) {
    margin-top: 10px;
    font-size: 44px;
    justify-content: center;
    img {
      visibility:hidden;
      display: none !important;
    }
  }
`

const ItemStyled = styled(Nav.Item)`
  color: #666666;
  display: flex;
  height: 35px;
  align-items: center;
  border-radius: 2px;
  padding: 5px;
  transition: all 500ms;
  :hover {
    background-color: #FF4654;    
    color: whitesmoke;
  }
`