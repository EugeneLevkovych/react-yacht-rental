import Header from './components/Header';
import { BUTTONS } from '../data/buttonsInfo';
import Button from './Button';

export default function MobileMenu() {
  return (
    <div className="bg-turquoise-blue4">
      <Header />
      <ul className="flex flex-wrap">
        {BUTTONS.map(item => (
          <Button />
        ))}
      </ul>
    </div>
  );
}
