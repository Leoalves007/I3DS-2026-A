
import './App.css'
import Link from './components/Link/link'
import Perfil from './components/perfil/Perfil'
import Rodape from './components/Rodape/Rodape'
import SocialLink from './components/SocialLink/SocialLink'

function App() {

  return (
   <div id= 'App'>
 <Perfil fotoPerfil={"https://placehold.co/100"} >Leonardo Fuzinelli </Perfil>

  
   <div className="switch">botão switch </div>
   <div id="Link">

   <ul>
    <Link url={""}>Inscreva-se</Link>
    <Link url={""}>Minha Playlist</Link>
    <Link url={""}>Me pague um café!</Link>
    <Link url={""}>Conheça o meu Curso DEV</Link>
   </ul>
</div>
<div className='links'></div>
<SocialLink url={"https://hithub.com"} icon={"logo-github"} />
<SocialLink  url={"https://instagram.com"} icon={"logo-instagram"}/>
<SocialLink  url={"https://youtube.com"} icon={"logo-youtube"}/>
<SocialLink  url={"https://br.linkedin.com"} icon={"logo-linkedin"}/>
<Rodape>Leonardo Fuzinelli</Rodape>
   <div className='socialLinks'></div>
   </div> 

  )
}

export default App
