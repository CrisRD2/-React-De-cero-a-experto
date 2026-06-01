import './style.css';
import './bases/10-giphy-api';
import { getHeroesByOwner } from './bases/08-imp-exp';
import { Owner } from './bases/data/heroes.data';
document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<div>
  <h1>Hola </h1>
</div>
`;
/* console.log(getHeroesByOwner(Owner.DC));
 */


