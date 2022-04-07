import translate from 'translate';
import { debounce } from 'debounce';
import './style.css';

const translateFromSelector = document.querySelector('.translate-from');
const translateToSelector = document.querySelector('.translate-to');
const areaFrom = document.querySelector('.area-from');
const areaTo = document.querySelector('.area-to');

// const click = document.querySelector('.click');

translate.key = '5bc642a16emshad7b9991fec5150p1511bfjsnaa110f0483ee';

async function translateText() {
  areaTo.value = await translate(areaFrom.value, {
    from: translateFromSelector.value,
    to: translateToSelector.value
  });
}

const debounceTranslate = debounce(translateText, 500);

areaFrom.addEventListener('keydown', debounceTranslate);
