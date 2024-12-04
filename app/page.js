import Main from './(home)/herosection/page.js'
import Section from "./(home)/features/page.js";
import Menu from './(home)/menusection/page.js'
import Service from '../app/(home)/service/page.js'
import Sauce from './(home)/meal-options/page.js'
import Customers from '../app/(home)/customers/page.js'
export default function Home() {
  return (
    <div>
      <Main />
      <Section />
      <Menu />
      <Service />
      <Sauce />
      <Customers />
    </div>
  );
}
