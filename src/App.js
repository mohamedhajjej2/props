import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Playerlist from './components/Playerlist';
import Players from './components/Players';
import Navbarr from './components/Navbarr';
import Carousell from './components/Carousell';
import Footerr from './components/Footerr';
function App() {
  return (
    <div>
       <Navbarr/>
       <h1 className='titre'>WELCOME PANTERS BASKETBALL ACADEMY<hr/> </h1>
     <Carousell/>
      <Players/>
      
     <iframe className='vd' width="320" height="560" src="https://www.youtube.com/embed/vb6VJcNJtME" title="LOWEST IQ PLAYS IN BASKETBALL! DONT DO THESE 🤦🏻‍♂️ #basketballtraining" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
     <div className='def'>
     <h2 className='title' >Basketball </h2>
     <h3 className='spor'>Sport</h3>
    <p>

Le basket-ball ou basketball, fréquemment désigné par son abréviation basket, est un sport collectif de balle opposant deux équipes de cinq joueurs sur un terrain rectangulaire. Wikipédia
Jeux olympiques : Yes, demonstrated in the 1904 and Jeux olympiques d'été de 1924; Part of the Summer Olympic program since 1936
Conseil d'administration supérieur : Fédération internationale de basket-ball</p>
</div>
    <Footerr/>
    </div>
  );
}

export default App;
