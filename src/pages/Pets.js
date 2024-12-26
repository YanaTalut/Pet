import React from 'react';
import Pet from '../components/Pet';
import misha1 from '../images/Misha1.jpg';
import misha2 from '../images/Misha2.jpg';
import misha3 from '../images/Misha3.jpg';
import misha_glav from '../images/Misha_glav.jpg';
import bony1 from '../images/Bony1.jpg';
import bony2 from '../images/Bony2.jpg';
import bony3 from '../images/Bony3.jpg';
import bony4 from '../images/Bony4.jpg';
import messi1 from '../images/messi1.jpg';
import messi3 from '../images/messi2.jpg';
import messi2 from '../images/messi3.jpg';
import messi from '../images/messi.jpg';

function Pets() {
  return (
    <div>
      <Pet name='Миша' img_pet1={misha1} img_pet2={misha2} img_pet3={misha3} poroda='Шпиц' age='6 лет' perents='Яна' inst='yana_talut' img_pet4={misha_glav} text='Милый и веселый Мишка, очень любит ласку, очень любит свою семью. Он очень труслив, не подходит к другим людям. Миша без проблем переносит поездки на машине, потому что ему без разницы куда - главное вместе с нами! Самое страшное для него это омтаться одному. Мы все его очень любим' />
      <Pet name='Боня' img_pet1={bony1} img_pet2={bony2} img_pet3={bony3} poroda='Карликовый пинчер' age='13 лет' perents='Артем' inst='artemka' img_pet4={bony4} text='Прекрасная дама в почетном (элегантном) возрасте, любит попрошайничать колбаску. Без нее не обходится ни один прием пищи в доме. В силу своей деловитости и пузатости не очень любит ходить, предпочитает поваляться на бочку. Почешите Бонечку за ушком, и она станет вашим самым лучшим другом! П.С. будьте осторожны, если потрогаешь ее за хвост, то тебе откусят палец ;)  ' />
      <Pet name='Меська (Месси) ' img_pet1={messi1} img_pet2={messi2} img_pet3={messi3} poroda='Йоркширский терьер' age='10 лет' perents='Сонечка' inst='shvbrk' img_pet4={messi} text='Добрый, милый песик, смешно хрюкает. Любит кушать вкусную еду, ему непросто живется, так как приходится охранять дом, гулять три раза в день, хотя он просто хочет спать и кушать'/>
    </div>
  );
}

export default Pets;